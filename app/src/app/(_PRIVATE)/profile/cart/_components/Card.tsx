"use client";
/* _____ Types ... */
import { CartProduct } from "@/@types/Cart";

/* _____ Components ... */
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/stores/useCart";

export const CartCard = ({ cartProduct }: { cartProduct: CartProduct }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [count, setCount] = useState(cartProduct.quantity);

  const handlecounter = (forward: boolean) => {
    if (forward) {
      setCount(count + 1);
      updateQuantity(cartProduct.id, cartProduct.size, count);
    } else {
      if (count > 1) {
        setCount(count - 1);
        updateQuantity(cartProduct.id, cartProduct.size, count);
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href={`/marketplace/${cartProduct.id}`} className="flex-shrink-0">
          <Image
            src={cartProduct.item.images[0]}
            alt={cartProduct.item.productName}
            width={400}
            height={400}
            className="w-24 h-24 object-cover rounded-lg"
          />
        </Link>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-manzarri-black mb-1">
                {cartProduct.item.productName}
              </h3>
              {cartProduct.size && (
                <p className="text-sm text-manzarri-black/60 mb-2">
                  Size: {cartProduct.size}
                </p>
              )}
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-manzarri-reddish-brown">
                  ${cartProduct.item.price.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border border-manzarri-black/20 rounded-md">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-manzarri-skin/50"
                  onClick={() => handlecounter(false)}
                >
                  <Minus className="w-3 h-3" />
                </Button>
                <span className="px-3 py-1 text-sm font-medium">
                  {cartProduct.quantity}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-manzarri-skin/50"
                  onClick={() => handlecounter(true)}
                >
                  <Plus className="w-3 h-3" />
                </Button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-manzarri-black/60 hover:text-red-600"
                onClick={() => removeFromCart(cartProduct.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};