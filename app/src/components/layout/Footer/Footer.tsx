"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/Admin") || pathname.startsWith("/profile")) {
    return <></>;
  }
  return (
    <footer className="bg-manzarri-black text-manzarri-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-manzarri-reddish-brown rounded-full flex items-center justify-center">
                <span className="text-manzarri-white font-bold">M</span>
              </div>
              <span className="text-2xl font-bold">Manzarri</span>
            </div>
            <p className="text-manzarri-white/80 leading-relaxed">
              Exquisite jewelry crafted with passion and precision. Discover
              timeless pieces that celebrate your unique style and precious
              moments.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-manzarri-white hover:text-manzarri-faun hover:bg-manzarri-white/10"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-manzarri-white hover:text-manzarri-faun hover:bg-manzarri-white/10"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-manzarri-white hover:text-manzarri-faun hover:bg-manzarri-white/10"
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-manzarri-faun">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-manzarri-white/80 hover:text-manzarri-faun transition-colors"
              >
                Home
              </Link>
              <Link
                href="/marketplace"
                className="block text-manzarri-white/80 hover:text-manzarri-faun transition-colors"
              >
                Marketplace
              </Link>
              <Link
                href="/profile"
                className="block text-manzarri-white/80 hover:text-manzarri-faun transition-colors"
              >
                My Account
              </Link>
              <Link
                href="#"
                className="block text-manzarri-white/80 hover:text-manzarri-faun transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="block text-manzarri-white/80 hover:text-manzarri-faun transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-manzarri-faun">
              Categories
            </h3>
            <div className="space-y-2">
              <Link
                href="#"
                className="block text-manzarri-white/80 hover:text-manzarri-faun transition-colors"
              >
                Rings
              </Link>
              <Link
                href="#"
                className="block text-manzarri-white/80 hover:text-manzarri-faun transition-colors"
              >
                Necklaces
              </Link>
              <Link
                href="#"
                className="block text-manzarri-white/80 hover:text-manzarri-faun transition-colors"
              >
                Earrings
              </Link>
              <Link
                href="#"
                className="block text-manzarri-white/80 hover:text-manzarri-faun transition-colors"
              >
                Bracelets
              </Link>
              <Link
                href="#"
                className="block text-manzarri-white/80 hover:text-manzarri-faun transition-colors"
              >
                Custom Jewelry
              </Link>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-manzarri-faun">
              Stay Connected
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-manzarri-white/80">
                <Mail className="w-4 h-4 text-manzarri-faun" />
                <span className="text-sm">hello@manzarri.com</span>
              </div>
              <div className="flex items-center space-x-3 text-manzarri-white/80">
                <Phone className="w-4 h-4 text-manzarri-faun" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-manzarri-white/80">
                <MapPin className="w-4 h-4 text-manzarri-faun" />
                <span className="text-sm">New York, NY</span>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-manzarri-white/80 mb-3">
                Subscribe to our newsletter
              </p>
              <div className="flex space-x-2">
                <Input
                  placeholder="Your email"
                  className="bg-manzarri-white/10 border-manzarri-white/20 text-manzarri-white placeholder:text-manzarri-white/60"
                />
                <Button className="bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-manzarri-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-manzarri-white/60">
              © 2024 Manzarri. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-manzarri-white/60 hover:text-manzarri-faun transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-manzarri-white/60 hover:text-manzarri-faun transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-manzarri-white/60 hover:text-manzarri-faun transition-colors"
              >
                Return Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/*

*/
