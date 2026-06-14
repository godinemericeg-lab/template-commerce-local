"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ImageTreatment } from "@/config/visualConfig";
import { cn } from "@/lib/utils";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  aspect?: "wide" | "square" | "portrait" | "landscape";
  priority?: boolean;
  sizes?: string;
  overlay?: ImageTreatment | boolean;
  fallbackSrc?: string;
};

const aspectClasses = {
  wide: "aspect-[16/9]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  portrait: "aspect-[4/5]"
};

const overlayClasses: Record<ImageTreatment, string> = {
  darkOverlay: "bg-gradient-to-r from-black/78 via-black/46 to-black/12",
  softGradient: "bg-gradient-to-t from-black/42 via-black/10 to-transparent",
  warmFilter: "bg-[linear-gradient(135deg,rgb(120_72_38/0.22),rgb(0_0_0/0.22))]",
  coolFilter: "bg-[linear-gradient(135deg,rgb(15_23_42/0.58),rgb(37_99_235/0.18))]",
  grayscaleAccent: "bg-gradient-to-br from-black/50 via-black/20 to-brand-accent/20",
  none: ""
};

export function SmartImage({
  src,
  alt,
  className,
  imageClassName,
  aspect = "landscape",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  overlay,
  fallbackSrc
}: SmartImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);
  const [broken, setBroken] = useState(false);
  const treatment = typeof overlay === "string" ? overlay : overlay ? "softGradient" : "none";

  useEffect(() => {
    setCurrentSrc(src);
    setLoaded(false);
    setBroken(false);
  }, [src]);

  return (
    <div className={cn("relative isolate overflow-hidden rounded-lg bg-brand-secondary", aspectClasses[aspect], className)}>
      {!loaded && !broken ? <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-brand-secondary via-white to-brand-secondary" /> : null}
      {broken ? (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(var(--color-accent)/0.22),transparent_32%),linear-gradient(135deg,rgb(var(--color-secondary)),rgb(var(--color-bg)))]" />
      ) : (
        <Image
          src={currentSrc}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover transition duration-500", loaded ? "opacity-100" : "opacity-0", imageClassName)}
          onLoad={() => setLoaded(true)}
          onError={() => {
            if (fallbackSrc && currentSrc !== fallbackSrc) {
              setCurrentSrc(fallbackSrc);
              setLoaded(false);
              return;
            }
            setBroken(true);
          }}
        />
      )}
      {treatment !== "none" ? <div className={cn("absolute inset-0", overlayClasses[treatment])} /> : null}
    </div>
  );
}
