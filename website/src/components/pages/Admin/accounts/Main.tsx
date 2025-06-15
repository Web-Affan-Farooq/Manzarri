import React from 'react'
// import sanityClient from "@/lib/sanity";
// import { Account } from '@/@types/accounts';
import Accounts from './Accounts';
const Main = async () => {
//     const q = `
//     *[_type == "Accounts"] {
//   _id,
//   userEmail,
//   userName,
//   isBlocked,
// }
    // `;
    // const response:Account[] = await sanityClient.fetch(q);
    return (
        <section className='w-full p-1'>
            <h1 className='font-semibold text-gray-400 text-[24px]'>Accounts</h1>
            <Accounts/>
            <br />
        </section>
    )
}

export default Main