"use client";

import { X } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function BlogModal({ post, onClose }: BlogModalProps) {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        {/* Header Image */}
        <div className="h-64 bg-gradient-to-br from-[#c87a5e]/20 to-[#b5525f]/20 flex items-center justify-center">
          <div className="text-8xl">🌸</div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-[#c87a5e] bg-[#fff5f5] px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-gray-500">{post.readTime}</span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-gray-500">{post.date}</span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-gray-600 mb-6 font-medium">
            {post.excerpt}
          </p>

          <div className="prose prose-pink max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {post.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
