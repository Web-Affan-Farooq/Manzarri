import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EmptyCart = () => {
  return (
    <div className="text-center py-16">
      <ShoppingBag className="w-24 h-24 text-manzarri-black/20 mx-auto mb-6" />
      <h2 className="text-2xl font-semibold text-manzarri-black mb-4">
        Your cart is empty
      </h2>
      <p className="text-manzarri-black/70 mb-8">
        Looks like you haven't added any items to your cart yet.
      </p>
      <Link href="/marketplace">
        <Button className="bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white">
          Start Shopping
        </Button>
      </Link>
    </div>
  );
};
export default EmptyCart;
