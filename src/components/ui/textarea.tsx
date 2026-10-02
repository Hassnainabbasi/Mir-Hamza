import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex w-full bg-[#111116]/80 border border-white/15 p-4 text-sm text-[#f4f4ec] placeholder:text-[#9a9aa8] focus:border-[#d4b768] focus:outline-none transition-colors duration-200 min-h-[144px] resize-y",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
export { Textarea };
