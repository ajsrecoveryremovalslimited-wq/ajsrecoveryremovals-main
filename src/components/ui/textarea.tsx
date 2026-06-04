import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] sm:min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 sm:px-4 py-2 sm:py-2.5 text-base shadow-sm placeholder:text-muted-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:border-ring hover:border-ring/50 disabled:cursor-not-allowed disabled:opacity-50 resize-vertical md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
