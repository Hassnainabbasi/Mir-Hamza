import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const base = "inline-flex items-center justify-center whitespace-nowrap text-xs font-semibold tracking-wider uppercase transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
    const variants = {
      default: "bg-[#d4b768] text-[#0a0a0c] hover:bg-[#ebd28d] shadow-[0_0_25px_rgba(212,183,104,0.35)]",
      outline: "border border-[#d4b768]/40 text-[#f4f4ec] hover:border-[#d4b768] hover:bg-[#d4b768]/10 hover:shadow-[0_0_20px_rgba(212,183,104,0.25)]",
      ghost: "text-[#f4f4ec] hover:bg-white/5 hover:text-[#d4b768]",
      secondary: "bg-[#181822] text-[#f4f4ec] border border-white/10 hover:border-[#2bd8e5]/40 hover:text-[#2bd8e5]"
    };
    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-9 px-4",
      lg: "h-14 px-8 text-sm",
      icon: "h-10 w-10"
    };
    return (
      <Comp
        className={cn(base, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export { Button };
