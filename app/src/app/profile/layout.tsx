import { FetchMarketplaceData } from "@/components/layout";
import type { Metadata } from "next";
import { OfferPopup } from "@/components/common";

export const metadata: Metadata = {
  title: "Profile | Manzarri",
  description: "Check your profile",
};

export default function MarketplaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <OfferPopup />
      <FetchMarketplaceData>{children}</FetchMarketplaceData>
    </>
  );
}
