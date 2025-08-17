"use client";
import React, { useRef, useState } from 'react';
import Link from 'next/link';

// import { useCart } from '@/stores/cart';
// import { useWishlist } from '@/stores/wishlist';
import { usePathname } from 'next/navigation';

import { Heart, ShoppingBag, Profile } from "@/components/icons";
import { useTimeline } from '../hooks';

const Header = () => {
  const [navStatus, setnavStatus] = useState(false);


  // const { cart } = useCart();
  // const { wishlist } = useWishlist();

  const pathname = usePathname();

  if (pathname.startsWith("/Admin") || pathname.startsWith("/profile")) {
    return <></>
  } else {
    return (
      <div>
        <header className='z-10 w-full fixed text-white
            2xl:px-[60px] 2xl:py-[20px]
             xl:px-[60px] xl:py-[20px]
             lg:px-[60px] lg:py-[20px]
            md:px-[40px] md:py-[20px]
            sm:px-[30px] sm:py-[20px]
            max-sm:px-[20px] max-sm:py-[20px]
            flex flex-row flex-nowrap justify-between items-center
            '>

          <div className='flex flex-row flex-nowrap justify-center items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 max-sm:block hidden cursor-pointer" onClick={() => {
              setnavStatus(!navStatus)
            }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>

            <span className="font-rye font-normal
    leading-[100%]
    tracking-[0%]
    2xl:text-[50px]
    xl:text-[40px]
    lg:text-[38px]
    md:text-[38px]
    sm:text-[30px]
    max-sm:text-[25px]
    ">Manzarri</span>
          </div>


          <div className='hidden sm:flex flex-row flex-nowrap justify-center items-center gap-5'>
            <Link href={"/"} className='text-[15px] '>
              Home
            </Link>
            <Link href={"/marketplace"} className='text-[15px] '>
              Marketplace
            </Link>
            <Link href={"/marketplace"} className='text-[15px] '>
              Marketplace
            </Link>
          </div>
          <div className={`transition-all duration-400 ease-in-out absolute top-0 right-0 z-10 bg-background w-[100vw] h-screen hidden max-sm:flex flex-col flex-nowrap justify-center items-center gap-6 ${navStatus ? "translate-y-0" : "translate-y-[100%]"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute top-5 left-5 size-7 max-sm:block hidden cursor-pointer" onClick={() => {
              setnavStatus(!navStatus)
            }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

            <Link href={"/marketplace"} className='text-[15px] text-skin' onClick={() => {
              setnavStatus(!navStatus);
            }}>
              Marketplace
            </Link>
            <Link href={"/marketplace"} className='text-[15px] text-skin' onClick={() => {
              setnavStatus(!navStatus);
            }}>
              Marketplace
            </Link>
            <Link href={"/marketplace"} className='text-[15px] text-skin' onClick={() => {
              setnavStatus(!navStatus);
            }}>
              Marketplace
            </Link>
          </div>

          <div className='flex flex-row flex-nowrap justify-center items-center gap-3'>
            <Link href={"/profile/wishlist"} className='relative w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5'>
              <Heart className="object-contain" size={{
                width: 21,
                height: 21,
              }} />
              <span className='absolute bg-skin text-black text-xs right-[-8px] bottom-[10px] rounded-full w-[15px] h-[15px] flex justify-center items-center'>
                3
              </span>
            </Link>
            <Link href={"/profile"} className='relative w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5'>
              <Profile className="object-contain" size={{
                width: 21,
                height: 21,
              }} />
              <span className='absolute bg-skin text-black text-xs right-[-8px] bottom-[10px] rounded-full w-[15px] h-[15px] flex justify-center items-center'>
                1
              </span>
            </Link>
            <Link href={"/profile/cart"} className='relative w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5'>
              <ShoppingBag className="object-contain" size={{
                width: 21,
                height: 21,
              }} />
              <span className='absolute bg-skin text-black text-xs right-[-8px] bottom-[10px] rounded-full w-[15px] h-[15px] flex justify-center items-center'>
                3
              </span>
            </Link>
          </div>

        </header>

        <div className='line w-0 h-[1px] bg-skin relative top-18' ref={lineRef}></div>
      </div>
    )
  }
}

export default Header
// "use client";
// import { useGSAP } from '@gsap/react';
// import React from 'react'
// import gsap from 'gsap';

// const Header = () => {
// useGSAP(() =>{
//   gsap.to(".line",{
//     width:"100%",
//     duration:1,
//   });


// },[]);

//   return (
//     <>
//     <header>

//     </header>
//     <div className='line w-0 h-[2px] bg-skin'></div>
//     </>
//   )
// }

// export default Header;


