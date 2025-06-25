"use client";
import React from 'react';
import "./style.css";
import Link from 'next/link';
import useDashboardCache from '@/stores/admin';


const Main = () => {
  const { orders } = useDashboardCache();
  /* ____ Error tracking ... */
  // console.log("/Admin/orders");
  // console.log("Fetched Orders : ", orders);

  return (
    <>
      {/* <Fallback success={success} message={message} /> */}
      {/* <FeedOrders arrayData={data} /> */}
      <section className="p-6 w-full h-screen overflow-y-auto">
        <h1 className="text-2xl font-bold text-white mb-4">Orders</h1>

        {
          orders.length <= 0 ? <p className='p-10'>No orders found ...</p> : <div className="scroll-container overflow-x-auto py-3">
            <table className="w-full bg-gray-800 shadow rounded-lg">
              <thead className="bg-gray-800 text-left text-sm text-gray-400">
                <tr>
                  <th className="p-3">#</th>
                  <th className="p-3">Items</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <>
                    <tr key={order._id} className="text-sm border-b border-gray-700">
                      <td className="p-3">{index + 1}</td>
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
                        {order._updatedAt ? new Date(order._updatedAt).toLocaleDateString() : ""}
                      </td>
                      <td className="p-3">
                        <Link href={`/Admin/orders/${order._id}`} className="text-blue-500 hover:underline text-sm">View
                        </Link>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        }

      </section>
    </>
    // <>
    //   {/* <Fallback success={success} message={message} /> */}
    //   {/* <FeedOrders arrayData={data} /> */}
    //   <section className="p-6 w-full h-[100vh] overflow-y-auto ">
    //     <h1 className="text-2xl font-bold text-white mb-4">Orders</h1>

    //     <div className="w-full overflow-x-auto">
    //       <table className="min-w-max w-full bg-gray-800 shadow rounded-lg">
    //         <thead className="bg-gray-800 text-left text-sm text-gray-400">
    //           <tr>
    //             <th className="p-3">#</th>
    //             <th className="p-3">User ID</th>
    //             <th className="p-3">Items</th>
    //             <th className="p-3">Amount</th>
    //             <th className="p-3">Status</th>
    //             <th className="p-3">Date</th>
    //             <th className="p-3">Actions</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {orders.map((order, index) => (
    //             <tr key={order._id} className="text-sm border-b border-gray-700">
    //               <td className="p-3">{index + 1}</td>
    //               <td className="p-3 truncate max-w-[150px]">{order.userId}</td>
    //               <td className="p-3">{order.packages.length}</td>
    //               <td className="p-3">$ {order.amountPayable}</td>
    //               <td className="p-3">
    //                 <span
    //                   className={`px-[10px] py-[3px] rounded-full text-[11px] tracking-[0.5px] font-semibold ${order.status === 'Paid'
    //                       ? 'text-green-500 bg-gray-600'
    //                       : 'text-red-500 bg-gray-600'
    //                     }`}
    //                 >
    //                   {order.status}
    //                 </span>
    //               </td>
    //               <td className="p-3 whitespace-nowrap">
    //                 {order._updatedAt ? new Date(order._updatedAt).toLocaleDateString() : ""}
    //               </td>
    //               <td className="p-3">
    //                 <Link href={`/Admin/orders/${order._id}`} className="text-blue-500 hover:underline text-sm">
    //                   View
    //                 </Link>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>


    //   </section>
    // </>
  );
};

export default Main;