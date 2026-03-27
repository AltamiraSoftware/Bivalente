import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Missing session_id" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["payment_intent"]
    });

    if (!session) {
      return NextResponse.json(
        { error: "Session not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      id: session.id,
      status: session.status,
      metadata: session.metadata || {},
    });

  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error("Stripe get-session error:", err.message);
    }
    return NextResponse.json(
      { error: "No se pudo recuperar la sesión" },
      { status: 500 }
    );
  }
}
