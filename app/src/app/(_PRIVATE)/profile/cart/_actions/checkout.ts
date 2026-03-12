"use server";
/* ____ Libraries ... */
import Stripe from "stripe";
import sanityClient from "@/lib/sanity";

/* ____ global utility ... */
import Logger from "@/utils/Logger";
import GetTokenPayload from "@/utils/GetTokenPayload";

/* ____ Server action ... */
import { UpdateEngagementCount } from "./updateEngagementCount";

const stripe = new Stripe(process.env.STRIPE_SECRET_TOKEN!, {
  apiVersion: "2025-07-30.basil",
});

const app_url = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const logger = new Logger("/api/checkout/route.ts");

// ______ Temporrary type hints ...
interface Packages {
  productId: string;
  productName: string;
  productSKU: string;
  quantity: number;
  size: string;
  _key: string;
}

interface Order {
  userId: null;
  weightageInGrams: number;
  amountPayable: number;
  packages: Packages[];
}
interface ProductPaymentData {
  productName: string;
  price: number;
  quantity: number;
}
/**
 *
 * @param products -> cart product contains actual item , its ordered size and quantity ...
 * @param order order object
 * @param offerId  offerid which is grabed
 */
export const CheckoutAction = async (
  products: ProductPaymentData[],
  order: Order,
  offerId?: string
): Promise<{
  message: string;
  success: boolean;
  url: string | null;
}> => {
  logger.log(41, "Get cart : ....", products);
  logger.log(42, "Get orders : ....", order);

  /* _____ update offer engagement count ... */
  if (offerId) {
    UpdateEngagementCount(offerId);
  }

  // ______ Get account id from cookies ...
  const payload = await GetTokenPayload();
  if (!payload) {
    logger.log(46, "Error : User not authenticated ....", payload);
    return {
      message: "Unauthorized",
      success: false,
      url: new URL("/login", app_url).toString(),
    };
  }

  try {
    // ______ Create data ...
    const lineItems = products.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.productName,
        },
        unit_amount: Number((item.price * 100).toFixed(2)),
      },
      quantity: item.quantity,
    }));
    logger.log(64, "Created line items : ....", lineItems);

    logger.log(66, "Inserting new order : ....", "--------------");

    // ______ inserting a new order with payment status pending ...
    const data = await sanityClient.create({
      _type: "Orders",
      userId: {
        _type: "reference",
        _ref: payload.accountId,
      },
      status: "Pending",
      weightageInGrams: order.weightageInGrams,
      amountPayable: order.amountPayable,
      packages: order.packages,
    });

    logger.log(77, "Inserted order successfuly : ....", data);

    // ______ Creating checkout seession
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      metadata: {
        orderId: data._id,
        userId: data.userId._ref,
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
      success_url: new URL("/checkout/success", app_url).toString(),
      cancel_url: new URL("/checkout/failed", app_url).toString(),
    });
    logger.log(71, "Created checkout session : ....", session);
    return {
      message: "Checkout proceeding ...",
      success: true,
      url: session.url,
    };
  } catch (err) {
    console.log("Error : ", err);
    return {
      message: "An error occured while creating checkout",
      success: false,
      url: null,
    };
  }
};
