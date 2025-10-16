"use client";
// ____ Types ...
import { Product } from "@/@types/product";

// ____ Hooks ...
import { useCart } from "@/stores/cart";
import { useWishlist } from "@/stores/wishlist";

// ____ libraries ...
import { toast } from "sonner";
import { v4 } from "uuid";

// ____ Components ...
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";

const AddButtons = ({
  product,
  size,
  quantity,
}: {
  product: Product;
  size: string;
  quantity: number;
}) => {
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        size="lg"
        onClick={() => addToWishlist(product)}
        className="border-manzarri-black text-manzarri-white hover:bg-manzarri-black hover:text-manzarri-white px-8 py-5"
      >
        <Heart className="max-sm:w-[17px] max-sm:h-[17px]" />
        <span>Add to wishlist</span>
      </Button>
      <Button
        size="lg"
        onClick={() => {
          // _____ If size is selected ...
          if (size.split("").length > 0) {
            const data = {
              id: v4(),
              quantity: quantity,
              item: product,
              size: size,
            };

            addToCart(data);
          } else {
            toast.error("Please select size");
          }
        }}
        variant="outline"
        className="bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white px-8 py-5"
      >
        <ShoppingBag className="max-sm:w-[17px] max-sm:h-[17px]" />
        <span>Add to cart</span>
      </Button>
    </div>
  );
};
export default AddButtons;
