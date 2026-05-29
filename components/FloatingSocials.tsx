"use client"

import { useState } from "react"

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61576417655210",
    color: "#1877F2",
    hoverBg: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/thewholelove.official",
    color: "#E1306C",
    hoverBg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Shopee",
    href: "https://shopee.ph/whole.love.ph",
    color: "#EE4D2D",
    hoverBg: "#EE4D2D",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M18.665 5.315a6.665 6.665 0 0 0-13.33 0H2.672a1.334 1.334 0 0 0-1.328 1.47l1.335 13.333A1.334 1.334 0 0 0 4.004 21.33h15.992a1.334 1.334 0 0 0 1.325-1.212l1.335-13.333a1.334 1.334 0 0 0-1.328-1.47h-2.663zm-6.665-4a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4zm0 9.332a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2.668a1.333 1.333 0 1 0 0 2.666 1.333 1.333 0 0 0 0-2.666z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@wl.officialph",
    color: "#000000",
    hoverBg: "#010101",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.72a8.18 8.18 0 0 0 4.78 1.52V6.79a4.85 4.85 0 0 1-1.01-.1z" />
      </svg>
    ),
  },
]

export default function FloatingSocials() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <>
      <style>{`
        .floating-socials {
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .social-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .social-label {
          position: absolute;
          right: 52px;
          background: white;
          color: #333;
          font-size: 12px;
          font-weight: 600;
          padding: 5px 10px;
          border-radius: 6px 0 0 6px;
          white-space: nowrap;
          box-shadow: -3px 2px 8px rgba(0,0,0,0.15);
          pointer-events: none;
          opacity: 0;
          transform: translateX(8px);
          transition: opacity 0.2s ease, transform 0.2s ease;
          font-family: inherit;
          letter-spacing: 0.02em;
        }

        .social-item:hover .social-label {
          opacity: 1;
          transform: translateX(0);
        }

        .social-btn {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          color: #555;
          border-radius: 8px 0 0 8px;
          box-shadow: -3px 2px 10px rgba(0,0,0,0.15);
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-right: none;
          position: relative;
          overflow: hidden;
        }

        .social-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.25s ease;
          border-radius: inherit;
        }

        .social-btn:hover {
          width: 52px;
          color: white;
          box-shadow: -4px 3px 16px rgba(0,0,0,0.25);
        }

        .social-btn:hover::before {
          opacity: 1;
        }

        .social-btn svg {
          position: relative;
          z-index: 1;
          transition: transform 0.2s ease;
        }

        .social-btn:hover svg {
          transform: scale(1.1);
        }

        /* Individual color overrides */
        .social-btn.facebook:hover { background: #1877F2; }
        .social-btn.instagram:hover { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
        .social-btn.shopee:hover { background: #EE4D2D; }
        .social-btn.tiktok:hover { background: #010101; }

        /* Separator */
        .social-item + .social-item .social-btn {
          border-top: 1px solid rgba(0,0,0,0.06);
        }

        @media (max-width: 480px) {
          .floating-socials {
            top: auto;
            bottom: 80px;
            transform: none;
          }
          .social-label {
            display: none;
          }
          .social-btn {
            width: 40px;
            height: 40px;
          }
          .social-btn:hover {
            width: 48px;
          }
        }
      `}</style>

      <div className="floating-socials" role="navigation" aria-label="Social media links">
        {socials.map((social) => (
          <div className="social-item" key={social.name}>
            <span className="social-label">{social.name}</span>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-btn ${social.name.toLowerCase()}`}
              aria-label={`Visit our ${social.name} page`}
              title={social.name}
              onMouseEnter={() => setHovered(social.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {social.icon}
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
