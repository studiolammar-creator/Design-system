import * as React from "react";
import { cn } from "@/lib/utils";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, children, ...props }, ref) => (
    <kbd
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[0.7rem] font-semibold text-muted-foreground shadow-sm select-none",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  )
);
Kbd.displayName = "Kbd";

export { Kbd };
