import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const email = data.get("email");
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    // Call MailerLite API
    const res = await fetch("https://api.mailerlite.com/api/v2/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-MailerLite-ApiKey": process.env.MAILERLITE_API_KEY!,
      },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      const error = await res.json();
      return NextResponse.json({ error: error.error.message || "Failed to subscribe." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Subscribe error:", error.message, error.stack);
    } else {
      console.error("Subscribe error:", error);
    }
    return NextResponse.json({ error: "Failed to subscribe." }, { status: 500 });
  }
}