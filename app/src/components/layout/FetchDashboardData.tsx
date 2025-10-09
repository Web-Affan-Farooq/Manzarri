"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOffers } from "@/stores/admin/offer";
import useAccounts from "@/stores/admin/accounts";
import useInventory from "@/stores/admin/inventory";
import useOrders from "@/stores/admin/orders";
import useFormSubmissions from "@/stores/admin/form-submissions";

const FetchDashboardData = ({ children }: { children: React.ReactNode }) => {
  const { fetchAccounts } = useAccounts();
  const { fetchInventory } = useInventory();
  const { fetchOffers } = useOffers();
  const { fetchOrders } = useOrders();
  const { fetchFormSubmissions } = useFormSubmissions();

  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      fetchFormSubmissions();
      fetchOrders();
      fetchAccounts();
      fetchInventory();
      fetchOffers();
    };

    getData();
    // then repeat every 10 minutes
    const timeInterval = setInterval(() => {
      getData();
    }, 600000);

    return () => clearInterval(timeInterval);
  }, [
    router,
    fetchAccounts,
    fetchInventory,
    fetchOffers,
    fetchOrders,
    fetchFormSubmissions,
  ]);

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
