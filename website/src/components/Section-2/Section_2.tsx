import React from "react";
import Image from "next/image";

const Section_2 = () => {
  return (
    <section className="text-center w-full p-5 block max-[800px]:my-[150px]">
      <h1 className="text-[45px] font-bold font-rye max-md:text-[40px] max-sm:text-[34px]">Shop By Categories</h1>
      <br />
      <br />
      <div className="flex flex-row justify-evenly w-[80vw] m-auto items-center md:flex-nowrap flex-wrap max-md:gap-4">
        {
          ["Earrings", "Necklace", "Bracelet", "Rings"].map((option: string, idx: number) => {
            return <span className="text-faun-dark font-libre-bodoni text-3xl max-sm:text-2xl font-bold " key={idx}>
              {option}
            </span>
          })
        }
      </div>
      <br />

      <div className="w-[80vw] m-auto grid md:grid-cols-2 md:grid-rows-2 max-md:grid-cols-1 max-md:grid-rows-4 gap-3 border-2 border-solid border-white">
        <div><Image src={"/images/section-2-images/1.svg"} alt="jewellery image" width={300} height={300} className={`w-full`}/></div>
        <div className="flex flex-row flex-nowrap justify-center items-center gap-3">
          <Image src={"/images/section-2-images/1.svg"} alt="jewellery image" width={150} height={300} className="w-[50%] h-full object-cover" />
          <Image src={"/images/section-2-images/1.svg"} alt="jewellery image" width={150} height={300} className="w-[50%] h-full object-cover" />
        </div>
        <div className="flex flex-row flex-nowrap justify-center items-center gap-3">
          <Image src={"/images/section-2-images/1.svg"} alt="jewellery image" width={150} height={300} className="w-[50%] h-full object-cover" />
          <Image src={"/images/section-2-images/1.svg"} alt="jewellery image" width={150} height={300} className="w-[50%] h-full object-cover" />
        </div>
         <div><Image src={"/images/section-2-images/1.svg"} alt="jewellery image" width={300} height={300} className="w-full" /></div>
      </div>

    </section>
  );
};

export default Section_2;
