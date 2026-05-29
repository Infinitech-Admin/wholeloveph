"use client";

import { shopLinks, companyLinks } from "@/lib/data";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-pink-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-3">
              <span className="text-lg font-serif italic text-gray-900">Whole</span>
              <span className="text-lg font-serif text-[#c87a5e]">Love</span>
            </div>
            <div className="flex gap-1">
              <Mail className="h-5 w-5 text-[#c87a5e]" />
              <a href="mailto:thewholelove.official@gmail.com" className="text-sm text-gray-700 hover:text-[#c87a5e] transition-colors">
                thewholelove.official@gmail.com
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Products</h4>
            <ul className="space-y-2">
              {shopLinks.map((item) => (
                <li key={item}>
                  <a
                    href="/products"
                    className="text-sm text-gray-500 hover:text-[#c87a5e] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-gray-500 hover:text-[#c87a5e] transition-colors">About</a>
              </li>
              <li>
                <a href="/partnership" className="text-sm text-gray-500 hover:text-[#c87a5e] transition-colors">Partnership</a>
              </li>
              <li>
                <a href="/blog" className="text-sm text-gray-500 hover:text-[#c87a5e] transition-colors">Blog</a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-gray-500 hover:text-[#c87a5e] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Follow</h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.facebook.com/profile.php?id=61576417655210" className="text-sm text-gray-500 hover:text-[#c87a5e] transition-colors">
                  <div className="flex items-center gap-2">
                    <span>Facebook</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="https://www.tiktok.com/@wl.officialph" className="text-sm text-gray-500 hover:text-[#c87a5e] transition-colors">
                  <div className="flex items-center gap-2">
                    <span>Tiktok</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/thewholelove.official/" className="text-sm text-gray-500 hover:text-[#c87a5e] transition-colors">
                  <div className="flex items-center gap-2">
                    <span>Instagram</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="https://shopee.ph/whole.love.ph" className="text-sm text-gray-500 hover:text-[#c87a5e] transition-colors">
                  <div className="flex items-center gap-2">
                    <span>Shopee</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-pink-100 text-center">
          <p className="text-sm text-gray-400">
            © 2026 The Whole Love. All rights reserved.
          </p>

          <div>
            <p className="text-xs text-gray-400">
              Powered by <a href="https://www.infinitechphil.com/" target="_blank" rel="noopener noreferrer" className="text-[#c87a5e] hover:underline">Infinitech Advertising Corporation</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
