import React from "react";
import "./style.css";
import Card_testimonials from "./Card-testimonials";

const Section_7 = () => {
  return (
    <section className="w-full py-20 px-5 text-center">
      <h2 className="text-4xl font-bold text-manzarri-black mb-4">
        Our allumini
      </h2>

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
