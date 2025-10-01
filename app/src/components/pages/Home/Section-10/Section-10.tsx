import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-[150px] bg-gradient-to-r from-manzarri-reddish-brown to-manzarri-faun">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-manzarri-white mb-6">
          Join Our Exclusive Club
        </h2>
        <p className="text-xl text-manzarri-white/90 mb-8 max-w-2xl mx-auto">
          Be the first to discover new collections, enjoy member-only discounts,
          and receive personalized jewelry recommendations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Link href="/signup" className="flex-1">
            <Button className="w-full bg-manzarri-white text-manzarri-reddish-brown hover:bg-manzarri-white/90">
              Sign Up Now
            </Button>
          </Link>
          <Link href="/login" className="flex-1">
            <Button className="w-full border-manzarri-white text-manzarri-white hover:bg-manzarri-white hover:text-manzarri-reddish-brown">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;

// import React from 'react';

// const Section_10 = () => {
//   return (
//     <section className='w-full p-5 text-center'>
//       <h1 className="text-[45px] font-bold font-rye max-md:text-[40px] max-sm:text-[34px]">Newsletter</h1>              <br />
//               <p className='text-[20px] leading-10 text-[#666666] font-libre-bodoni'>Sign-up to receive 10% off your next purchase. Plus hear about new arrivals and offers.</p>
//               <br />
//               <br />
//               <div className='flex flex-row flex-nowrap gap-3 m-auto justify-center items-center'>
//                 <input type="text" name='email' id='email' placeholder='Email address' required className='w-[280px] px-[10px] py-[5px]'/>
//                 <button type="button" className='px-[25px] py[10px] bg-[var(--faun-light)] rounded-lg text-white text-[20px] max-md:px[20px]'>Subscribe</button>
//               </div>
//     </section>
//   )
// }

// export default Section_10;
