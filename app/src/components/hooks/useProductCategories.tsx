import { Product } from "@/@types/product";
import useDashboardCache from "@/stores/admin";

const useProductCategories = () => {
    const {inventory} = useDashboardCache();
    
    const categories = [
        "earrings","necklace","bracelet","nosejewellery","hairjewellery"
    ];
    const counts = new Array(categories.length).fill(0);
    
    inventory.forEach((product:Product) => {
        const productType = product.jewelleryType.trim().toLowerCase();
        
        if(categories.includes(productType)) {
            const index = categories.indexOf(productType);
            counts[index]++
        }
    });

    const data = categories.map((category:string, idx) =>({
        category:category,
        products:counts[idx],
    }));

    return {
        data:data,
        categories:categories,
    }

}
export default useProductCategories;