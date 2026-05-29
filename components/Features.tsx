"use client";

import { useState } from "react";
import { ShieldCheck, Leaf, Truck, Sparkles } from "lucide-react";

export default function Features() {


    return (
        <section className="border-y border-red-200/60 bg-orange-50/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "FDA Approved", desc: "Tested & certified safe" },
            { icon: Leaf, title: "Plant-Based", desc: "Sustainable materials" },
            { icon: Truck, title: "Free Shipping", desc: "On orders ₱500+" },
            { icon: Sparkles, title: "Dermatologist Tested", desc: "Gentle on sensitive skin" },
          ].map((f) => (
            <div key={f.title} className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-red-100 text-red-900"><f.icon className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold">{f.title}</div>
                <div className="text-sm text-muted-foreground">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}
