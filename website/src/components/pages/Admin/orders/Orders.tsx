import React from 'react';
import sanityClient from '@/lib/sanity';
import { Order } from '@/@types/order';
import "./style.css"

interface FetchedOrder extends Order {
  _id: string;
  _updatedAt: string;
}


const Orders = async () => {
  const query = `*[_type == "Orders"]{
    _id,
    _updatedAt,
    userId,
    amountPayable,
    status,
    weightageInGrams,
    packages
  }`;

  const orders: FetchedOrder[] = await sanityClient.fetch(query);

  /* ____ Error tracking ... */
  // console.log("/Admin/orders");
  // console.log("Fetched Orders : ", orders);

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold text-white mb-4">Orders</h1>

      {
        orders.length <= 0 ? <p>No orders found ...</p> : <div className="scroll-container overflow-x-auto py-3">
          <table className="min-w-[700px] w-full bg-gray-800 shadow rounded-lg">
            <thead className="bg-gray-800 text-left text-sm text-gray-400">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">User ID</th>
                <th className="p-3">Items</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id} className="text-sm border-b border-gray-700">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 truncate max-w-[150px]">{order.userId}</td>
                  <td className="p-3">{order.packages.length}</td>
                  <td className="p-3">$ {order.amountPayable}</td>
                  <td className="p-3">
                    <span
                      className={`px-[10px] py-[3px] rounded-full text-[11px] tracking-[0.5px] font-semibold ${order.status === 'Paid'
                        ? 'text-green-500 bg-gray-600'
                        : 'text-red-500 bg-gray-600'
                        }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    {new Date(order._updatedAt).toLocaleDateString()}
                  </td>
                  <td className="p-3">
                    <button className="text-blue-500 hover:underline text-sm">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }

    </section>
  );
};

export default Orders;

// // app/dashboard/admin/orders/page.tsx

// import React from 'react';
// import sanityClient from '@/lib/sanity';
// import { Order } from '@/@types/order';

// interface FetchedOrder extends Order {
//   _id: string;
//   _updatedAt: string;
// }

// const Orders = async () => {
//   const query = `*[_type == "Orders"]{
//     _id,
//     _updatedAt,
//     userId,
//     amountPayable,
//     status,
//     weightageInGrams,
//     packages
//   } | order(_updatedAt desc)`;

//   const orders: FetchedOrder[] = await sanityClient.fetch(query);

//   return (
//     <section className="p-6">
//       <h1 className="text-2xl font-bold text-gray-800 mb-4">Orders</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-gray-800 shadow rounded-lg">
//           <thead className="bg-gray-800 text-left text-sm text-gray-400">
//             <tr>
//               <th className="p-3">#</th>
//               <th className="p-3">User ID</th>
//               <th className="p-3">Items</th>
//               <th className="p-3">Amount</th>
//               <th className="p-3">Status</th>
//               <th className="p-3">Date</th>
//               <th className="p-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order, index) => (
//               <tr
//                 key={order._id}
//                 className="text-sm"
//               >
//                 <td className="p-3">{index + 1}</td>
//                 <td className="p-3 truncate">{order.userId}</td>
//                 <td className="p-3">{order.packages.length}</td>
//                 <td className="p-3">$ {order.amountPayable}</td>
//                 <td className="p-3">
//                   <span
//                     className={`px-[10px] py-[3px] rounded-full text-[11px] tracking-[0.5px] font-semibold ${
//                       order.status === 'Paid'
//                         ? 'text-green-500 bg-gray-600'
//                         : 'text-red-500 bg-gray-600'
//                     }`}
//                   >
//                     {order.status}
//                   </span>
//                 </td>
//                 <td className="p-3">
//                   {new Date(order._updatedAt).toLocaleDateString()}
//                 </td>
//                 <td className="p-3">
//                   <button className="text-blue-600 hover:underline text-sm">
//                     View
//                   </button>
//                   {/* You can add more buttons like Mark as Shipped here */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default Orders;