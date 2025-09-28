import { Link } from "react-router-dom";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  Shield,
  Truck,
  RefreshCw,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: 3299,
      originalPrice: 3899,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1633092925902-2ccfad179aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGVuZ2FnZW1lbnQlMjB3ZWRkaW5nfGVufDF8fHx8MTc1OTA1MDAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      size: "6",
      inStock: true,
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      price: 459,
      originalPrice: 599,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1682822749969-61a63203c501?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFybCUyMGVhcnJpbmdzJTIwbHV4dXJ5JTIwamV3ZWxyeXxlbnwxfHx8fDE3NTg5MzgwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      size: null,
      inStock: true,
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const savings = cartItems.reduce(
    (sum, item) => sum + (item.originalPrice - item.price) * item.quantity,
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
            <Link to="/marketplace">
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
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-manzarri-black/10">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-manzarri-black">
                      Cart Items ({cartItems.length})
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-manzarri-black/60 hover:text-manzarri-reddish-brown"
                    >
                      Clear All
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {cartItems.map((item, index) => (
                      <div key={item.id}>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex-shrink-0">
                            <ImageWithFallback
                              src={item.image}
                              alt={item.name}
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="font-semibold text-manzarri-black mb-1">
                                  {item.name}
                                </h3>
                                {item.size && (
                                  <p className="text-sm text-manzarri-black/60 mb-2">
                                    Size: {item.size}
                                  </p>
                                )}
                                <div className="flex items-center gap-2">
                                  <span className="text-lg font-bold text-manzarri-reddish-brown">
                                    ${item.price.toLocaleString()}
                                  </span>
                                  {item.originalPrice > item.price && (
                                    <span className="text-sm text-manzarri-black/50 line-through">
                                      ${item.originalPrice.toLocaleString()}
                                    </span>
                                  )}
                                  {item.originalPrice > item.price && (
                                    <Badge className="bg-manzarri-green text-manzarri-white text-xs">
                                      Save ${item.originalPrice - item.price}
                                    </Badge>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center gap-4">
                                <div className="flex items-center border border-manzarri-black/20 rounded-md">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 p-0 hover:bg-manzarri-skin/50"
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
                                  >
                                    <Plus className="w-3 h-3" />
                                  </Button>
                                </div>

                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-manzarri-black/60 hover:text-red-600"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {index < cartItems.length - 1 && (
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
                        ${subtotal.toLocaleString()}
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
                    <div className="flex justify-between">
                      <span className="text-manzarri-black/70">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? (
                          <span className="text-manzarri-green">Free</span>
                        ) : (
                          `$${shipping}`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-manzarri-black/70">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-manzarri-reddish-brown">
                        ${total.toFixed(2)}
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

              {/* Recently Viewed */}
              <Card className="border-manzarri-black/10 mt-6">
                <div className="p-6">
                  <h3 className="font-semibold text-manzarri-black mb-4">
                    You might also like
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1733761013921-89d19f4a2194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBlbGVnYW50JTIwamV3ZWxyeXxlbnwxfHx8fDE3NTkwNTAwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Gold Chain Necklace"
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-manzarri-black">
                          Gold Chain Necklace
                        </p>
                        <p className="text-sm text-manzarri-reddish-brown">
                          $899
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-manzarri-black hover:text-manzarri-reddish-brown"
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ) : (
          /* Empty Cart */
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 text-manzarri-black/20 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-manzarri-black mb-4">
              Your cart is empty
            </h2>
            <p className="text-manzarri-black/70 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/marketplace">
              <Button className="bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white">
                Start Shopping
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
