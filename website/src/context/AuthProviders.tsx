"use client"
import sanityClient from '@/lib/sanity';
// import { usePathname } from 'next/navigation';
// import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    // const dashboardPages = ["/profile", "/profile/cart", "/profile/wishlist", "/profile/settings", "/Admin/accounts", "/Admin/inventory", "/Admin/messages", "/Admin/orders", "/Admin/settings", "/Admin"];
    // const pathname = usePathname();
    // const router = useRouter();

    /* _____ Continue Working ... */
    useEffect(() => {
        const verifyBlockAccount = async () => {
            const isBlocked = window.localStorage.getItem("isBlocked");
            const userId = window.localStorage.getItem("userID");
            if (userId && isBlocked !== null) {
                const q = `*[_type == "Accounts" && _id == "${userId}"]{
            isBlocked}`;
                const response = await sanityClient.fetch(q);
                window.localStorage.setItem("isBlocked", response[0].isBlocked);
                if (response[0].isBlocked) {
                    toast.error("Your account hasbeen blocked")
                }
            }
        }
        verifyBlockAccount();
    }, []);
    return (
        <>{children}</>
    )
}

export default AuthProvider