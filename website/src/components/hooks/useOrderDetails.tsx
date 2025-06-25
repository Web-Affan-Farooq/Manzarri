"use client";
import useDashboardCache from '@/stores/admin';
import { useEffect, useState } from 'react';
import { Order ,OrderedProducts} from '@/@types/order';

const useOrderDetails = (id:string) => {
    const { orders, inventory } = useDashboardCache();
    const [requiredOrder, setrequiredOrder] = useState<Order>();
    const [packages, setPackages] = useState<OrderedProducts[]>([]);

    useEffect(() => {
        const order = orders.find((order) => order._id === id);

        if (order) {
            setrequiredOrder(order);

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
    }, [orders, id,inventory]);

    return {
        order: requiredOrder,
        packages: packages,
    }
}

export default useOrderDetails