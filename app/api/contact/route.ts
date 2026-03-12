import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 503 }
    );
  }
  const resend = new Resend(apiKey);
  try {
    const body = await request.json();
    const { name, email, message, subject, meetingDate, meetingTime } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Format date and time for display (optional fields)
    const hasMeetingTime = meetingDate && meetingTime;
    const dateFormatted = meetingDate
      ? new Date(meetingDate).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : null;
    const timeFormatted =
      meetingTime &&
      (() => {
        const [h, m] = meetingTime.split(":");
        const hour = parseInt(h, 10);
        const ampm = hour >= 12 ? "PM" : "AM";
        const hour12 = hour % 12 || 12;
        return `${hour12}:${m} ${ampm}`;
      })();

    // Use CONTACT_EMAIL in .env.local to receive emails (after domain verification at resend.com)
    const toEmail = process.env.CONTACT_EMAIL || "delivered@resend.dev";

    const emailSubject = subject
      ? subject
      : hasMeetingTime
        ? `Meeting request from ${name} - ${meetingDate} at ${meetingTime}`
        : `Contact from ${name}`;

    const meetingBlock = hasMeetingTime
      ? `<p><strong>Requested meeting:</strong> ${dateFormatted} at ${timeFormatted}</p>`
      : "<p><em>No meeting time specified</em></p>";

    const { data, error } = await resend.emails.send({
      from: "Riden Portfolio <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: emailSubject,
      html: `
        <h2>New contact message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${meetingBlock}
        <p><strong>Subject:</strong> ${subject || "No subject"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
