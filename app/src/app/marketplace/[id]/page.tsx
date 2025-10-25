"use client";

/* _____ Hooks ... */
import { useState } from "react";
import { useParams } from "next/navigation";

/* _____ Components... */
import { Tag } from "lucide-react";
import {
  Reviews,
  RelatedSearches,
  ImageSelection,
  AddButtons,
  useIndivisualProduct,
  Details,
} from "@/components/pages/ProductDetails";

/* ____ Libraires ... */
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams() as { id: string };
  /* _____  State for controlling quantity count ... */
  const [count, setCount] = useState(1);
  /* _____  State for controlling size ... */
  const [size, setsize] = useState<string>("");
  const { product } = useIndivisualProduct(id);

  if (!product) {
    return (
      <div className="text-center mt-20 text-lg text-gray-500">
        Loading product details...
      </div>
    );
  }

  return (
    <>
      <section className="flex flex-row max-md:flex-col max-md:justify-start max-md:items-center max-md:px-[25px] flex-nowrap justify-evenly items-center gap-[30px]">
        {/* product image canvas */}
        <ImageSelection
          images={product.images}
          productName={product.productName}
        />

        {/* product details section */}
        <div className="md:w-[50vw] flex flex-col flex-wrap max-md:gap-[25px] md:gap-[20px] xl:gap-[20px]">
          <h1 className="font-bold max-md:text-[30px] md:text-[40px]">
            {product.productName}
          </h1>
          <div className="flex flex-row flex-nowrap items-center gap-[20px]">
            <span className="bg-manzarri-skin text-md max-md:text-sm font-semibold px-[15px] py-[3px] rounded-xl">
              <span className="text-green-400">$</span> {product.price}
            </span>
            <span className="bg-manzarri-skin text-md max-md:text-sm font-semibold px-[15px] py-[3px] rounded-xl flex flex-row flex-nowrap gap-[5px] items-center">
              <span className="text-green-400">
                <Tag className="size-4" />
              </span>
              View offers
            </span>
          </div>
          <p className="text-gray-500 text-sm">{product.productDescription}</p>

          <div className="flex flex-row max-md:flex-col max-md:gap-[30px] md:gap-[60px] xl:gap-[80px]">
            <div className="flex flex-col gap-[20px]">
              <span className="text-[18px] text-gray-600 font-semibold">
                Size
              </span>
              <div className="flex flex-row flex-wrap justify-between items-center gap-[10px]">
                <div>
                  {product.availableSizes.map((IndivisualSize, idx) => {
                    return (
                      <span
                        className={`text-sm cursor-pointer rounded-xl py-[1px] px-3 ${size === IndivisualSize ? "bg-manzarri-reddish-brown text-white" : ""}`}
                        onClick={() => {
                          setsize(IndivisualSize);
                        }}
                        key={idx}
                      >
                        {IndivisualSize}
                      </span>
                    );
                  })}
                </div>

                <div className="w-[80px] border-gray-400 border-solid flex flex-row justify-between items-center rounded-md font-bold px-[5px] text-white ">
                  <span
                    className="rounded-full text-center text-md cursor-pointer bg-manzarri-reddish-brown w-[25px] h-[25px]"
                    onClick={() => {
                      if (count < product.stockQuantity) {
                        setCount(count + 1);
                      } else {
                        toast.error("More quantity not available");
                      }
                    }}
                  >
                    +
                  </span>
                  <span className="text-[20px] text-black">{count}</span>
                  <span
                    className="text-center rounded-full text-md cursor-pointer bg-manzarri-reddish-brown w-[25px] h-[25px]"
                    onClick={() => {
                      if (count > 0) {
                        setCount(count - 1);
                      }
                    }}
                  >
                    -
                  </span>
                </div>
              </div>
            </div>
            {/* ____ Details ... */}
            <Details product={product} />
          </div>
          <AddButtons product={product} size={size} quantity={count} />
        </div>
      </section>
      {/* ____ Reviews .. */}
      <Reviews reviews={product.reviews} />
      {/* Related Products */}
      <h1 className="font-bold text-[24px] mx-13">Products you might like</h1>
      <RelatedSearches sku_id={product.stockKeepingUnit} id={product._id} />
    </>
  );
};

export default ProductDetails;
