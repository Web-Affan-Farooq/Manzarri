import React from "react";
import "./style.css";
import Card_testimonials from "./Card-testimonials";

const Section_7 = () => {
  return (
    <section className="w-full p-5 text-center">
      <h1 className="text-[45px] font-bold font-rye max-md:text-[40px] max-sm:text-[34px]">
        Our Alumni
      </h1>

      <div className="scroll-container w-full overflow-x-auto mt-10">
        <div className="flex flex-nowrap gap-5 px-3 py-5 scroll-smooth min-w-max">
          <Card_testimonials />
          <Card_testimonials />
          <Card_testimonials />
          <Card_testimonials />
          <Card_testimonials />
          <Card_testimonials />
        </div>
      </div>
    </section>
  );
};

export default Section_7;
