import { useState } from "react";
import {
  AlertCircle, AlignCenter, AlignLeft, AlignRight, Bell, Bold, Check, ChevronDown,
  Copy, Info, Italic, LogOut, Moon, Settings, Sun, User, Zap,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuLabel,
  ContextMenuSeparator, ContextMenuShortcut, ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Menubar, MenubarContent, MenubarItem, MenubarMenu,
  MenubarSeparator, MenubarShortcut, MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Table, TableBody, TableCaption, TableCell, TableHead,
  TableHeader, TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

/* ═══════════════════════════════════════════════════════════
   TOKEN DATA
═══════════════════════════════════════════════════════════ */

type SemanticToken = {
  token: string;
  cssVar: string;
  tailwind: string;
  lightHex: string;
  darkHex: string;
  description: string;
};

const semanticColorTokens: { group: string; tokens: SemanticToken[] }[] = [
  {
    group: "Surfaces",
    tokens: [
      { token: "background",         cssVar: "--background",         tailwind: "bg-background",         lightHex: "#FFFFFF", darkHex: "#0D0D0D", description: "Page / canvas background" },
      { token: "foreground",         cssVar: "--foreground",         tailwind: "text-foreground",        lightHex: "#333333", darkHex: "#FAFAFA", description: "Default body text" },
    ],
  },
  {
    group: "Card",
    tokens: [
      { token: "card",               cssVar: "--card",               tailwind: "bg-card",               lightHex: "#FFFFFF", darkHex: "#1A1A1A", description: "Card surface" },
      { token: "card-foreground",    cssVar: "--card-foreground",    tailwind: "text-card-foreground",   lightHex: "#333333", darkHex: "#FAFAFA", description: "Card text" },
    ],
  },
  {
    group: "Popover",
    tokens: [
      { token: "popover",            cssVar: "--popover",            tailwind: "bg-popover",            lightHex: "#FFFFFF", darkHex: "#1A1A1A", description: "Popover / dropdown surface" },
      { token: "popover-foreground", cssVar: "--popover-foreground", tailwind: "text-popover-foreground",lightHex: "#333333", darkHex: "#FAFAFA", description: "Popover text" },
    ],
  },
  {
    group: "Primary",
    tokens: [
      { token: "primary",            cssVar: "--primary",            tailwind: "bg-primary",            lightHex: "#013229", darkHex: "#61CAA0", description: "Primary action & brand" },
      { token: "primary-foreground", cssVar: "--primary-foreground", tailwind: "text-primary-foreground",lightHex: "#F0FBF8", darkHex: "#001A16", description: "Text on primary" },
    ],
  },
  {
    group: "Secondary",
    tokens: [
      { token: "secondary",            cssVar: "--secondary",            tailwind: "bg-secondary",            lightHex: "#FFD653", darkHex: "#FFD653", description: "Secondary action & highlights" },
      { token: "secondary-foreground", cssVar: "--secondary-foreground", tailwind: "text-secondary-foreground",lightHex: "#013229", darkHex: "#013229", description: "Text on secondary" },
    ],
  },
  {
    group: "Muted",
    tokens: [
      { token: "muted",            cssVar: "--muted",            tailwind: "bg-muted",            lightHex: "#F5F5F5", darkHex: "#333333", description: "Subtle backgrounds" },
      { token: "muted-foreground", cssVar: "--muted-foreground", tailwind: "text-muted-foreground",lightHex: "#737373", darkHex: "#A3A3A3", description: "Subdued text" },
    ],
  },
  {
    group: "Accent",
    tokens: [
      { token: "accent",            cssVar: "--accent",            tailwind: "bg-accent",            lightHex: "#61CAA0", darkHex: "#28956E", description: "Accent / hover states" },
      { token: "accent-foreground", cssVar: "--accent-foreground", tailwind: "text-accent-foreground",lightHex: "#013229", darkHex: "#F0FBF7", description: "Text on accent" },
    ],
  },
  {
    group: "Destructive",
    tokens: [
      { token: "destructive",            cssVar: "--destructive",            tailwind: "bg-destructive",            lightHex: "#EF4444", darkHex: "#991B1B", description: "Error & danger states" },
      { token: "destructive-foreground", cssVar: "--destructive-foreground", tailwind: "text-destructive-foreground",lightHex: "#FAFAFA", darkHex: "#FAFAFA", description: "Text on destructive" },
    ],
  },
  {
    group: "Borders & Focus",
    tokens: [
      { token: "border", cssVar: "--border", tailwind: "border-border", lightHex: "#E5E5E5", darkHex: "#404040", description: "Default border color" },
      { token: "input",  cssVar: "--input",  tailwind: "border-input",  lightHex: "#E5E5E5", darkHex: "#404040", description: "Input border color" },
      { token: "ring",   cssVar: "--ring",   tailwind: "ring-ring",     lightHex: "#013229", darkHex: "#61CAA0", description: "Focus ring" },
    ],
  },
];

type ColorSwatch = { name: string; hex: string; textClass: string };
type Palette = { label: string; key: string; swatches: ColorSwatch[] };

const palettes: Palette[] = [
  {
    label: "Primary — Forest Green", key: "primary",
    swatches: [
      { name: "50",  hex: "#F0FBF8", textClass: "text-neutral-800" },
      { name: "100", hex: "#D2F0E6", textClass: "text-neutral-800" },
      { name: "200", hex: "#A5E0CD", textClass: "text-neutral-800" },
      { name: "300", hex: "#70C9B0", textClass: "text-neutral-800" },
      { name: "400", hex: "#3EAF8F", textClass: "text-white" },
      { name: "500", hex: "#1E8F72", textClass: "text-white" },
      { name: "600", hex: "#0E7058", textClass: "text-white" },
      { name: "700", hex: "#065A45", textClass: "text-white" },
      { name: "800", hex: "#034536", textClass: "text-white" },
      { name: "900", hex: "#013229", textClass: "text-white" },
      { name: "950", hex: "#001A16", textClass: "text-white" },
    ],
  },
  {
    label: "Secondary — Golden Yellow", key: "secondary",
    swatches: [
      { name: "50",  hex: "#FFFBEB", textClass: "text-neutral-800" },
      { name: "100", hex: "#FFF4C2", textClass: "text-neutral-800" },
      { name: "200", hex: "#FFE87E", textClass: "text-neutral-800" },
      { name: "300", hex: "#FFD653", textClass: "text-neutral-800" },
      { name: "400", hex: "#FFC220", textClass: "text-neutral-800" },
      { name: "500", hex: "#E8A200", textClass: "text-neutral-800" },
      { name: "600", hex: "#CC8500", textClass: "text-white" },
      { name: "700", hex: "#A36900", textClass: "text-white" },
      { name: "800", hex: "#7A4E00", textClass: "text-white" },
      { name: "900", hex: "#523500", textClass: "text-white" },
      { name: "950", hex: "#301F00", textClass: "text-white" },
    ],
  },
  {
    label: "Intense — Mint Teal", key: "intense",
    swatches: [
      { name: "50",  hex: "#F0FBF7", textClass: "text-neutral-800" },
      { name: "100", hex: "#D3F2E6", textClass: "text-neutral-800" },
      { name: "200", hex: "#A8E4CE", textClass: "text-neutral-800" },
      { name: "300", hex: "#75D4B5", textClass: "text-neutral-800" },
      { name: "400", hex: "#61CAA0", textClass: "text-neutral-800" },
      { name: "500", hex: "#3BB688", textClass: "text-white" },
      { name: "600", hex: "#28956E", textClass: "text-white" },
      { name: "700", hex: "#1B7455", textClass: "text-white" },
      { name: "800", hex: "#12543E", textClass: "text-white" },
      { name: "900", hex: "#0B3D2C", textClass: "text-white" },
      { name: "950", hex: "#06271C", textClass: "text-white" },
    ],
  },
  {
    label: "Neutral — Grey", key: "neutral",
    swatches: [
      { name: "50",  hex: "#FAFAFA", textClass: "text-neutral-800" },
      { name: "100", hex: "#F5F5F5", textClass: "text-neutral-800" },
      { name: "200", hex: "#E5E5E5", textClass: "text-neutral-800" },
      { name: "300", hex: "#D4D4D4", textClass: "text-neutral-800" },
      { name: "400", hex: "#A3A3A3", textClass: "text-neutral-800" },
      { name: "500", hex: "#737373", textClass: "text-white" },
      { name: "600", hex: "#525252", textClass: "text-white" },
      { name: "700", hex: "#404040", textClass: "text-white" },
      { name: "800", hex: "#333333", textClass: "text-white" },
      { name: "900", hex: "#1A1A1A", textClass: "text-white" },
      { name: "950", hex: "#0D0D0D", textClass: "text-white" },
    ],
  },
];

const typographyTokens = {
  fontFamily: [
    { token: "font-sans", value: "Unigeo32, ui-sans-serif, system-ui, sans-serif", sample: "Aa Bb Cc 123" },
    { token: "font-mono", value: "Space Mono, ui-monospace, SFMono-Regular, Menlo, monospace", sample: "const x = 42;" },
  ],
  fontSize: [
    { token: "text-xs",   value: "12px",  cls: "text-xs" },
    { token: "text-sm",   value: "14px",  cls: "text-sm" },
    { token: "text-base", value: "16px",  cls: "text-base" },
    { token: "text-lg",   value: "18px",  cls: "text-lg" },
    { token: "text-xl",   value: "20px",  cls: "text-xl" },
    { token: "text-2xl",  value: "24px",  cls: "text-2xl" },
    { token: "text-3xl",  value: "30px",  cls: "text-3xl" },
    { token: "text-4xl",  value: "36px",  cls: "text-4xl" },
    { token: "text-5xl",  value: "48px",  cls: "text-5xl" },
  ],
  fontWeight: [
    { token: "font-normal",    value: "400", cls: "font-normal" },
    { token: "font-medium",    value: "500", cls: "font-medium" },
    { token: "font-semibold",  value: "600", cls: "font-semibold" },
    { token: "font-bold",      value: "700", cls: "font-bold" },
    { token: "font-extrabold", value: "800", cls: "font-extrabold" },
  ],
  lineHeight: [
    { token: "leading-none",    value: "1",     cls: "leading-none" },
    { token: "leading-tight",   value: "1.25",  cls: "leading-tight" },
    { token: "leading-snug",    value: "1.375", cls: "leading-snug" },
    { token: "leading-normal",  value: "1.5",   cls: "leading-normal" },
    { token: "leading-relaxed", value: "1.625", cls: "leading-relaxed" },
    { token: "leading-loose",   value: "2",     cls: "leading-loose" },
  ],
  letterSpacing: [
    { token: "tracking-tighter", value: "-0.05em",  cls: "tracking-tighter" },
    { token: "tracking-tight",   value: "-0.025em", cls: "tracking-tight" },
    { token: "tracking-normal",  value: "0em",      cls: "tracking-normal" },
    { token: "tracking-wide",    value: "0.025em",  cls: "tracking-wide" },
    { token: "tracking-wider",   value: "0.05em",   cls: "tracking-wider" },
    { token: "tracking-widest",  value: "0.1em",    cls: "tracking-widest" },
  ],
};

const spacingTokens = [
  { token: "spacing-0",   value: "0px",   px: 0 },
  { token: "spacing-px",  value: "1px",   px: 1 },
  { token: "spacing-0.5", value: "2px",   px: 2 },
  { token: "spacing-1",   value: "4px",   px: 4 },
  { token: "spacing-1.5", value: "6px",   px: 6 },
  { token: "spacing-2",   value: "8px",   px: 8 },
  { token: "spacing-2.5", value: "10px",  px: 10 },
  { token: "spacing-3",   value: "12px",  px: 12 },
  { token: "spacing-3.5", value: "14px",  px: 14 },
  { token: "spacing-4",   value: "16px",  px: 16 },
  { token: "spacing-5",   value: "20px",  px: 20 },
  { token: "spacing-6",   value: "24px",  px: 24 },
  { token: "spacing-7",   value: "28px",  px: 28 },
  { token: "spacing-8",   value: "32px",  px: 32 },
  { token: "spacing-9",   value: "36px",  px: 36 },
  { token: "spacing-10",  value: "40px",  px: 40 },
  { token: "spacing-12",  value: "48px",  px: 48 },
  { token: "spacing-14",  value: "56px",  px: 56 },
  { token: "spacing-16",  value: "64px",  px: 64 },
  { token: "spacing-20",  value: "80px",  px: 80 },
  { token: "spacing-24",  value: "96px",  px: 96 },
  { token: "spacing-32",  value: "128px", px: 128 },
];

const radiusTokens = [
  { token: "rounded-none", value: "0px",    cls: "rounded-none" },
  { token: "rounded-sm",   value: "2px",    cls: "rounded-sm" },
  { token: "rounded",      value: "4px",    cls: "rounded" },
  { token: "rounded-md",   value: "6px",    cls: "rounded-md" },
  { token: "rounded-lg",   value: "8px",    cls: "rounded-lg" },
  { token: "rounded-xl",   value: "12px",   cls: "rounded-xl" },
  { token: "rounded-2xl",  value: "16px",   cls: "rounded-2xl" },
  { token: "rounded-3xl",  value: "24px",   cls: "rounded-3xl" },
  { token: "rounded-full", value: "9999px", cls: "rounded-full" },
];

const shadowTokens = [
  { token: "shadow-none",  value: "none",                             cls: "shadow-none" },
  { token: "shadow-sm",    value: "0 1px 2px rgba(0,0,0,0.05)",      cls: "shadow-sm" },
  { token: "shadow",       value: "0 1px 3px rgba(0,0,0,0.10)",      cls: "shadow" },
  { token: "shadow-md",    value: "0 4px 6px rgba(0,0,0,0.10)",      cls: "shadow-md" },
  { token: "shadow-lg",    value: "0 10px 15px rgba(0,0,0,0.10)",    cls: "shadow-lg" },
  { token: "shadow-xl",    value: "0 20px 25px rgba(0,0,0,0.10)",    cls: "shadow-xl" },
  { token: "shadow-2xl",   value: "0 25px 50px rgba(0,0,0,0.25)",    cls: "shadow-2xl" },
  { token: "shadow-inner", value: "inset 0 2px 4px rgba(0,0,0,0.06)", cls: "shadow-inner" },
];

const invoices = [
  { invoice: "INV-001", status: "Paid",    method: "Credit Card",  amount: "$250.00" },
  { invoice: "INV-002", status: "Pending", method: "PayPal",       amount: "$150.00" },
  { invoice: "INV-003", status: "Paid",    method: "Bank Transfer", amount: "$350.00" },
  { invoice: "INV-004", status: "Overdue", method: "Credit Card",  amount: "$450.00" },
];

/* ═══════════════════════════════════════════════════════════
   SMALL REUSABLE PIECES
═══════════════════════════════════════════════════════════ */

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {description && <p className="text-muted-foreground mt-1 text-sm">{description}</p>}
      </div>
      <Separator />
      <div>{children}</div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════
   TOKENS PAGE
═══════════════════════════════════════════════════════════ */

function TokensPage({ dark }: { dark: boolean }) {
  return (
    <div className="space-y-16">

      {/* ── Intro ── */}
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight">Design Tokens</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          All tokens are defined as CSS custom properties and mapped to Tailwind utilities.
          Import <code>tokens.json</code> via Tokens Studio or use <code>tokens.css</code> directly.
        </p>
      </div>

      <Tabs defaultValue="colors">
        <TabsList className="flex-wrap h-auto gap-1">
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="spacing">Spacing</TabsTrigger>
          <TabsTrigger value="radius">Radius</TabsTrigger>
          <TabsTrigger value="shadows">Shadows</TabsTrigger>
        </TabsList>

        {/* ─── Colors ─────────────────────────────── */}
        <TabsContent value="colors" className="space-y-12 pt-6">

          {/* Semantic tokens */}
          <Section title="Semantic Tokens" description="CSS variables that switch value between light and dark mode.">
            <div className="space-y-8">
              {semanticColorTokens.map((group) => (
                <div key={group.group} className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{group.group}</p>
                  <div className="rounded-lg border border-border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="w-[180px]">Token</TableHead>
                          <TableHead className="w-[160px]">CSS Variable</TableHead>
                          <TableHead className="w-[200px]">Tailwind</TableHead>
                          <TableHead>Light</TableHead>
                          <TableHead>Dark</TableHead>
                          <TableHead className="hidden md:table-cell">Usage</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {group.tokens.map((t) => (
                          <TableRow key={t.token}>
                            <TableCell className="font-mono text-sm font-medium">{t.token}</TableCell>
                            <TableCell className="font-mono text-xs text-muted-foreground">{t.cssVar}</TableCell>
                            <TableCell className="font-mono text-xs text-muted-foreground">{t.tailwind}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <div
                                  className="h-6 w-6 rounded border border-border shrink-0"
                                  style={{ backgroundColor: t.lightHex }}
                                />
                                <span className="font-mono text-xs">{t.lightHex}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <div
                                  className="h-6 w-6 rounded border border-border shrink-0"
                                  style={{ backgroundColor: t.darkHex }}
                                />
                                <span className="font-mono text-xs">{t.darkHex}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-xs text-muted-foreground hidden md:table-cell">{t.description}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Live preview */}
          <Section title="Live Preview" description={`Semantic tokens rendered in ${dark ? "dark" : "light"} mode.`}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "background",  bg: "bg-background border border-border",   text: "text-foreground" },
                { label: "primary",     bg: "bg-primary",                            text: "text-primary-foreground" },
                { label: "secondary",   bg: "bg-secondary",                          text: "text-secondary-foreground" },
                { label: "accent",      bg: "bg-accent",                             text: "text-accent-foreground" },
                { label: "muted",       bg: "bg-muted",                              text: "text-muted-foreground" },
                { label: "card",        bg: "bg-card border border-border",          text: "text-card-foreground" },
                { label: "destructive", bg: "bg-destructive",                        text: "text-destructive-foreground" },
                { label: "border",      bg: "bg-border",                             text: "text-foreground" },
              ].map(({ label, bg, text }) => (
                <div key={label} className={`${bg} rounded-lg p-4 flex items-center justify-center h-20`}>
                  <span className={`${text} text-xs font-mono font-semibold`}>{label}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Primitive palettes */}
          <Section title="Primitive Palettes" description="Raw color scales — 11 steps from 50 to 950.">
            <div className="space-y-8">
              {palettes.map((p) => (
                <div key={p.key} className="space-y-2">
                  <p className="text-sm font-medium">{p.label}</p>
                  <div className="grid grid-cols-11 gap-1">
                    {p.swatches.map((s) => (
                      <div key={s.name} className="flex flex-col gap-1 min-w-0">
                        <div
                          className={`h-14 w-full rounded-md flex items-end p-1.5 ${s.textClass}`}
                          style={{ backgroundColor: s.hex }}
                        >
                          <span className="text-[9px] font-mono leading-none opacity-80">{s.name}</span>
                        </div>
                        <span className="text-[9px] font-mono text-muted-foreground truncate">{s.hex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </TabsContent>

        {/* ─── Typography ─────────────────────────── */}
        <TabsContent value="typography" className="space-y-12 pt-6">

          <Section title="Font Family" description="Two typefaces: display/body and monospace.">
            <div className="rounded-lg border border-border overflow-hidden">
              {typographyTokens.fontFamily.map((f, i) => (
                <div key={f.token} className={`flex items-center gap-6 p-5 ${i < typographyTokens.fontFamily.length - 1 ? "border-b border-border" : ""}`}>
                  <span className="font-mono text-sm text-muted-foreground w-24 shrink-0">{f.token}</span>
                  <span className="text-2xl font-semibold flex-1 min-w-0 truncate" style={{ fontFamily: f.value.split(",")[0] }}>{f.sample}</span>
                  <span className="font-mono text-xs text-muted-foreground hidden md:block truncate max-w-xs">{f.value}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Font Size" description="Type scale from xs (12px) to 5xl (48px).">
            <div className="rounded-lg border border-border overflow-hidden">
              {typographyTokens.fontSize.map((f, i) => (
                <div key={f.token} className={`group flex items-baseline gap-4 px-5 py-3 hover:bg-muted/50 transition-colors ${i < typographyTokens.fontSize.length - 1 ? "border-b border-border" : ""}`}>
                  <span className="font-mono text-xs text-muted-foreground w-20 shrink-0">{f.token}</span>
                  <span className="font-mono text-xs text-muted-foreground w-12 shrink-0">{f.value}</span>
                  <span className={`${f.cls} font-medium leading-none`}>Pau Design System</span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Font Weight" description="Five weight steps from regular (400) to extrabold (800).">
            <div className="rounded-lg border border-border overflow-hidden">
              {typographyTokens.fontWeight.map((f, i) => (
                <div key={f.token} className={`group flex items-center gap-6 px-5 py-4 hover:bg-muted/50 transition-colors ${i < typographyTokens.fontWeight.length - 1 ? "border-b border-border" : ""}`}>
                  <span className="font-mono text-xs text-muted-foreground w-32 shrink-0">{f.token}</span>
                  <span className="font-mono text-xs text-muted-foreground w-8 shrink-0">{f.value}</span>
                  <span className={`text-2xl ${f.cls}`}>Pau Design System</span>
                </div>
              ))}
            </div>
          </Section>

          <div className="grid gap-8 md:grid-cols-2">
            <Section title="Line Height" description="Leading scale from none (1) to loose (2).">
              <div className="rounded-lg border border-border overflow-hidden">
                {typographyTokens.lineHeight.map((f, i) => (
                  <div key={f.token} className={`group flex items-start gap-4 px-4 py-3 hover:bg-muted/50 transition-colors ${i < typographyTokens.lineHeight.length - 1 ? "border-b border-border" : ""}`}>
                    <span className="font-mono text-xs text-muted-foreground w-32 shrink-0 pt-0.5">{f.token}</span>
                    <span className="font-mono text-xs text-muted-foreground w-8 shrink-0 pt-0.5">{f.value}</span>
                    <p className={`text-sm ${f.cls} text-muted-foreground`}>The quick brown fox jumps over the lazy dog.</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Letter Spacing" description="Tracking scale from tighter to widest.">
              <div className="rounded-lg border border-border overflow-hidden">
                {typographyTokens.letterSpacing.map((f, i) => (
                  <div key={f.token} className={`group flex items-center gap-4 px-4 py-3 hover:bg-muted/50 transition-colors ${i < typographyTokens.letterSpacing.length - 1 ? "border-b border-border" : ""}`}>
                    <span className="font-mono text-xs text-muted-foreground w-36 shrink-0">{f.token}</span>
                    <span className="font-mono text-xs text-muted-foreground w-16 shrink-0">{f.value}</span>
                    <span className={`text-sm font-medium uppercase ${f.cls}`}>Pau</span>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </TabsContent>

        {/* ─── Spacing ────────────────────────────── */}
        <TabsContent value="spacing" className="pt-6">
          <Section title="Spacing Scale" description="4px base unit — 32 steps from 0 to 128px.">
            <div className="rounded-lg border border-border overflow-hidden">
              {spacingTokens.map((s, i) => (
                <div key={s.token} className={`group flex items-center gap-4 px-5 py-2 hover:bg-muted/50 transition-colors ${i < spacingTokens.length - 1 ? "border-b border-border" : ""}`}>
                  <span className="font-mono text-xs text-muted-foreground w-28 shrink-0">{s.token}</span>
                  <span className="font-mono text-xs text-muted-foreground w-12 shrink-0">{s.value}</span>
                  <div className="flex-1 flex items-center">
                    <div
                      className="h-4 rounded-sm bg-primary/60 min-w-[2px]"
                      style={{ width: `${Math.min(s.px, 256)}px` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </TabsContent>

        {/* ─── Radius ─────────────────────────────── */}
        <TabsContent value="radius" className="pt-6">
          <Section title="Border Radius" description="From none (0) to full (9999px).">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {radiusTokens.map((r) => (
                <div key={r.token} className="flex flex-col gap-3 items-start">
                  <div
                    className={`${r.cls} w-full aspect-square bg-primary/15 border-2 border-primary/40 flex items-center justify-center max-w-[100px]`}
                  />
                  <div>
                    <p className="font-mono text-sm font-medium">{r.token}</p>
                    <p className="font-mono text-xs text-muted-foreground">{r.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </TabsContent>

        {/* ─── Shadows ────────────────────────────── */}
        <TabsContent value="shadows" className="pt-6">
          <Section title="Box Shadows" description="Eight levels from none to 2xl, plus inner.">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {shadowTokens.map((s) => (
                <div key={s.token} className="flex flex-col gap-4">
                  <div className={`${s.cls} rounded-xl bg-card border border-border h-24 flex items-center justify-center`}>
                    <span className="font-mono text-sm font-semibold text-muted-foreground">{s.token}</span>
                  </div>
                  <div>
                    <p className="font-mono text-sm font-medium">{s.token}</p>
                    <p className="font-mono text-xs text-muted-foreground mt-0.5 break-all">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </TabsContent>
      </Tabs>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPONENTS PAGE
═══════════════════════════════════════════════════════════ */

function ComponentsPage() {
  const [checked, setChecked] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);
  const [sliderValue, setSliderValue] = useState([40]);
  const [radioValue, setRadioValue] = useState("option-1");
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);

  return (
    <div className="space-y-16">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight">Components</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          All ShadCN components, pre-themed with Pau's brand tokens. Copy any variant directly into your project.
        </p>
      </div>

      {/* Typography */}
      <Section title="Typography" description="Unigeo32 — headings to captions.">
        <div className="space-y-1">
          {[
            { label: "Heading 1",   cls: "text-4xl font-extrabold tracking-tight" },
            { label: "Heading 2",   cls: "text-3xl font-semibold tracking-tight" },
            { label: "Heading 3",   cls: "text-2xl font-semibold tracking-tight" },
            { label: "Heading 4",   cls: "text-xl font-semibold tracking-tight" },
            { label: "Body Large",  cls: "text-lg leading-relaxed" },
            { label: "Body",        cls: "text-base leading-relaxed" },
            { label: "Body Small",  cls: "text-sm leading-normal" },
            { label: "Caption",     cls: "text-xs font-medium tracking-wide uppercase" },
            { label: "Code",        cls: "text-sm font-mono" },
          ].map(({ label, cls }) => (
            <div key={label} className="flex items-baseline gap-6 border-b border-border py-3 last:border-0">
              <span className="w-24 shrink-0 text-xs text-muted-foreground font-mono">{label}</span>
              <p className={cls}>The quick brown fox jumps over the lazy dog</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Buttons */}
      <Section title="Buttons" description="Seven variants × four sizes.">
        <Tabs defaultValue="variants">
          <TabsList>
            <TabsTrigger value="variants">Variants</TabsTrigger>
            <TabsTrigger value="sizes">Sizes</TabsTrigger>
            <TabsTrigger value="states">States</TabsTrigger>
          </TabsList>
          <TabsContent value="variants" className="pt-4">
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </TabsContent>
          <TabsContent value="sizes" className="pt-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Bell className="h-4 w-4" /></Button>
            </div>
          </TabsContent>
          <TabsContent value="states" className="pt-4">
            <div className="flex flex-wrap gap-3">
              <Button>Active</Button>
              <Button disabled>Disabled</Button>
              <Button variant="outline" disabled>Outline Disabled</Button>
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      {/* Badges */}
      <Section title="Badges" description="Status indicators and labels.">
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="accent">Accent</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </Section>

      {/* Cards */}
      <Section title="Cards" description="Content containers with header, body, and footer.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Forest Plan</CardTitle>
              <CardDescription>Perfect for growing teams and projects.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$29<span className="text-base font-normal text-muted-foreground">/mo</span></p>
              <ul className="mt-4 space-y-2 text-sm">
                {["Unlimited projects", "10 team members", "Analytics", "Priority support"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />{f}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get started</Button>
            </CardFooter>
          </Card>

          <Card className="border-primary bg-primary text-primary-foreground">
            <CardHeader>
              <Badge className="w-fit bg-secondary text-secondary-foreground">Popular</Badge>
              <CardTitle className="text-primary-foreground">Golden Plan</CardTitle>
              <CardDescription className="text-primary-foreground/70">Best value for scaling organisations.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$79<span className="text-base font-normal opacity-70">/mo</span></p>
              <ul className="mt-4 space-y-2 text-sm">
                {["Everything in Forest", "Unlimited members", "Custom domains", "SLA + 24/7 support"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />{f}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">Get started</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Manage your preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { id: "c-email", label: "Email notifications" },
                { id: "c-sms",   label: "SMS alerts" },
                { id: "c-push",  label: "Push notifications" },
              ].map(({ id, label }) => (
                <div key={id} className="flex items-center justify-between">
                  <Label htmlFor={id} className="cursor-pointer">{label}</Label>
                  <Switch id={id} />
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Save preferences</Button>
            </CardFooter>
          </Card>
        </div>
      </Section>

      {/* Form Controls */}
      <Section title="Form Controls" description="Inputs, selects, checkboxes, and switches.">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email-c">Email address</Label>
              <Input id="email-c" type="email" placeholder="hello@pau.design" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pass-c">Password</Label>
              <Input id="pass-c" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role-c">Role</Label>
              <Select>
                <SelectTrigger id="role-c">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="pm">Product Manager</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms-c" checked={checked} onCheckedChange={(v) => setChecked(!!v)} />
              <Label htmlFor="terms-c" className="cursor-pointer">I agree to the terms and conditions</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="notif-c" checked={switchOn} onCheckedChange={setSwitchOn} />
              <Label htmlFor="notif-c" className="cursor-pointer">
                {switchOn ? "Notifications enabled" : "Notifications disabled"}
              </Label>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Avatars</Label>
              <div className="flex items-center gap-3 flex-wrap">
                {["EL", "AB", "CD", "EF"].map((i) => (
                  <Avatar key={i}><AvatarImage src="" /><AvatarFallback>{i}</AvatarFallback></Avatar>
                ))}
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="text-base bg-primary text-primary-foreground">EL</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Dialog</Label>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Confirm action</DialogTitle>
                    <DialogDescription>This action cannot be undone. Are you sure you want to continue?</DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Confirm</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <div className="space-y-2">
              <Label>Tooltips</Label>
              <div className="flex gap-3">
                {["Default", "Info", "Success"].map((label) => (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm">{label}</Button>
                    </TooltipTrigger>
                    <TooltipContent>This is a {label.toLowerCase()} tooltip</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Alerts */}
      <Section title="Alerts" description="Four semantic variants.">
        <div className="space-y-3">
          <Alert><Info className="h-4 w-4" /><AlertTitle>Heads up!</AlertTitle><AlertDescription>You can add components to your app using the CLI.</AlertDescription></Alert>
          <Alert variant="success"><Check className="h-4 w-4" /><AlertTitle>All systems operational</AlertTitle><AlertDescription>Everything is running smoothly.</AlertDescription></Alert>
          <Alert variant="warning"><Bell className="h-4 w-4" /><AlertTitle>Approaching limit</AlertTitle><AlertDescription>You have used 80% of your storage quota.</AlertDescription></Alert>
          <Alert variant="destructive"><AlertCircle className="h-4 w-4" /><AlertTitle>Deployment failed</AlertTitle><AlertDescription>Check your configuration and try again.</AlertDescription></Alert>
        </div>
      </Section>

      {/* Table */}
      <Section title="Table" description="Data display with status badges.">
        <Card>
          <Table>
            <TableCaption>Recent invoices — Q1 2026</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((row) => (
                <TableRow key={row.invoice}>
                  <TableCell className="font-medium">{row.invoice}</TableCell>
                  <TableCell>
                    <Badge variant={row.status === "Paid" ? "success" : row.status === "Pending" ? "secondary" : "destructive"}>
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{row.method}</TableCell>
                  <TableCell className="text-right font-mono">{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Section>

      {/* Accordion */}
      <Section title="Accordion" description="Collapsible sections for progressive disclosure.">
        <Accordion type="single" collapsible className="w-full max-w-lg">
          {[
            { value: "item-1", trigger: "What is Pau Design System?", content: "Pau is a fully-themed ShadCN-based component library built on Radix UI primitives, tailored with brand tokens for Forest Green, Golden Yellow, and Mint Teal." },
            { value: "item-2", trigger: "Which typefaces are included?", content: "Unigeo32 is the primary display and body typeface across all weights (Thin to Extrabold). Space Mono handles monospace code snippets." },
            { value: "item-3", trigger: "Is dark mode supported?", content: "Yes — every component and token adapts seamlessly between light and dark modes. Toggle it with the sun/moon button in the header." },
          ].map(({ value, trigger, content }) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger>{trigger}</AccordionTrigger>
              <AccordionContent>{content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* Alert Dialog */}
      <Section title="Alert Dialog" description="Blocking confirmation dialogs for destructive actions.">
        <div className="flex gap-3 flex-wrap">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete project</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete project?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete "Forest Initiative" and all its data. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Remove member</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Remove team member?</AlertDialogTitle>
                <AlertDialogDescription>
                  They will lose access to all projects immediately.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Remove</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Section>

      {/* Sheet */}
      <Section title="Sheet" description="Slide-in panels from any edge of the screen.">
        <div className="flex gap-3 flex-wrap">
          {(["right", "left", "top", "bottom"] as const).map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline" className="capitalize">Open {side}</Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Pau Panel</SheetTitle>
                  <SheetDescription>
                    This panel slides in from the {side}. Use it for settings, filters, or detail views.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <Label>Project name</Label>
                    <Input placeholder="Forest Initiative" />
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea placeholder="Describe your project…" />
                  </div>
                  <Button className="w-full">Save changes</Button>
                </div>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </Section>

      {/* Progress & Slider */}
      <Section title="Progress & Slider" description="Linear progress indicators and range inputs.">
        <div className="grid gap-8 sm:grid-cols-2 max-w-2xl">
          <div className="space-y-4">
            <Label className="text-sm font-semibold">Progress bars</Label>
            {[25, 60, 85, 100].map((v) => (
              <div key={v} className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Task progress</span><span>{v}%</span>
                </div>
                <Progress value={v} className="h-2" />
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <Label className="text-sm font-semibold">Slider</Label>
            <div className="space-y-3">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Volume</span><span>{sliderValue[0]}%</span>
              </div>
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                max={100}
                step={1}
              />
            </div>
            <div className="space-y-2">
              <Slider defaultValue={[20, 80]} max={100} step={5} />
              <p className="text-xs text-muted-foreground">Range slider (20–80)</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Radio Group & Textarea */}
      <Section title="Radio Group & Textarea" description="Single-selection controls and multi-line text input.">
        <div className="grid gap-8 sm:grid-cols-2 max-w-2xl">
          <div className="space-y-3">
            <Label className="text-sm font-semibold">Plan selection</Label>
            <RadioGroup value={radioValue} onValueChange={setRadioValue}>
              {[
                { id: "option-1", label: "Forest Plan — $29/mo" },
                { id: "option-2", label: "Golden Plan — $79/mo" },
                { id: "option-3", label: "Enterprise — Custom" },
              ].map(({ id, label }) => (
                <div key={id} className="flex items-center space-x-2">
                  <RadioGroupItem value={id} id={id} />
                  <Label htmlFor={id} className="cursor-pointer">{label}</Label>
                </div>
              ))}
            </RadioGroup>
            <p className="text-xs text-muted-foreground">Selected: {radioValue}</p>
          </div>
          <div className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="feedback">Feedback</Label>
              <Textarea id="feedback" placeholder="Share your thoughts about this design system…" rows={4} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes (disabled)</Label>
              <Textarea id="notes" placeholder="Disabled textarea…" disabled />
            </div>
          </div>
        </div>
      </Section>

      {/* Toggle & Toggle Group */}
      <Section title="Toggle & Toggle Group" description="Single and grouped toggle buttons.">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Single toggles</Label>
            <div className="flex gap-2">
              <Toggle aria-label="Bold"><Bold className="h-4 w-4" /></Toggle>
              <Toggle aria-label="Italic"><Italic className="h-4 w-4" /></Toggle>
              <Toggle variant="outline" aria-label="Bold outline"><Bold className="h-4 w-4" /></Toggle>
              <Toggle pressed><Zap className="h-4 w-4 mr-1" />Turbo</Toggle>
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Toggle group (single)</Label>
            <ToggleGroup type="single" defaultValue="center">
              <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft className="h-4 w-4" /></ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter className="h-4 w-4" /></ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right"><AlignRight className="h-4 w-4" /></ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Toggle group (multiple)</Label>
            <ToggleGroup type="multiple" variant="outline">
              <ToggleGroupItem value="bold" aria-label="Bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic"><Italic className="h-4 w-4" /></ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </Section>

      {/* Skeleton */}
      <Section title="Skeleton" description="Loading placeholders that mimic content layout.">
        <div className="grid gap-6 sm:grid-cols-2 max-w-2xl">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-3/5" />
          </div>
          <Card>
            <CardHeader className="gap-2">
              <Skeleton className="h-5 w-1/2" />
              <Skeleton className="h-4 w-4/5" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-32 w-full rounded-md" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-9 w-24 rounded-md" />
            </CardFooter>
          </Card>
        </div>
      </Section>

      {/* Scroll Area */}
      <Section title="Scroll Area" description="Custom-styled scrollable containers.">
        <div className="flex gap-6 flex-wrap">
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Vertical scroll</Label>
            <ScrollArea className="h-48 w-64 rounded-md border p-3">
              <div className="space-y-3">
                {Array.from({ length: 15 }, (_, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Component item {i + 1}</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Horizontal scroll</Label>
            <ScrollArea className="w-64 rounded-md border">
              <div className="flex gap-3 p-3">
                {["Forest", "Golden", "Teal", "Neutral", "Primary", "Secondary"].map((name) => (
                  <div key={name} className="shrink-0 rounded-md border p-3 text-sm w-32 text-center">
                    {name}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </Section>

      {/* Popover & Hover Card */}
      <Section title="Popover & Hover Card" description="Floating content triggered by click or hover.">
        <div className="flex gap-4 flex-wrap items-start">
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Popover (click)</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-72">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Filter options</h4>
                  <div className="space-y-2">
                    <Label htmlFor="pop-name">Team name</Label>
                    <Input id="pop-name" placeholder="Design system…" />
                  </div>
                  <Button size="sm" className="w-full">Apply filter</Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Hover card</Label>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">@pau_design</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-72">
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">PD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Pau Design System</h4>
                    <p className="text-xs text-muted-foreground">Open-source component library built on ShadCN with Forest Green brand tokens.</p>
                    <p className="text-xs text-muted-foreground">16 components · MIT license</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </Section>

      {/* Menubar & Navigation Menu */}
      <Section title="Menubar & Navigation Menu" description="Desktop-style application menus and site navigation.">
        <div className="space-y-8">
          <div className="space-y-3">
            <Label className="text-sm text-muted-foreground">Menubar</Label>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>New Project <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
                  <MenubarItem>Open… <MenubarShortcut>⌘O</MenubarShortcut></MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Save <MenubarShortcut>⌘S</MenubarShortcut></MenubarItem>
                  <MenubarItem>Export PDF</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
                  <MenubarItem>Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Cut <MenubarShortcut>⌘X</MenubarShortcut></MenubarItem>
                  <MenubarItem>Copy <MenubarShortcut>⌘C</MenubarShortcut></MenubarItem>
                  <MenubarItem>Paste <MenubarShortcut>⌘V</MenubarShortcut></MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Components</MenubarItem>
                  <MenubarItem>Tokens</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Toggle Dark Mode</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>

          <div className="space-y-3">
            <Label className="text-sm text-muted-foreground">Navigation Menu</Label>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
                      {[
                        { title: "Introduction", href: "#", description: "Learn about the Pau design system." },
                        { title: "Installation", href: "#", description: "Set up your project in minutes." },
                        { title: "Tokens", href: "#", description: "Explore color, type, and spacing." },
                        { title: "Components", href: "#", description: "Browse all available components." },
                      ].map(({ title, description }) => (
                        <li key={title}>
                          <NavigationMenuLink asChild>
                            <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">{title}</div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">{description}</p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                    Documentation
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                    GitHub
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </Section>

      {/* Collapsible & Context Menu */}
      <Section title="Collapsible & Context Menu" description="Expand/collapse sections and right-click menus.">
        <div className="grid gap-8 sm:grid-cols-2 max-w-2xl">
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Collapsible</Label>
            <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen} className="space-y-2">
              <div className="flex items-center justify-between rounded-md border px-4 py-3">
                <span className="text-sm font-medium">Team members (4)</span>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ChevronDown className={`h-4 w-4 transition-transform ${collapsibleOpen ? "rotate-180" : ""}`} />
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div className="rounded-md border px-4 py-3 text-sm">Erhan Lammar — Owner</div>
              <CollapsibleContent className="space-y-2">
                {["Ana Moreno — Admin", "Jules Kim — Editor", "Priya Nair — Viewer"].map((member) => (
                  <div key={member} className="rounded-md border px-4 py-3 text-sm">{member}</div>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </div>
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Context Menu (right-click the box)</Label>
            <ContextMenu>
              <ContextMenuTrigger className="flex h-36 w-full items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground select-none">
                Right-click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-48">
                <ContextMenuLabel>Actions</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuItem><Copy className="h-4 w-4 mr-2" />Copy</ContextMenuItem>
                <ContextMenuItem><Settings className="h-4 w-4 mr-2" />Properties</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem className="text-destructive">
                  <AlertCircle className="h-4 w-4 mr-2" />Delete
                  <ContextMenuShortcut>⌦</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </div>
      </Section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   APP SHELL
═══════════════════════════════════════════════════════════ */

type Page = "overview" | "tokens" | "components";

export default function App() {
  const [dark, setDark] = useState(false);
  const [page, setPage] = useState<Page>("overview");

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
          <div className="container flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg tracking-tight">Pau</span>
              <Badge variant="secondary" className="hidden sm:inline-flex">v1.0.0</Badge>
            </div>

            {/* Page nav */}
            <nav className="flex items-center gap-1">
              {(["overview", "tokens", "components"] as Page[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium capitalize transition-colors ${
                    page === p
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {p}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={toggleDark}>
                    {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Toggle {dark ? "light" : "dark"} mode</TooltipContent>
              </Tooltip>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">EL</AvatarFallback>
                    </Avatar>
                    <span className="hidden sm:inline">Erhan</span>
                    <ChevronDown className="h-3 w-3 opacity-60" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><User className="mr-2 h-4 w-4" />Profile</DropdownMenuItem>
                  <DropdownMenuItem><Settings className="mr-2 h-4 w-4" />Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive"><LogOut className="mr-2 h-4 w-4" />Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <main className="container py-12">

          {/* ── Overview ── */}
          {page === "overview" && (
            <div className="space-y-12 animate-fade-in">
              <div className="space-y-5">
                <div className="flex gap-2 flex-wrap">
                  <Badge>ShadCN-based</Badge>
                  <Badge variant="secondary">Brand Tokens</Badge>
                  <Badge variant="accent" className="bg-accent text-accent-foreground border-transparent">Accessible</Badge>
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight max-w-2xl leading-tight">Pau</h1>
                <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                  A production-ready design system built on ShadCN with a custom brand palette —
                  forest green, golden yellow, mint teal, and neutral grey.
                </p>
                <div className="flex gap-3 flex-wrap pt-2">
                  <Button size="lg" onClick={() => setPage("components")}>Browse components</Button>
                  <Button size="lg" variant="outline" onClick={() => setPage("tokens")}>View tokens</Button>
                </div>
              </div>

              {/* Quick colour preview */}
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-3">Brand palette</p>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: "Primary",   hex: "#013229", textClass: "text-white" },
                    { label: "Secondary", hex: "#FFD653", textClass: "text-neutral-800" },
                    { label: "Intense",   hex: "#61CAA0", textClass: "text-neutral-800" },
                    { label: "Neutral",   hex: "#333333", textClass: "text-white" },
                  ].map((c) => (
                    <div key={c.label} className="rounded-xl h-28 flex flex-col justify-end p-4" style={{ backgroundColor: c.hex }}>
                      <p className={`text-sm font-semibold ${c.textClass}`}>{c.label}</p>
                      <p className={`text-xs font-mono opacity-70 ${c.textClass}`}>{c.hex}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Components",   value: "16" },
                  { label: "Color tokens", value: "70+" },
                  { label: "Type styles",  value: "9" },
                  { label: "Themes",       value: "2" },
                ].map(({ label, value }) => (
                  <Card key={label}>
                    <CardContent className="pt-6">
                      <p className="text-3xl font-extrabold text-primary">{value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* ── Tokens ── */}
          {page === "tokens" && <TokensPage dark={dark} />}

          {/* ── Components ── */}
          {page === "components" && <ComponentsPage />}

        </main>

        <footer className="border-t border-border mt-16">
          <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-primary flex items-center justify-center">
                <Zap className="h-3 w-3 text-primary-foreground" />
              </div>
              <span className="font-medium text-foreground">Pau</span>
            </div>
            <p>Built with ShadCN · Tailwind CSS · React · Vite · Unigeo</p>
          </div>
        </footer>

      </div>
    </TooltipProvider>
  );
}
