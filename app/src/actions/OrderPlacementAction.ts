"use server";
import OrderPlacement from "@/utils/OrderPlacement";

const OrderPlacementAction = async (order_id: string) => {
  const placeOrder = new OrderPlacement(order_id);
  await placeOrder.updateStocks();
  await placeOrder.updateActivity();
  return { success: true };
};
export default OrderPlacementAction;
