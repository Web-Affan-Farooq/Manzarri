"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Heart, ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Product } from "@/@types/product";
import { useWishlist } from "@/stores/wishlist";
import { toast } from "sonner";
import Link from "next/link";

const ProductCard = ({
  product,
  isListView = false,
}: {
  product: Product;
  isListView?: boolean;
}) => {
  const { addToWishlist } = useWishlist();

  return (
    <Card
      className={`group cursor-pointer overflow-hidden border-manzarri-black/10 hover:shadow-xl transition-all duration-300 ${isListView ? "flex" : ""}`}
    >
      <div className={`relative ${isListView ? "w-48 flex-shrink-0" : ""}`}>
        <Image
          src={product.images[0]}
          alt={product.productName}
          width={400}
          height={400}
          className={`${
            isListView ? "w-full h-48" : "w-full h-64"
          } object-cover group-hover:scale-105 transition-transform duration-300`}
        />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              addToWishlist(product);
              toast.success("Product added to cart succesfully");
            }}
            className="w-8 h-8 p-0 bg-manzarri-white/90 hover:bg-manzarri-white"
          >
            <Heart className="w-4 h-4 text-manzarri-reddish-brown" />
          </Button>
        </div>
      </div>
      <div className={`p-6 ${isListView ? "flex-1" : ""}`}>
        <div
          className={`${isListView ? "flex justify-between items-start" : ""}`}
        >
          <div className={`${isListView ? "flex-1 pr-6" : ""}`}>
            <h3 className="text-xl font-semibold text-manzarri-black mb-2 group-hover:text-manzarri-reddish-brown transition-colors">
              {product.productName}
            </h3>
            <div className="flex items-center mb-3">
              <div className="flex items-center">
                {[...Array(product.ratings)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${"text-manzarri-faun fill-current"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-manzarri-black/60 ml-2">
                ({product.reviews.length})
              </span>
            </div>
            {isListView && (
              <p className="text-manzarri-black/70 mb-4">
                Exquisite craftsmanship meets timeless design in this stunning
                piece that elevates any collection.
              </p>
            )}
          </div>
          <div
            className={`${isListView ? "text-right" : "flex items-center justify-between"}`}
          >
            <div
              className={`${isListView ? "mb-4" : "flex items-center space-x-2"}`}
            >
              <span className="text-2xl font-bold text-manzarri-reddish-brown">
                ${product.price.toLocaleString()}
              </span>
            </div>
            <Link href={`/marketplace/${product._id}`}>
              <Button
                size="sm"
                className="bg-manzarri-black hover:bg-manzarri-black/90 text-manzarri-white"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default ProductCard;
