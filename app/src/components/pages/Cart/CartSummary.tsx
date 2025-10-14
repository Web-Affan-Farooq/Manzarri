"use client";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useCartSummary } from "./useCartSummary";
import { useMarketplaceData } from "@/stores/catalog";

const CartSummary = () => {
  const { offers } = useMarketplaceData();
  const {
    selectedOffer,
    setSelectedOffer,
    totalPriceWithoutDiscount,
    totalSaved,
    checkout,
  } = useCartSummary();
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
                  ${totalPriceWithoutDiscount}
                </span>
              </div>
              {totalSaved > 0 && (
                <div className="flex justify-between text-manzarri-green">
                  <span>You save</span>
                  <span className="font-medium">
                    -${totalSaved}{" "}
                    {`(${selectedOffer ? selectedOffer.discountPercentage : 0}% off)`}
                  </span>
                </div>
              )}
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-manzarri-reddish-brown">
                  ${totalPriceWithoutDiscount - totalSaved}
                </span>
              </div>
            </div>

            {/* Offer selection */}
            <div className="mb-6">
              {offers.length <= 0 ? (
                <p className="text-xs text-manzarri-reddish-brown">
                  No offers available ..
                </p>
              ) : (
                <>
                  <label className="text-sm font-medium text-manzarri-black mb-2 block">
                    Selected Offer
                  </label>
                  <select
                    name="offer"
                    id="offer"
                    className="w-full px-5 py-2 bg-manzarri-skin/50 rounded-md"
                  >
                    {offers.map((offer, idx) => (
                      <option
                        value={offer.promoCode}
                        key={idx}
                        onClick={() => setSelectedOffer(offer)}
                      >
                        {offer.offerName}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>

            <div className="space-y-3">
              <Button
                className="cursor-pointer w-full bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white py-6"
                onClick={checkout}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Proceed to Checkout
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
