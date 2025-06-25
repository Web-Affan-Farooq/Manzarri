import React from 'react'
import FeedDashboardCache from './FeedDashboardCache';
import { getAccounts, getFormSubmissions, getInventory, getOrders,  } from '@/utils/FetchDashboardData';

const FetchDashboardData = async () => {
    const accounts = await getAccounts();
    const formSubmissions = await getFormSubmissions();
    const inventory = await getInventory();
    const orders = await getOrders();

    return (
    <>
    <FeedDashboardCache accounts={accounts} formSubmissions={formSubmissions} inventory={inventory} orders={orders}/>
    </>
  )
}

export default FetchDashboardData