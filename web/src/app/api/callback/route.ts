import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { error: "No code found" },
      { status: 400 }
    );
  }

  console.log("Authorization code:", code);

  return NextResponse.json({ code });
}