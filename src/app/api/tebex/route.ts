import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const WEBHOOK_SECRET = process.env.TEBEX_WEBHOOK_SECRET!;

// Handle POST (Tebex validation + real webhooks)
export async function POST(req: NextRequest) {
    const signature = req.headers.get("x-signature");
    const rawBody = await req.text();

    // Tebex validation request → no signature yet
    if (!signature) {
        // Respond with empty 200 OK (required by Tebex)
        return new NextResponse(null, { status: 200 });
    }

    // Verify signature for actual events
    const expected = crypto
        .createHmac("sha256", WEBHOOK_SECRET)
        .update(rawBody)
        .digest("hex");

    if (signature !== expected) {
        return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(rawBody);
    console.log("✅ Tebex event received:", event.type);

    return NextResponse.json({ ok: true });
}

// Optional: handle GET requests cleanly
export async function GET() {
  return new NextResponse("Tebex webhook endpoint", { status: 200 });
}
