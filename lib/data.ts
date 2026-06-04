export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  badge: string | null;
  image: string;
  category: string;
  topPick?: boolean;
}

export const categories = ["All", "Pads", "Liners", "Wipes", "Bundles", "Intimate Care"];

export const products: Product[] = [
  {
    id: 1,
    name: "150MM 20+2pcs Ultra Thin Daily Liners Pad",
    description: "Ultra thin daily liners with organic cotton care. 20+2 pieces for lightweight everyday protection. Compact 150mm length for minimal coverage. Ultra-thin and breathable for all-day comfort. Ideal for light discharge or as backup protection with pads.",
    price: "₱49",
    badge: "Best Seller",
    image: "/ph-11134207-7ra0i-mcadnn8kqujm64.webp",
    category: "Liners",
    topPick: true,
  },
  {
    id: 2,
    name: "240MM 8+1pcs Ultra Thin Regular+ Daily Pad",
    description: "Ultra thin regular+ daily pad with wings and organic cotton. 8+1 pieces for moderate flow. Standard 240mm length with breathable cotton cover. Wings for secure fit and leak protection. Hypoallergenic and gentle on sensitive skin.",
    price: "₱53",
    badge: "Best Seller",
    image: "/ph-11134207-7ra0h-mcd5ivuhyoor0e.webp",
    category: "Pads",
    topPick: true,
  },
  {
    id: 3,
    name: "TRAVEL SIZE MINI PACK Wet Wipe",
    description: "8 mini packs in 1 BAG, gentle & effective with organic cotton. Convenient mini packs perfect for travel and daily use. Small enough to fit in bags and pockets. Alcohol-free formula safe for sensitive skin. Great for personal hygiene on the go.",
    price: "₱79",
    badge: null,
    image: "/ph-11134207-820li-mo4q6kp9ewap22.webp",
    category: "Wipes",
  },
  {
    id: 4,
    name: "330MM 8pcs Ultra Thin Night+ Pad",
    description: "Ultra thin night+ pad with wings and organic cotton care. Extra-long 330mm length for maximum coverage during sleep. Ultra-absorbent core for heavy flow nights. Wings for secure fit and leak protection.",
    price: "₱65",
    badge: "Best Seller",
    image: "/ph-11134207-7ra0p-mcaa7rmmue4x43.webp",
    category: "Pads",
    topPick: true,
  },
  {
    id: 5,
    name: "290mm 8pcs+1 Ultra Thin Super+ Daily Pad",
    description: "Ultra thin super+ daily pad with wings. 8+1 pieces with extra-long 290mm length for heavy flow days. Super absorbent core for maximum protection. Ultra-thin design for maximum comfort and discretion. Hypoallergenic and breathable cotton cover.",
    price: "₱60",
    badge: "Best Seller",
    image: "/ph-11134207-7ra0s-mcd5h6s5bpmxf9.webp",
    category: "Pads",
  },
  {
    id: 6,
    name: "Snuggle Cleansing Wet Wipes",
    description: "80 sheets pack, gentle & effective with organic cotton cover. Alcohol-free formula safe for sensitive skin. Perfect for personal hygiene, baby care, and on-the-go freshness. Enriched with natural extracts for gentle cleansing.",
    price: "₱59",
    badge: null,
    image: "/ph-11134207-81ztj-mez5c5i7f3t66a.webp",
    category: "Wipes",
    topPick: true,
  },
  {
    id: 7,
    name: " Ultra Thin Daily Liners Combo Sets",
    description: "Organic cotton pads with wings for comfort & control. Multi-pack liners for everyday freshness. Includes various sizes for different days. Breathable and comfortable for all-day wear. Perfect for light discharge, backup protection, or everyday freshness.",
    price: "₱140",
    badge: "Bundle",
    image: "/ph-11134207-81ztl-mmh6um7u9k3n0c.webp",
    category: "Bundles",
    topPick: true,
  },
  {
    id: 8,
    name: "Floral Fresh Scent Wet Wipes",
    description: "80 sheets pack with 100% organic cotton cover. Refreshing floral scent for a pleasant experience. Alcohol-free formula safe for sensitive skin. Perfect for personal hygiene and on-the-go freshness. Enriched with natural extracts.",
    price: "₱59",
    badge: null,
    image: "/ph-11134207-7ra0o-mdlfc561im3ud0.webp",
    category: "Wipes",
  },
  {
    id: 9,
    name: "Period Pants Underwear Disposable",
    description: "Feminine pads menstrual pants, skin friendly and breathable. Disposable period panties for extra protection. Leak-proof design with absorbent core. Comfortable and breathable for all-day wear. Perfect for heavy flow days or overnight use.",
    price: "₱129",
    badge: null,
    image: "/ph-11134207-820li-mmynotgy287735.webp",
    category: "Intimate Care",
  },
  {
    id: 10,
    name: " 6+2 Combo Set Sanitary Pads Napkin",
    description: "All length in one combo set. Complete collection including various pad sizes for different flow needs. Great value bundle with 6 packs plus 2 extra pieces. Perfect for comprehensive feminine care supply.",
    price: "₱289",
    badge: "Bundle",
    image: "/ph-11134207-7ra0g-mcixj4uwc7sl4e.webp",
    category: "Bundles",
  },
  {
    id: 11,
    name: "240mm Feminine Pads Ultra Thin Regular+",
    description: "8+1 pieces per pack with organic cotton cover and wings. Standard 240mm length for moderate flow. Ultra-thin design with breathable cotton cover. Wings for secure fit and leak protection. Hypoallergenic and gentle on sensitive skin.",
    price: "₱70",
    badge: null,
    image: "/ph-11134207-7ra0i-mdr49mf5t0midf.webp",
    category: "Pads",
  },
  {
    id: 12,
    name: "290mm per piece Ultra Thin Super+ Pad",
    description: "Compact, lightweight, and individually wrapped for maximum convenience. Stay fresh and prepared wherever your day takes you. Ultra-thin design with breathable cotton cover. Wings for secure fit and leak protection. Hypoallergenic and gentle on sensitive skin.",
    price: "₱65",
    badge: null,
    image: "/ph-11134207-7ra0s-mc66nkxzi3wbd3.webp",
    category: "Pads",
  },
  {
    id: 13,
    name: "6PACKS + 2 PCS Ultra Thin Daily Night Pad",
    description: "Ultra thin daily and night pad with wings. Bundle pack with 6 packs plus 2 extra pieces. Perfect for long-term supply covering both day and night needs. Ultra-thin and breathable for everyday comfort. Wings for secure fit.",
    price: "₱281",
    badge: "Bundle",
    image: "/ph-11134207-7ra0p-mcd5glp9uzd549.webp",
    category: "Bundles",
  },
  {
    id: 14,
    name: "290mm Feminine Pads Ultra Thin Regular+",
    description: "8 pieces per pack with organic cotton cover and wings. Standard 290mm length for regular to moderate flow. Ultra-thin design with breathable cotton cover. Wings for secure fit and leak protection. Hypoallergenic and gentle on sensitive skin.",
    price: "₱79",
    badge: null,
    image: "/ph-11134207-7ra0k-mdr4qkosshgzd5.webp",
    category: "Pads",
  },
  {
    id: 15,
    name: "240mm per piece Regular Length Sanitary Pads",
    description: "Per piece, 240mm regular length with ultra thin design. Standard length for moderate flow. Sold per piece for flexible purchasing. Ultra-thin design with breathable cotton cover. Wings for secure fit and leak protection.",
    price: "₱65",
    badge: null,
    image: "/ph-11134207-7ra0h-mc66nkxzi3wbd3.jpg",
    category: "Pads",
  },
  {
    id: 16,
    name: "Probiotic Cranberry Intimate Wash",
    description: "Probiotic cranberry formula for intimate wash and care. Contains probiotics and cranberry extract for natural protection. pH-balanced formula maintains healthy vaginal flora. Gentle and safe for daily use. Leaves you feeling fresh and confident.",
    price: "₱289",
    badge: null,
    image: "/ph-11134207-820l8-mmyoibxbqdxk7b.webp",
    category: "Intimate Care",
  },
  {
    id: 17,
    name: "Mint Pure and Soothing Intimate Feminine Care Wash",
    description: "Mint formula for pure and soothing intimate care. pH-balanced formula for daily feminine hygiene. Alcohol-free and gentle on sensitive areas. Provides all-day freshness and confidence with refreshing mint scent.",
    price: "₱289",
    badge: null,
    image: "/ph-11134207-820lh-mmyo8bwfad4wcc.webp",
    category: "Intimate Care",
  },
];

export interface Feature {
  title: string;
  desc: string;
}

export const features: Feature[] = [
  { title: "Pure cotton cover", desc: "Soft against sensitive skin" },
  { title: "Ultra-absorbent core", desc: "Up to 12 hours of dryness" },
  { title: "Hypoallergenic", desc: "Free from harsh chemicals" },
  { title: "Eco-conscious", desc: "Recyclable packaging" },
];

export const shopLinks = ["Napkins", "Wet Wipes", "Liners", "Bundles"];
export const companyLinks = ["About", "Sustainability", "Press", "Contact"];
