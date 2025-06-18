// app/api/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import sanityClient from '@/lib/sanity';
import axios from 'axios';

const stripe = new Stripe(process.env.STRIPE_SECRET_TOKEN!, {
  apiVersion: "2025-05-28.basil",
});

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature')!;
  const buf = await req.arrayBuffer();
  const body = Buffer.from(buf);
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('❌ Webhook signature verification failed.', err);
    return new NextResponse('Webhook Error', { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const order_id = session.metadata?.orderId;

    if (order_id) {
      // Mark order as Paid
      await sanityClient.patch(order_id).set({ status: "Paid" }).commit();

      // Trigger stock update
      try {
        await axios.post(new URL("/api/order", req.url).toString(), {
          id: order_id,
        });
      } catch (error) {
        console.error("❌ Failed to update product stock:", error);
      }
    }
  }

  return new NextResponse('Webhook received', { status: 200 });
}
// stripe listen --forward-to localhost:3000/api/webhook