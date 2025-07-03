import { Order } from "@/@types/order";
import useDashboardCache from "@/stores/admin";
import { useMemo } from "react";

interface DataObject {
  month: string;
  orders: number;
}

const useOrdersCount = () => {
  const { orders } = useDashboardCache();

  const dataArray: DataObject[] = useMemo(() => {
    const date = new Date();
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    // Initialize counts for each month
    const counts: number[] = new Array(12).fill(0);

    orders.forEach((order: Order) => {
      if (order._updatedAt) {
        const date = new Date(order._updatedAt);
        const year = 2025;

        if (year === 2025) {
          const monthIndex = date.getMonth(); // 0 for January
          counts[monthIndex]++;
        }
      }
    });

    // Create final array with month names and counts
    const array = months.map((month, idx) => ({
      month,
      orders: counts[idx],
    }));
    return array.slice(0, date.getMonth() + 1)
  }, [orders]);

  return {
    data: dataArray
  };
};

export default useOrdersCount;