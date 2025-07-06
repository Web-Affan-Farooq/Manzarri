import useDashboardCache from "@/stores/admin";
import { useState } from "react";
import { Product } from "@/@types/product";

const useSoldProductDetails = (id: string) => {
    const { orders, inventory } = useDashboardCache();
    const [requiredInventoryProduct] = useState<Product | undefined>(inventory.find((p) => p._id === id));

    let sold = 0;
    const remaining = inventory.find((p) => p._id === id)?.stockQuantity;

    orders.forEach((order) => {
        order.packages.forEach((orderedProduct) => {
            if (orderedProduct.productId === id) {
                sold += orderedProduct.quantity;
            }
        })
    });

        return {
            product: requiredInventoryProduct!,
            sold: sold,
            remaining: remaining
        }

}

export default useSoldProductDetails