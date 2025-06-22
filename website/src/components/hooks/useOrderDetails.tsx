import { useEffect, useState } from "react";
import { OrderDetails } from '@/@types/order';
import sanityClient from '@/lib/sanity';
import { Product } from '@/@types/product';
import { useOrders } from "@/stores/orders";

interface OrderedProducts {
    _key: string;
    size: string;
    quantity: number;
    productSKU: string;
    productId: string;
    productName: string;
    images: {
        asset: {
            url: string;
            _id: string;
        };
    };
    price: number;
}

const useOrderDetails = (id: string) => {
    // 1. Get already fetched and cached order from zustand state
    const { orders } = useOrders();

    const [order, setOrder] = useState<OrderDetails>();
    const [packages, setPackages] = useState<OrderedProducts[]>([]);

    useEffect(() => {
        // Use cached orders to find the one with matching ID
        const foundOrder = orders.find((order) => order._id === id);

        if (!foundOrder) return;

        // Set the found order in local state
        setOrder(foundOrder);

        // Fetch corresponding product details from Sanity
        const fetchProductData = async () => {
            const productIds = foundOrder.packages.map((p) => p.productId);

            const productData = await sanityClient.fetch(
                `*[_type == "Product" && _id in $ids]{
          _id,
          productName,
          price,
          images[0]{
            asset->{
              _id,
              url
            }
          }
        }`,
                { ids: productIds }
            );

            // Attach more product details to the packages so that it will be easy and readable to display
            const enrichedPackages = foundOrder.packages.map((pkg) => {
                const matchedProduct = productData.find(
                    (p: Pick<Product, "_id">) => p._id === pkg.productId
                );

                return {
                    ...pkg,
                    productName: matchedProduct?.productName || pkg.productName,
                    price: matchedProduct?.price,
                    images: matchedProduct?.images,
                };
            });

            setPackages(enrichedPackages);
        };

        fetchProductData()
    }, [orders, id]);

    return {
        order: order,
        packages: packages,
    }
};

export default useOrderDetails;