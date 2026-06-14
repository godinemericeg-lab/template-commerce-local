import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type MagneticCTAProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

const variants = {
  primary: "premium-button premium-button-primary magnetic-cta",
  secondary: "premium-button premium-button-secondary magnetic-cta",
  ghost: "premium-button premium-button-ghost magnetic-cta"
};

export function MagneticCTA({ variant = "primary", className, children, ...props }: MagneticCTAProps) {
  return (
    <a className={cn(variants[variant], className)} {...props}>
      <span>{children}</span>
      <span aria-hidden="true" className="magnetic-arrow">-&gt;</span>
    </a>
  );
}
