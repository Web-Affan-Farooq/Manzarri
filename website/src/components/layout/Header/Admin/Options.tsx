"use client";
import React from 'react';
import { Accounts, Dashboard, Orders, Settings, ShoppingCart } from '@/components/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardOption = () => {
    const pathname = usePathname();

    return (
        <Link
            href={"/Admin"}>
            <div className="group hover:text-blue-500 text-white w-full transition-all duration-150 ease-in-out cursor-pointer py-2 px-3 rounded-md flex flex-row flex-nowrap items-center gap-[10px]">
                <Dashboard className={`group-hover:text-blue-600 transition w-[20px] h-[20px] ${pathname === "/Admin" ? "text-blue-500" : ""}`}/> Dashboard
            </div>
        </Link>)
}
const InventoryOption = () => {
    const pathname = usePathname();
    return (
        <Link
            href={"/Admin/inventory"}>
            <div className="group hover:text-blue-500 w-full transition-all duration-150 ease-in-out cursor-pointer py-2 px-3 rounded-md flex flex-row flex-nowrap items-center gap-[10px]">
                <ShoppingCart className={`group-hover:text-blue-600 transition w-[20px] h-[20px] ${pathname === "/Admin/inventory" ? "text-blue-500" : ""}`} stroke='#536b8a'/> Inventory
            </div>
        </Link>
    )
}
const OrdersOption = () => {
    const pathname = usePathname();
    return (
        <Link
            href={"/Admin/orders"}>
            <div className="group hover:text-blue-500 w-full transition-all duration-150 ease-in-out cursor-pointer py-2 px-3 rounded-md flex flex-row flex-nowrap items-center gap-[10px]">
                <Orders className={`group-hover:text-blue-600 transition w-[20px] h-[20px] ${pathname === "/Admin/orders" ? "text-blue-500" : ""}`} /> Orders
            </div>
        </Link>
    )
}
const AccountsOption = () => {
    const pathname = usePathname();
    return (
        <Link
            href={"/Admin/accounts"}>
            <div className="group hover:text-blue-500 w-full transition-all duration-150 ease-in-out cursor-pointer py-2 px-3 rounded-md flex flex-row flex-nowrap items-center gap-[10px]">
                <Accounts className={`group-hover:text-blue-600 transition w-[20px] h-[20px] ${pathname === "/Admin/accounts" ? "text-blue-500" : ""}`} /> Accounts
            </div>
        </Link>
    )
}
const SettingsOption = () => {
    const pathname = usePathname();
    return (
        <Link
            href={"/Admin/settings"}>
            <div className="group hover:text-blue-500 w-full transition-all duration-150 ease-in-out cursor-pointer py-2 px-3 rounded-md flex flex-row flex-nowrap items-center gap-[10px]">
                <Settings className={`group-hover:text-blue-600 transition w-[20px] h-[20px] ${pathname === "/Admin/settings" ? "text-blue-500" : ""}`} /> Settings
            </div>
        </Link>
    )
}

export {
    DashboardOption,
    OrdersOption,
    InventoryOption,
    SettingsOption,
    AccountsOption,
}