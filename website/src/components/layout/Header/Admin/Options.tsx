"use client";
import React from 'react';
import { Accounts, Dashboard, Messages, Orders, Settings, ShoppingCart } from '@/components/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar,BadgeDollarSign} from 'lucide-react';

const DashboardOption = () => {
    const pathname = usePathname();

    return (
        <Link
            href={"/Admin"}>
            <div className="group hover:text-blue-500 text-white w-full transition-all duration-150 ease-in-out cursor-pointer py-2 px-3 rounded-md flex flex-row flex-nowrap items-center gap-[10px]">
                <Dashboard className={`text-gray-custom transition w-[20px] h-[20px] ${pathname === "/Admin" ? "text-blue-500" : ""}`}/> Dashboard
            </div>
        </Link>)
}
const InventoryOption = () => {
    const pathname = usePathname();
    return (
        <Link
            href={"/Admin/inventory"}>
            <div className="group hover:text-blue-500 w-full transition-all duration-150 ease-in-out cursor-pointer py-2 px-3 rounded-md flex flex-row flex-nowrap items-center gap-[10px]">
                <ShoppingCart className={`text-gray-custom transition w-[20px] h-[20px] ${pathname === "/Admin/inventory" ? "text-blue-500" : ""}`} stroke='#536b8a'/> Inventory
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
                <Orders className={`transition text-gray-custom w-[20px] h-[20px] ${pathname === "/Admin/orders" ? "text-blue-500" : ""}`} /> Orders
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
const MessagesOption = () => {
    const pathname = usePathname();
    return (
        <Link
            href={"/Admin/messages"}>
            <div className="group hover:text-blue-500 w-full transition-all duration-150 ease-in-out cursor-pointer py-2 px-3 rounded-md flex flex-row flex-nowrap items-center gap-[10px]">
                <Messages className={`group-hover:text-blue-600 transition w-[20px] h-[20px] ${pathname === "/Admin/settings" ? "text-blue-500" : ""}`} /> Messages
            </div>
        </Link>
    )
}
const EventsOption = () => {
    const pathname = usePathname();
    return (
        <Link
            href={"/Admin/events"}>
            <div className="group hover:text-blue-500 w-full transition-all duration-150 ease-in-out cursor-pointer py-2 px-3 rounded-md flex flex-row flex-nowrap items-center gap-[10px]">
                <Calendar className={`text-gray-custom transition w-[20px] h-[20px] ${pathname === "/Admin/inventory" ? "text-blue-500" : ""}`} stroke='#536b8a'/> Events
            </div>
        </Link>
    )
}
const FinancesOption = () => {
    const pathname = usePathname();
    return (
        <Link
            href={"/Admin/finances"}>
            <div className="group hover:text-blue-500 w-full transition-all duration-150 ease-in-out cursor-pointer py-2 px-3 rounded-md flex flex-row flex-nowrap items-center gap-[10px]">
                <BadgeDollarSign className={`text-gray-custom transition w-[20px] h-[20px] ${pathname === "/Admin/inventory" ? "text-blue-500" : ""}`} stroke='#536b8a'/> Finances
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
    MessagesOption,
    EventsOption,
    FinancesOption
}