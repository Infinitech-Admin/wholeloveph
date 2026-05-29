"use client";

import { useState } from "react";
import Link from "next/link";
import BlogModal from "./BlogModal";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Your Menstrual Cycle: A Complete Guide",
    excerpt: "Learn about the four phases of your menstrual cycle and how to care for yourself during each one.",
    content: "Your menstrual cycle is more than just your period. It's a complex interplay of hormones that affects your entire body. In this comprehensive guide, we'll explore the four phases: menstruation, follicular, ovulation, and luteal. Each phase brings unique changes to your energy levels, mood, and physical needs. By understanding these patterns, you can better plan your activities, self-care routines, and even your product choices.",
    category: "Health Education",
    date: "May 15, 2024",
    readTime: "5 min read",
    image: "/517690080_17845592784524324_1898221041050082505_n.jpg",
  },
  {
    id: 2,
    title: "5 Tips for Choosing the Right Sanitary Pad",
    excerpt: "Discover how to select the perfect pad for your flow, lifestyle, and comfort needs.",
    content: "Choosing the right sanitary pad can make a huge difference in your comfort and confidence during your period. Consider your flow intensity, activity level, and personal preferences. Ultra-thin pads are great for light days and active lifestyles, while extra-absorbent options provide overnight protection. Look for breathable materials, hypoallergenic options if you have sensitive skin, and consider eco-friendly alternatives if sustainability matters to you.",
    category: "Product Guide",
    date: "May 10, 2024",
    readTime: "4 min read",
    image: "/517690080_17845592784524324_1898221041050082505_n.jpg",
  },
  {
    id: 3,
    title: "Breaking the Stigma: Period Talk in the Philippines",
    excerpt: "Join the conversation about menstrual health and why open discussions matter.",
    content: "In the Philippines, menstrual health has long been a taboo topic. But times are changing. More women are speaking up, sharing their experiences, and advocating for better access to menstrual products and education. This article explores the cultural context, the challenges faced by Filipino women, and the positive shifts happening in our society. From workplace policies to school education, learn how we can all contribute to breaking the stigma.",
    category: "Community",
    date: "May 5, 2024",
    readTime: "6 min read",
    image: "/517690080_17845592784524324_1898221041050082505_n.jpg",
  },
];

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            From Our <span className="italic text-[#c87a5e]">Blog</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tips, guides, and stories about menstrual health, self-care, and empowerment.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <button
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group bg-[#fff5f5] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 text-left"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-[#c87a5e]/20 to-[#b5525f]/20 flex items-center justify-center">
                <div className="text-6xl">🌸</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#c87a5e] bg-[#fff5f5] px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#c87a5e] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </button>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c87a5e] hover:bg-[#b5525f] text-white font-semibold rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View All Articles
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
}
