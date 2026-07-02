import { NextResponse } from "next/server";
import { lookupGeoIp } from "@/lib/geolocation";
import {
  sendContactEmail,
  type ContactFormPayload,
  type EnrichedContactSubmission,
} from "@/lib/email";
import { getClientIp, getUserAgent } from "@/lib/request-meta";

function enrichSubmission(
  payload: ContactFormPayload,
  request: Request,
  geo: Awaited<ReturnType<typeof lookupGeoIp>>,
): EnrichedContactSubmission {
  return {
    ...payload,
    ip: getClientIp(request),
    user_agent: getUserAgent(request),
    submitted_at: new Date().toISOString(),
    page_url: payload.pageUrl?.trim() || payload.hidden_page_url?.trim() || "",
    geo,
  };
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactFormPayload;

    if (!payload.email?.trim()) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 },
      );
    }

    const ip = getClientIp(request);
    const geo = await lookupGeoIp(ip);
    const submission = enrichSubmission(payload, request, geo);

    const delivery = await sendContactEmail(submission);

    return NextResponse.json({ ok: true, provider: delivery.provider });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      { error: "Unable to send message. Please try again later." },
      { status: 500 },
    );
  }
}
