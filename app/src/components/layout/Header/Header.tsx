"use client";
import React, { useState } from "react";
import { Menu, X, Search, ShoppingBag, Heart, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useNotificationSectionVisibility } from "@/stores/notification-visibility";
import { useCart } from "@/stores/cart";
import { pagesNotAllowed } from "@/constants";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();
  const { toogleVisibility } = useNotificationSectionVisibility();
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const hideHeaderOnRestrictedPages = pagesNotAllowed.every((page) =>
    pathname.startsWith(page)
  );
  console.log(hideHeaderOnRestrictedPages);

  if (!hideHeaderOnRestrictedPages) {
    return <></>;
  }

  return (
    <header className="sticky top-0 z-50 bg-manzarri-white border-b border-manzarri-black/10 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-manzarri-reddish-brown rounded-full flex items-center justify-center">
              <span className="text-manzarri-white font-bold">M</span>
            </div>
            <span className="text-2xl font-bold text-manzarri-black">
              Manzarri
            </span>
          </Link>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-manzarri-black/60 w-4 h-4" />
              <Input
                placeholder="Search for jewelry..."
                className="pl-10 bg-manzarri-skin border-manzarri-black/20 focus:border-manzarri-reddish-brown"
              />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={toogleVisibility}
                className="relative text-manzarri-black hover:text-manzarri-reddish-brown"
              >
                <Bell className="w-5 h-5" />
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs"
                >
                  3
                </Badge>
              </Button>

              <Link href="/profile/wishlist">
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative text-manzarri-black hover:text-manzarri-reddish-brown"
                >
                  <Heart className="w-5 h-5" />
                  <Badge
                    variant="secondary"
                    className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs bg-manzarri-faun text-manzarri-white"
                  >
                    5
                  </Badge>
                </Button>
              </Link>

              <Link href="/profile/cart">
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative text-manzarri-black hover:text-manzarri-reddish-brown"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <Badge
                    variant="secondary"
                    className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs bg-manzarri-faun text-manzarri-white"
                  >
                    2
                  </Badge>
                </Button>
              </Link>

              <Link href="/profile">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-manzarri-black hover:text-manzarri-reddish-brown"
                >
                  <User className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-manzarri-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block border-t border-manzarri-black/10">
          <div className="flex items-center space-x-8 py-4">
            <Link
              href="/"
              className={`transition-colors hover:text-manzarri-reddish-brown ${
                isActive("/")
                  ? "text-manzarri-reddish-brown font-medium"
                  : "text-manzarri-black"
              }`}
            >
              Home
            </Link>
            <Link
              href="/marketplace"
              className={`transition-colors hover:text-manzarri-reddish-brown ${
                isActive("/marketplace")
                  ? "text-manzarri-reddish-brown font-medium"
                  : "text-manzarri-black"
              }`}
            >
              Marketplace
            </Link>
            <div className="text-manzarri-black/60">|</div>
            <span className="text-manzarri-black/80">Collections</span>
            <span className="text-manzarri-black/80">Rings</span>
            <span className="text-manzarri-black/80">Necklaces</span>
            <span className="text-manzarri-black/80">Earrings</span>
            <span className="text-manzarri-black/80">Bracelets</span>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-manzarri-white border-t border-manzarri-black/10 shadow-lg">
          <div className="container mx-auto px-4 py-6 space-y-6">
            {/* Mobile search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-manzarri-black/60 w-4 h-4" />
              <Input
                placeholder="Search for jewelry..."
                className="pl-10 bg-manzarri-skin border-manzarri-black/20"
              />
            </div>

            {/* Mobile navigation */}
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-manzarri-black hover:text-manzarri-reddish-brown transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/marketplace"
                className="block text-manzarri-black hover:text-manzarri-reddish-brown transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link
                href="/profile"
                className="block text-manzarri-black hover:text-manzarri-reddish-brown transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Profile
              </Link>
              <Link
                href="/profile/cart"
                className="flex items-center justify-between text-manzarri-black hover:text-manzarri-reddish-brown transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cart
                <Badge
                  variant="secondary"
                  className="bg-manzarri-faun text-manzarri-white"
                >
                  {cart.length}
                </Badge>
              </Link>
              <Link
                href="/profile/wishlist"
                className="flex items-center justify-between text-manzarri-black hover:text-manzarri-reddish-brown transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Wishlist
                <Badge
                  variant="secondary"
                  className="bg-manzarri-faun text-manzarri-white"
                >
                  5
                </Badge>
              </Link>
            </div>

            {/* Mobile action buthrefns */}
            <div className="pt-4 border-t border-manzarri-black/10 space-y-3">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full border-manzarri-reddish-brown text-manzarri-reddish-brown hover:bg-manzarri-reddish-brown hover:text-manzarri-white"
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';

// import { useCart } from '@/shrefres/cart';
// import { useWishlist } from '@/shrefres/wishlist';
// import { usePathname } from 'next/navigation';

// import { Heart, ShoppingBag, Profile } from "@/components/icons";

// const Header = () => {
//     const [navStatus, setnavStatus] = useState(false);
//     const { cart } = useCart();
//     const { wishlist } = useWishlist();

//     const pathname = usePathname();

//     if (pathname.startsWith("/Admin") || pathname.startsWith("/profile")) {
//         return <></>
//     } else {
//         return (
//             <header className='z-10 w-full fixed text-white bg-[var(--faun-light)]
//             2xl:px-[60px] 2xl:py-[20px]
//              xl:px-[60px] xl:py-[20px]
//              lg:px-[60px] lg:py-[20px]
//             md:px-[40px] md:py-[20px]
//             sm:px-[30px] sm:py-[20px]
//             max-sm:px-[25px] max-sm:py-[20px]
//             flex flex-row flex-nowrap justify-between items-center
//             '>

//                 <div className='flex flex-row flex-nowrap justify-center items-center gap-2'>
//                     {navStatus ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 max-sm:block hidden" onClick={() => {
//                         setnavStatus(!navStatus)
//                     }}>
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
//                     </svg>
//                         : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 max-sm:block hidden" onClick={() => {
//                             setnavStatus(!navStatus)
//                         }}>
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
//                         </svg>}

//                     <span className="font-rye
//     font-normal
//     leading-[100%]
//     tracking-[0%]
//     2xl:text-[50px]
//     xl:text-[40px]
//     lg:text-[38px]
//     md:text-[38px]
//     sm:text-[30px]
//     max-sm:text-[28px]
//     ">Manzarri</span>
//                 </div>

//                 <div className='hidden sm:flex flex-row flex-nowrap justify-center items-center gap-4'>
//                     <Link href={"/"} className=''>
//                         Home
//                     </Link>
//                     <Link href={"/marketplace"} className=''>
//                         Marketplace
//                     </Link>
//                     <Link href={"/marketplace"} className=''>
//                         Marketplace
//                     </Link>
//                 </div>
//                 <div className={`transition-all duration-200 ease-in-out absolute top-0 right-0 z-10 bg-[var(--faun-light)] w-[80vw] h-screen hidden max-sm:flex flex-col flex-nowrap justify-center items-center gap-6 ${navStatus ? "translate-x-0" : "translate-x-[100%]"}`}>

//                     <Link href={"/marketplace"} className='' onClick={() => {
//                         setnavStatus(!navStatus);
//                     }}>
//                         Marketplace
//                     </Link>
//                     <Link href={"/marketplace"} className='' onClick={() => {
//                         setnavStatus(!navStatus);
//                     }}>
//                         Marketplace
//                     </Link>
//                     <Link href={"/marketplace"} className='' onClick={() => {
//                         setnavStatus(!navStatus);
//                     }}>
//                         Marketplace
//                     </Link>
//                 </div>

//                 <div className='flex flex-row flex-nowrap justify-center items-center gap-4'>
//                     <Link href={"/profile/wishlist"} className='relative w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5'>
//                         <Heart className="object-contain" />
//                         <span className='absolute bg-red-600 text-xs right-[-8px] bottom-[10px] rounded-full w-[18px] h-[18px] flex justify-center items-center text-white'>
//                             {wishlist.length}
//                         </span>
//                     </Link>
//                     <Link href={"/profile"} className='relative w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5'>
//                         <Profile className="object-contain" />
//                         <span className='absolute bg-red-600 text-xs right-[-8px] bottom-[10px] rounded-full w-[18px] h-[18px] flex justify-center items-center text-white'>
//                             1
//                         </span>
//                     </Link>
//                     <Link href={"/profile/cart"} className='relative w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5'>
//                         <ShoppingBag className="object-contain" />
//                         <span className='absolute bg-red-600 text-xs right-[-8px] bottom-[10px] rounded-full w-[18px] h-[18px] flex justify-center items-center text-white'>
//                             {cart.length}
//                         </span>
//                     </Link>
//                 </div>

//             </header>
//         )
//     }
// }

// export default Header
