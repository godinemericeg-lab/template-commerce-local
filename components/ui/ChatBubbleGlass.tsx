import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ChatBubbleGlassProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function ChatBubbleGlass({ children, className, ...props }: ChatBubbleGlassProps) {
  return (
    <button className={cn("chat-bubble-glass", className)} {...props}>
      <span className="chat-bubble-glow" aria-hidden="true" />
      <span className="relative">{children}</span>
    </button>
  );
}
