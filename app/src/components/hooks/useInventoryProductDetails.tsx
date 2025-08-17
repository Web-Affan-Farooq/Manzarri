import useDashboardCache from "@/stores/admin";
import { useMemo, useState } from "react";

const useSoldProductDetails = (id: string) => {
  const { orders, inventory } = useDashboardCache();
  const requiredInventoryProduct = useMemo(() => {
    return inventory.find((p) => p._id === id);
  }, [inventory, id]);

  const [months] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  const counts = new Array(months.length).fill(0);

  let sold = 0;

  orders.forEach((order) => {
    order.packages.forEach((orderedProduct) => {
      if (orderedProduct.productId === id) {
        sold += orderedProduct.quantity;
      }
    });

    if (order._updatedAt) {
      const orderIssuanceDate = new Date(order._updatedAt);
      const currentYear = orderIssuanceDate.getFullYear();

      if (currentYear === 2025) {
        // Take year in argument and attach to it later ...
        const monthIndex = orderIssuanceDate.getMonth(); // 0 for January
        order.packages.forEach((orderedProduct) => {
          if (orderedProduct.productId === id) {
            counts[monthIndex] += orderedProduct.quantity;
          }
        });
      }
    }
  });

  const salesData = useMemo(() => {
    return months.map((month: string, idx: number) => {
      return {
        month: month,
        sale: counts[idx],
      };
    });
  }, [counts, months]);

  return {
    product: requiredInventoryProduct!,
    sold: sold,
    remaining: requiredInventoryProduct?.stockQuantity,
    salesData: salesData.slice(0, new Date().getMonth() + 1),
  };
};

export default useSoldProductDetails;
