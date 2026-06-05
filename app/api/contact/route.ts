import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    console.log("New contact form submission:", {
      name,
      email,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong while processing the request." },
      { status: 500 }
    );
  }
}