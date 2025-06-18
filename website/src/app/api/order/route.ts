// app/api/order/route.ts
import sanityClient from "@/lib/sanity";
import { NextRequest, NextResponse } from "next/server";
import { Package } from "@/@types/order";

export const POST = async (req: NextRequest) => {
  const { id: order_id } = await req.json(); // Destructure correctly

  // 1. Get products from that specific order
  const packagedProducts = await sanityClient.fetch(
    `*[_type == "Orders" && _id == $orderId][0].packages[]`,
    { orderId: order_id }
  );

  // 2. Get product stock info
  const productIds = packagedProducts.map((item:Package) => item.productId);
  const productsFetched = await sanityClient.fetch(
    `*[_type == "Product" && _id in $ids]{ _id, stockQuantity }`,
    { ids: productIds }
  );

  // 3. Update each product's stock quantity
  for (const item of packagedProducts) {
    const product = productsFetched.find((p: {_id:string; stockQuantity:number}) => p._id === item.productId);
    if (product) {
      await sanityClient
        .patch(product._id)
        .set({ stockQuantity: product.stockQuantity - item.quantity })
        .commit();
    }
  }

  return NextResponse.json({ success: true });
};