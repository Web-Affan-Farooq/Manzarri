"use client";
import { Account } from '@/@types/accounts';
import { useAccounts } from '@/stores/accounts';
// import { useEffect } from 'react';
import Card from './Card';
import { useEffect } from 'react';

const Accounts = ({ arrayData }: { arrayData: Account[] }) => {
    /* This component can take accounts array fetched from datasets and make it global by setting it to a state */
    const { accounts,feedAccounts} = useAccounts();
    useEffect(() => {
        feedAccounts(arrayData);
    }, [arrayData,feedAccounts]);
    return (
        <div className='mt-[20px] flex flex-col flex-nowrap w-full'>
            {accounts.map((account: Account, idx: number) => {
                return <Card userId={account._id} name={account.userName} email={account.userEmail} isBlocked={account.isBlocked} key={idx} />
            })}
        </div>)
}

export default Accounts