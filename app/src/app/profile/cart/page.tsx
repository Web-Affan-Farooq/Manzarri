"use client";
import Link from "next/link";
import {
  Minus,
  Plus,
  Trash2,
  ArrowLeft,
  Shield,
  Truck,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useCart } from "@/stores/cart";
import { EmptyCart } from "@/components/pages/Cart";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0
  );
  const savings = cart.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0
  );
  const shipping = subtotal > 500 ? 0 : 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const features = [
    {
      icon: Shield,
      title: "Secure Checkout",
      description: "256-bit SSL encryption",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $500",
    },
    {
      icon: RefreshCw,
      title: "30-Day Returns",
      description: "Easy return policy",
    },
  ];

  return (
    <div className="min-h-screen bg-manzarri-white">
      {/* Header */}
      <div className="bg-manzarri-skin/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/marketplace">
              <Button
                variant="ghost"
                size="sm"
                className="text-manzarri-black hover:text-manzarri-reddish-brown"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-manzarri-black">
            Shopping Cart
          </h1>
          <p className="text-manzarri-black/70">
            Review and complete your purchase
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-manzarri-black/10">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-manzarri-black">
                      Cart Items ({cart.length})
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-manzarri-black/60 hover:text-manzarri-reddish-brown"
                      onClick={clearCart}
                    >
                      Clear All
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {cart.map((item, index) => (
                      <div key={item.id}>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex-shrink-0">
                            <Image
                              src={item.item.images[0]}
                              alt={item.item.productName}
                              width={400}
                              height={400}
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="font-semibold text-manzarri-black mb-1">
                                  {item.item.productName}
                                </h3>
                                {item.size && (
                                  <p className="text-sm text-manzarri-black/60 mb-2">
                                    Size: {item.size}
                                  </p>
                                )}
                                <div className="flex items-center gap-2">
                                  <span className="text-lg font-bold text-manzarri-reddish-brown">
                                    ${item.item.price.toLocaleString()}
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center gap-4">
                                <div className="flex items-center border border-manzarri-black/20 rounded-md">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 p-0 hover:bg-manzarri-skin/50"
                                    onClick={() => {
                                      updateQuantity({
                                        ...item,
                                        quantity: item.quantity - 1,
                                      });
                                    }}
                                  >
                                    <Minus className="w-3 h-3" />
                                  </Button>
                                  <span className="px-3 py-1 text-sm font-medium">
                                    {item.quantity}
                                  </span>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 p-0 hover:bg-manzarri-skin/50"
                                    onClick={() => {
                                      updateQuantity({
                                        ...item,
                                        quantity: item.quantity + 1,
                                      });
                                    }}
                                  >
                                    <Plus className="w-3 h-3" />
                                  </Button>
                                </div>

                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-manzarri-black/60 hover:text-red-600"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {index < cart.length - 1 && (
                          <Separator className="mt-6" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-manzarri-skin/10 rounded-lg"
                    >
                      <IconComponent className="w-8 h-8 text-manzarri-reddish-brown flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-manzarri-black text-sm">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-manzarri-black/60">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Order Summary */}
          </div>
        ) : (
          /* Empty Cart */
          <EmptyCart />
        )}
      </div>
    </div>
  );
}
