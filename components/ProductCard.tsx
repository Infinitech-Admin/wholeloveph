"use client";

import { useState } from "react";
import { PlusIcon } from "./icons";
import type { Product } from "@/lib/data";
import ProductModal from "./ProductModal";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <div
        className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => setSelectedProduct(product)}
      >
        {/* Product Image Area */}
        <div className="relative aspect-square bg-gradient-to-br from-pink-50 to-blue-50">
          {product.badge && (
            <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-medium rounded-full bg-[#b5525f] text-white z-10">
              {product.badge}
            </span>
          )}
          <div className="h-full w-full flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 text-md leading-tight mb-1 line-clamp-2">{product.name}</h3>
          <p className="text-xs text-gray-500 mb-3 line-clamp-5">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-[#b5525f]">
              {product.price}
            </span>
          </div>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
}
