"use client";
import { Product } from '@/@types/product';
import React, { useEffect, useState } from 'react';
import DrawerDemo from './ExampleDrawer';
import { useInventory } from '@/stores/inventory';

const Stock = ({ arrayData }: { arrayData: Product[] }) => {
    const { all, feedInventory } = useInventory();
    const [StockProducts, setStockProducts] = useState<Product[]>([]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.trim() === "") {
            setStockProducts(arrayData);
            return;
        }
        // console.log("Search query:", query);

        const filteredProducts = all.filter((product: Product) =>
            // `${product.productName} (${product.material})`.toLowerCase() === query
            `${product.productName} (${product.material})`.toLowerCase().startsWith(query)
        );

        // console.log("Matched Searches:", filteredProducts);
        setStockProducts(filteredProducts);
    };

    useEffect(() => {
        feedInventory(arrayData, "All");
        setStockProducts(arrayData); // initially show all
    }, [feedInventory, arrayData]);

    return (
        <div>
            <div className='px-[20px] py-[10px]'>
                <input
                    list="products"
                    name="products"
                    id="products-input"
                    className='border border-blue-600 px-[15px] py-[5px] rounded-md w-[300px] focus:border-2 focus:border-blue-600'
                    onChange={handleSearch}
                    placeholder='Search products'
                />
                <datalist id="products">
                    {all.map((inventoryProduct: Product, idx: number) => (
                        <option
                            key={idx}
                            value={`${inventoryProduct.productName} (${inventoryProduct.material})`}
                        >
                            {inventoryProduct.productName}({inventoryProduct.material})
                        </option>
                    ))}
                </datalist>
            </div>
            <div className='flex flex-col'>
                {StockProducts.length <= 0 ? <p className='text-blue-500 text-center py-10'>No products found ...</p> : StockProducts.map((product: Product, idx: number) => (
                    <DrawerDemo product={product} key={idx} />
                ))}
            </div>
        </div>
    );
};

export default Stock;

/* Select tags component */
// "use client";
// import React, { useState } from 'react'

// const Stock = () => {
//     const [category, setcategory] = useState("all");
//   return (
//     <>
//     <div className='flex flex-row flex-wrap gap-[10px] px-5 py-2'>
//         <div className={`${category.toLowerCase() === "all" ? "bg-amber-600/30 text-amber-600" : "bg-blue-600/30 text-blue-600"} font-bold text-[14px] px-[15px] py-[2px] rounded-lg`} onClick={() => {
//             setcategory("all");
//         }}>
//             All
//         </div>
//         <div className={`${category.toLowerCase() === "sold" ? "bg-amber-600/30 text-amber-600" : "bg-blue-600/30 text-blue-600"} font-bold text-[14px] px-[15px] py-[2px] rounded-lg`} onClick={() => {
//             setcategory("sold");
//         }}>
//             Sold
//         </div>
//         <div className={`${category.toLowerCase() === "lowstock" ? "bg-amber-600/30 text-amber-600" : "bg-blue-600/30 text-blue-600"} font-bold text-[14px] px-[15px] py-[2px] rounded-lg`} onClick={() => {
//             setcategory("lowstock");
//         }}>
//             Low stock
//         </div>
//         <div className={`${category.toLowerCase() === "trending" ? "bg-amber-600/30 text-amber-600" : "bg-blue-600/30 text-blue-600"} font-bold text-[14px] px-[15px] py-[2px] rounded-lg`} onClick={() => {
//             setcategory("trending");
//         }}>
//             Trending
//         </div>
//         <div className={`${category.toLowerCase() === "toprated" ? "bg-amber-600/30 text-amber-600" : "bg-blue-600/30 text-blue-600"} font-bold text-[14px] px-[15px] py-[2px] rounded-lg`} onClick={() => {
//             setcategory("toprated");
//         }}>
//             Top rated
//         </div>
//     </div>
//     </>
//   )
// }

// export default Stock