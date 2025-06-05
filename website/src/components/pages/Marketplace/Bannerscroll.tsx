"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "./style.css";

const Bannerscroll = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollInterval = 3000; // 3 seconds
    const scrollAmount = window.innerWidth; // scroll by full screen width
    let currentScroll = 0;

    const interval = setInterval(() => {
      if (containerRef.current) {
        const maxScroll =
          containerRef.current.scrollWidth - containerRef.current.clientWidth;

        currentScroll += scrollAmount;

        if (currentScroll > maxScroll) {
          currentScroll = 0;
        }

        containerRef.current.scrollTo({
          left: currentScroll,
          behavior: "smooth",
        });
      }
    }, scrollInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-x-scroll whitespace-nowrap scroll-smooth scroll-container"
    >
      {[1, 2, 3, 4].map((num) => (
        <div
          key={num}
          className="relative inline-block w-screen h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px]"
        >
          <Image
            src="/images/banner.jpg"
            alt={`banner ${num}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default Bannerscroll;