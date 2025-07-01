"use client";
import React, { useState, useEffect, useCallback } from 'react';
import "./style.css";
import Link from 'next/link';
import sanityClient from '@/lib/sanity';
import { Order } from '@/@types/order';
import useDashboardCache from '@/stores/admin';

const Main = () => {
  // ____ State for storing orders array ...
  const { orders, feedOrders } = useDashboardCache();

  // _____ Store current month in the state for initializing select ...
  const date = new Date();
  const [currentMonth, setcurrentMonth] = useState(date.getMonth() + 1);

  // _____ Async function for fetching orders corresponding to the month ...
  const getData = useCallback(async (monthCount: string) => {
    // _____ Calculate start and end of month ...
    const startOfMonth = `2025-${monthCount.padStart(2, '0')}-01T00:00:00Z`;
    const endOfMonthDate = new Date(2025, Number(monthCount), 0, 23, 59, 59);
    const endOfMonth = endOfMonthDate.toISOString();

    // _____ Generate query ...
    const query = `*[_type == "Orders" && dateTime(_updatedAt) >= dateTime('${startOfMonth}') && dateTime(_updatedAt) <= dateTime('${endOfMonth}')]{
  _id,
  _updatedAt,
  userId,
  amountPayable,
  status,
  weightageInGrams,
  packages
}`;
    // _____ Fetch data and store in orders array ...
    const response: Order[] = await sanityClient.fetch(query);
    feedOrders(response);
  }, [feedOrders]);

  // _____ Function for handling select input ...
  const handleMonthFilter = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    // ______ Important Note : Update the state only for syncronizing ui . Not to be used in date time calculation ...
    setcurrentMonth(Number(e.target.value));

    await getData(e.target.value)
  }

  // ____ Fetch current month orders on first render ...
  useEffect(() => {
    getData(String(currentMonth));
  }, [currentMonth, getData]);

  return (
    <>
      {/* <Fallback success={success} message={message} /> */}
      {/* <FeedOrders arrayData={data} /> */}
      <section className="p-6 w-full h-screen overflow-y-auto">
        <h1 className="text-2xl font-bold text-white mb-4 p-2">Orders placed </h1>
        <br />
        <select name="selectMonth" id="select-month" className='w-[150px] px-3 py-1 rounded-md' onChange={handleMonthFilter} value={currentMonth}>
          <option value="1" className='bg-black text-white text-sm'>January</option>
          <option value="2" className='bg-black text-white text-sm'>February</option>
          <option value="3" className='bg-black text-white text-sm'>March</option>
          <option value="4" className='bg-black text-white text-sm'>April</option>
          <option value="5" className='bg-black text-white text-sm'>May</option>
          <option value="6" className='bg-black text-white text-sm'>June</option>
          <option value="7" className='bg-black text-white text-sm'>July</option>
          <option value="8" className='bg-black text-white text-sm'>August</option>
          <option value="9" className='bg-black text-white text-sm'>September</option>
          <option value="10" className='bg-black text-white text-sm'>October</option>
          <option value="11" className='bg-black text-white text-sm'>November</option>
          <option value="12" className='bg-black text-white text-sm'>December</option>
        </select>
        {
          orders.length <= 0 ?
            <p className='p-4 text-center'>No orders found ...</p>
            :
            <div className="scroll-container overflow-x-auto py-3">
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
                  {orders.map((order, idx) => (
                    <tr className="text-sm border-b border-gray-700" key={idx}>
                      <td className="p-3">{idx + 1}</td>
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
                  ))}
                </tbody>
              </table>
            </div>
        }
      </section>
    </>
  );
};

export default Main;