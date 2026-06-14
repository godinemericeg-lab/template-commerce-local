import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  tone?: "clear" | "dark" | "solid";
};

const tones = {
  clear: "glass-card",
  dark: "glass-card glass-card-dark text-white",
  solid: "premium-card"
};

export function GlassCard({ tone = "clear", className, children, ...props }: GlassCardProps) {
  return (
    <div className={cn(tones[tone], "rounded-[28px]", className)} {...props}>
      {children}
    </div>
  );
}
