import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: ReactNode;
};

type PremiumLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & CommonProps;
type PremiumActionProps = ButtonHTMLAttributes<HTMLButtonElement> & CommonProps;

const variants = {
  primary: "premium-button premium-button-primary",
  secondary: "premium-button premium-button-secondary",
  ghost: "premium-button premium-button-ghost"
};

export function PremiumLink({ variant = "primary", className, children, ...props }: PremiumLinkProps) {
  return (
    <a className={cn(variants[variant], className)} {...props}>
      {children}
    </a>
  );
}

export function PremiumAction({ variant = "primary", className, children, ...props }: PremiumActionProps) {
  return (
    <button className={cn(variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
