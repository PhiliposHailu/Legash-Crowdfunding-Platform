import { ShieldCheck, Lock, Eye } from "lucide-react";

export const TRUST_FEATURES = [
  {
    title: "Verified Fundraisers",
    description: "Every campaign is reviewed before going live.",
    icon: ShieldCheck,
  },
  {
    title: "Secure Payments",
    description: "Encrypted transactions via trusted payment partners.",
    icon: Lock,
  },
  {
    title: "Full Transparency",
    description: "Track donations and fund usage in real time.",
    icon: Eye,
  },
];


import Container from "@/components/shared/Container";
// import { TRUST_FEATURES } from "./trustFeatures";

const TrustSection = () => {
  return (
    <section className="py-20 bg-background">
      <Container>
        {/* HEADER */}
        <div className="max-w-2xl mx-auto text-center mb-14 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Built on <span className="text-primary">trust</span>
          </h2>
          <p className="text-muted-foreground">
            Donors and fundraisers deserve clarity, safety, and confidence.
          </p>
        </div>

        {/* TRUST ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {TRUST_FEATURES.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-4"
            >
              {/* ICON */}
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* TEXT */}
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MICRO TRUST NOTE */}
        <p className="mt-12 text-center text-xs text-muted-foreground uppercase tracking-widest">
          Secure • Verified • Transparent
        </p>
      </Container>
    </section>
  );
};

export default TrustSection;
