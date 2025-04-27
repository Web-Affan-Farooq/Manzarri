import React from 'react';
import Image from 'next/image';

const Section_8 = () => {
  return (
    <section className="w-full bg-[var(--faun-light)] flex flex-col lg:flex-row flex-wrap justify-center items-center gap-8 px-4 py-[100px]">
      <div>
        <Image
          src="/images/section-8-images/1.svg"
          alt="image model"
          width={500}
          height={500}
          className="max-w-full h-auto"
        />
      </div>

      <div className="text-white flex flex-col justify-center items-center text-center w-full lg:w-[50%] md:w-[70%] sm:w-[80%]">
        <h1 className="font-oswald text-3xl md:text-4xl font-bold mb-4">ABOUT US</h1>
        <p className="leading-8 md:leading-10 px-4 md:px-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, qui. Illitia sunt ea velit minima sint nam veniam eveniet ipsum.
        </p>
        <button
          type="button"
          className="mt-6 py-2 px-4 rounded-lg font-bold text-[16px] md:text-[18px] bg-white text-[var(--faun-light)] w-[150px]"
        >
          View more
        </button>
      </div>
    </section>
  )
}

export default Section_8