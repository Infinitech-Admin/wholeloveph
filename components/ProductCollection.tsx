"use client";

import { products } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function ProductCollection() {
  const bestSellers = products.filter( (p) => p.badge === "Best Seller" );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-12">
        <div>
          <p className="text-xs font-medium text-[#b5525f] tracking-widest uppercase mb-2">
            Top Picks
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            Customer <span className="italic text-[#c87a5e]">Favorites</span>
          </h2>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
