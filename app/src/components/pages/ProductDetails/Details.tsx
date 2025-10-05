import { Product } from "@/@types/product";

const Details = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col gap-[7px]">
      <h2 className="text-[18px] text-gray-600 font-semibold">Details</h2>
      <div className="flex gap-[10px] text-sm">
        <span className="text-gray-500">Occasions :</span>
        <div className="text-gray-500 flex gap-[10px]">
          {product.ocassions.map((occasion: string, idx: number) => {
            return <span key={idx}>{occasion}</span>;
          })}
        </div>
      </div>

      <div className="flex gap-[10px] text-sm">
        <span className="text-gray-500">Material :</span>
        <span className="text-gray-500">{product.material}</span>
      </div>

      <div className="flex gap-[10px] text-sm">
        <span className="text-gray-500">Weightage :</span>
        <span className="text-gray-500">{product.weightInGrams} gm</span>
      </div>

      <div className="flex gap-[10px] text-sm">
        <span className="text-gray-500">Dimesions :</span>
        <span className="text-gray-500">{product.dimensions}</span>
      </div>
    </div>
  );
};

export default Details;
