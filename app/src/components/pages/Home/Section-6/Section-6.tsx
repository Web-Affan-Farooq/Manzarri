import React from "react";
import Image from "next/image";

const Section_6 = () => {
  return (
    <section className="w-full py-20 px-5 text-center">
      <h2 className="text-4xl font-bold text-manzarri-black mb-4">
        Spotted on
      </h2>
      <br />
      <br />
      <br />
      <div className="flex flex-row flex-wrap justify-center align-middle gap-5">
        <Image
          src={"/images/section-6-images/1.svg"}
          alt="ladies images"
          width={250}
          height={300}
          className="object-cover max-sm:w-[170px]"
        />
        <Image
          src={"/images/section-6-images/2.svg"}
          alt="ladies images"
          width={250}
          height={300}
          className="object-cover max-sm:w-[170px]"
        />
        <Image
          src={"/images/section-6-images/3.svg"}
          alt="ladies images"
          width={250}
          height={300}
          className="object-cover max-sm:w-[170px]"
        />
      </div>
    </section>
  );
};

export default Section_6;
