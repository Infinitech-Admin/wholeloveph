"use client";

import { useState, useEffect } from "react";
import { StarBadgeIcon, StarIcon, ArrowUpRightIcon, HeartLargeIcon } from "./icons";

const posters = [
  "/posters/May 16 (1).jpg",
  "/posters/May 16 (2).jpg",
  "/posters/May 19 (1).jpg",
  "/posters/May 20 (1).jpg",
  "/posters/May 20 (2).jpg",
  "/posters/May 21 (1).jpg",
  "/posters/May 21 (2).jpg",
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % posters.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-10 bg-gradient-to-b from-red-100 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-pink-200 shadow-sm">
              <StarBadgeIcon />
              <span className="text-xs font-medium text-gray-600 tracking-wide uppercase">
                FDA-Approved Feminine Care
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight">
              <span className="text-gray-900">Comfort in </span>
              <span className="text-[#c87a5e] italic">Every Day</span>
            </h1>

            {/* Description */}
            <p className="text-base text-gray-600 max-w-md leading-relaxed">
              High-quality, affordable sanitary napkins and wet wipes designed for comfort, cleanliness, and confidence — every moment of the month.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#b5525f] hover:bg-[#a04854] text-white text-sm font-medium rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Explore Products
                <ArrowUpRightIcon />
              </a>
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <span className="text-sm text-gray-500">Loved by 10,000+ women</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Carousel */}
          <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[500px] xl:max-w-[580px] aspect-[4/5] mx-auto">
            <div className="overflow-hidden">
              {posters.map((poster, index) => (
                <img
                  key={poster}
                  src={poster}
                  alt={`Whole Love poster ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                />
              ))}
            </div>

            {/* Carousel Dots */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {posters.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                      ? "w-5 sm:w-6 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/70"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
