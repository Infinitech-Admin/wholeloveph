import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import FloatingSocials from "@/components/FloatingSocials"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://wholelove.ph"),

  title: {
    default: "Whole Love | Feminine Care Products Philippines",
    template: "%s | Whole Love",
  },

  description:
    "High-quality, affordable sanitary napkins and wet wipes designed for comfort, cleanliness, and confidence. FDA-approved feminine care products for every moment of the month.",

  keywords: [
    // Location-specific keywords
    "sanitary napkins Philippines",
    "feminine care products Philippines",
    "pads Philippines",
    "pantyliners Philippines",
    "wet wipes Philippines",
    "menstrual products Philippines",
    "feminine hygiene Philippines",
    "best sanitary pads Philippines",

    // Product-specific keywords
    "organic cotton pads",
    "ultra thin pads",
    "daily liners",
    "night pads",
    "feminine wipes",
    "intimate wash",
    "period panties",
    "menstrual care",
    "feminine protection",

    // Feature keywords
    "hypoallergenic pads",
    "breathable sanitary pads",
    "FDA approved feminine care",
    "organic cotton cover",
    "ultra absorbent",
    "skin safe products",
    "chemical free pads",
    "eco friendly feminine care",

    // Benefit keywords
    "comfortable sanitary pads",
    "leak protection",
    "overnight protection",
    "everyday freshness",
    "sensitive skin care",
    "all day comfort",
    "discreet protection",
    "confidence every day",

    // Brand keywords
    "Whole Love",
    "Whole Love Philippines",
    "Whole Love feminine care",
    "Whole Love pads",
    "Whole Love wipes",
  ],

  authors: [{ name: "Whole Love" }],
  creator: "Whole Love",
  publisher: "Whole Love",
  applicationName: "Whole Love",
  referrer: "origin-when-cross-origin",

  openGraph: {
    type: "website",
    locale: "en_PH",
    alternateLocale: ["en_US"],
    url: "https://wholelove.ph",
    siteName: "Whole Love",
    title: "Whole Love - Feminine Care Products Philippines",
    description:
      "High-quality, affordable sanitary napkins and wet wipes designed for comfort, cleanliness, and confidence. FDA-approved feminine care products.",
    images: [
      {
        url: "https://wholelove.ph/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Whole Love - Feminine Care Products",
        type: "image/jpeg",
      },
    ],
    countryName: "Philippines",
  },

  twitter: {
    card: "summary_large_image",
    title: "Whole Love - Feminine Care Products Philippines",
    description:
      "High-quality, affordable sanitary napkins and wet wipes designed for comfort, cleanliness, and confidence.",
    images: ["https://wholelove.ph/og-image.jpg"],
    creator: "@wl.officialph",
    site: "@wl.officialph",
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Whole Love",
    startupImage: [
      {
        url: "/apple-touch-icon.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },

  icons: {
    icon: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  category: "Health and Beauty",
  classification: "Feminine Care Products",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    noimageindex: false,
    nosnippet: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://wholelove.ph",
    languages: {
      "en-PH": "https://wholelove.ph",
    },
  },

  verification: {
    google: "your-google-search-console-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-domain-verification",
    },
  },

  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Whole Love",
    "application-name": "Whole Love",
    "msapplication-TileColor": "#b5525f",
  },
}

export const viewport = {
  themeColor: "#b5525f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Business Schema - E-commerce/Store
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": "https://wholelove.ph/#store",
    "name": "Whole Love",
    "image": [
      "https://wholelove.ph/og-image.jpg",
    ],
    "description": "High-quality, affordable sanitary napkins and wet wipes designed for comfort, cleanliness, and confidence. FDA-approved feminine care products for every moment of the month.",
    "priceRange": "₱-₱₱₱",
    "currenciesAccepted": "PHP",
    "paymentAccepted": "Cash, Credit Card, Debit Card, GCash, Maya",

    "telephone": "+63-XX-XXX-XXXX",
    "email": "info@wholelove.ph",
    "url": "https://wholelove.ph",

    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Your City",
      "addressRegion": "Your Province",
      "postalCode": "XXXX",
      "addressCountry": "PH"
    },

    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "XX.XXXX",
      "longitude": "XXX.XXXX"
    },

    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },

    "potentialAction": {
      "@type": "ShopAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wholelove.ph/products",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    }
  }

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://wholelove.ph/#organization",
    "name": "Whole Love",
    "url": "https://wholelove.ph",
    "logo": "https://wholelove.ph/icon-192x192.png",
    "image": "https://wholelove.ph/og-image.jpg",
    "description": "High-quality, affordable sanitary napkins and wet wipes designed for comfort, cleanliness, and confidence.",
    "email": "info@wholelove.ph",
    "telephone": "+63-XX-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Your City",
      "addressRegion": "Your Province",
      "postalCode": "XXXX",
      "addressCountry": "PH"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61576417655210",
      "https://www.instagram.com/thewholelove.official",
      "https://shopee.ph/whole.love.ph",
      "https://www.tiktok.com/@wl.officialph"
    ],
    "foundingDate": "2024",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "5-20"
    }
  }

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://wholelove.ph/#website",
    "url": "https://wholelove.ph",
    "name": "Whole Love - Feminine Care Products Philippines",
    "description": "High-quality, affordable sanitary napkins and wet wipes designed for comfort, cleanliness, and confidence.",
    "publisher": {
      "@id": "https://wholelove.ph/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wholelove.ph/products?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-PH"
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://wholelove.ph"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://wholelove.ph/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://wholelove.ph/about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://wholelove.ph/contact"
      }
    ]
  }

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Whole Love products special?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Whole Love products are FDA-approved, made with 100% organic cotton covers, and are hypoallergenic. Our ultra-thin design provides maximum comfort while ensuring leak protection for every flow type."
        }
      },
      {
        "@type": "Question",
        "name": "Are Whole Love products safe for sensitive skin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all Whole Love products are made with hypoallergenic materials and are free from harsh chemicals. Our organic cotton covers are gentle on sensitive skin."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept cash, major credit cards, debit cards, GCash, and Maya for convenient digital payments."
        }
      },
      {
        "@type": "Question",
        "name": "Do you ship nationwide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we ship nationwide across the Philippines. Shipping times vary depending on your location but typically arrive within 2-7 business days."
        }
      },
      {
        "@type": "Question",
        "name": "Are your products eco-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Whole Love is committed to sustainability. Our products use recyclable packaging and organic materials whenever possible. We're continuously working on reducing our environmental impact."
        }
      }
    ]
  }

  // Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://wholelove.ph/#products",
    "name": "Whole Love Feminine Care Products",
    "description": "High-quality, affordable sanitary napkins and wet wipes designed for comfort, cleanliness, and confidence.",
    "brand": {
      "@type": "Brand",
      "name": "Whole Love",
      "url": "https://wholelove.ph"
    },
    "category": "Feminine Care",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "PHP",
      "lowPrice": "49",
      "highPrice": "289",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <html lang="en-PH">
      <head>
        {/* Primary Structured Data - Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />

        {/* Open Graph Image Tags */}
        <meta property="og:image" content="https://wholelove.ph/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://wholelove.ph/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Whole Love - Feminine Care Products" />

        {/* Twitter Card Image */}
        <meta name="twitter:image" content="https://wholelove.ph/og-image.jpg" />
        <meta name="twitter:image:alt" content="Whole Love" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/icon-192x192.png" />

        {/* Geographic meta tags */}
        <meta name="geo.region" content="PH" />
        <meta name="geo.placename" content="Philippines" />
        <meta name="geo.position" content="XX.XXXX;XXX.XXXX" />
        <meta name="ICBM" content="XX.XXXX, XXX.XXXX" />

        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://wholelove.ph" />

        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="https://wholelove.ph/sitemap.xml" />

        {/* Alternative languages */}
        <link rel="alternate" hrefLang="en-ph" href="https://wholelove.ph" />
        <link rel="alternate" hrefLang="x-default" href="https://wholelove.ph" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <FloatingSocials />
      </body>
    </html>
  )
}
