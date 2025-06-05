import React from 'react'

const Flashcards = () => {
    return (
        <div className="flex flex-row flex-wrap gap-5">
            {/* Total Orders Card */}
            <div className="bg-blue-500 rounded-2xl w-[160px] h-[80px] px-4 py-2">
                <span className="text-sm text-gray-200">Total Orders</span>
                <p className="text-3xl font-bold text-white">300</p>
            </div>
            <div className="bg-green-500 rounded-2xl w-[160px] h-[80px] px-4 py-2">
                <span className="text-sm text-gray-200">Accounts</span>
                <p className="text-3xl font-bold text-white">300</p>
            </div>

        </div>
    )
}

export default Flashcards