import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, preferredContact, website } = body;

    // Honeypot: if the hidden field is filled, it's a bot
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // If Resend API key is configured, send email
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Bright Fox Website <noreply@brightfoxdayhome.ca>",
          to: ["brightfoxdayhome@gmail.com"],
          subject: `New Enquiry from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Preferred Contact:</strong> ${preferredContact || "Phone"}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        }),
      });
    } else {
      // Log to console when no email service configured
      console.log("Contact form submission:", {
        name,
        email,
        phone,
        message,
        preferredContact,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
