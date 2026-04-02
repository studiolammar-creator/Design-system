import * as React from "react";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default:     "bg-background text-foreground border-border",
        // text-red-900 (#7F1D1D) on bg-destructive/10 gives ~13:1 contrast (WCAG AAA)
        destructive: "border-destructive/50 bg-destructive/10 text-red-900 dark:border-destructive [&>svg]:text-red-700",
        success:     "border-intense-400/50 text-intense-700 bg-intense-50 dark:border-intense-400 [&>svg]:text-intense-600",
        warning:     "border-secondary-400/50 text-secondary-800 bg-secondary-50 [&>svg]:text-secondary-600",
        informative: "border-info-scale-400/50 bg-info-scale-50 text-info-scale-800 [&>svg]:text-info-scale-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants> & {
    onDismiss?: () => void;
  }
>(({ className, variant, onDismiss, children, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(
      alertVariants({ variant }),
      onDismiss && "pr-10",
      "[&:has([data-slot=alert-actions])]:pr-40",
      className
    )}
    {...props}
  >
    {children}
    {onDismiss && (
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss"
        className="absolute top-3 right-3 rounded-sm opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <X className="h-4 w-4" />
      </button>
    )}
  </div>
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

const AlertActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="alert-actions"
    className={cn("absolute right-4 top-1/2 -translate-y-1/2 flex shrink-0 items-center gap-2", className)}
    {...props}
  />
));
AlertActions.displayName = "AlertActions";

export { Alert, AlertTitle, AlertDescription, AlertActions };
