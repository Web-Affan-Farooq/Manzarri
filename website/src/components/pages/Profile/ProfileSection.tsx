"use client";
import React, { useEffect, useState } from 'react';
import sanityClient from '@/lib/sanity';
import { Notification } from '@/@types/accounts';

const ProfileSection = () => {
  const [notifications, setnotifications] = useState([]);
  useEffect(() => {
    const id = window.localStorage.getItem("userID");
    if (id) {
      const fetchNotifications = async () => {
        const fetched = await sanityClient.fetch(`*[_type == "Accounts" && _id == "${id}"]{notifications}`);
        console.log("notification : ",fetched[0].notifications);
        
        setnotifications(fetched[0].notifications);
      }
      fetchNotifications();
    }
  }, []);
  return (
    <section className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

      <div className="flex flex-col gap-4">
        {
          notifications.map((notification: Notification, idx) => {
            return <div className="bg-white shadow-md p-4 rounded-lg flex items-center gap-4" key={idx}>
              <i className="fa-solid fa-check text-green-400"></i>
              <span className='text-black'>{notification.notificationText}</span>
            </div>
          })
        }

        {/* <div className="bg-white shadow-md p-4 rounded-lg flex items-center gap-4">
          <i className="fa-solid fa-truck text-blue-500 text-xl"></i>
          <span>Your order #12345 has been shipped!</span>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg flex items-center gap-4">
          <i className="fa-solid fa-lock text-green-500 text-xl"></i>
          <span>Your password was changed successfully.</span>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg flex items-center gap-4">
          <i className="fa-solid fa-tags text-yellow-500 text-xl"></i>
          <span>New Offer: Get 20% off on your next purchase!</span>
        </div> */}
      </div>
    </section>

  );
};

export default ProfileSection;
