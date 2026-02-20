import React from "react";
import { Link } from "lucide-react"; // Or your Next.js Link

export default function HowItWorksCtaSection() {
  return (
    <div className="mt-40 grid md:grid-cols-2 gap-10 pb-20">
      {/* Donor CTA */}
      <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-10 rounded-3xl text-center shadow-sm border border-blue-100">
        <h3 className="text-2xl font-semibold text-blue-900">Ready to Give?</h3>
        <p className="mt-4 text-slate-600">
          Support causes that create real impact within your community.
        </p>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition font-medium shadow-blue-200 shadow-lg">
          Browse Fundraisers
        </button>
      </div>

      {/* Fundraiser CTA */}
      <div className="bg-gradient-to-br from-green-100 to-green-50 p-10 rounded-3xl text-center shadow-sm border border-green-100">
        <h3 className="text-2xl font-semibold text-green-900">
          Start Fundraising
        </h3>
        <p className="mt-4 text-slate-600">
          Turn your idea into meaningful support today.
        </p>
        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl transition font-medium shadow-green-200 shadow-lg">
          Create Campaign
        </button>
      </div>
    </div>
  );
}