import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type FloatingNavbarProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function FloatingNavbar({ children, className, ...props }: FloatingNavbarProps) {
  return (
    <div className={cn("floating-navbar", className)} {...props}>
      {children}
    </div>
  );
}
