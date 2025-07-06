"use client"
import useFlashcards from '@/components/hooks/useFlashcards'
import React from 'react'

const Flashcards =  () => {
    const {accounts, orders, revenue} = useFlashcards();
    return (
        <div className="flex flex-row flex-wrap gap-5">
            {/* Total Orders Card */}
            <div className="bg-blue-500 rounded-2xl w-[160px] h-[80px] px-4 py-2 max-sm:w-[130px] max-sm:h-[65px]">
                <span className="text-sm text-gray-200">Total Orders</span>
                <p className="text-3xl font-bold text-white max-sm:text-xl">{orders}</p>
            </div>
            <div className="bg-green-500 rounded-2xl w-[160px] h-[80px] px-4 py-2 max-sm:w-[130px] max-sm:h-[65px]">
                <span className="text-sm text-gray-200">Accounts</span>
                <p className="text-3xl font-bold text-white max-sm:text-xl">{accounts}</p>
            </div>
            <div className="bg-purple-500 rounded-2xl w-[160px] h-[80px] px-4 py-2 max-sm:w-[130px] max-sm:h-[65px]">
                <span className="text-sm text-gray-200">Revenue</span>
                <p className="text-3xl font-bold text-white max-sm:text-xl">$ {revenue}</p>
            </div>
            <div className="bg-yellow-500 rounded-2xl w-[160px] h-[80px] px-4 py-2 max-sm:w-[130px] max-sm:h-[65px]">
                <span className="text-sm text-gray-200">Page views</span>
                <p className="text-3xl font-bold text-white max-sm:text-xl">5</p>
            </div>
        </div>
    )
}

export default Flashcards