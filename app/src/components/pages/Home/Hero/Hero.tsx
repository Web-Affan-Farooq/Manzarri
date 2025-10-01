import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[80vh] bg-gradient-to-br from-manzarri-skin to-manzarri-white">
      <div className="absolute inset-0 bg-manzarri-black/5"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-manzarri-black mb-6 leading-tight">
            Timeless
            <span className="text-manzarri-reddish-brown"> Elegance</span>
          </h1>
          <p className="text-xl text-manzarri-black/80 mb-8 leading-relaxed">
            Discover our exquisite collection of handcrafted jewelry. Each piece
            tells a story of luxury, passion, and timeless beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/marketplace">
              <Button
                size="lg"
                className="bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white px-8 py-6"
              >
                Explore Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-manzarri-black text-manzarri-black hover:bg-manzarri-black hover:text-manzarri-white px-8 py-6"
            >
              Custom Design
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-96 h-96 relative">
          <Image
            src="https://images.unsplash.com/photo-1739664664545-5ea43f486f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwY29sbGVjdGlvbiUyMGVsZWdhbnR8ZW58MXx8fHwxNzU4OTY1MTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury jewelry collection"
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
