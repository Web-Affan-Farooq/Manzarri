import { FetchMarketplaceData } from "@/components/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace | Manzarri",
  description: "Explore various varieties of jewelleries ",
};

export default function MarketplaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FetchMarketplaceData>{children}</FetchMarketplaceData>
    </>
  );
}
