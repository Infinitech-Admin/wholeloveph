import { Metadata } from "next";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const promises = [
  { num: "01", t: "Pure cotton cover", d: "Soft against sensitive skin — every single time." },
  { num: "02", t: "Ultra-absorbent core", d: "Up to 12 hours of dryness you can actually feel." },
  { num: "03", t: "Hypoallergenic", d: "Free from harsh chemicals, dyes, and irritants." },
  { num: "04", t: "Eco-conscious", d: "Recyclable packaging — gentle on you, and the planet." },
];

export const metadata: Metadata = {
  title: "About — The Whole Love",
  description: "Our promise: high-quality, FDA-approved feminine care made to keep you fresh, protected, and worry-free.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-pink-100 bg-gradient-to-b from-pink-50 to-[#fff5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
            Made with <span className="text-[#c87a5e] italic">Whole</span> Love
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            We started WholeLove to challenge how feminine care is made and sold — with softer materials, cleaner formulas, and a commitment to making women feel cared for, not marketed to.
          </p>
        </div>
      </section>

      {/* Promise Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-5">Warm & empowering</h2>
          <p className="text-gray-600 mb-8 tracking-wider">  
            At WholeLove, we believe every woman deserves to feel comfortable in her own body — without compromise. 
            That's why we craft sanitary napkins and wet wipes that go beyond the basics: breathable materials that move with you, 
            ultra-gentle formulas that respect sensitive skin, and absorbency you can actually rely on. 
            Our products are FDA-approved, thoughtfully made, and priced so that quality care is never out of reach. 
            Because feeling fresh, protected, and confident isn't a luxury — it's something every woman deserves, every single day.
          </p>

          {/* 4-column card strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-pink-100 border border-pink-100 rounded-2xl overflow-hidden">
            {promises.map((f) => (
              <div key={f.t} className="p-8 bg-white hover:bg-pink-50 transition-colors">
                <div className="font-serif text-5xl font-light text-rose-200 mb-5 leading-none">{f.num}</div>
                <div className="font-serif text-xl text-gray-900 mb-2">{f.t}</div>
                <div className="text-sm font-light text-gray-400 leading-relaxed">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-gray-900 mb-12">Loved by women everywhere</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Maria L.", q: "Finally, pads that feel as gentle as they promise. I've switched our whole household." },
              { n: "Anna R.", q: "The wet wipes are a daily essential — gentle, fresh, and the packaging is gorgeous." },
              { n: "Joy P.", q: "Overnight pads kept me dry through 9 hours. Truly worry-free." },
            ].map((t) => (
              <div key={t.n} className="p-7 rounded-2xl bg-white border border-pink-100 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-[#c87a5e] text-[#c87a5e]" />)}
                </div>
                <p className="text-gray-600 mb-5">&quot;{t.q}&quot;</p>
                <p className="font-serif text-gray-900">{t.n}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/products" className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#b5525f] text-white hover:bg-[#a04854] transition">
              Shop the collection
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
