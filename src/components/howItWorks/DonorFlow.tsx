import { Search, ShieldCheck, CreditCard, Activity, HeartHandshake, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Discover",
    desc: "Browse categories or use our search to find campaigns that touch your heart.",
    icon: <Search className="w-6 h-6 text-blue-600" />,
  },
  {
    step: "02",
    title: "Review",
    desc: "Check for the 'Verified' badge and read the transparency report before giving.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
  },
  {
    step: "03",
    title: "Donate",
    desc: "Select your amount. We support Telebirr, CBE, and international cards.",
    icon: <CreditCard className="w-6 h-6 text-blue-600" />,
  },
  {
    step: "04",
    title: "Track",
    desc: "Receive updates via email and see exactly how your money is being used.",
    icon: <Activity className="w-6 h-6 text-blue-600" />,
  },
];

export default function DonorFlow() {
  return (
    <div className="mt-40 mb-20">
      
      <div className="flex flex-col items-center mb-20">
        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4 shadow-sm border border-blue-200">
          <HeartHandshake className="w-7 h-7" strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900">
          For Donors
        </h2>
        <p className="text-slate-500 mt-2">Make an impact in 4 steps</p>
      </div>

      <div className="relative">
        
        <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-blue-100 z-0" />

        <div className="grid md:grid-cols-4 gap-8 relative z-10">
          {STEPS.map((item, i) => (
            <div key={i} className="group relative">
              
              <div className="w-16 h-16 mx-auto bg-white border-2 border-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl shadow-sm mb-8 transition-all duration-500 group-hover:scale-110 group-hover:border-blue-500 group-hover:bg-blue-50">
                {item.step}
              </div>

              <div className="text-center bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 h-full flex flex-col items-center">
                
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {item.icon}
                </div>

                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {i !== STEPS.length - 1 && (
                <div className="md:hidden flex justify-center my-2 text-blue-200">
                  <ArrowDownMobile />
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArrowDownMobile() {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  )
}