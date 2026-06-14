import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
};

export function SectionShell({ eyebrow, title, description, className, contentClassName, children }: SectionShellProps) {
  return (
    <section className={cn("section relative", className)}>
      <div className={cn("container", contentClassName)}>
        {title ? (
          <div className="section-heading">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">{title}</h2>
            {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-white/68">{description}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
