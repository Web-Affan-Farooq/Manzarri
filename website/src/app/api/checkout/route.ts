// app/api/checkout/route.ts
import { CartProduct } from '@/@types/cart';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import sanityClient from '@/lib/sanity';

const stripe = new Stripe(process.env.STRIPE_SECRET_TOKEN!, {
  apiVersion: "2025-05-28.basil",
});

export async function POST(req: NextRequest) {
  const { products, order } = await req.json();
  // console.log("Order : ", order);
  try {
    const lineItems: CartProduct[] = products.map((item: CartProduct) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.item.productName
        },
        unit_amount: Math.round(item.item.price * 100)
      },
      quantity: item.quantity
    }));
    const data = await sanityClient.create({
      _type: "Orders",
      userId: order.userId,
      status:"Pending",
      weightageInGrams: order.weightageInGrams,
      amountPayable: order.amountPayable,
      packages: order.packages,
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      metadata: {
        orderId:data._id,
        userId:data.userId
      },
      /*
Package {
productId:string;
productName:string;
productSKU:string;
size:string;
_key:string;
}

order {
userId:string;
weightageInGrams:number;
amountPayable:number;
status:string;
packages: Packages[]
}
*/
      success_url: new URL("/checkout/success", req.url).toString(),
      cancel_url: new URL("/checkout/failed", req.url).toString(),
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.log("Error : ", err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}


