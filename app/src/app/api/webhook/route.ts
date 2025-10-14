// app/api/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import sanityClient from '@/lib/sanity';
import OrderPlacementAction from '@/actions/OrderPlacementAction';
import Logger from '@/utils/Logger';

const stripe = new Stripe(process.env.STRIPE_SECRET_TOKEN!, {
  apiVersion: "2025-07-30.basil",
});

const logger = new Logger("/ap/webhook/route.ts")

export async function POST(req: NextRequest) {
  logger.log(15 , "Running payment webhook ...", "--------------------------------")
  const sig = req.headers.get('stripe-signature')!;
  const buf = await req.arrayBuffer();
  const body = Buffer.from(buf);
  logger.log(19,"Extracted signature : ..." , sig)
  logger.log(20,"Created buffer : ..." , buf)
  logger.log(21,"extracted body from buffer : ..." , body)
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
    logger.log(36 , "Constructed webhook event : ", event);
    const session = event.data.object as Stripe.Checkout.Session;
    const order_id = session.metadata?.orderId;
    logger.log(39 , "Recieved session : ", session);
    logger.log(40 , "Recieved order id : ", order_id);

    if (order_id) {
      // Mark order as Paid
    logger.log(44 , "Updating order status : ", "------------");
      const response  = await sanityClient.patch(order_id).set({ status: "Paid" }).commit();
    logger.log(46 , "Changed order status :  : ",response );
      // Trigger stock update
      try {
        await OrderPlacementAction(order_id)
      } catch (error) {
        console.error("❌ Failed to update product stock:", error);
      }
    }
  }

  return new NextResponse('Webhook received', { status: 200 });
}
// stripe listen --forward-to localhost:3000/api/webhook