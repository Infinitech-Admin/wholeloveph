import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsGrid from "@/components/ShopGrid";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Shop — The Whole Love",
  description: "Browse the full collection of FDA-approved sanitary napkins, wet wipes, and liners by The Whole Love.",
};

export default function Shop() {
  const topPicks = products.filter((p) => p.topPick);

  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Navbar />
      {/* Hero Section */}
      <section className="border-b border-pink-100 bg-gradient-to-b from-pink-50 to-[#fff5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
            Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900">
            Everyday <span className="text-[#c87a5e] italic">Essentials</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Curated feminine care designed for comfort and confidence.
          </p>
        </div>
      </section>

      {/* Products Grid with Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ProductsGrid />
      </section>
      <Footer />
    </div>
  );
}
