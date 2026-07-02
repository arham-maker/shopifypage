import nodemailer from "nodemailer";
import type { GeoIpInfo } from "./geolocation";
import { SITE_EMAIL } from "./site-contact";

export type ContactFormPayload = {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  message?: string;
  website?: string;
  pageUrl?: string;
  hidden_page_url?: string;
  hidden_utm_source?: string;
  hidden_utm_medium?: string;
  hidden_utm_campaign?: string;
  hidden_gclid?: string;
  hidden_fbclid?: string;
};

export type EnrichedContactSubmission = ContactFormPayload & {
  ip: string;
  user_agent: string;
  submitted_at: string;
  page_url: string;
  geo: GeoIpInfo | null;
};

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    throw new Error("SMTP configuration is missing.");
  }

  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE !== "false",
    auth: { user, pass },
  });
}

function getRecipientEmail() {
  return process.env.FORM_RECIPIENT_EMAIL || SITE_EMAIL;
}

function getFormSubmitEmail() {
  return process.env.FORM_SUBMIT_EMAIL || getRecipientEmail();
}

function formatField(label: string, value?: string | number | null) {
  if (value === undefined || value === null || value === "") {
    return "";
  }

  return `${label}: ${value}`;
}

function getLeadName(submission: EnrichedContactSubmission) {
  return [submission.first_name, submission.last_name]
    .filter(Boolean)
    .join(" ")
    .trim();
}

function buildGeoLines(geo: GeoIpInfo | null) {
  if (!geo) {
    return ["GeoIP: unavailable"];
  }

  return [
    formatField("Geo Country", geo.country),
    formatField("Geo Region", geo.region),
    formatField("Geo City", geo.city),
    formatField("Geo Postal", geo.postal),
    formatField(
      "Geo Coordinates",
      geo.latitude !== undefined && geo.longitude !== undefined
        ? `${geo.latitude}, ${geo.longitude}`
        : undefined,
    ),
    formatField("Geo Timezone", geo.timezone),
    formatField("Geo ISP", geo.isp),
    formatField("Geo Org", geo.org),
  ].filter(Boolean);
}

export function buildSubmissionEmail(submission: EnrichedContactSubmission) {
  const name = getLeadName(submission);
  const subject = name
    ? `New lead from ${name}`
    : "New website form submission";

  const textLines = [
    "New form submission",
    "===================",
    "",
    "--- Lead ---",
    formatField("Name", name || undefined),
    formatField("Email", submission.email),
    formatField("Phone", submission.phone),
    formatField("Website", submission.website),
    formatField("Message", submission.message),
    "",
    "--- Request metadata ---",
    formatField("Submitted at", submission.submitted_at),
    formatField("Page URL", submission.page_url),
    formatField("IP address", submission.ip),
    formatField("User agent", submission.user_agent),
    "",
    "--- GeoIP (ipwho.is) ---",
    ...buildGeoLines(submission.geo),
    "",
    "--- Marketing ---",
    formatField("UTM Source", submission.hidden_utm_source),
    formatField("UTM Medium", submission.hidden_utm_medium),
    formatField("UTM Campaign", submission.hidden_utm_campaign),
    formatField("GCLID", submission.hidden_gclid),
    formatField("FBCLID", submission.hidden_fbclid),
  ].filter(Boolean);

  const html = `
    <h2>New form submission</h2>
    <h3>Lead</h3>
    <ul>
      <li><strong>Name:</strong> ${name || "N/A"}</li>
      <li><strong>Email:</strong> ${submission.email || "N/A"}</li>
      <li><strong>Phone:</strong> ${submission.phone || "N/A"}</li>
      <li><strong>Website:</strong> ${submission.website || "N/A"}</li>
      <li><strong>Message:</strong> ${submission.message || "N/A"}</li>
    </ul>
    <h3>Request metadata</h3>
    <ul>
      <li><strong>Submitted at:</strong> ${submission.submitted_at}</li>
      <li><strong>Page URL:</strong> ${submission.page_url || "N/A"}</li>
      <li><strong>IP address:</strong> ${submission.ip}</li>
      <li><strong>User agent:</strong> ${submission.user_agent}</li>
    </ul>
    <h3>GeoIP (ipwho.is)</h3>
    <ul>
      ${
        submission.geo
          ? `
      <li><strong>Country:</strong> ${submission.geo.country || "N/A"}</li>
      <li><strong>Region:</strong> ${submission.geo.region || "N/A"}</li>
      <li><strong>City:</strong> ${submission.geo.city || "N/A"}</li>
      <li><strong>Postal:</strong> ${submission.geo.postal || "N/A"}</li>
      <li><strong>Timezone:</strong> ${submission.geo.timezone || "N/A"}</li>
      <li><strong>ISP:</strong> ${submission.geo.isp || "N/A"}</li>
      <li><strong>Org:</strong> ${submission.geo.org || "N/A"}</li>`
          : "<li>GeoIP unavailable</li>"
      }
    </ul>
    <h3>Marketing</h3>
    <ul>
      <li><strong>UTM Source:</strong> ${submission.hidden_utm_source || "N/A"}</li>
      <li><strong>UTM Medium:</strong> ${submission.hidden_utm_medium || "N/A"}</li>
      <li><strong>UTM Campaign:</strong> ${submission.hidden_utm_campaign || "N/A"}</li>
      <li><strong>GCLID:</strong> ${submission.hidden_gclid || "N/A"}</li>
      <li><strong>FBCLID:</strong> ${submission.hidden_fbclid || "N/A"}</li>
    </ul>
  `;

  return { subject, text: textLines.join("\n"), html };
}

async function sendViaSmtp(submission: EnrichedContactSubmission) {
  const recipient = getRecipientEmail();
  const { subject, text, html } = buildSubmissionEmail(submission);
  const transporter = getTransporter();

  await transporter.sendMail({
    from: `"Shopify Page" <${process.env.SMTP_USER || recipient}>`,
    to: recipient,
    bcc: process.env.FORM_BCC_EMAIL || undefined,
    replyTo: submission.email || undefined,
    subject,
    text,
    html,
  });
}

async function sendViaFormSubmit(submission: EnrichedContactSubmission) {
  const recipient = getFormSubmitEmail();
  const name = getLeadName(submission);
  const { subject, text } = buildSubmissionEmail(submission);

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: subject,
      _template: "box",
      name: name || "Website visitor",
      email: submission.email,
      phone: submission.phone,
      website: submission.website,
      message: submission.message,
      page_url: submission.page_url,
      ip: submission.ip,
      user_agent: submission.user_agent,
      submitted_at: submission.submitted_at,
      geo_country: submission.geo?.country,
      geo_city: submission.geo?.city,
      geo_region: submission.geo?.region,
      utm_source: submission.hidden_utm_source,
      utm_medium: submission.hidden_utm_medium,
      utm_campaign: submission.hidden_utm_campaign,
      full_details: text,
    }),
  });

  if (!response.ok) {
    throw new Error(`FormSubmit failed with status ${response.status}`);
  }

  const result = (await response.json()) as { success?: string };
  if (result.success !== "true") {
    throw new Error("FormSubmit did not confirm delivery.");
  }
}

export async function sendContactEmail(submission: EnrichedContactSubmission) {
  try {
    await sendViaSmtp(submission);
    return { provider: "smtp" as const };
  } catch (smtpError) {
    console.error("SMTP delivery failed, trying FormSubmit fallback:", smtpError);

    try {
      await sendViaFormSubmit(submission);
      return { provider: "formsubmit" as const };
    } catch (formSubmitError) {
      console.error("FormSubmit fallback failed:", formSubmitError);
      throw new Error("All email delivery methods failed.");
    }
  }
}
