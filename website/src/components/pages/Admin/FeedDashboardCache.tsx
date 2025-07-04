"use client";
import React, { useEffect } from 'react';
import { Product } from '@/@types/product';
import { Account } from '@/@types/accounts';
import useDashboardCache from '@/stores/admin';
import FormSubmission from '@/@types/FormSubmissions';
import { Order } from '@/@types/order';

const FeedDashboardCache = ({ inventory, accounts, formSubmissions, orders }: { inventory: Product[]; accounts: Account[]; formSubmissions: FormSubmission[]; orders: Order[] }) => {
  const { feedAccounts, feedInventory, feedFormSubmissions, feedOrders } = useDashboardCache();

  useEffect(() => {
    feedAccounts(accounts);
    feedFormSubmissions(formSubmissions);
    feedInventory(inventory);
    feedOrders(orders)  ;
    // console.log("Seed dashboard Completed : ", orders);
    
  }, [feedOrders, orders, accounts, formSubmissions, inventory, feedFormSubmissions, feedInventory, feedAccounts]);
  return (
    <></>
  )
}

export default FeedDashboardCache