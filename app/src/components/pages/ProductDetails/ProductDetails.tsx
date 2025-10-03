"use client";

/* _____ Hooks ... */
import { useState } from "react";
import { useWishlist } from "@/stores/wishlist";
import { useCart } from "@/stores/cart";
import { useIndivisualProduct } from "./useIndivisualProduct";

/* _____ Components... */
import RelatedSearches from "./RelatedSearches";
import { ShoppingBag, Heart } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";
import Reviews from "./Reviews";

/* ____ Libraires ... */
import { toast } from "sonner";
import { v4 } from "uuid";
import ImageSelection from "./ImageSelection";

const ProductDetails = ({ id }: { id: string }) => {
  /* _____  State for controlling quantity count ... */
  const [count, setCount] = useState(1);
  /* _____  State for controlling size ... */
  const [size, setsize] = useState<string>("");

  /* _____  Functions for adding products to wishlist / cart  ... */
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();
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
      <section className="pt-[70px] flex flex-row max-md:flex-col max-md:justify-start max-md:items-center max-md:px-[25px] flex-nowrap justify-evenly items-center gap-[30px]">
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

            <div className="flex flex-col gap-[7px]">
              <h2 className="text-[18px] text-gray-600 font-semibold">
                Details
              </h2>
              <div className="flex gap-[10px] text-sm">
                <span className="text-gray-500">Occasions :</span>
                <div className="text-gray-500 flex gap-[10px]">
                  {product.ocassions.map((occasion: string, idx: number) => {
                    return <span key={idx}>{occasion}</span>;
                  })}
                </div>
              </div>

              <div className="flex gap-[10px] text-sm">
                <span className="text-gray-500">Material :</span>
                <span className="text-gray-500">{product.material}</span>
              </div>

              <div className="flex gap-[10px] text-sm">
                <span className="text-gray-500">Weightage :</span>
                <span className="text-gray-500">
                  {product.weightInGrams} gm
                </span>
              </div>

              <div className="flex gap-[10px] text-sm">
                <span className="text-gray-500">Dimesions :</span>
                <span className="text-gray-500">{product.dimensions}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => {
                addToWishlist(product);
                toast.success("Added to wishlist");
              }}
              className="border-manzarri-black text-manzarri-white hover:bg-manzarri-black hover:text-manzarri-white px-8 py-5"
            >
              <Heart className="max-sm:w-[17px] max-sm:h-[17px]" />
              <span>Add to Wishlist</span>
            </Button>
            <Button
              size="lg"
              onClick={() => {
                if (size.trim() !== "") {
                  const data = {
                    id: v4(),
                    quantity: count,
                    item: product,
                    size: size,
                  };
                  addToCart(data);
                  toast.success("Added to cart");
                } else {
                  toast.error("Please select size");
                }
              }}
              variant="outline"
              className="bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white px-8 py-5"
            >
              <ShoppingBag className="max-sm:w-[17px] max-sm:h-[17px]" />
              <span>Add to Cart</span>
            </Button>
          </div>
        </div>
      </section>
      {/* ____ Reviews .. */}
      <Reviews reviews={product.reviews} />
      {/* Related Products */}
      <div className="mt-16">
        <h1 className="font-bold text-[24px] mx-13">Products you might like</h1>
        <RelatedSearches sku_id={product.stockKeepingUnit} id={product._id} />
      </div>
    </>
  );
};

export default ProductDetails;
