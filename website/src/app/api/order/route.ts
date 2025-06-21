// app/api/order/route.ts
import { NextRequest, NextResponse } from "next/server";
import OrderPlacement from "@/utils/OrderPlacement";

export const POST = async (req: NextRequest) => {
  const { order_id } = await req.json(); // Destructure correctly
  const placeOrder = new OrderPlacement(order_id);
  await placeOrder.updateStocks();
  await placeOrder.updateActivity();
  return NextResponse.json({ success: true });
};