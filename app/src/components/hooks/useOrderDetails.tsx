"use client";
import useDashboardCache from '@/stores/admin';
import { useEffect, useState } from 'react';
import { Order, OrderedProducts } from '@/@types/order';

const useOrderDetails = (id: string) => {
    // ____ Global state ... 
    const { orders, inventory } = useDashboardCache();

    // _____ Order required for details and products ordered in it ...
    const [requiredOrder, setrequiredOrder] = useState<Order>();
    const [packages, setPackages] = useState<OrderedProducts[]>([]);

    useEffect(() => {
        // ____ Find order from array to show details ...
        const order = orders.find((order) => order._id === id);

        if (order) {
            setrequiredOrder(order);

            // ____ Manipulate it's packages with complete product details ...
            order.packages.forEach((pack) => {
                const product = inventory.find((p) => p._id === pack.productId);
                if (product) {
                    const packageDetails: OrderedProducts = {
                        _key: pack._key,
                        size: pack.size,
                        quantity: pack.quantity,
                        productSKU: product.stockKeepingUnit,
                        productId: product._id,
                        productName: product.productName,
                        image: product.images[0]?.asset?.url || "",
                        price: product.price
                    };
                    setPackages((prev) => [...prev, packageDetails]);
                }
            });
        }

    }, [orders, id, inventory]);

    return {
        order: requiredOrder,
        packages: packages,
    }
}

export default useOrderDetails