import * as React from "react";
import { cn } from "@/lib/utils";

/* ── Field ── label + control + helper/error wrapper ── */

const Field = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-1.5", className)} {...props} />
));
Field.displayName = "Field";

/* ── FieldLabel ── */

const FieldLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }
>(({ className, children, required, ...props }, ref) => (
  <label
    ref={ref}
    className={cn("text-sm font-medium leading-none text-foreground", className)}
    {...props}
  >
    {children}
    {required && <span className="ml-0.5 text-destructive">*</span>}
  </label>
));
FieldLabel.displayName = "FieldLabel";

/* ── FieldHint ── helper text below control ── */

const FieldHint = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs text-muted-foreground", className)}
    {...props}
  />
));
FieldHint.displayName = "FieldHint";

/* ── FieldError ── validation error text ── */

const FieldError = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    role="alert"
    className={cn("text-xs font-medium text-destructive", className)}
    {...props}
  />
));
FieldError.displayName = "FieldError";

export { Field, FieldLabel, FieldHint, FieldError };
