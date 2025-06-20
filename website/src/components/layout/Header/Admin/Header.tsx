"use client";
import "./style.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { DashboardOption, InventoryOption, OrdersOption, SettingsOption, AccountsOption, MessagesOption ,EventsOption} from './Options';
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NotificationBell } from '@/components/icons';
import NotificationCard from '@/components/pages/Admin/NotificationCard';
import sanityClient from '@/lib/sanity';
import { Notification } from '@/@types/accounts';

const AdminHeader = () => {
  /* _____ router instance ... */
  const router = useRouter();

  /* _____ State for toogling sidebar... */
  const [navOpen, setNavOpen] = useState(false);

  /* State for notifications  */
  const [notifications, setnotifications] = useState([]);
  /* onclick Event : attemp GET request on logout api and redirect the user to landing page ... */
  const handleLogout = async () => {
    const response = await axios.get("/api/logout");
    const data = await response.data;
    if (!data.success) {
      toast.error(data.message)
    }
    /* Remove id from localstorage */
    localStorage.removeItem("userID");
    localStorage.removeItem("isBlocked");
    /* _____ Show success fallback ... */
    toast.success(data.message);
    /* _____ redirect user... */
    router.push("/");
  }

  useEffect(() => {
    const getData = async () => {
      const userID = window.localStorage.getItem("userID");
      if (userID) {
        const q = `*[_type == "Accounts" && _id == "${userID}"]{
        notifications,
        }`;
        const response = await sanityClient.fetch(q);
        // console.log(response[0].notifications);

        setnotifications(response[0].notifications);
      }
    }
    getData();
  }, []);

  return (
    <>
      {/* <div> */}
      <Sheet>
        <SheetContent className='bg-gray-900 text-gray-400 border-none'>
          <SheetHeader>
            <SheetTitle className='text-white text-[20px] font-bold'>Are you absolutely sure?</SheetTitle>
            {notifications.map((notification: Notification, idx: number) => {
              return <NotificationCard notification={notification} key={idx} />
            })}
          </SheetHeader>
        </SheetContent>
        <SheetTrigger className='notifications-button cursor-pointer fixed z-30 text-white right-8 top-20 bg-black p-2 rounded-full'>
          <span></span><span></span><span></span>
          <NotificationBell size={{
            width: 20,
            height: 20
          }} className='stroke-blue-500 transition-all duration-200 ease-in-out' />
        </SheetTrigger>
        <div className="relative flex">
          {/* Sidebar */}
          <aside className={`fixed z-20 top-0 left-0 h-full bg-gray-900 text-white w-64 p-6 transform transition-transform duration-300 ease-in-out ${navOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
            <nav className="flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
                <div className="flex flex-col gap-4">
                  <DashboardOption />
                  <InventoryOption />
                  <OrdersOption />
                  <AccountsOption />
                  <SettingsOption />
                  <MessagesOption />
                  <EventsOption />
                </div>
              </div>
              <button
                className="w-full text-left hover:text-white transition-all duration-150 ease-in-out cursor-pointer hover:bg-gray-400 py-2 px-3 rounded-md"
                aria-label="Logout"
                onClick={handleLogout}
              >
                Logout &nbsp; <i className="fa-solid fa-right-from-bracket"></i>
              </button>
            </nav>
          </aside>

          {/* Toggle Button */}
          <button
            className="md:hidden fixed top-4 right-4 z-30 text-white bg-gray-900 rounded-full p-3"
            onClick={() => setNavOpen(prev => !prev)}
            aria-label={navOpen ? "Close menu" : "Open menu"}
          >
            {navOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25H12" />
              </svg>
            )}
          </button>
        </div>
      </Sheet>
      {/* </div> */}
    </>
  );
};

export default AdminHeader;