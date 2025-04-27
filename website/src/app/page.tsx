import React from 'react';
import Hero from '@/components/Hero/Hero';
import Section_2 from '@/components/Section-2/Section_2';
import Section_3 from '@/components/Section-3/Section_3';
import Section_4 from '@/components/Section-4/Section-4';
import Section_5 from '@/components/Section-5/Section-5';
import Section_6 from '@/components/Section-6/Section-6';
import Section_7 from '@/components/Section-7/Section-7';
import Section_8 from '@/components/Section-8/Section-8';
import Section_9 from '@/components/Section-9/Section-9';
import Section_10 from '@/components/Section-10/Section-10';
// import CartSection from '@/components/Cart/CartSection';


const Home = () => {
  return (
    <main>
      <article>
        <div className="flex flex-col flex-wrap gap-[100px] pt-[180px] md:pt-[150px]">
        {/* <CartSection/> */}
        <Hero />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Section_5 /> 
        <Section_6 />
        <Section_7 />
        <Section_8/>
        <Section_9/>
        <Section_10/>
        </div>
      </article>
    </main>
  )
}

export default Home