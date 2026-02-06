"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface SmartImageProps extends ImageProps {
  containerClassName?: string;
  shimmerClassName?: string;
}

export default function SmartImage({
  src,
  alt,
  className,
  containerClassName,
  shimmerClassName,
  ...props
}: SmartImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-muted w-full h-full", containerClassName)}>
      
      {!isLoaded && (
        <Skeleton 
          className={cn("absolute inset-0 z-10 rounded-none", shimmerClassName)} 
        />
      )}

      <Image
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      />
    </div>
  );
}