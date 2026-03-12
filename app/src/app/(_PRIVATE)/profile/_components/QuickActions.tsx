import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Heart, Settings } from "lucide-react";
import Link from "next/link";

const QuickActions = () => {
  return (
    <Card className="border-manzarri-black/10">
      <div className="p-6">
        <h3 className="font-semibold text-manzarri-black mb-4">
          Quick Actions
        </h3>
        <div className="space-y-3">
          <Link href="/profile/cart" className="block">
            <Button
              variant="outline"
              className="w-full justify-start border-manzarri-black/20 hover:bg-manzarri-skin/20"
            >
              <ShoppingBag className="w-4 h-4 mr-3" />
              View Cart (2)
            </Button>
          </Link>
          <Link href="/profile/wishlist" className="block">
            <Button
              variant="outline"
              className="w-full justify-start border-manzarri-black/20 hover:bg-manzarri-skin/20"
            >
              <Heart className="w-4 h-4 mr-3" />
              Wishlist (5)
            </Button>
          </Link>
          <Link href="/profile/settings" className="block">
            <Button
              variant="outline"
              className="w-full justify-start border-manzarri-black/20 hover:bg-manzarri-skin/20"
            >
              <Settings className="w-4 h-4 mr-3" />
              Settings
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
export default QuickActions;
