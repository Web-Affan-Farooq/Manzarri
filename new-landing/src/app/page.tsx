"use client";
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Home = () => {
  useGSAP(() => {
    gsap.from(".background-container", {
      background: "#000000",
      duration:3,
      ease:"back",
    });
  }, []);

  return (
    <main>
      <article>
        <section className='background-container w-full h-screen'>
          home
        </section>
      </article>
    </main>)
}

export default Home