import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnershipForm from "@/components/PartnershipForm";

export const metadata: Metadata = {
  title: "Partnership — The Whole Love",
  description: "Partner with Whole Love to bring premium feminine care products to your customers. Join our growing network of retailers and distributors.",
};

export default function PartnershipPage() {

  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="border-b border-pink-100 bg-gradient-to-b from-pink-50 to-[#fff5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
            Partnership
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900">
            Grow with <span className="text-[#c87a5e] italic">Us</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Join our network of retailers and distributors bringing premium feminine care to Filipino women.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-gray-900 mb-12">
          Why Partner with <span className="text-[#c87a5e] italic">Whole Love</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Premium Quality",
              description: "FDA-approved products made with organic cotton and hypoallergenic materials that customers trust.",
            },
            {
              title: "Competitive Margins",
              description: "Attractive wholesale pricing with flexible terms to help your business grow.",
            },
            {
              title: "Marketing Support",
              description: "Access to marketing materials, product displays, and promotional campaigns to drive sales.",
            },
          ].map((benefit, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white border border-pink-100 shadow-sm">
              <h3 className="font-serif text-xl text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Types */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-gray-900 mb-12">
            Partnership <span className="text-[#c87a5e] italic">Opportunities</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                type: "Retail Partnership",
                description: "Stock Whole Love products in your retail store, pharmacy, or supermarket. Perfect for established retailers looking to expand their feminine care offerings.",
                features: ["Wholesale pricing", "Bulk ordering", "Marketing materials", "Product training"],
              },
              {
                type: "Distributor Partnership",
                description: "Become an exclusive distributor in your region. Ideal for businesses with established distribution networks looking for premium feminine care products.",
                features: ["Exclusive territorial rights", "Volume discounts", "Priority support", "Custom branding options"],
              },
            ].map((partnership, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white border border-pink-100">
                <h3 className="font-serif text-2xl text-gray-900 mb-3">{partnership.type}</h3>
                <p className="text-gray-600 mb-6">{partnership.description}</p>
                <ul className="space-y-2">
                  {partnership.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-[#c87a5e]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <PartnershipForm />
      </section>
      
      <Footer />
    </div>
  );
}