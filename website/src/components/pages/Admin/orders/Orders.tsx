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
  } | order(_updatedAt desc)`;

  const orders: FetchedOrder[] = await sanityClient.fetch(query);

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold text-white mb-4">Orders</h1>

      {/* Responsive table container */}
      <div className="scroll-container overflow-x-auto py-3">
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
                    className={`px-[10px] py-[3px] rounded-full text-[11px] tracking-[0.5px] font-semibold ${
                      order.status === 'Paid'
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


// import React from 'react'
// import Image from 'next/image';
// import sanityClient from '@/lib/sanity';
// import { Order } from '@/@types/order';

// const Orders = async () => {
//     const q = `*[_type == "Orders"]{
//   _updatedAt,
//   _id,
//   amountPayable,
//   status,
//   userId,
//   weightageInGrams,
//   packages,
// }`;
// interface FetchedOrders extends Order {
//     _id:string;
//     _updatedAt:string;
// }
//     const response = await sanityClient.fetch(q);    
//     const data:FetchedOrders = response[0];

//     return (
//         <section className='p-6'>
//             <h1 className='text-[20px] font-bold font-rye text-gray-400'>Orders</h1>
//             <div>
//                 <div className='p-3 border-2 border-solid border-white'>
//                     <h1>{data.userId}</h1>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Orders