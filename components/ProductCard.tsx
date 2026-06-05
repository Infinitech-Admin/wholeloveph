"use client";

import { useState } from "react";
import type { Product } from "@/lib/data";
import ProductModal from "./ProductModal";

interface ProductCardProps {
  product: Product;
}

const categoryGradients: Record<string, string> = {
  Pads: "from-pink-50 to-rose-100",
  Liners: "from-pink-50 to-purple-50",
  Wipes: "from-blue-50 to-cyan-100",
  "Intimate Care": "from-emerald-50 to-green-100",
};

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <div
        onClick={() => setSelectedProduct(product)}
        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
      >
        {/* Product Image */}
        <div
          className={`relative aspect-square bg-gradient-to-br ${
            categoryGradients[product.category] ||
            "from-pink-50 to-blue-50"
          }`}
        >
          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-[#b5525f] text-white text-xs font-semibold shadow-sm">
              {product.badge}
            </span>
          )}

          {/* Category Tag */}
          <span className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur text-[11px] font-medium text-gray-700">
            {product.category}
          </span>

          {/* Image */}
          <div className="h-full w-full flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 text-base leading-snug mb-2 line-clamp-2 min-h-[48px]">
            {product.name}
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3 min-h-[60px]">
            {product.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-[#b5525f]">
              {product.price}
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
