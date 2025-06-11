"use client";
import React from 'react';
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";
import axios from 'axios';
import toast from 'react-hot-toast';

const Card = ({ userId, name, email , isBlocked}: { userId: string; name: string; email: string; isBlocked:boolean }) => {

    /* _____ handle notification push logic ... */
    const handleNotificationPush = async () => {
        const response = await axios.post("/api/push-notification", {
            type: "Failure",
            text: "Your account hasbeen deleted by top authorities due to some unintentional activities",
            id: userId,
        });
        if (response.status !== 200) {
            toast.error(response.statusText);
        }
    }

    /* _____ handle account deletion ...*/
    const handleDelete = async () => {
        const response = await axios.post("/api/Admin/delete-account", {
            id: userId,
        });
        if (response.status !== 200) {
            toast.error(response.statusText);
        }
        handleNotificationPush();
        toast.success("Account deleted successfully");
    }

    /* _____ handle block account logic ... */
    const handleAccountBlock = async () => {
        const response = await axios.post("/api/Admin/block-account", {
            id: userId,
        });
        if (response.status !== 200) {
            toast.error(response.statusText);
        }
        toast.success("Account blocked successfully");
    }

    /* _____ handle block account logic ... */
    const handleAccountUnblock = async () => {
        const response = await axios.post("/api/Admin/unblock-account", {
            id: userId,
        });
        if (response.status !== 200) {
            toast.error(response.statusText);
        }
        toast.success("Account unblocked");
    }

    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <div className='flex cursor-pointer flex-row flex-nowrap justify-between items-center w-full max-sm:px-[10px] px-[20px] py-[10px] relative'>
                    <div>
                        <h1 className='font-bold text-[16px]'>{name}</h1>
                        <h2 className='text-[15px] text-gray-500'>{email}</h2>
                    </div>
                </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem className='hover:bg-gray-400 cursor-pointer'>Email</ContextMenuItem>
                <ContextMenuItem className='hover:bg-gray-400 cursor-pointer text-orange-500 hover:text-white' onClick={() => {
                    if(isBlocked) {
                        handleAccountUnblock()
                    }
                    handleAccountBlock();
                }}>
                    {isBlocked? "Unblock account" : "Block account"}
                </ContextMenuItem>
                <ContextMenuItem className='hover:bg-gray-400 cursor-pointer text-red-500 hover:text-white' onClick={handleDelete}>Delete</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    )
}

export default Card