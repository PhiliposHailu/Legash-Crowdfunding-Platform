"use client";

import { useEffect, useState } from "react";

function HeroCategoryCard() {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const progress = 0.75;

  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    setOffset(circumference * (1 - progress));
  }, [circumference, progress]);

  return (
    <div className="relative flex items-center justify-center w-32 h-32">
      <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 128 128">
        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke="var(--secondary-light)"
          strokeWidth="10"
          fill="transparent"
        />

        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke="url(#gradient)"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-[stroke-dashoffset] duration-1000 ease-out"
        />

        <defs>
          <linearGradient
            id="gradient"
            gradientUnits="userSpaceOnUse"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="var(--secondary)" />
            <stop offset="100%" stopColor="var(--secondary-light)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-lg">
        <img
          src="https://picsum.photos/200"
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default HeroCategoryCard;
