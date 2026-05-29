"use client";

import { products } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function ProductCollection() {
  const topPicks = products.filter((p) => p.topPick);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs font-medium text-[#b5525f] tracking-widest uppercase mb-2">
            Top Picks
          </p>
          <h2 className="font-serif text-2xl text-gray-900">
            Customer Favorites
          </h2>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topPicks.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
