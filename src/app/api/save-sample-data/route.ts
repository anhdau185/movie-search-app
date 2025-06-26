import { NextRequest, NextResponse } from "next/server";

const MAX_AGE = 60 * 60 * 24 * 3; // 3 days

interface PostBody {
  data?: string;
}

export async function POST(req: NextRequest) {
  const body: PostBody = await req.json();
  const userInput = body?.data ?? "";

  if (typeof userInput !== "string") {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const res = NextResponse.json(
    { message: "User data saved" },
    { status: 201 },
  );

  res.cookies.set("userInput", userInput, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: MAX_AGE,
  });

  return res;
}
