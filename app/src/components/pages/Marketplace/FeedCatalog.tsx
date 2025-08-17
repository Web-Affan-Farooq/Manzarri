"use client";
import { useCatalog } from '@/stores/catalog';
import React, { useEffect } from 'react';
import { Product } from '@/@types/product';

const FeedCatalog = ({ products }: { products: Product[] }) => {
    const { setProducts } = useCatalog();
    useEffect(() => {
        setProducts(products);
    }, [products, setProducts]);
    return (
        <></>
    )
}

export default FeedCatalog