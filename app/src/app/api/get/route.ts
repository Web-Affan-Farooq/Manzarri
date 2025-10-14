import { NextResponse } from "next/server";
import sanityClient from "@/lib/sanity";

/**
 * fetch all notifications . extract thier ids addedToWishlistBy array and addedToCartBy array .
 *  for each id , create patch request to notifications and set userId to {_type:"reference",_ref:userid}
 * */
export const GET = async () => {
  const q = `*[_type == "Orders"] {
    _id,
    "userId":userId._ref,
    }`;
  console.log("Created query : ", q);

  const response: {
    _id: string;
    userId:string
  }[] = await sanityClient.fetch(q);

  console.log("fetched data : ", response);

  const tx = sanityClient.transaction();

  await Promise.all(
    response.map(async (order) => {
      console.log("editing order : ", order);
      const updated = tx.patch(order._id, {
        set: {
          userId: {
            _type: "reference",
            _ref: order.userId,
          },
        },
      });
      tx.commit();
      console.log("updated successfully ... : ", updated);
    })
  );
  return NextResponse.json({
    message: "orders updated successfully",
  });
};
