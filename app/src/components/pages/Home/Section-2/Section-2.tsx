import React from "react";
import { Card } from "@/components/ui/card";

const Section_2 = () => {
  const categories = [
    { name: "Rings", count: "120+ Items", icon: "💍" },
    { name: "Necklaces", count: "85+ Items", icon: "📿" },
    { name: "Earrings", count: "95+ Items", icon: "💎" },
    { name: "Bracelets", count: "60+ Items", icon: "🔗" },
  ];

  return (
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
  );
};

export default Section_2;
