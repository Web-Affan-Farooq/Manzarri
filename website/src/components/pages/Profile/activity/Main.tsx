"use client";
import { Order } from '@/@types/order';
import sanityClient from '@/lib/sanity';
import React, { useEffect, useState } from 'react';

interface OrderRef {
  _key: string;
  _ref: string;
  _type: string;
}

const Main = () => {
  const [orders, setorders] = useState<Order[]>([]);

  useEffect(() => {
    const getAccountOrders = async () => {
      const userId = window.localStorage.getItem("userID");
      if (userId) {
        const q = `*[_type == "AccountActivity" && userId == "${userId}"]{
      orders,
      }`;
        const orderReferences = await sanityClient.fetch(q);
        const orderIds: string[] = [];
        orderReferences[0].orders.forEach((order: OrderRef) => orderIds.push(order._ref));
        const response = await sanityClient.fetch(`*[_type == "Orders" && _id in $ids]{
amountPayable,
status,
packages
          }`, { ids: orderIds });
        // console.log("Response : ", response);
        setorders(response);
      }
    }
    getAccountOrders();
  }, []);

  return (
    <section className='p-5'>
      <h1 className='font-bold text-[26px]'>Account Activity</h1>
      <br />
      <h2 className='font-bold text-[20px]'>Orders</h2>
      <div>
        {orders.map((order, idx) => {
          return <div key={idx} className='mt-3'>
            <div><strong>Amount payable : </strong>$ {order.amountPayable}</div>
            <div className='flex flex-row flex-nowrap items-center justify-start gap-[10px]'>
              <div>Total <strong>{order.packages.length}</strong> products</div>
              {order.status.toLowerCase() === "paid" ? <span className='bg-green-400 text-center px-[10px] rounded-2xl text-white font-semibold text-[13px] '>{order.status}</span> : <span className='bg-red-400 text-center px-[10px] rounded-2xl text-white font-semibold text-[13px] '>{order.status}</span>}
            </div>
          </div>
        })}
      </div>
    </section>
  )
}

export default Main