"use client";

/* _____ Importing Hooks ... */
import React, { useEffect, useState } from 'react';
import { useCatalog } from '@/stores/catalog';
import { usePathname, useRouter } from 'next/navigation';
import { useWishlist } from '@/stores/wishlist';
import { useCart } from '@/stores/cart';

/* _____ Importing Types ... */
import { Product } from '@/@types/product';

/* _____ Importing Components... */
import Image from 'next/image';
import RelatedSearches from './RelatedSearches';
import { ShoppingBag, Heart } from '@/components/icons';

/* ____ Functions ... */
import toast from 'react-hot-toast';
import sanityClient from '@/lib/sanity';
import { v4 } from "uuid";

const ProductDetails = ({ id }: { id: string }) => {
    /* _____ Hooks ... */
    const router = useRouter();
    const pathname = usePathname();
    const [count, setCount] = useState(1);
    const [size, setsize] = useState<string>("");
    const [product, setProduct] = useState<Product | null>(null);
    const { products } = useCatalog();
    const { addToWishlist } = useWishlist();
    const { addToCart } = useCart();
    const [canvasImage, setcanvasImage] = useState<string>("");

    /* _____ useEffect for dynamically setup product for details ... */
    useEffect(() => {
        const getIndivisualproduct = async (id: string) => {
            const q = `*[_type == "Product" && _id == "${id}"] {
  _id,
  productName,
  productDescription[]{
    children[]{
      _key,
      _type,
      text
    }
  },
  discountPercentage,
  applicableOffers,
  stockKeepingUnit,
  jewelleryType,
  ocassions,
  tags,
  ratings,
  price,
  stockQuantity,
  weightInGrams,
    availableSizes,
  dimensions,
  material,
  images[] {
    asset-> {
      _id,
      url
    }
  }
}
`;
            const response = await sanityClient.fetch(q);
            setProduct(response[0]);
            setcanvasImage(response[0].images[0].asset.url);
        }

        const found = products.find((p) => p._id === id);
        if (found) {
            setProduct(found);
            setcanvasImage(found.images[0].asset.url);
        } else {
            const id = pathname.split("/")[pathname.split("/").length - 1]
            getIndivisualproduct(id);
        }
    }, [id, products, router , pathname]);

    if (!product) {
        return <div className="text-center mt-20 text-lg text-gray-500">Loading product details...</div>;
    }

    return (
        <>
            <section className='pt-[180px] flex flex-row max-md:flex-col max-md:justify-start max-md:items-center max-md:px-[25px] flex-nowrap justify-evenly items-center gap-[30px]'>
                {/* product image canvas */}
                <div className='flex flex-col flex-nowrap gap-[10px]'>
                    <div className='rounded-md w-[300px] h-[300px]'>
                        <Image src={canvasImage} alt={product.productName} width={300} height={300} className='object-cover w-full h-full rounded-md' />
                    </div>
                    <div className='flex flex-row flex-wrap gap-[10px]'>
                        {
                            product.images.map((image, idx: number) => {
                                return <div className='w-[50px] h-[50px] rounded-full active:border-2 active:border-solid active:border-gray-700' key={idx} onClick={() => {
                                    setcanvasImage(image.asset.url);
                                }}>
                                    <Image src={image.asset.url} alt={product.productName} width={100} height={100} className='object-cover rounded-full' />
                                </div>
                            })
                        }

                    </div>
                </div>

                {/* product details section */}
                <div className='md:w-[50vw] flex flex-col flex-wrap max-md:gap-[25px] md:gap-[20px] xl:gap-[20px]'>
                    <h1 className='font-bold max-md:text-[30px] md:text-[40px]'>{product.productName}</h1>
                    <span className='text-[20px] text-gray-600 font-semibold'>$ {product.price}</span>
                    <p className='text-gray-500 text-[15px]'>
                        {product.productDescription[0].children[0].text}
                    </p>

                    <div className='flex flex-row max-md:flex-col max-md:gap-[30px] md:gap-[60px] xl:gap-[80px]'>

                        <div className='flex flex-col gap-[20px]'>
                            <span className='text-[18px] text-gray-600 font-semibold'>Size</span>
                            <div className='flex flex-row flex-wrap justify-between items-center gap-[10px]'>
                                <div>
                                    {
                                        product.availableSizes.map((IndivisualSize,idx) => {
                                            return <span className={`bg-white text-black rounded-full py-1 px-3 ${size === IndivisualSize ? "border-2 border-solid border-black" : ""}`} onClick={(() => {
                                                setsize(IndivisualSize);
                                            })} key={idx}>{IndivisualSize}</span>
                                        })
                                    }
                                </div>

                                <div className='border-2 w-[80px] border-gray-400 border-solid flex flex-row justify-between items-center rounded-md font-bold px-[5px]'>
                                    <span className='text-[25px] cursor-pointer' onClick={() => {
                                        setCount(count + 1);
                                    }}>+</span>
                                    <span className='text-[20px]'>{count}</span>
                                    <span className='text-[25px] cursor-pointer' onClick={() => {
                                        if (count > 1) {
                                            setCount(count - 1);
                                        }
                                    }}>-</span>
                                </div>


                            </div>

                        </div>

                        <div className='flex flex-col gap-[7px]'>
                            <h2 className='text-[18px] text-gray-600 font-semibold'>Details</h2>
                            <div className='flex gap-[10px] '>
                                <span className='text-gray-500 text-[15px]'>Occasions :</span>
                                <div className='text-gray-500 text-[15px] flex gap-[10px]'>
                                    {
                                        product.ocassions.map((occasion: string, idx: number) => {
                                            return <span key={idx}>{occasion}</span>
                                        })
                                    }
                                </div>
                            </div>

                            <div className='flex gap-[10px] '>
                                <span className='text-gray-500 text-[15px]'>Material :</span>
                                <span className='text-gray-500 text-[15px]'>
                                    {product.material}
                                </span>
                            </div>

                            <div className='flex gap-[10px] '>
                                <span className='text-gray-500 text-[15px]'>Weightage :</span>
                                <span className='text-gray-500 text-[15px]'>
                                    {product.weightInGrams} gm
                                </span>
                            </div>

                            <div className='flex gap-[10px] '>
                                <span className='text-gray-500 text-[15px]'>Dimesions :</span>
                                <span className='text-gray-500 text-[15px]'>
                                    {product.dimensions}
                                </span>
                            </div>
                        </div>

                    </div>


                    <div className="flex flex-wrap gap-4 max-sm:gap-2">
                        <button
                            onClick={() => {
                                addToWishlist(product);
                                toast.success("Added to wishlist");
                            }}
                            className="flex justify-center items-center gap-2 px-6 py-3 bg-faun-light hover:bg-purple text-white rounded-md font-semibold max-sm:px-2 max-sm:text-[16px] max-sm:py-2"
                        >
                            <Heart className='max-sm:w-[17px] max-sm:h-[17px]' />
                            <span>Add to Wishlist</span>
                        </button>

                        <button
                            onClick={() => {
                                if (size.trim() !== "") {
                                    const data = {
                                        id: v4(),
                                        quantity: count,
                                        item: product,
                                        size: size,
                                    }
                                    // console.log("Data : ",data);

                                    addToCart(data);
                                    toast.success("Added to cart");
                                }
                                else {
                                    toast.error("Please select size");
                                }
                            }}
                            className="flex justify-center items-center gap-2 px-6 py-3 bg-faun-light hover:bg-purple text-white rounded-md font-semibold max-sm:px-2 max-sm:text-[16px] max-sm:py-2"
                        >
                            <ShoppingBag className='max-sm:w-[17px] max-sm:h-[17px]' />
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>

            </section>
            {/* Related Products */}
            <div className="mt-16">
                <RelatedSearches sku_id={product.stockKeepingUnit} id={product._id} />
            </div>
        </>
    );
};

export default ProductDetails;
