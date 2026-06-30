import nodemailer from "nodemailer";

export type ContactFormPayload = {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  message?: string;
  website?: string;
  hidden_ip?: string;
  hidden_page_url?: string;
  hidden_utm_source?: string;
  hidden_utm_medium?: string;
  hidden_utm_campaign?: string;
  hidden_gclid?: string;
  hidden_fbclid?: string;
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

function formatField(label: string, value?: string) {
  return value ? `${label}: ${value}` : "";
}

export async function sendContactEmail(payload: ContactFormPayload) {
  const recipient =
    process.env.FORM_RECIPIENT_EMAIL ||
    process.env.SMTP_USER ||
    "support@shopifypage.com";

  const name = [payload.first_name, payload.last_name]
    .filter(Boolean)
    .join(" ")
    .trim();

  const subject = name
    ? `New lead from ${name}`
    : "New website form submission";

  const lines = [
    formatField("Name", name || undefined),
    formatField("Email", payload.email),
    formatField("Phone", payload.phone),
    formatField("Website", payload.website),
    formatField("Message", payload.message),
    "",
    "--- Tracking ---",
    formatField("Page URL", payload.hidden_page_url),
    formatField("IP", payload.hidden_ip),
    formatField("UTM Source", payload.hidden_utm_source),
    formatField("UTM Medium", payload.hidden_utm_medium),
    formatField("UTM Campaign", payload.hidden_utm_campaign),
    formatField("GCLID", payload.hidden_gclid),
    formatField("FBCLID", payload.hidden_fbclid),
  ].filter(Boolean);

  const transporter = getTransporter();

  await transporter.sendMail({
    from: `"Shopify Page" <${process.env.SMTP_USER || recipient}>`,
    to: recipient,
    bcc: process.env.FORM_BCC_EMAIL || undefined,
    replyTo: payload.email || undefined,
    subject,
    text: lines.join("\n"),
  });
}
