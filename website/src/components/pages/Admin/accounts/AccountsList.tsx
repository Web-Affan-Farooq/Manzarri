"use client";
import React from 'react'
import Card from './Card';
import useDashboardCache from '@/stores/admin';
import { Account } from '@/@types/accounts';

const AccountsList = () => {
    const { accounts } = useDashboardCache();
    if (accounts.length <= 0) {
        return (
            <div className='mt-[20px] flex flex-col flex-nowrap w-full'>
                <p className='text-md text-center'>No accounts found ...</p>
            </div>
        )
    }
    else {
        return (
            <div className='mt-[20px] flex flex-col flex-nowrap w-full'>
                {accounts.map((account: Account, idx: number) => {
                    return <Card isAdmin={account.isAdmin} userId={account._id} name={account.userName} email={account.userEmail} isBlocked={account.isBlocked} key={idx} />
                })}
            </div>
        )
    }
}

export default AccountsList