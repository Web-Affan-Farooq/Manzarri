"use client";
import React, { useRef } from 'react'
import { useTimeline } from '@/components/hooks';

const Home = () => {
  const backgroundContainer = useRef<HTMLElement | null>(null);
  
  // ____ Custom hook for attaching animation ...
  if(backgroundContainer.current) {
    useTimeline(backgroundContainer);
  }

  return (
    <main>
      <article>
        <section className='background-container w-full h-screen' ref={backgroundContainer}>
          home
          
        </section>
      </article>
    </main>)
}

export default Home