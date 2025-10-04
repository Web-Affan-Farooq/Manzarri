"use client";
import { useCart } from "@/stores/cart";
import { useWishlist } from "@/stores/wishlist";
import { ShoppingBag, Heart, Package, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const QuickStats = () => {
  const { wishlist } = useWishlist();
  const { cart } = useCart();

  const quickStats = [
    { label: "Total Orders", value: 12, icon: Package },
    { label: "Wishlist Items", value: wishlist.length, icon: Heart },
    { label: "Cart Items", value: cart.length, icon: ShoppingBag },
    { label: "Last login", value: "2023", icon: Calendar },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {quickStats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card
            key={index}
            className="p-6 text-center border-manzarri-black/10"
          >
            <IconComponent className="w-8 h-8 text-manzarri-reddish-brown mx-auto mb-3" />
            <p className="text-2xl font-bold text-manzarri-black mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-manzarri-black/60">{stat.label}</p>
          </Card>
        );
      })}
    </div>
  );
};
export default QuickStats;
