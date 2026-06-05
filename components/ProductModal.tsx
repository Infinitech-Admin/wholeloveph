"use client";

import { X, ZoomIn } from "lucide-react";
import { useState, useRef } from "react";
import type { Product } from "@/lib/data";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [isZooming, setIsZooming] = useState(false);
  const [magStyle, setMagStyle] = useState<React.CSSProperties>({});
  const imgRef = useRef<HTMLDivElement>(null);

  const MAG_SIZE = 220;
  const ZOOM_FACTOR = 3;

  if (!product) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const w = rect.width;
    const h = rect.height;
    const half = MAG_SIZE / 2;

    const bgW = w * ZOOM_FACTOR;
    const bgH = h * ZOOM_FACTOR;
    const offsetX = x * ZOOM_FACTOR - half;
    const offsetY = y * ZOOM_FACTOR - half;

    setMagStyle({
      left: x - half,
      top: y - half,
      backgroundImage: `url(${product.image})`,
      backgroundSize: `${bgW}px ${bgH}px`,
      backgroundPosition: `-${offsetX}px -${offsetY}px`,
    });
  };

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
        <div
          className="relative min-h-[40vh] md:min-h-[60vh] overflow-hidden"
          style={{ background: "#1a0f0f" }}
        >
          {/* Diagonal texture */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #b5525f 0px, #b5525f 1px, transparent 1px, transparent 12px)",
            }}
          />

          {/* Badge */}
          {product.badge && (
            <span
              className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase text-white"
              style={{ background: "rgba(181,82,95,0.9)" }}
            >
              {product.badge}
            </span>
          )}

          {/* Image area with magnifier */}
          <div className="flex items-center justify-center pb-4">
            <div
              ref={imgRef}
              className="relative cursor-crosshair"
              style={{ width: 400, height: 300 }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
            >
              {/* Product image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />

              {/* Zoom hint — shown when not zooming */}
              {!isZooming && (
                <div
                  className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 rounded-md text-white/80 pointer-events-none"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    fontSize: 15,
                  }}
                >
                  <ZoomIn className="w-3 h-3" />
                  Zoom
                </div>
              )}

              {/* Magnifier lens — constrained inside image bounds */}
              {isZooming && (
                <div
                  className="absolute pointer-events-none rounded-full overflow-hidden"
                  style={{
                    width: MAG_SIZE,
                    height: MAG_SIZE,
                    border: "3px solid rgba(255,255,255,0.75)",
                    backgroundRepeat: "no-repeat",
                    zIndex: 20,
                    ...magStyle,
                  }}
                />
              )}
            </div>
          </div>

          {/* Name, category & price */}
          <div className="relative z-10 px-6 pb-7">
            <h2
              className="text-2xl leading-snug text-white mb-2.5"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              {product.name}
              <span
                className="px-2 py-1 mx-4 text-[15px] font-semibold tracking-widest uppercase bg-[#b5525f]/20 rounded-full"
                style={{ color: "#b5525f" }}
              >
                {product.category}
              </span>
            </h2>
            <p
              className="text-2xl font-light tracking-tight"
              style={{ color: "#ffaabb" }}
            >
              {product.price}
            </p>
          </div>
        </div>

        {/* ── Right Panel ── */}
        <div className="flex flex-col p-6 bg-white overflow-y-auto relative">

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition z-10 shadow-sm"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Description */}
          <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-2">
            Description
          </p>
          <p className="text-md leading-relaxed text-gray-500 mb-5">
            {product.description}
          </p>

          <div className="h-px bg-gray-100 mb-5" />

          {/* Features */}
          <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-3">
            Features
          </p>
            {product.features && (
              <div className="flex flex-wrap gap-2 mb-4">
                {product.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 rounded-md bg-[#b5525f]/20 text-gray-700 text-md font-medium"
                  >
                    {feature.label}
                  </span>
                ))}
              </div>
            )}

          <div className="h-px bg-gray-100 mb-5" />

          {/* CTA */}
          <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-3">
            Shop at
          </p>
          <div className="flex gap-3 mt-auto">
            <a
              href="https://shopee.ph/whole.love.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-white py-3 rounded-xl font-medium text-center text-sm transition-colors"
              style={{ background: "#c87a5e" }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#b5525f")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#c87a5e")}
            >
              Shopee
            </a>
            <a
              href="https://www.tiktok.com/@wl.officialph?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-white py-3 rounded-xl font-medium text-center text-sm transition-colors"
              style={{ background: "#c87a5e" }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#b5525f")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#c87a5e")}
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