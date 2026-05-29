import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductCollection from "@/components/ProductCollection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff5f5] font-sans">
      <Navbar />
      <HeroSection />
      <Features />
      <ProductCollection />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
}
