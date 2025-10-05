"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useWishlist } from "@/stores/wishlist";
import Link from "next/link";

const WishlistCTA = () => {
  const { wishlist } = useWishlist();
  const totalValue = wishlist.reduce((sum, item) => sum + item.price, 0);

  return (
    <Card className="mt-12 border-manzarri-black/10 bg-gradient-to-r from-manzarri-skin/20 to-manzarri-faun/10">
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-manzarri-black mb-2">
              Ready to make them yours?
            </h3>
            <p className="text-manzarri-black/70">
              Total wishlist value:{" "}
              <span className="font-semibold text-manzarri-reddish-brown">
                ${totalValue.toLocaleString()}
              </span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              className="border-manzarri-reddish-brown text-manzarri-reddish-brown hover:bg-manzarri-reddish-brown hover:text-manzarri-white"
            >
              Add Available Items to Cart
            </Button>
            <Link href="/marketplace">
              <Button className="bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default WishlistCTA;
