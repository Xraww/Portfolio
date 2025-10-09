import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const WEBHOOK_SECRET = process.env.TEBEX_WEBHOOK_SECRET!; // set in Vercel env vars

export async function POST(req: NextRequest) {
    try {
        const rawBody = await req.text(); // raw body for signature check
        const signature = req.headers.get("x-signature");

        // Verify signature
        const expected = crypto
        .createHmac("sha256", WEBHOOK_SECRET)
        .update(rawBody)
        .digest("hex");

        if (signature !== expected) {
            return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
        }

        const event = JSON.parse(rawBody);
        console.log("✅ Tebex event received:", event.type);

        // Example: handle payment completion
        if (event.type === "payment.completed") {
            const data = event.data;
            console.log("Payment data:", data);
            // ... do something, e.g. update your DB or send Discord notif
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("❌ Webhook error:", err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}