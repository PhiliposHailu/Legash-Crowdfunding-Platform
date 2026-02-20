import React from "react";
import { Sparkles } from "lucide-react"; // Make sure to import this!

export default function HeroSection() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-24 mt-10">
      
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-medium mb-8 shadow-sm">
        <Sparkles className="w-4 h-4" />
        <span>Simple. Transparent. Secure.</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
        How Legash Works
      </h1>

      <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
        Whether you are <span className="text-green-600 font-semibold">launching a campaign</span> or <span className="text-blue-600 font-semibold">supporting a cause</span>, we make it easy to make a difference.
      </p>

    </div>
  );
}