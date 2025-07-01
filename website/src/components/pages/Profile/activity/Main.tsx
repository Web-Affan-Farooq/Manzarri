"use client";
import { Order } from '@/@types/order';
import sanityClient from '@/lib/sanity';
import React, { useCallback, useState } from 'react';

interface OrderRef {
  _key: string;
  _ref: string;
  _type: string;
}

const Main = () => {
  const [orders, setorders] = useState<Order[]>([]);
  const [lastLogin, setlastLogin] = useState("");
  const getAccountOrders = useCallback(async () => {
    const userId = window.localStorage.getItem("userID");
    if (userId) {
      const q = `*[_type == "AccountActivity" && userId == "${userId}"]{
      lastLogin,
      orders,
      }`;
      const orderReferences = await sanityClient.fetch(q);
      const orderIds: string[] = [];
      setlastLogin(orderReferences[0].lastLogin)
      orderReferences[0].orders.forEach((order: OrderRef) => orderIds.push(order._ref));
      const response = await sanityClient.fetch(`*[_type == "Orders" && _id in $ids]{
weightageInGrams,
amountPayable,
status,
packages
          }`, { ids: orderIds });
      // console.log("Response : ", response);

      setorders(response);
    }
    getAccountOrders();
  }, []);

  return (
    <section className='p-5 w-full'>
      <h1 className='font-bold text-[26px]'>Account Activity</h1>
      <br />
      <h2 className='font-bold text-[20px]'>Activity</h2>
      <br />
      <p><strong>Last login : </strong>{new Date(lastLogin).toUTCString()}</p>
      <br />
      <h2 className='font-bold text-[20px]'>Orders</h2>
      {orders.length <= 0 ? <p className='p-4 text-center text-gray-600'>No orders found ...</p> : orders.map((order, idx) => {
        return <div key={idx}>{order.userId}</div>
      })}
    </section>
  )
}

export default Main