"use client";
import React, { useEffect } from 'react';
import { Product } from '@/@types/product';
import { Account } from '@/@types/accounts';
import useDashboardCache from '@/stores/admin';
import FormSubmission from '@/@types/FormSubmissions';

const FeedDashboardCache = ({inventory, accounts,formSubmissions }:{inventory:Product[]; accounts:Account[] ; formSubmissions:FormSubmission[]}) => {    
    const { feedAccounts, feedInventory, feedFormSubmissions,} = useDashboardCache();
    
    useEffect(() => {
        feedAccounts(accounts);
        feedFormSubmissions(formSubmissions);
        feedInventory(inventory);
    },[accounts, formSubmissions, inventory, feedFormSubmissions, feedInventory , feedAccounts]);

    return (
    <></>
  )
}

export default FeedDashboardCache