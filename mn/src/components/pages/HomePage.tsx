import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, Truck, Award } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

export function HomePage() {
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

  const categories = [
    { name: "Rings", count: "120+ Items", icon: "💍" },
    { name: "Necklaces", count: "85+ Items", icon: "📿" },
    { name: "Earrings", count: "95+ Items", icon: "💎" },
    { name: "Bracelets", count: "60+ Items", icon: "🔗" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "Every piece comes with our comprehensive lifetime warranty",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Complimentary shipping on all orders over $500",
    },
    {
      icon: Award,
      title: "Certified Quality",
      description:
        "All diamonds and gemstones are certified by leading authorities",
    },
    {
      icon: Star,
      title: "Expert Craftsmanship",
      description: "Handcrafted by master jewelers with decades of experience",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-manzarri-skin to-manzarri-white">
        <div className="absolute inset-0 bg-manzarri-black/5"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-manzarri-black mb-6 leading-tight">
              Timeless
              <span className="text-manzarri-reddish-brown"> Elegance</span>
            </h1>
            <p className="text-xl text-manzarri-black/80 mb-8 leading-relaxed">
              Discover our exquisite collection of handcrafted jewelry. Each
              piece tells a story of luxury, passion, and timeless beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/marketplace">
                <Button
                  size="lg"
                  className="bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white px-8 py-6"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-manzarri-black text-manzarri-black hover:bg-manzarri-black hover:text-manzarri-white px-8 py-6"
              >
                Custom Design
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="w-96 h-96 relative">
            <img
              src="https://images.unsplash.com/photo-1739664664545-5ea43f486f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwY29sbGVjdGlvbiUyMGVsZWdhbnR8ZW58MXx8fHwxNzU4OTY1MTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Luxury jewelry collection"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-manzarri-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-manzarri-black mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-manzarri-black/70">
              Find the perfect piece for every occasion
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-manzarri-black/10"
              >
                <div className="p-8 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-manzarri-black mb-2 group-hover:text-manzarri-reddish-brown transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-manzarri-black/60">{category.count}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
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
                  <img
                    src={product.image}
                    alt={product.name}
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
            <Link to="/marketplace">
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

      {/* Features Section */}
      <section className="py-20 bg-manzarri-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-manzarri-black mb-4">
              Why Choose Manzarri
            </h2>
            <p className="text-xl text-manzarri-black/70">
              Excellence in every detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-manzarri-reddish-brown/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-manzarri-reddish-brown transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-manzarri-reddish-brown group-hover:text-manzarri-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-manzarri-black mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-manzarri-black/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-manzarri-reddish-brown to-manzarri-faun">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-manzarri-white mb-6">
            Join Our Exclusive Club
          </h2>
          <p className="text-xl text-manzarri-white/90 mb-8 max-w-2xl mx-auto">
            Be the first to discover new collections, enjoy member-only
            discounts, and receive personalized jewelry recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link to="/signup" className="flex-1">
              <Button
                size="lg"
                className="w-full bg-manzarri-white text-manzarri-reddish-brown hover:bg-manzarri-white/90"
              >
                Sign Up Now
              </Button>
            </Link>
            <Link to="/login" className="flex-1">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-manzarri-white text-manzarri-white hover:bg-manzarri-white hover:text-manzarri-reddish-brown"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
