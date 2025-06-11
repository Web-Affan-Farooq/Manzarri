import React from 'react'
import Card from './Card'
import sanityClient from "@/lib/sanity";
import { Account } from '@/@types/accounts';

const Main = async () => {
    const q = `
    *[_type == "Accounts"] {
  _id,
  userEmail,
  userName,
  isBlock,
}
    `;
    const response = await sanityClient.fetch(q);
    return (
        <section className='w-full p-1'>
            <h1 className='font-semibold text-gray-400 text-[24px]'>Accounts</h1>
            <br />
            <div className='mt-[20px] flex flex-col flex-nowrap w-full'>
                {response.map((account: Account, idx: number) => {
                    return <Card userId={account._id} name={account.userName} email={account.userEmail} isBlocked={account.isBlocked} key={idx} />
                })}
            </div>
        </section>
    )
}

export default Main