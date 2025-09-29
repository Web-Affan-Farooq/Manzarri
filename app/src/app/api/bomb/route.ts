import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import sanityClient from "@/lib/sanity";

export const GET = async (req: NextRequest) => {
  const orders: { _id: string; userId: string }[] =
    await sanityClient.fetch(`*[_type == "Notifications"]{
_id,
userId
}`);

  await Promise.all(
    orders.map(async (order) => {
      const account = await sanityClient.fetch(
        `*[_type == "Accounts" && _id == "${order.userId}"]`
      );
      if (account.length === 0) {
        console.log(`Account not found : ${order.userId}`);
        await sanityClient.delete(order._id)
        console.log("Deleted all notifications")
      } else {
        console.log(`Account found : ${order.userId}`);
      }
    })
  );

  return NextResponse.json(
    {
        message:"Check console"
    }
  )
};
