import sanityClient from '@/lib/sanity';
import React from 'react'

const Flashcards = async () => {
    let ordersCount = 0;
    let accountsCount = 0;
    let totalRevenue = 0;
    const getOrdersCountThisMonth = await sanityClient.fetch(`count(*[_type == "Orders" && _updatedAt >= "2025-06-01T00:00:00Z" && _updatedAt < "2025-07-01T00:00:00Z"])`);
    const getAccountsActivityCount = await sanityClient.fetch(`count(*[_type == "Accounts"])`);
    const getAmountPayable = await sanityClient.fetch(`*[_type == "Orders"]{
  amountPayable,
}`);
    getAmountPayable.forEach(({ amountPayable }: { amountPayable: number }) => { totalRevenue += amountPayable });
    accountsCount += getAccountsActivityCount;
    ordersCount += getOrdersCountThisMonth;

    return (
        <div className="flex flex-row flex-wrap gap-5">
            {/* Total Orders Card */}
            <div className="bg-blue-500 rounded-2xl w-[160px] h-[80px] px-4 py-2 max-sm:w-[130px] max-sm:h-[65px]">
                <span className="text-sm text-gray-200">Total Orders</span>
                <p className="text-3xl font-bold text-white max-sm:text-xl">{ordersCount}</p>
            </div>
            <div className="bg-green-500 rounded-2xl w-[160px] h-[80px] px-4 py-2 max-sm:w-[130px] max-sm:h-[65px]">
                <span className="text-sm text-gray-200">Accounts</span>
                <p className="text-3xl font-bold text-white max-sm:text-xl">{accountsCount}</p>
            </div>
            <div className="bg-purple-500 rounded-2xl w-[160px] h-[80px] px-4 py-2 max-sm:w-[130px] max-sm:h-[65px]">
                <span className="text-sm text-gray-200">Revenue (USD)</span>
                <p className="text-3xl font-bold text-white max-sm:text-xl">{totalRevenue}</p>
            </div>
        </div>
    )
}

export default Flashcards