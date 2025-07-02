import React from 'react'
import FeedDashboardCache from './FeedDashboardCache';
import { getAccounts, getFormSubmissions, getInventory} from '@/utils/FetchDashboardData';

const FetchDashboardData = async () => {
    const accounts = await getAccounts();
    const formSubmissions = await getFormSubmissions();
    const inventory = await getInventory();

    return (
    <>
    <FeedDashboardCache accounts={accounts} formSubmissions={formSubmissions} inventory={inventory}/>
    </>
  )
}

export default FetchDashboardData