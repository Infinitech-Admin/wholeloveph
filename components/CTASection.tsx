"use client";

import { useState } from "react";
import { ArrowUpRightIcon } from "./icons";

export default function CTASection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-[#b5525f] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif text-white mb-4">
            Ready to experience <span className="italic">comfort?</span>
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Join thousands of women who trust Whole Love for their everyday care. Free shipping on your first order.
          </p>
          <a
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-[#b5525f] font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Shop Now
            <ArrowUpRightIcon />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-10"></div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
          {[
            { label: "Free Shipping", value: "Orders ₱500+" },
            { label: "FDA Approved", value: "100% Safe" },
            { label: "10,000+", value: "Happy Customers" },
          ].map((badge) => (
            <div key={badge.label} className="text-center">
              <p className="text-white font-semibold">{badge.label}</p>
              <p className="text-white/60 text-sm">{badge.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
