"use client";

import { useState, useEffect } from "react";
import Container from "@/components/shared/Container";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Use our tools to create your fundraiser",
    description:
      "You'll be guided by prompts to add fundraiser details and set your goal. Make updates anytime.",
    image: "/how-it-works/legash-step-1.webp",
  },
  {
    title: "Reach donors by sharing",
    description:
      "Share your fundraiser link and use the resources in your dashboard to gain momentum.",
    image: "/how-it-works/legash-step-2.webp",
  },
  {
    title: "Securely receive funds",
    description:
      "Add your bank information, or invite your fundraiser beneficiary to add theirs, and start receiving funds.",
    image: "/how-it-works/legash-step-3.webp",
  },
];

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section className="py-24 bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Fundraising on Legash is easy, powerful, and trusted
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={cn(
              "relative aspect-square rounded-4xl bg-secondary flex items-center justify-center p-6 md:p-12 overflow-hidden shadow-xl",
              "w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-full mx-auto lg:mx-0",
            )}
          >
            <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
              <img
                key={activeIndex}
                src={steps[activeIndex].image}
                className="w-full h-full object-cover animate-in fade-in zoom-in duration-700"
                alt="how it works"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "flex gap-6 items-start text-left p-4 rounded-2xl transition-all duration-300",
                  activeIndex === index ? "bg-muted/30" : "hover:bg-muted/10",
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 font-bold transition-all duration-500 relative",
                    activeIndex === index
                      ? "bg-foreground text-white border-foreground scale-110 shadow-lg"
                      : "bg-white text-muted-foreground border-muted",
                  )}
                >
                  {index + 1}
                </div>

                <div className="space-y-2 pt-1">
                  <h3
                    className={cn(
                      "text-xl font-bold transition-colors",
                      activeIndex === index
                        ? "text-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "text-sm leading-relaxed transition-colors",
                      activeIndex === index
                        ? "text-foreground/80"
                        : "text-muted-foreground/70",
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
