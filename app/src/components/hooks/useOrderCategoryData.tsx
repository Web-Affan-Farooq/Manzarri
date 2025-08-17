import useDashboardCache from "@/stores/admin";
import { Order, Package } from "@/@types/order";
import { Product } from "@/@types/product";

const useOrderCategoryData = () => {
    const { orders, inventory } = useDashboardCache();

    const jewelleryTypes = [
        "earrings",
        "necklace",
        "bracelet",
        "nosejewellery",
        "hairjewellery"
    ];

    const data = jewelleryTypes.map((type) => ({
        type,
        count: 0
    }));

    orders.forEach((order: Order) => {
        order.packages.forEach((orderedPackage: Package) => {
            const product = inventory.find(
                (p: Product) => p._id === orderedPackage.productId
            );
            const jewelleryType = product?.jewelleryType.toLowerCase().trim();
            const index = jewelleryTypes.indexOf(jewelleryType || "");
            if (index >= 0) {
                data[index].count++;
            }
        });
    });

    //   console.log("Counts array :", data);

    return {
        data
    };
};

export default useOrderCategoryData;
