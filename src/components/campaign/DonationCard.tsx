"use client";

import { ProgressBar } from "./ProgressBar";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";


interface Props {
  campaign: {
    goal: number;
    raised: number;
    donations: number;
    daysLeft: number;
  };
}

export const DonationCard = ({ campaign }: Props) => {
  const percentage = (campaign.raised / campaign.goal) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 space-y-6">

      {/* Amount */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900">
          ETB {campaign.raised.toLocaleString()}
        </h2>
        <p className="text-sm text-slate-500">
          raised of ETB {campaign.goal.toLocaleString()} goal
        </p>
      </div>

      <ProgressBar percentage={percentage} />

      <div className="flex justify-between text-sm text-slate-500">
        <span>{campaign.donations} donations</span>
        <span>{campaign.daysLeft} days left</span>
      </div>

      {/* CTA */}
      <button className="w-full bg-green-600 hover:bg-green-700 transition text-white font-medium py-3 rounded-xl">
        Donate Now
      </button>

      <button className="w-full border border-green-600 text-green-600 hover:bg-green-50 transition font-medium py-3 rounded-xl">
        Share
      </button>

      {/* Recent Donations */}
      <div>
        <h3 className="font-semibold mb-3">Recent Donations</h3>
        <div className="space-y-3 text-sm text-slate-600">
          <div className="flex justify-between">
            <span>Anonymous</span>
            <span className="font-medium">ETB 250,000</span>
          </div>
          <div className="flex justify-between">
            <span>Kebede Alemu</span>
            <span className="font-medium">ETB 50,000</span>
          </div>
          <div className="flex justify-between">
            <span>Tigist Bekele</span>
            <span className="font-medium">ETB 25,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};
