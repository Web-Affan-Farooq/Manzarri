import useOrdersCount from "./useOrdersCount";
import { Order } from "@/@types/order";
import useAccounts from "@/stores/admin/accounts";
import useOrders from "@/stores/admin/orders";
import { useCallback } from "react";

const useFlashcards = () => {
  const { data } = useOrdersCount();
  const { accounts } = useAccounts();
  const { orders } = useOrders();

  let revenue = 0;

  // _____ Store current month in the state for initializing select ...
  const date = new Date();

  const getData = useCallback(
    (monthCount: string) => {
      const startOfMonth = `2025-${monthCount.padStart(2, "0")}-01T00:00:00Z`;
      const endOfMonthDate = new Date(2025, Number(monthCount), 0, 23, 59, 59);
      const endOfMonth = endOfMonthDate.toISOString();

      const filteredOrders = orders.filter((order: Order) => {
        const orderPlacementDate = order._updatedAt;
        return (
          orderPlacementDate &&
          new Date(orderPlacementDate) >= new Date(startOfMonth) &&
          new Date(orderPlacementDate) <= new Date(endOfMonth)
        );
      });

      return filteredOrders;
    },
    [orders]
  );
  const ordersThisMonth = getData(String(date.getMonth() + 1));
  ordersThisMonth.forEach((order) => (revenue += order.amountPayable));

  return {
    orders: data[data.length - 1].orders,
    accounts: accounts.length,
    revenue: revenue,
  };
};

export default useFlashcards;
