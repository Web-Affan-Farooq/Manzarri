"use client";
import React, { useEffect } from "react";
import useDashboardCache from "@/stores/admin";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import axios from "axios";

const FetchDashboardData = ({ children }: { children: React.ReactNode }) => {
  const { feedAccounts, feedInventory, feedFormSubmissions, feedOrders } =
    useDashboardCache();
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/Admin/dashboard");
        const { data } = response;
        feedAccounts(data.accounts);
        feedFormSubmissions(data.formSubmissions);
        feedInventory(data.products);
        feedOrders(data.orders);
      } catch (err) {
        console.log(err);
        toast.error("An error occurred");
        router.push("/profile");
      }
    };

    // fetch immediately on mount
    getData();

    // then repeat every 10 minutes
    const timeInterval = setInterval(getData, 600000);

    return () => clearInterval(timeInterval);
  }, [router, feedOrders, feedFormSubmissions, feedInventory, feedAccounts]);

  return <>{children}</>;
};

export default FetchDashboardData;

// const newAccounts = JSON.stringify(accounts, null, 2)
//   .replace(/"([^"]+)":/g, "$1:") // remove quotes from keys
//   .replace(/"/g, '"'); // optional: preserve quotes around values
// const newForm = JSON.stringify(formSubmissions, null, 2)
//   .replace(/"([^"]+)":/g, "$1:") // remove quotes from keys
//   .replace(/"/g, '"'); // optional: preserve quotes around values
// const newProducts = JSON.stringify(inventory, null, 2)
//   .replace(/"([^"]+)":/g, "$1:") // remove quotes from keys
//   .replace(/"/g, '"'); // optional: preserve quotes around values
// const newOrders = JSON.stringify(orders, null, 2)
//   .replace(/"([^"]+)":/g, "$1:") // remove quotes from keys
//   .replace(/"/g, '"'); // optional: preserve quotes around values
