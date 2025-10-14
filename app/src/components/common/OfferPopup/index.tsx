"use client";

// ____ Hooks ...
import { useMarketplaceData } from "@/stores/catalog";
import { useEffect, useState } from "react";

// _____ Components ...
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";

const OfferPopup = () => {
  const { offers } = useMarketplaceData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [status, setStatus] = useState(false);

  // Start showing popup after 7s
  useEffect(() => {
    const timer = setTimeout(() => setStatus(true), 7000);
    return () => clearTimeout(timer);
  }, []);

  // Cycle offers every 30s after status becomes true
  useEffect(() => {
    if (!status || offers.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 < offers.length ? prevIndex + 1 : 0
      );
    }, 30000);

    return () => clearInterval(interval);
  }, [status, offers.length]);

  if (!status || offers.length === 0) return null;

  const currentOffer = offers[currentIndex];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-60 w-11/12 max-w-lg overflow-hidden rounded-2xl bg-manzarri-skin shadow-2xl transition-all duration-500 ease-in-out transform md:w-[420px]">
      {/* Close Button */}
      <Button
        aria-label="Close offer popup"
        className="z-10 absolute right-4 top-4 flex items-center justify-center w-7 h-7 rounded-full bg-manzarri-reddish-brown text-manzarri-white hover:bg-manzarri-black transition-colors"
        onClick={() => setStatus(!status)}
      >
        <X className="size-4" />
      </Button>

      {/* Offer Image */}
      <div className="w-full h-[180px] overflow-hidden">
        <Image
          src={currentOffer.bannerImage}
          alt={currentOffer.offerName}
          width={420}
          height={180}
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="mb-2 text-2xl text-manzarri-black font-bold">
          {currentOffer.offerName}
        </h2>

        <p className="mb-5 text-sm leading-relaxed text-manzarri-black/70">
          {currentOffer.offerDescription}
        </p>

        <div className="flex flex-col gap-3 md:flex-row md:justify-start">
          <Button className="w-full md:w-auto text-[16px] px-5 py-2 rounded-md bg-manzarri-reddish-brown text-manzarri-white hover:bg-manzarri-black transition-all">
            Proceed
          </Button>

          <Button
            className="w-full md:w-auto text-[16px] px-5 py-2 rounded-md bg-manzarri-green text-manzarri-black hover:bg-manzarri-faun transition-all"
            onClick={() => setStatus(!status)}
          >
            No Thanks
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;
