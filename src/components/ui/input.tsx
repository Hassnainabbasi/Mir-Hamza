import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex w-full bg-[#111116]/80 border border-white/15 px-4 py-3 text-sm text-[#f4f4ec] placeholder:text-[#9a9aa8] focus:border-[#d4b768] focus:outline-none transition-colors duration-200 min-h-[48px]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";
export { Input };
