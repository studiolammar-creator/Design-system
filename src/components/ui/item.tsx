import * as React from "react";
import { cn } from "@/lib/utils";

/* ── Item ── flexible list row with start slot, content, end slot ── */

const Item = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
      className
    )}
    {...props}
  />
));
Item.displayName = "Item";

/* ── ItemStart ── left slot (icon, avatar, etc.) ── */

const ItemStart = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex shrink-0 items-center", className)}
    {...props}
  />
));
ItemStart.displayName = "ItemStart";

/* ── ItemContent ── main text block ── */

const ItemContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-1 flex-col gap-0.5 overflow-hidden", className)} {...props} />
));
ItemContent.displayName = "ItemContent";

/* ── ItemTitle ── primary label ── */

const ItemTitle = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("truncate font-medium leading-none", className)} {...props} />
));
ItemTitle.displayName = "ItemTitle";

/* ── ItemDescription ── secondary label ── */

const ItemDescription = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("truncate text-xs text-muted-foreground", className)} {...props} />
));
ItemDescription.displayName = "ItemDescription";

/* ── ItemEnd ── right slot (badge, action, timestamp) ── */

const ItemEnd = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("ml-auto flex shrink-0 items-center gap-2", className)} {...props} />
));
ItemEnd.displayName = "ItemEnd";

export { Item, ItemStart, ItemContent, ItemTitle, ItemDescription, ItemEnd };
