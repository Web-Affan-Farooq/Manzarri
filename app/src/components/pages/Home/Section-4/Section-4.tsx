import React from "react";
import Image from "next/image";

const Section_4 = () => {
  return (
    <section className="font-libre-bodoni w-full p-5 text-center">
      <h1 className="text-[45px] font-bold font-rye max-md:text-[40px] max-sm:text-[34px]">Trendy Collections</h1>      <br />
      <br />
      <div className="w-full flex flex-row flex-wrap justify-center items-center align-middle gap-4">
        <div className="max-sm:w-[170px] p-3">
          <Image
            src={"/images/section-4-images/1.svg"}
            alt="product image"
            width={200}
            height={300}
            className="m-auto"
          />
          <h2 className="font-bold text-[23px] text-faun-light">
            Cable Chain Chokar
          </h2>
          <h2 className="font-bold text-right text-[23px] text-faun-light">
            ₹20,000
          </h2>
        </div>

        <div className="max-sm:w-[170px] p-3">
          <Image
            src={"/images/section-4-images/2.svg"}
            alt="product image"
            width={200}
            height={300}
            className="m-auto"
          />
          <h2 className="font-bold text-[23px] text-faun-light">
            Link Chain Earrings
          </h2>
          <h2 className="font-bold text-right text-[23px] text-faun-light">
            ₹20,000
          </h2>
        </div>

        <div className="max-sm:w-[170px] p-3">
          <Image
            src={"/images/section-4-images/3.svg"}
            alt="product image"
            width={200}
            height={300}
            className="m-auto"
          />
          <h2 className="font-bold text-[23px] text-faun-light">
            Yona Sigret Ring
          </h2>
          <h2 className="font-bold text-right text-[23px] text-faun-light">
            ₹20,000
          </h2>
        </div>

        <div className="max-sm:w-[170px] p-3">
          <Image
            src={"/images/section-4-images/4.svg"}
            alt="product image"
            width={200}
            height={300}
            className="m-auto"
          />
          <h2 className="font-bold text-[23px] text-faun-light">
            Anna Ribbled Bangle
          </h2>
          <h2 className="font-bold text-right text-[23px] text-faun-light">
            ₹20,000
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Section_4;
