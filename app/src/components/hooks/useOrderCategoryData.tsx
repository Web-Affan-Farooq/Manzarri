import { Order, Package } from "@/@types/order";
import { Product } from "@/@types/product";
import useInventory from "@/stores/admin/inventory";
import useOrders from "@/stores/admin/orders";

const useOrderCategoryData = () => {
  const { orders } = useOrders();
  const { inventory } = useInventory();
  const jewelleryTypes = [
    "earrings",
    "necklace",
    "bracelet",
    "nosejewellery",
    "hairjewellery",
  ];

  const data = jewelleryTypes.map((type) => ({
    type,
    count: 0,
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
    data,
  };
};

export default useOrderCategoryData;
