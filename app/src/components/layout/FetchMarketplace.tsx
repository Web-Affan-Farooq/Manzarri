"use client";

import { useMarketplaceData } from "@/stores/useCatalog";
import React, { useEffect } from "react";

const FetchDMarketplaceData = ({ children }: { children: React.ReactNode }) => {
  const { fetchOffers, fetchProducts } = useMarketplaceData();

  useEffect(() => {
    const getData = async () => {
      console.log(
        "-------------------Running data fetches -----------------------------"
      );
      fetchProducts();
      fetchOffers();
      console.log(
        "-------------------Fetches completed -----------------------------"
      );
    };
    getData();
    setInterval(() => {
      getData();
    }, 180000);
  }, [fetchOffers, fetchProducts]);
  return <>{children}</>;
};
export default FetchDMarketplaceData;
