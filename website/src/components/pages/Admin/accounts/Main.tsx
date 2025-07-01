"use client";
import React from 'react'
import { Account } from '@/@types/accounts';
import Card from './Card';
import useDashboardCache from '@/stores/admin';

const Main = () => {
    const {accounts} = useDashboardCache();
    return (
        <section className='w-full p-1'>
            <h1 className='font-semibold text-gray-400 text-[24px]'>Accounts</h1>
            <div className='mt-[20px] flex flex-col flex-nowrap w-full'>
                {accounts.map((account: Account, idx: number) => {
                    return <Card isAdmin={account.isAdmin} userId={account._id} name={account.userName} email={account.userEmail} isBlocked={account.isBlocked} key={idx} />
                })}
            </div>            
            <br />
        </section>
    )
}

export default Main