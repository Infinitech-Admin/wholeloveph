"use client";

import { X, Heart, ShoppingBag, Star } from "lucide-react";
import type { Product } from "@/lib/data";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl grid md:grid-cols-2 max-h-[90vh] flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">

        {/* ── Left Panel ── */}
        <div className="relative min-h-[40vh] md:min-h-[60vh] flex flex-col justify-between p-6 md:p-8 overflow-hidden flex-shrink-0"
          style={{ background: "#1a0f0f" }}>

          {/* diagonal texture */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #b5525f 0px, #b5525f 1px, transparent 1px, transparent 12px)",
            }}
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1 rounded-full z-10 text-[10px] md:text-xs font-medium tracking-widest uppercase text-white"
              style={{ background: "rgba(181,82,95,0.85)" }}>
              {product.badge}
            </span>
          )}

          {/* Product Image */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-[280px] max-h-[280px] md:max-w-[380px] md:max-h-[380px] w-full h-full object-contain"
            />
          </div>

          {/* Name & Price */}
          <div className="relative z-10">
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-widest"
              style={{ color: "#b5525f" }}>
              {product.category}
            </span>
            <h2 className="text-lg md:text-2xl leading-snug text-white mt-1 mb-2"
              style={{ fontFamily: "'DM Serif Display', serif" }}>
              {product.name}
            </h2>
            <p className="text-xl md:text-2xl font-light tracking-tight"
              style={{ color: "#ffaabb" }}>
              {product.price}
            </p>
          </div>
        </div>

        {/* ── Right Panel ── */}
        <div className="flex flex-col p-4 md:p-7 bg-white overflow-y-auto relative flex-1">

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition z-10 shadow-sm"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Description */}
          <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-1.5">Description</p>
          <p className="text-md leading-relaxed text-gray-500 mb-2">
            {product.description}
          </p>

          <div className="h-px bg-gray-100 mb-5" />

          {/* Features */}
          <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-3">Features</p>
          <div className="grid grid-cols-1 gap-2 mb-5">
            {[
              "100% Organic Cotton",
              "Ultra-thin",
              "Hypoallergenic",
              "FDA-Approved",
            ].map((f) => (
              <div
                key={f}
                className="flex items-center gap-2 px-3 text-sm text-gray-700"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#b5525f] shrink-0" />
                {f}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-3">Shop At</p>
          <div className="flex gap-3">
            <a
              href="https://shopee.ph/whole.love.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#c87a5e] text-white py-3 rounded-lg font-medium hover:bg-[#b5525f] transition-colors text-center"
            >
              Shopee
            </a>
            <a
              href="https://www.tiktok.com/@wl.officialph?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#c87a5e] text-white py-3 rounded-lg font-medium hover:bg-[#b5525f] transition-colors text-center"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>

      {/* DM Serif Display font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');`}</style>
    </div>
  );
}
