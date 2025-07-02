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
    return months.map((month, idx) => ({
      month,
      orders: counts[idx],
    }));

  }, [orders]);

  return {
    data: dataArray
  };
};

export default useOrdersCount;

// import { Order } from "@/@types/order";
// import useDashboardCache from "@/stores/admin";
// import { useState } from "react";

// interface DataObject {
//     month: string;
//     count: number;
// }

// const useOrdersCount = () => {
//     // ____ State for gettig orders ...
//     const { orders } = useDashboardCache();

//     // ____ State for storing orders count
//     const [dataArray, setDataArray] = useState([
//         {
//             month: "January",
//             count: 0,
//         },
//         {
//             month: "February",
//             count: 0,
//         },
//         {
//             month: "March",
//             count: 0,
//         },
//         {
//             month: "April",
//             count: 0,
//         },
//         {
//             month: "May",
//             count: 0,
//         },
//         {
//             month: "June",
//             count: 0,
//         },
//         {
//             month: "July",
//             count: 0,
//         },
//         {
//             month: "August",
//             count: 0,
//         },
//         {
//             month: "September",
//             count: 0,
//         },
//         {
//             month: "October",
//             count: 0,
//         },
//         {
//             month: "November",
//             count: 0,
//         },
//         {
//             month: "December",
//             count: 0,
//         },
//     ])

//     orders.forEach((order: Order, idx) => {
//         const orderPlacementDate = order._updatedAt;
//         const startOfMonth = `2025-${String(idx + 1).padStart(2, '0')}-01T00:00:00Z`;
//         const endOfMonth = new Date(2025, idx + 1, 0, 23, 59, 59).toISOString();

//         if (orderPlacementDate && new Date(orderPlacementDate) >= new Date(startOfMonth) && new Date(orderPlacementDate) <= new Date(endOfMonth)) {

//             const newDataArray = [...dataArray];

//             newDataArray[idx].count +1
            
//             setDataArray(newDataArray)

//         }
//     });
    

//     return {
//         data: dataArray
//     };
// }

// export default useOrdersCount;
