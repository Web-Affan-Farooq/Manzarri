"use client";
import React, { useEffect } from 'react';
import { Product } from '@/@types/product';
import { Order } from '@/@types/order';
import { Account } from '@/@types/accounts';
import useDashboardCache from '@/stores/admin';
import FormSubmission from '@/@types/FormSubmissions';

const FeedDashboardCache = ({inventory,orders, accounts,formSubmissions }:{inventory:Product[]; orders:Order[]; accounts:Account[] ; formSubmissions:FormSubmission[]}) => {    
    const { feedAccounts, feedInventory, feedOrders, feedFormSubmissions} = useDashboardCache();
    
    useEffect(() => {
        feedAccounts(accounts);
        feedFormSubmissions(formSubmissions);
        feedInventory(inventory);
        feedOrders(orders);
    },[accounts, formSubmissions, inventory, orders, feedOrders, feedFormSubmissions, feedInventory , feedAccounts]);

    return (
    <></>
  )
}

export default FeedDashboardCache