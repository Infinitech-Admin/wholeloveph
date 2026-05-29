"use client";

import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/partnership", label: "Partnership" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-6 h-6">
      <span
        className={`absolute top-2 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
          open ? "rotate-45 top-3" : ""
        }`}
      />
      <span
        className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
          open ? "-rotate-45 top-3" : ""
        }`}
      />
    </div>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-xl font-serif italic text-gray-900">Whole</span>
            <span className="text-xl font-serif text-[#c87a5e]">Love</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-700 hover:text-[#c87a5e] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-[#c87a5e] transition-colors md:hidden"
          >
            <MenuIcon open={mobileMenuOpen} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-pink-100 overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-gray-700 hover:text-[#c87a5e] transition-colors py-2 transform transition-all duration-300 ease-in-out"
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                    opacity: mobileMenuOpen ? 1 : 0,
                    transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
