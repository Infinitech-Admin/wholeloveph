import { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Contact — The Whole Love",
  description: "Get in touch with The Whole Love team for orders, partnerships, and questions about our feminine care products.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="border-b border-pink-100 bg-gradient-to-b from-pink-50 to-[#fff5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
            Contact
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
            We&apos;d love to <span className="text-[#c87a5e] italic">hear from you</span>
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl text-gray-900">Get in touch</h2>
            <p className="text-gray-600 max-w-md">
              Questions, partnerships, or wholesale inquiries — drop us a message and we&apos;ll get back within 24 hours.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#c87a5e] mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <div className="text-sm text-gray-500">hello@thewholelove.ph</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 text-[#c87a5e] mt-0.5">
                  <InstagramIcon />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Social</div>
                  <div className="text-sm text-gray-500">@thewholelove.official · @wl.officialph</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#c87a5e] mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">Based in</div>
                  <div className="text-sm text-gray-500">Manila, Philippines</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
}
