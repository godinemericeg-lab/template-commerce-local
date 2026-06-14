import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type InfoBadgeProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  dot?: "open" | "accent" | "muted";
};

const dotColors = {
  open: "bg-emerald-300 shadow-[0_0_18px_rgb(110_231_183/0.85)]",
  accent: "bg-[rgb(var(--color-accent))] shadow-[0_0_18px_rgb(var(--color-accent)/0.65)]",
  muted: "bg-white/45"
};

export function InfoBadge({ children, className, dot = "accent", ...props }: InfoBadgeProps) {
  return (
    <div className={cn("info-badge", className)} {...props}>
      <span className={cn("h-2 w-2 rounded-full", dotColors[dot])} />
      {children}
    </div>
  );
}
