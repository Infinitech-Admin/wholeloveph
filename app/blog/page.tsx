import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogFilter from "@/components/BlogFilter";

export const metadata: Metadata = {
  title: "Blog — The Whole Love",
  description: "Tips, guides, and stories about menstrual health, self-care, and empowerment.",
};

const blogPosts = [
  {
    id: 1,
    title: "Understanding Your Menstrual Cycle: A Complete Guide",
    excerpt: "Learn about the four phases of your menstrual cycle and how to care for yourself during each one. From menstruation to the luteal phase, understand your body's natural rhythm.",
    content: "Your menstrual cycle is more than just your period. It's a complex interplay of hormones that affects your entire body. In this comprehensive guide, we'll explore the four phases: menstruation, follicular, ovulation, and luteal. Each phase brings unique changes to your energy levels, mood, and physical needs. By understanding these patterns, you can better plan your activities, self-care routines, and even your product choices.",
    category: "Health Education",
    date: "June 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1649298173603-9c95aa950879?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "5 Tips for Choosing the Right Sanitary Pad",
    excerpt: "Discover how to select the perfect pad for your flow, lifestyle, and comfort needs. Not all pads are created equal - find what works best for you.",
    content: "Choosing the right sanitary pad can make a huge difference in your comfort and confidence during your period. Consider your flow intensity, activity level, and personal preferences. Ultra-thin pads are great for light days and active lifestyles, while extra-absorbent options provide overnight protection. Look for breathable materials, hypoallergenic options if you have sensitive skin, and consider eco-friendly alternatives if sustainability matters to you.",
    category: "Product Guide",
    date: "May 10, 2026",
    readTime: "4 min read",
    image: "https://plus.unsplash.com/premium_photo-1664375262056-a8503d4d073c?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Breaking the Stigma: Period Talk in the Philippines",
    excerpt: "Join the conversation about menstrual health and why open discussions matter. Together, we can create a more supportive environment for menstrual health.",
    content: "In the Philippines, menstrual health has long been a taboo topic. But times are changing. More women are speaking up, sharing their experiences, and advocating for better access to menstrual products and education. This article explores the cultural context, the challenges faced by Filipino women, and the positive shifts happening in our society. From workplace policies to school education, learn how we can all contribute to breaking the stigma.",
    category: "Community",
    date: "May 5, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1646105372611-0d775e5ccda2?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Self-Care During Your Period: A Wellness Guide",
    excerpt: "Your period is a time to prioritize self-care. Discover gentle practices to help you feel your best during menstruation.",
    content: "Period self-care goes beyond just managing your flow. It's about nurturing your body and mind during a time when you may need extra support. From warm baths and gentle yoga to nourishing foods and adequate rest, there are many ways to honor your body's needs. We'll share practical tips for managing cramps, boosting energy, and maintaining emotional balance throughout your cycle.",
    category: "Wellness",
    date: "April 28, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1547250936-e1426b362327?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "The Benefits of Organic Cotton Pads",
    excerpt: "Why choose organic cotton? Learn about the advantages for your health and the environment when making the switch to natural feminine care products.",
    content: "Organic cotton pads offer numerous benefits over conventional options. Free from pesticides, bleach, and synthetic materials, they're gentler on sensitive skin and reduce your exposure to potentially harmful chemicals. Additionally, organic farming practices are better for the environment and support sustainable agriculture. Discover why more women are making the switch to organic feminine care products.",
    category: "Product Guide",
    date: "April 20, 2024",
    readTime: "4 min read",
    image: "https://plus.unsplash.com/premium_photo-1679430887921-31e1047e5b55?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Menstrual Health in the Workplace",
    excerpt: "Advocating for better menstrual policies and support in Filipino workplaces. Know your rights and how to create positive change.",
    content: "Many women face challenges managing their periods at work, from inadequate restroom facilities to lack of understanding from employers. This article discusses the importance of menstrual-friendly workplace policies, including access to products, flexible break times, and supportive management. Learn about your rights and how to advocate for better conditions in your workplace.",
    category: "Community",
    date: "April 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1554902843-260acd0993f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="border-b border-pink-100 bg-gradient-to-b from-pink-50 to-[#fff5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
            Blog
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900">
            Tips & <span className="text-[#c87a5e] italic">Stories</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Guides, advice, and inspiration for your menstrual health journey.
          </p>
        </div>
      </section>

      <BlogFilter blogPosts={blogPosts} />
      <Footer />
    </div>
  );
}
