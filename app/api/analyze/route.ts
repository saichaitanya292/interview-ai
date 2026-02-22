import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // Send transcript to AI model here
  const feedback = {
    clarity: 7,
    confidence: 6,
    technicalDepth: 8,
    suggestion: "Improve structure and reduce filler words."
  };

  return NextResponse.json(feedback);
}