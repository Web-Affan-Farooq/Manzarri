import React from 'react'
import Card from './Card'

const Main = () => {
    return (
        <section className='w-full p-1'>
            <h1 className='font-semibold text-gray-400 text-[24px]'>Accounts</h1>
            <br />
            <div className='mt-[20px] flex flex-col flex-nowrap w-full'>
                <Card userId={"1"} name={"Muhammad affan"} email={"example@gmail.com"} />
                <Card userId={"1"} name={"Muhammad affan"} email={"example@gmail.com"} />
                <Card userId={"1"} name={"Muhammad affan"} email={"example@gmail.com"} />
                <Card userId={"1"} name={"Muhammad affan"} email={"example@gmail.com"} />
                <Card userId={"1"} name={"Muhammad affan"} email={"example@gmail.com"} />
            </div>
        </section>
    )
}

export default Main