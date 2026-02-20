import { ArrowDown, Rocket, CheckCircle2, Share2, Wallet } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Create Your Campaign",
    desc: "Tell your story clearly. Add high-quality photos and define a realistic goal.",
    icon: <Rocket className="w-5 h-5" />, 
  },
  {
    step: "02",
    title: "Get Verified",
    desc: "Our team reviews your documents to ensure authenticity and build donor trust.",
    icon: <CheckCircle2 className="w-5 h-5" />,
  },
  {
    step: "03",
    title: "Share & Engage",
    desc: "Share your unique link via WhatsApp and social media to reach your community.",
    icon: <Share2 className="w-5 h-5" />,
  },
  {
    step: "04",
    title: "Receive Funds",
    desc: "Track donations in real-time on your dashboard and withdraw securely to your bank.",
    icon: <Wallet className="w-5 h-5" />,
  },
];

export default function FundraiserFlow() {
  return (
    <div className="mt-32 relative">
      
      <div className="flex flex-col items-center mb-16">
        <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-secondary mb-4 shadow-sm border border-green-200">
          <Rocket className="w-7 h-7" strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900">
          For Fundraisers
        </h2>
        <p className="text-slate-500 mt-2">Start your journey in 4 steps</p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        
        <div className="absolute left-8 top-4 bottom-10 w-0.5 bg-slate-200 hidden md:block" />

        <div className="space-y-12">
          {STEPS.map((item, i) => (
            <div key={i} className="relative flex flex-col md:flex-row gap-8 group">
              
              <div className="hidden md:flex flex-none w-16 h-16 bg-white border-2 border-green-100 text-secondary rounded-full items-center justify-center font-bold shadow-sm z-10 group-hover:border-green-500 group-hover:scale-110 transition-all duration-500">
                <span className="text-xl">{item.step}</span>
              </div>

              <div className="md:hidden w-fit px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                Step {item.step}
              </div>

              <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-green-200 transition-all duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-50 rounded-lg text-secondary">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}