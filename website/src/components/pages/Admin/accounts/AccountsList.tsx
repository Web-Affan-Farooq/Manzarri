"use client";
import React, { useEffect, useState } from 'react'
import Card from './Card';
import useDashboardCache from '@/stores/admin';
import { Account } from '@/@types/accounts';

const AccountsList = () => {
    const { accounts } = useDashboardCache();
    const [accountsList, setaccountsList] = useState<Account[]>([]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.trim() === "") {
            setaccountsList(accounts);
            return;
        }
        // console.log("Search query:", query);

        const filteredProducts = accounts.filter((account: Account) =>
            `${account.userEmail}`.toLowerCase().startsWith(query)
        );

        // console.log("Matched Searches:", filteredProducts);
        setaccountsList(filteredProducts);
    };

    useEffect(() => {
        setaccountsList(accounts);
    }, [accounts]);

    return (
        <>
            <div className='px-[20px] py-[10px]'>
                <input
                    list="products"
                    name="products"
                    id="products-input"
                    className='border border-blue-600 px-[15px] py-[5px] rounded-md w-[300px] focus:border-2 focus:border-blue-600'
                    onChange={handleSearch}
                    placeholder='Search accounts'
                />
                <datalist id="products">
                    {accountsList.map((account: Account, idx: number) => (
                        <option
                            key={idx}
                            value={account.userEmail}
                        >
                            {account.userEmail}
                        </option>
                    ))}
                </datalist>
            </div>
            <div className='mt-[20px] flex flex-col flex-nowrap w-full'>
                {accountsList.length <= 0 ? <p className='text-md text-center'>No accounts found ...</p> : accountsList.map((account: Account, idx: number) => {
                    return <Card isAdmin={account.isAdmin} userId={account._id} name={account.userName} email={account.userEmail} isBlocked={account.isBlocked} key={idx} />
                })}
            </div>
        </>
    )
}

export default AccountsList