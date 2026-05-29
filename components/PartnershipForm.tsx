"use client";

import { useState } from "react";

export default function PartnershipForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdajbboz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="font-serif text-3xl md:text-4xl text-center text-gray-900 mb-4">
        Start Your <span className="text-[#c87a5e] italic">Journey</span>
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Fill out the form below and our partnership team will get back to you within 48 hours.
      </p>
      
      <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white border border-pink-100 space-y-6 shadow-lg">
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm text-gray-700">Full Name *</span>
            <input
              name="name"
              type="text"
              required
              className="mt-1 w-full px-4 py-3 rounded-lg border border-pink-200 bg-white outline-none focus:border-[#c87a5e] focus:ring-1 focus:ring-[#c87a5e] transition-colors"
            />
          </label>
          <label className="block">
            <span className="text-sm text-gray-700">Email *</span>
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full px-4 py-3 rounded-lg border border-pink-200 bg-white outline-none focus:border-[#c87a5e] focus:ring-1 focus:ring-[#c87a5e] transition-colors"
            />
          </label>
        </div>
        
        <label className="block">
          <span className="text-sm text-gray-700">Company Name *</span>
          <input
            name="company"
            type="text"
            required
            className="mt-1 w-full px-4 py-3 rounded-lg border border-pink-200 bg-white outline-none focus:border-[#c87a5e] focus:ring-1 focus:ring-[#c87a5e] transition-colors"
          />
        </label>
        
        <label className="block">
          <span className="text-sm text-gray-700">Partnership Type *</span>
          <select
            name="partnership_type"
            required
            className="mt-1 w-full px-4 py-3 rounded-lg border border-pink-200 bg-white outline-none focus:border-[#c87a5e] focus:ring-1 focus:ring-[#c87a5e] transition-colors"
          >
            <option value="">Select partnership type</option>
            <option value="Retail Partnership">Retail Partnership</option>
            <option value="Distributor Partnership">Distributor Partnership</option>
            <option value="Other">Other</option>
          </select>
        </label>
        
        <label className="block">
          <span className="text-sm text-gray-700">Tell us about your business *</span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Describe your business, location, and why you're interested in partnering with Whole Love..."
            className="mt-1 w-full px-4 py-3 rounded-lg border border-pink-200 bg-white outline-none focus:border-[#c87a5e] focus:ring-1 focus:ring-[#c87a5e] transition-colors resize-none"
          />
        </label>
        
        {submitStatus === "success" && (
          <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-center">
            Thank you! Your partnership inquiry has been sent successfully.
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-center">
            Something went wrong. Please try again or contact us directly at infinitech.eirene@gmail.com
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 rounded-full bg-[#b5525f] text-white hover:bg-[#a04854] transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Partnership Inquiry"}
        </button>
        
        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to receive communications from Whole Love regarding partnership opportunities.
        </p>
      </form>
    </div>
  );
}
