"use client";
import { CartProduct } from "@/@types/cart";
import CheckoutButton from "./CheckoutButton";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";

const CartSummary = ({ cart }: { cart: CartProduct[] }) => {
  const [totalItems, setTotalItems] = useState(0);
  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  }, [cart]);

  return (
    <>
      <div className="lg:col-span-1">
        <Card className="border-manzarri-black/10 sticky top-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-manzarri-black mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-manzarri-black/70">Subtotal</span>
                <span className="font-medium">
                  ${totalPrice.toLocaleString()}
                </span>
              </div>
              {savings > 0 && (
                <div className="flex justify-between text-manzarri-green">
                  <span>You save</span>
                  <span className="font-medium">
                    -${savings.toLocaleString()}
                  </span>
                </div>
              )}
              {/* <div className="flex justify-between">
                      <span className="text-manzarri-black/70">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? (
                          <span className="text-manzarri-green">Free</span>
                        ) : (
                          `$${shipping}`
                        )}
                      </span>
                    </div> */}
              {/* <div className="flex justify-between">
                      <span className="text-manzarri-black/70">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div> */}
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-manzarri-reddish-brown">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Promo Code */}
            <div className="mb-6">
              <label className="text-sm font-medium text-manzarri-black mb-2 block">
                Promo Code
              </label>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter code"
                  className="border-manzarri-black/20"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="border-manzarri-black/20 whitespace-nowrap"
                >
                  Apply
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white py-6">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Proceed to Checkout
              </Button>
              <Button
                variant="outline"
                className="w-full border-manzarri-black/20"
              >
                Save for Later
              </Button>
            </div>

            <p className="text-xs text-manzarri-black/60 text-center mt-4">
              By proceeding, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};
export default CartSummary;
