import { NextResponse } from "next/server";
import { sendContactEmail, type ContactFormPayload } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactFormPayload;

    if (!payload.email?.trim()) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 },
      );
    }

    await sendContactEmail(payload);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      { error: "Unable to send message. Please try again later." },
      { status: 500 },
    );
  }
}
