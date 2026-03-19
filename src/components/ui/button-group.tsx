import * as React from "react";
import { cn } from "@/lib/utils";

/* ── ButtonGroup ── attaches buttons into a segmented strip ── */

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    role="group"
    className={cn(
      "inline-flex items-stretch",
      "[&>button]:rounded-none",
      "[&>button:first-child]:rounded-l-md",
      "[&>button:last-child]:rounded-r-md",
      "[&>button:not(:first-child)]:border-l-0",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup };
