import Image from "next/image";
import { Product } from "@/@types/product";
import { useMemo } from "react";

const ProductCard = ({
  product,
  discountPercentage,
}: {
  product: Product;
  discountPercentage: number;
}) => {
  const discountedPrice = useMemo(() => {
    return (product.price - (product.price * discountPercentage) / 100).toFixed(
      2
    );
  }, [product, discountPercentage]);
  return (
    <div className="relative flex flex-row max-[500px]:flex-col flex-wrap items-center max-[500px]:items-start gap-[10px] p-3 rounded-md">
      <div className="w-[50px] h-[50px] rounded-md">
        <Image
          src={product.images[0]}
          alt={product.productName}
          width={50}
          height={50}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div>
        <p className="truncate">
          <strong>{product.productName}</strong>
        </p>
        <p className="text-gray-500 text-sm">
          Price : $ <ins className="no-underline">{discountedPrice} </ins>
          <del>{product.price}</del>
        </p>
      </div>
    </div>
  );
};
export default ProductCard;
