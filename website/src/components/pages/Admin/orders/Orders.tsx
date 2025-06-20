import React from 'react';
import sanityClient from '@/lib/sanity';
import { Order } from '@/@types/order';
import "./style.css";
import Link from 'next/link';
import FeedOrders from './FeedOrders';
import Fallback from '../Fallback';

interface FetchedOrder extends Order {
  _id: string;
  _updatedAt: string;
}
const getOrders = async () => {
  try {
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
    return {
      data: orders,
      success: true,
    }
  } catch (err) {
    console.log(err);
    return {
      data: [],
      success: false,
      message: "An error occured"
    }
  }
}

const Orders = async () => {
  const { data, success, message } = await getOrders();

  /* ____ Error tracking ... */
  // console.log("/Admin/orders");
  // console.log("Fetched Orders : ", orders);

  return (
    <>
      <Fallback success={success} message={message} />
      <FeedOrders arrayData={data} />
      <section className="p-6">
        <h1 className="text-2xl font-bold text-white mb-4">Orders</h1>

        {
          data.length <= 0 ? <p className='p-10'>No orders found ...</p> : <div className="scroll-container overflow-x-auto py-3">
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
                {data.map((order, index) => (
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
                      <Link href={`/Admin/orders/${order._id}`} className="text-blue-500 hover:underline text-sm">View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }

      </section>
    </>
  );
};

export default Orders;