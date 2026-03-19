import * as React from "react";
import { cn } from "@/lib/utils";

/* ── InputGroup ── wraps an input with optional left/right addons ── */

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex w-full items-stretch", className)}
    {...props}
  />
));
InputGroup.displayName = "InputGroup";

/* ── InputGroupAddon ── prefix / suffix container ── */

export interface InputGroupAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "left" | "right";
}

const InputGroupAddon = React.forwardRef<HTMLDivElement, InputGroupAddonProps>(
  ({ className, position = "left", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center border border-input bg-muted px-3 text-sm text-muted-foreground",
        position === "left" ? "rounded-l-md border-r-0" : "rounded-r-md border-l-0",
        className
      )}
      {...props}
    />
  )
);
InputGroupAddon.displayName = "InputGroupAddon";

/* ── InputGroupInput ── the actual input inside the group ── */

const InputGroupInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "flex h-10 min-w-0 flex-1 border border-input bg-background px-3 py-2 text-sm ring-offset-background",
      "placeholder:text-muted-foreground",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
InputGroupInput.displayName = "InputGroupInput";

export { InputGroup, InputGroupAddon, InputGroupInput };
