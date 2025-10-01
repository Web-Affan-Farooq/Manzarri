import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const Section_4 = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: "$3,299",
      originalPrice: "$3,899",
      image:
        "https://images.unsplash.com/photo-1633092925902-2ccfad179aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGVuZ2FnZW1lbnQlMjB3ZWRkaW5nfGVufDF8fHx8MTc1OTA1MDAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      reviews: 156,
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "Gold Chain Necklace",
      price: "$899",
      originalPrice: "$1,099",
      image:
        "https://images.unsplash.com/photo-1733761013921-89d19f4a2194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBlbGVnYW50JTIwamV3ZWxyeXxlbnwxfHx8fDE3NTkwNTAwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      reviews: 89,
      badge: "New",
    },
    {
      id: 3,
      name: "Pearl Drop Earrings",
      price: "$459",
      originalPrice: "$599",
      image:
        "https://images.unsplash.com/photo-1682822749969-61a63203c501?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFybCUyMGVhcnJpbmdzJTIwbHV4dXJ5JTIwamV3ZWxyeXxlbnwxfHx8fDE3NTg5MzgwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5.0,
      reviews: 201,
      badge: "Limited",
    },
  ];
  return (
    <section className="py-20 bg-manzarri-skin/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-manzarri-black mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-manzarri-black/70">
            Handpicked pieces that define luxury
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer overflow-hidden border-manzarri-black/10 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge
                  className={`absolute top-4 left-4 ${
                    product.badge === "Bestseller"
                      ? "bg-manzarri-reddish-brown"
                      : product.badge === "New"
                        ? "bg-manzarri-green"
                        : "bg-manzarri-faun"
                  } text-manzarri-white`}
                >
                  {product.badge}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-manzarri-black mb-2 group-hover:text-manzarri-reddish-brown transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-manzarri-faun fill-current"
                            : "text-manzarri-black/20"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-manzarri-black/60 ml-2">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-manzarri-reddish-brown">
                      {product.price}
                    </span>
                    <span className="text-lg text-manzarri-black/50 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-manzarri-black hover:bg-manzarri-black/90 text-manzarri-white"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/marketplace">
            <Button
              size="lg"
              variant="outline"
              className="border-manzarri-reddish-brown text-manzarri-reddish-brown hover:bg-manzarri-reddish-brown hover:text-manzarri-white"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section_4;
