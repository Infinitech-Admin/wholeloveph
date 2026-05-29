import { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function ShopeeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm2 4v8h12V8H6zm2 2h8v4H8v-4z" />
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
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl text-gray-900 mb-4">Get in touch</h2>
              <p className="text-gray-600 max-w-md">
                Questions, partnerships, or wholesale inquiries — drop us a message and we&apos;ll get back within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#c87a5e]" />
                <a href="mailto:thewholelove.official@gmail.com" className="text-gray-700 hover:text-[#c87a5e] transition-colors">
                  thewholelove.official@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#c87a5e]" />
                <span className="text-gray-700">Manila, Philippines</span>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900 mb-3">Follow us</p>
                <div className="flex gap-3">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61576417655210&sk=directory_basic_info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white border border-pink-100 hover:border-[#c87a5e] hover:text-[#c87a5e] transition-colors text-gray-600"
                  >
                    <FacebookIcon />
                  </Link>
                  <Link
                    href="https://www.instagram.com/thewholelove.official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white border border-pink-100 hover:border-[#c87a5e] hover:text-[#c87a5e] transition-colors text-gray-600"
                  >
                    <InstagramIcon />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@wl.officialph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white border border-pink-100 hover:border-[#c87a5e] hover:text-[#c87a5e] transition-colors text-gray-600"
                  >
                    <TikTokIcon />
                  </Link>
                  <Link
                    href="https://shopee.ph/whole.love.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white border border-pink-100 hover:border-[#c87a5e] hover:text-[#c87a5e] transition-colors text-gray-600"
                  >
                    <ShopeeIcon />
                  </Link>
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
