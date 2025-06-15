// app/api/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import sanityClient from '@/lib/sanity';

const stripe = new Stripe(process.env.STRIPE_SECRET_TOKEN!, {
  apiVersion: "2025-05-28.basil"
});

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature')!;
  const buf = await req.arrayBuffer();
  const body = Buffer.from(buf);
  /* ____ Error tracking ... */
  // console.log("signature : ", sig);
  // console.log("Buffer from req : ",buf);
  // console.log("Buffer body : ",body);
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
    // console.log("Created event in stripe : ",event);

  } catch (err) {
    console.error('❌ Webhook signature verification failed.', err);
    return new NextResponse('Webhook Error', { status: 400 });
  }

  // ✅ Handle event types here
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const order_id = session.metadata?.orderId;
    if (order_id) {
      await sanityClient.patch(order_id).set({ status: "Paid" }).commit();
      const packagedProducts = await sanityClient.fetch(`*[_type == "Orders"].packages[]{
productId,
  quantity
}`);
      const productQuantities = await sanityClient.fetch(`*[_type == "Product"]{
  stockQuantity
}`);

      for (let i = 0; i <= packagedProducts.length; i++) {
        await sanityClient.patch(packagedProducts[i]._id).set({ stockQuantity: productQuantities[i].stockQuantity - packagedProducts[i].quantity });
      }
      // const products_ids = await sanityClient.fetch()

      /* ____ Error tracking ... */
      // console.log("Order successfull : ",editedOrder);
    }
  }

  return new NextResponse('Webhook received', { status: 200 });
}


// stripe listen --forward-to localhost:3000/api/webhook
