import React from "react";
import {
  HeroSection,
  Section_2,
  Section_4,
  Section_5,
  Section_6,
  Section_7,
  Section_8,
  Section_9,
  Section_10,
} from "@/components/pages/Home";

const Home = async () => {
  return (
    <main>
      <article>
        <div>
          <HeroSection />
          <Section_2 />
          <Section_4 />
          <Section_5 />
          <Section_6 />
          <Section_7 />
          <Section_8 />
          <Section_9 />
          <Section_10 />
        </div>
      </article>
    </main>
  );
};

export default Home;
