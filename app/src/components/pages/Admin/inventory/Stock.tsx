"use client";
import { Product } from '@/@types/product';
import React, { useEffect, useState } from 'react';
// import DrawerDemo from './ExampleDrawer';
import useDashboardCache from '@/stores/admin';
import useProductCategories from '@/components/hooks/useProductCategories';
import Link from 'next/link';
import Card from './card';

const Stock = () => {
    // 1. ____ getting inventory array and feedInventory function from global state ...
    const { inventory, feedInventory } = useDashboardCache();

    // 2. ____ Use this state to show filtered products in ui like search results etc.  
    const [StockProducts, setStockProducts] = useState<Product[]>([]);

    // 3. ____ Custom hook returning data array showing how many products found in each corresponding category 
    const { data } = useProductCategories();

    // 4. ____ Selected category to show products (default earrings)...
    const [category, setcategory] = useState(data[0].category);

    // 5. _____ event listener on search input ...
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.trim() === "") {
            setStockProducts(inventory);
            return;
        }
        // console.log("Search query:", query);

        const filteredProducts = inventory.filter((product: Product) =>
            // `${product.productName} (${product.material})`.toLowerCase() === query
            `${product.productName} (${product.material})`.toLowerCase().startsWith(query)
        );

        // console.log("Matched Searches:", filteredProducts);
        setStockProducts(filteredProducts);
    };

    // 6. ____ 
    useEffect(() => {
        feedInventory(inventory);
        setStockProducts(inventory); // initially show all

        console.log(inventory)
    }, [feedInventory, inventory]);

    useEffect(() => {
        const filtered = inventory.filter((product) => (product.jewelleryType.trim().toLowerCase().startsWith(category)));
        setStockProducts(filtered);
    }, [category, inventory]);

    if (inventory.length <= 0) {
        return <p className='p-10'>No products found ...</p>
    }
    else {
        return (
            <div>
                {/* Search bar */}
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
                        {inventory.map((inventoryProduct: Product, idx: number) => (
                            <option
                                key={idx}
                                value={`${inventoryProduct.productName} (${inventoryProduct.material})`}
                            >
                                {inventoryProduct.productName}({inventoryProduct.material})
                            </option>
                        ))}
                    </datalist>
                </div>
                <br />

                {/* Category selection bread crumbs  */}
                <>
                    <div className='flex flex-row flex-wrap gap-[20px] px-5 py-2'>
                        {
                            data.map((productCategory, idx) => (
                                <div className={`${category.toLowerCase() === productCategory.category ? "bg-amber-600/30 text-amber-600" : "bg-blue-600/30 text-blue-600"} cursor-pointer relative font-bold text-[14px] px-[15px] py-[2px] rounded-lg`} onClick={() => {
                                    setcategory(productCategory.category);
                                }} key={idx}>
                                    <span>
                                        {productCategory.category}
                                    </span>
                                    <span className='absolute bg-amber-500/70 text-xs right-[-8px] bottom-[10px] rounded-full w-[18px] h-[18px] flex justify-center items-center text-white'>
                                        {productCategory.products}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </>
                <br />
                <div className='flex flex-col'>
                    {StockProducts.length <= 0 ? <p className='text-blue-500 text-center py-10'>No products found ...</p> : StockProducts.map((product: Product, idx: number) => (
                        <Link href={`/Admin/inventory/${product._id}`} key={idx}>
                            <Card product={product} />
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
};

export default Stock;