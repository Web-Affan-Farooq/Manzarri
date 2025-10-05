import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";

const EmptyWishlist = () => {
  return (
    <div className="text-center py-16">
      <Heart className="w-24 h-24 text-manzarri-black/20 mx-auto mb-6" />
      <h2 className="text-2xl font-semibold text-manzarri-black mb-4">
        Your wishlist is empty
      </h2>
      <p className="text-manzarri-black/70 mb-8 max-w-md mx-auto">
        Start adding items to your wishlist by clicking the heart icon on
        products you love.
      </p>
      <Link href="/marketplace">
        <Button className="bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white">
          Explore Collection
        </Button>
      </Link>
    </div>
  );
};

export default EmptyWishlist;
