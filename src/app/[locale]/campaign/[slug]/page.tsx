import Image from "next/image";
import { DonationCard } from "@/components/campaign/DonationCard";
import { OrganizerCard } from "@/components/campaign/OrganizerCard";
import { UpdateCard } from "@/components/campaign/UpdateCard";
import { CampaignGallery } from "@/components/campaign/CampaignGallery";

export default function CampaignDetailPage() {
  const campaign = {
    title: "Help Build Clean Water Wells for Rural Communities",
    goal: 1000000,
    raised: 875500,
    donations: 156,
    daysLeft: 13,
    images: [
      "/category/animals.webp",
      "/category/religious.webp",
      "/category/education.webp",
    ],
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8 max-w-4xl">
          {campaign.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
             <CampaignGallery images={campaign.images} />

            {/* <OrganizerCard /> ??? will we have this data*/}

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900">
                Every child deserves access to clean, safe drinking water.
              </h2>

              <p className="text-slate-600 leading-relaxed">
                For thousands of families in rural Ethiopia, access to clean
                water remains out of reach...
              </p>

              <p className="text-slate-600 leading-relaxed">
                This campaign aims to build three sustainable wells serving
                approximately 500 people each.
              </p>

              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Deep borehole drilling</li>
                <li>Hand pump installation</li>
                <li>Community hygiene education</li>
                <li>Local maintenance training</li>
              </ul>

              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="font-semibold text-green-800 mb-2">
                  Our goal is to raise{" "}
                  {campaign.goal.toLocaleString("en-US", {
                    style: "currency",
                    currency: "etb",
                    maximumFractionDigits: 0,
                  })}
                </h3>
                <p className="text-green-700 text-sm">
                  Every birr brings us closer.
                </p>
              </div>
            </div>

            {/* <div>
              <h2 className="text-2xl font-semibold mb-6">Updates</h2>
              <UpdateCard />
            </div> */}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <DonationCard campaign={campaign} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
