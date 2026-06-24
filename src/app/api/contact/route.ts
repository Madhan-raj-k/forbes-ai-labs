import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contact";

const TEAM_EMAIL = process.env.CONTACT_EMAIL ?? "teamcodeify@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Codeify <onboarding@resend.dev>";

function inquiryLabel(type: "inquiry" | "project") {
  return type === "project" ? "Project Request" : "General Inquiry";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, inquiryType, subject, message } = result.data;

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const typeLabel = inquiryLabel(inquiryType);

    const [teamResult, userResult] = await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: TEAM_EMAIL,
        replyTo: email,
        subject: `[${typeLabel}] ${subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6;">New ${typeLabel}</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666;">Name</td><td style="padding: 8px 0;"><strong>${name}</strong></td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Type</td><td style="padding: 8px 0;">${typeLabel}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Subject</td><td style="padding: 8px 0;">${subject}</td></tr>
            </table>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <h3 style="color: #333;">Message</h3>
            <p style="color: #444; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        `,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: `We received your message — Codeify`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6;">Thanks for reaching out, ${name}!</h2>
            <p style="color: #444; line-height: 1.6;">
              We've received your ${typeLabel.toLowerCase()} and our team will get back to you within 24 hours.
            </p>
            <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin: 20px 0;">
              <p style="margin: 0 0 8px; color: #666; font-size: 14px;">Your message:</p>
              <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #666; font-size: 14px;">
              Need a faster response? Reach us on WhatsApp at +91 81233 30661 or email
              <a href="mailto:${TEAM_EMAIL}" style="color: #3b82f6;">${TEAM_EMAIL}</a>.
            </p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
            <p style="color: #999; font-size: 12px;">— The Codeify Team</p>
          </div>
        `,
      }),
    ]);

    if (teamResult.error || userResult.error) {
      console.error("Resend error:", teamResult.error ?? userResult.error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}