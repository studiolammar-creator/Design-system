import { useState } from "react";
import {
  AlertCircle, AlignCenter, AlignLeft, AlignRight, ArrowRight, Bell, Bold, Check, ChevronDown,
  Copy, FileText, Home, Info, Italic, Layers, LayoutDashboard, LogOut, Moon,
  Palette, Settings, Sun, User, Zap, Search, AtSign, ImageOff, Plus,
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
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Calendar } from "@/components/ui/calendar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import { Kbd } from "@/components/ui/kbd";
import { NativeSelect } from "@/components/ui/native-select";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { ButtonGroup } from "@/components/ui/button-group";
import { Empty } from "@/components/ui/empty";
import { Field, FieldLabel, FieldHint, FieldError } from "@/components/ui/field";
import { Item, ItemStart, ItemContent, ItemTitle, ItemDescription, ItemEnd } from "@/components/ui/item";

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

function Section({ title, description, children, hidden, code }: {
  title: string;
  description?: string;
  children: React.ReactNode;
  hidden?: boolean;
  code?: string;
}) {
  const [view, setView] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  if (hidden) return null;

  const handleCopy = () => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {description && <p className="text-muted-foreground mt-1 text-sm">{description}</p>}
        </div>
        {code && (
          <div className="flex items-center rounded-md border border-border bg-muted p-0.5 shrink-0">
            <button
              onClick={() => setView("preview")}
              className={`px-3 py-1 text-xs rounded font-medium transition-colors ${
                view === "preview" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setView("code")}
              className={`px-3 py-1 text-xs rounded font-medium transition-colors ${
                view === "code" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Code
            </button>
          </div>
        )}
      </div>
      <Separator />
      {view === "preview" || !code ? (
        <div>{children}</div>
      ) : (
        <div className="relative group">
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white/60 hover:text-white text-xs font-mono transition-colors"
          >
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre style={{ backgroundColor: "#0a0a0a", color: "#e5e5e5" }} className="rounded-xl p-5 pr-24 text-xs font-mono overflow-x-auto leading-relaxed whitespace-pre">
            <code style={{ color: "inherit" }}>{code}</code>
          </pre>
        </div>
      )}
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
                  <div className="rounded-lg border border-border overflow-hidden overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="w-[140px] sm:w-[180px]">Token</TableHead>
                          <TableHead className="hidden sm:table-cell w-[160px]">CSS Variable</TableHead>
                          <TableHead className="hidden md:table-cell w-[200px]">Tailwind</TableHead>
                          <TableHead>Light</TableHead>
                          <TableHead>Dark</TableHead>
                          <TableHead className="hidden lg:table-cell">Usage</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {group.tokens.map((t) => (
                          <TableRow key={t.token}>
                            <TableCell className="font-mono text-xs sm:text-sm font-medium">{t.token}</TableCell>
                            <TableCell className="hidden sm:table-cell font-mono text-xs text-muted-foreground">{t.cssVar}</TableCell>
                            <TableCell className="hidden md:table-cell font-mono text-xs text-muted-foreground">{t.tailwind}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1.5 sm:gap-2">
                                <div
                                  className="h-5 w-5 sm:h-6 sm:w-6 rounded border border-border shrink-0"
                                  style={{ backgroundColor: t.lightHex }}
                                />
                                <span className="font-mono text-xs hidden sm:inline">{t.lightHex}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1.5 sm:gap-2">
                                <div
                                  className="h-5 w-5 sm:h-6 sm:w-6 rounded border border-border shrink-0"
                                  style={{ backgroundColor: t.darkHex }}
                                />
                                <span className="font-mono text-xs hidden sm:inline">{t.darkHex}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-xs text-muted-foreground hidden lg:table-cell">{t.description}</TableCell>
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
  const [query, setQuery] = useState("");

  const show = (title: string) =>
    !query.trim() || title.toLowerCase().includes(query.toLowerCase());

  const allSectionTitles = [
    "Typography","Buttons","Badges","Cards","Form Controls","Alerts","Table",
    "Accordion","Alert Dialog","Sheet","Progress & Slider","Radio Group & Textarea",
    "Toggle & Toggle Group","Skeleton","Scroll Area","Popover & Hover Card",
    "Menubar & Navigation Menu","Collapsible & Context Menu","Breadcrumb & Pagination",
    "Aspect Ratio & Carousel","Calendar","Command","Drawer","Input OTP","Sonner (Toast)",
    "Resizable","Chart","Sidebar","Spinner","Kbd","Native Select","Input Group",
    "Button Group","Empty","Field","Item",
  ];
  const noResults = query.trim() !== "" && allSectionTitles.every((t) => !show(t));

  return (
    <div className="space-y-16">
      <div className="space-y-5">
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight">Components</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            All Pau components, pre-themed with Pau's brand tokens. Copy any variant directly into your project.
          </p>
        </div>
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Search components…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-9 rounded-md border border-input bg-background pl-9 pr-9 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          )}
        </div>
        {noResults && (
          <div className="py-16 text-center text-muted-foreground text-sm">
            No components found for "<span className="font-medium text-foreground">{query}</span>"
          </div>
        )}
      </div>

      {/* Typography */}
      <Section hidden={!show("Typography")} title="Typography" description="Unigeo32 — headings to captions." code={`import { cn } from "@/lib/utils"

export function TypographyDemo() {
  return (
    <div className="space-y-1">
      <p className="text-4xl font-extrabold tracking-tight">Heading 1</p>
      <p className="text-3xl font-semibold tracking-tight">Heading 2</p>
      <p className="text-2xl font-semibold tracking-tight">Heading 3</p>
      <p className="text-xl font-semibold tracking-tight">Heading 4</p>
      <p className="text-lg leading-relaxed">Body Large</p>
      <p className="text-base leading-relaxed">Body</p>
      <p className="text-sm leading-normal">Body Small</p>
      <p className="text-xs font-medium tracking-wide uppercase">Caption</p>
      <p className="text-sm font-mono">Code</p>
    </div>
  )
}`}>
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
      <Section hidden={!show("Buttons")} title="Buttons" description="Seven variants × four sizes." code={`import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}`}>
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
      <Section hidden={!show("Badges")} title="Badges" description="Status indicators and labels." code={`import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="accent">Accent</Badge>
    </div>
  )
}`}>
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
      <Section hidden={!show("Cards")} title="Cards" description="Content containers with header, body, and footer." code={`import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CardDemo() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Card body content.</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button size="sm">Action</Button>
        <Button size="sm" variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  )
}`}>
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
      <Section hidden={!show("Form Controls")} title="Form Controls" description="Inputs, selects, checkboxes, and switches." code={`import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function FormDemo() {
  return (
    <div className="space-y-4 max-w-sm">
      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="notifications" />
        <Label htmlFor="notifications">Notifications</Label>
      </div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
          <SelectItem value="b">Option B</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}`}>
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
      <Section hidden={!show("Alerts")} title="Alerts" description="Four semantic variants." code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export function AlertDemo() {
  return (
    <div className="space-y-3">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>This is a default alert.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Destructive</AlertTitle>
        <AlertDescription>Something went wrong.</AlertDescription>
      </Alert>
    </div>
  )
}`}>
        <div className="space-y-3">
          <Alert><Info className="h-4 w-4" /><AlertTitle>Heads up!</AlertTitle><AlertDescription>You can add components to your app using the CLI.</AlertDescription></Alert>
          <Alert variant="success"><Check className="h-4 w-4" /><AlertTitle>All systems operational</AlertTitle><AlertDescription>Everything is running smoothly.</AlertDescription></Alert>
          <Alert variant="warning"><Bell className="h-4 w-4" /><AlertTitle>Approaching limit</AlertTitle><AlertDescription>You have used 80% of your storage quota.</AlertDescription></Alert>
          <Alert variant="destructive"><AlertCircle className="h-4 w-4" /><AlertTitle>Deployment failed</AlertTitle><AlertDescription>Check your configuration and try again.</AlertDescription></Alert>
        </div>
      </Section>

      {/* Table */}
      <Section hidden={!show("Table")} title="Table" description="Data display with status badges." code={`import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>INV-001</TableCell>
          <TableCell><Badge variant="secondary">Pending</Badge></TableCell>
          <TableCell>$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV-002</TableCell>
          <TableCell><Badge>Paid</Badge></TableCell>
          <TableCell>$150.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`}>
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
      <Section hidden={!show("Accordion")} title="Accordion" description="Collapsible sections for progressive disclosure." code={`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>Yes. It comes with default styles that match your theme.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`}>
        <Accordion type="single" collapsible className="w-full max-w-lg">
          {[
            { value: "item-1", trigger: "What is Pau Design System?", content: "Pau is a fully-themed component library built on Radix UI primitives, tailored with brand tokens for Forest Green, Golden Yellow, and Mint Teal." },
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
      <Section hidden={!show("Alert Dialog")} title="Alert Dialog" description="Blocking confirmation dialogs for destructive actions." code={`import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`}>
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
      <Section hidden={!show("Sheet")} title="Sheet" description="Slide-in panels from any edge of the screen." code={`import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet title</SheetTitle>
          <SheetDescription>Sheet description here.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}`}>
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
      <Section hidden={!show("Progress & Slider")} title="Progress & Slider" description="Linear progress indicators and range inputs." code={`import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"

export function ProgressSliderDemo() {
  return (
    <div className="space-y-6 max-w-sm">
      <Progress value={60} />
      <Slider defaultValue={[40]} max={100} step={1} />
    </div>
  )
}`}>
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
      <Section hidden={!show("Radio Group & Textarea")} title="Radio Group & Textarea" description="Single-selection controls and multi-line text input." code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function RadioTextareaDemo() {
  return (
    <div className="space-y-6">
      <RadioGroup defaultValue="option-1">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-1" id="r1" />
          <Label htmlFor="r1">Option 1</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-2" id="r2" />
          <Label htmlFor="r2">Option 2</Label>
        </div>
      </RadioGroup>
      <Textarea placeholder="Type your message here…" className="max-w-sm" />
    </div>
  )
}`}>
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
      <Section hidden={!show("Toggle & Toggle Group")} title="Toggle & Toggle Group" description="Single and grouped toggle buttons." code={`import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic } from "lucide-react"

export function ToggleDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Toggle aria-label="Bold"><Bold className="h-4 w-4" /></Toggle>
      <Toggle variant="outline" aria-label="Italic"><Italic className="h-4 w-4" /></Toggle>
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
        <ToggleGroupItem value="italic"><Italic className="h-4 w-4" /></ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}`}>
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
      <Section hidden={!show("Skeleton")} title="Skeleton" description="Loading placeholders that mimic content layout." code={`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[160px]" />
      </div>
    </div>
  )
}`}>
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
      <Section hidden={!show("Scroll Area")} title="Scroll Area" description="Custom-styled scrollable containers." code={`import { ScrollArea } from "@/components/ui/scroll-area"

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-48 w-64 rounded-md border p-4">
      {Array.from({ length: 20 }).map((_, i) => (
        <p key={i} className="text-sm py-1">Item {i + 1}</p>
      ))}
    </ScrollArea>
  )
}`}>
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
      <Section hidden={!show("Popover & Hover Card")} title="Popover & Hover Card" description="Floating content triggered by click or hover." code={`import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"

export function PopoverHoverCardDemo() {
  return (
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p className="text-sm">Popover content here.</p>
        </PopoverContent>
      </Popover>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">Hover me</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="text-sm">Hover card content.</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}`}>
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
                    <p className="text-xs text-muted-foreground">Open-source component library built on Pau with Forest Green brand tokens.</p>
                    <p className="text-xs text-muted-foreground">16 components · MIT license</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </Section>

      {/* Menubar & Navigation Menu */}
      <Section hidden={!show("Menubar & Navigation Menu")} title="Menubar & Navigation Menu" description="Desktop-style application menus and site navigation." code={`import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarItem>Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`}>
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
      <Section hidden={!show("Collapsible & Context Menu")} title="Collapsible & Context Menu" description="Expand/collapse sections and right-click menus." code={`import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

export function CollapsibleDemo() {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="outline">Toggle</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p className="text-sm mt-2 text-muted-foreground">Collapsible content revealed.</p>
      </CollapsibleContent>
    </Collapsible>
  )
}`}>
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

      {/* Breadcrumb & Pagination */}
      <Section hidden={!show("Breadcrumb & Pagination")} title="Breadcrumb & Pagination" description="Navigation trails and page navigation." code={`import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

export function BreadcrumbPaginationDemo() {
  return (
    <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Pagination>
        <PaginationContent>
          <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
          <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
          <PaginationItem><PaginationNext href="#" /></PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}`}>
        <div className="space-y-8">
          <div className="space-y-3">
            <Label className="text-sm text-muted-foreground">Breadcrumb</Label>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink href="#">Pau</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbLink href="#">Tokens</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbLink href="#">Colors</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage>Primary</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="space-y-3">
            <Label className="text-sm text-muted-foreground">Pagination</Label>
            <Pagination>
              <PaginationContent>
                <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                <PaginationItem><PaginationEllipsis /></PaginationItem>
                <PaginationItem><PaginationLink href="#">8</PaginationLink></PaginationItem>
                <PaginationItem><PaginationNext href="#" /></PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </Section>

      {/* Aspect Ratio & Carousel */}
      <Section hidden={!show("Aspect Ratio & Carousel")} title="Aspect Ratio & Carousel" description="Fixed-ratio containers and scrollable slide shows." code={`import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {[1, 2, 3].map((n) => (
          <CarouselItem key={n}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-bold">{n}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}`}>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Aspect Ratio (16:9)</Label>
            <AspectRatio ratio={16 / 9} className="rounded-md overflow-hidden bg-muted">
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary to-intense-500 text-primary-foreground">
                <span className="text-lg font-semibold">16 / 9</span>
              </div>
            </AspectRatio>
          </div>
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Carousel</Label>
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {["Forest Green", "Golden Yellow", "Mint Teal", "Neutral Grey"].map((name, i) => (
                  <CarouselItem key={i}>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-sm font-semibold text-center">{name}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </Section>

      {/* Calendar */}
      <Section hidden={!show("Calendar")} title="Calendar" description="Date picker with range selection support." code={`import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}`}>
        <div className="flex gap-6 flex-wrap">
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Single date</Label>
            <div className="rounded-md border w-fit">
              <Calendar mode="single" />
            </div>
          </div>
        </div>
      </Section>

      {/* Command */}
      <Section hidden={!show("Command")} title="Command" description="Keyboard-driven searchable command palette." code={`import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"

export function CommandDemo() {
  return (
    <Command className="rounded-lg border shadow-md w-72">
      <CommandInput placeholder="Type a command…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`}>
        <div className="rounded-md border w-full max-w-sm">
          <Command>
            <CommandInput placeholder="Search components…" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Components">
                <CommandItem><Bell className="mr-2 h-4 w-4" />Button<CommandShortcut>⌘B</CommandShortcut></CommandItem>
                <CommandItem><User className="mr-2 h-4 w-4" />Avatar<CommandShortcut>⌘A</CommandShortcut></CommandItem>
                <CommandItem><FileText className="mr-2 h-4 w-4" />Card<CommandShortcut>⌘C</CommandShortcut></CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem><Settings className="mr-2 h-4 w-4" />Preferences</CommandItem>
                <CommandItem><LogOut className="mr-2 h-4 w-4" />Sign out</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </Section>

      {/* Drawer */}
      <Section hidden={!show("Drawer")} title="Drawer" description="Mobile-optimised bottom sheet with swipe-to-close." code={`import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer title</DrawerTitle>
          <DrawerDescription>Drawer description here.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`}>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Edit profile</DrawerTitle>
                <DrawerDescription>Make changes to your profile here.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="drawer-name">Name</Label>
                  <Input id="drawer-name" defaultValue="Erhan Lammar" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="drawer-role">Role</Label>
                  <Input id="drawer-role" defaultValue="UI Designer" />
                </div>
              </div>
              <DrawerFooter>
                <Button>Save changes</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </Section>

      {/* Input OTP */}
      <Section hidden={!show("Input OTP")} title="Input OTP" description="One-time password input with slot groups." code={`import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp"

export function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}`}>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">6-digit OTP</Label>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">4-digit PIN</Label>
            <InputOTP maxLength={4}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>
      </Section>

      {/* Sonner Toast */}
      <Section hidden={!show("Sonner (Toast)")} title="Sonner (Toast)" description="Notification toasts for success, error, and info states." code={`import { Toaster, toast } from "sonner"
import { Button } from "@/components/ui/button"

export function ToastDemo() {
  return (
    <>
      <Toaster />
      <div className="flex gap-2">
        <Button onClick={() => toast.success("Saved!")}>Success</Button>
        <Button variant="destructive" onClick={() => toast.error("Failed!")}>Error</Button>
        <Button variant="outline" onClick={() => toast("Info message")}>Info</Button>
      </div>
    </>
  )
}`}>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => toast("Event created", { description: "Your design sprint has been scheduled." })}>Default toast</Button>
          <Button variant="secondary" onClick={() => toast.success("Changes saved", { description: "Your tokens have been published." })}>Success</Button>
          <Button variant="destructive" onClick={() => toast.error("Build failed", { description: "Check your config and try again." })}>Error</Button>
          <Button variant="outline" onClick={() => toast.warning("Approaching limit", { description: "You've used 80% of your storage." })}>Warning</Button>
          <Button variant="ghost" onClick={() => toast.info("New version available", { description: "Pau Design System v1.1.0 is out." })}>Info</Button>
          <Button variant="outline" onClick={() => toast.promise(new Promise((r) => setTimeout(r, 2000)), { loading: "Publishing tokens…", success: "Tokens published!", error: "Publish failed." })}>Promise</Button>
        </div>
        <Toaster />
      </Section>

      {/* Resizable */}
      <Section hidden={!show("Resizable")} title="Resizable" description="Drag-to-resize panel layouts." code={`import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export function ResizableDemo() {
  return (
    <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-32 items-center justify-center p-6">
          <span className="font-semibold">Panel A</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-32 items-center justify-center p-6">
          <span className="font-semibold">Panel B</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`}>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Horizontal panels</Label>
            <ResizablePanelGroup orientation="horizontal" className="min-h-[120px] max-w-xl rounded-lg border">
              <ResizablePanel defaultSize={30}>
                <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">Sidebar</div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={70}>
                <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">Content</div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Vertical panels</Label>
            <ResizablePanelGroup orientation="vertical" className="min-h-[160px] max-w-xl rounded-lg border">
              <ResizablePanel defaultSize={60}>
                <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">Editor</div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={40}>
                <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">Terminal</div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </Section>

      {/* Chart */}
      <Section hidden={!show("Chart")} title="Chart" description="Data visualisation built on Recharts with brand tokens." code={`import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
]

export function ChartDemo() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="var(--color-primary)" radius={4} />
      </BarChart>
    </ResponsiveContainer>
  )
}`}>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Bar Chart</CardTitle>
              <CardDescription>Component usage — Q1 2026</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{ button: { label: "Button", color: "hsl(var(--primary))" }, card: { label: "Card", color: "hsl(var(--accent))" } } satisfies ChartConfig} className="h-[160px]">
                <BarChart data={[{ month: "Jan", button: 186, card: 80 }, { month: "Feb", button: 305, card: 200 }, { month: "Mar", button: 237, card: 120 }]}>
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="button" fill="var(--color-button)" radius={4} />
                  <Bar dataKey="card" fill="var(--color-card)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Line Chart</CardTitle>
              <CardDescription>Token adoption over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{ primary: { label: "Primary", color: "hsl(var(--primary))" }, secondary: { label: "Secondary", color: "hsl(var(--secondary))" } } satisfies ChartConfig} className="h-[160px]">
                <LineChart data={[{ month: "Jan", primary: 40, secondary: 24 }, { month: "Feb", primary: 60, secondary: 45 }, { month: "Mar", primary: 85, secondary: 70 }, { month: "Apr", primary: 95, secondary: 88 }]}>
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Line type="monotone" dataKey="primary" stroke="var(--color-primary)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="secondary" stroke="var(--color-secondary)" strokeWidth={2} dot={false} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Sidebar */}
      <Section hidden={!show("Sidebar")} title="Sidebar" description="Collapsible navigation sidebar with icon mode." code={`import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { Home, Settings } from "lucide-react"

export function SidebarDemo() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>
                <Home className="h-4 w-4" />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}`}>
        <div className="rounded-lg border overflow-hidden flex" style={{ height: 320 }}>
          <SidebarProvider defaultOpen style={{ "--sidebar-width": "14rem" } as React.CSSProperties}>
            <Sidebar collapsible="none" className="border-r border-sidebar-border">
              <SidebarHeader>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="font-semibold">
                      <Zap className="h-4 w-4" /><span>Pau</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                  <SidebarMenu>
                    {[
                      { icon: Home, label: "Overview" },
                      { icon: LayoutDashboard, label: "Tokens" },
                      { icon: FileText, label: "Components" },
                    ].map(({ icon: Icon, label }) => (
                      <SidebarMenuItem key={label}>
                        <SidebarMenuButton isActive={label === "Components"}>
                          <Icon className="h-4 w-4" /><span>{label}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings className="h-4 w-4" /><span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarFooter>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <span className="text-sm text-muted-foreground">Main content area</span>
              <div className="flex-1 rounded-md border border-dashed flex items-center justify-center text-sm text-muted-foreground">
                Page content
              </div>
            </div>
          </SidebarProvider>
        </div>
      </Section>

      {/* Spinner */}
      <Section hidden={!show("Spinner")} title="Spinner" description="Animated loading indicator with size and colour variants." code={`import { Spinner } from "@/components/ui/spinner"

export function SpinnerDemo() {
  return (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
    </div>
  )
}`}>
        <div className="space-y-6">
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-3">Sizes</p>
            <div className="flex items-center gap-6">
              <Spinner size="sm" />
              <Spinner size="default" />
              <Spinner size="lg" />
              <Spinner size="xl" />
            </div>
          </div>
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-3">Variants</p>
            <div className="flex items-center gap-6">
              <Spinner variant="default" />
              <Spinner variant="muted" />
              <Spinner variant="destructive" />
              <span className="flex items-center justify-center rounded bg-primary p-2">
                <Spinner variant="white" />
              </span>
            </div>
          </div>
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-3">Inside a button</p>
            <Button disabled>
              <Spinner size="sm" variant="white" />
              Saving…
            </Button>
          </div>
        </div>
      </Section>

      {/* Kbd */}
      <Section hidden={!show("Kbd")} title="Kbd" description="Keyboard key display for shortcuts and hotkeys." code={`import { Kbd } from "@/components/ui/kbd"

export function KbdDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <Kbd>⌘</Kbd>
      <span>+</span>
      <Kbd>K</Kbd>
      <span className="mx-2">or</span>
      <Kbd>Ctrl</Kbd>
      <span>+</span>
      <Kbd>Shift</Kbd>
      <span>+</span>
      <Kbd>P</Kbd>
    </div>
  )
}`}>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
            <Kbd>Enter</Kbd>
            <Kbd>Esc</Kbd>
            <Kbd>⇧</Kbd>
            <Kbd>Tab</Kbd>
            <Kbd>⌫</Kbd>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>Press</span>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
            <span>to open the command palette</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>Submit with</span>
            <Kbd>⌘</Kbd>
            <Kbd>Enter</Kbd>
          </div>
        </div>
      </Section>

      {/* Native Select */}
      <Section hidden={!show("Native Select")} title="Native Select" description="Browser-native <select> styled to match the design system — zero JS overhead." code={`import { NativeSelect } from "@/components/ui/native-select"

export function NativeSelectDemo() {
  return (
    <NativeSelect className="max-w-xs">
      <option value="">Pick an option</option>
      <option value="a">Option A</option>
      <option value="b">Option B</option>
      <option value="c">Option C</option>
    </NativeSelect>
  )
}`}>
        <div className="flex flex-wrap gap-4 max-w-sm">
          <NativeSelect className="w-full">
            <option value="">Choose a framework…</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="svelte">Svelte</option>
            <option value="solid">SolidJS</option>
          </NativeSelect>
          <NativeSelect className="w-full" disabled>
            <option>Disabled state</option>
          </NativeSelect>
        </div>
      </Section>

      {/* Input Group */}
      <Section hidden={!show("Input Group")} title="Input Group" description="Compose an input with prefix / suffix addons — icons, text, or actions." code={`import { InputGroup, InputGroupAddon } from "@/components/ui/input-group"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function InputGroupDemo() {
  return (
    <div className="space-y-3 max-w-xs">
      <InputGroup>
        <InputGroupAddon><Search className="h-4 w-4" /></InputGroupAddon>
        <Input placeholder="Search…" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>https://</InputGroupAddon>
        <Input placeholder="yoursite.com" />
      </InputGroup>
    </div>
  )
}`}>
        <div className="flex flex-col gap-4 max-w-sm">
          <InputGroup>
            <InputGroupAddon position="left"><Search className="h-4 w-4" /></InputGroupAddon>
            <InputGroupInput placeholder="Search…" className="rounded-r-md" />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon position="left"><AtSign className="h-4 w-4" /></InputGroupAddon>
            <InputGroupInput placeholder="username" className="rounded-r-md" />
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Amount" className="rounded-l-md" />
            <InputGroupAddon position="right">USD</InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon position="left">https://</InputGroupAddon>
            <InputGroupInput placeholder="yourdomain.com" />
            <InputGroupAddon position="right">/path</InputGroupAddon>
          </InputGroup>
        </div>
      </Section>

      {/* Button Group */}
      <Section hidden={!show("Button Group")} title="Button Group" description="Segmented strip of attached buttons — layouts, alignments, filters." code={`import { ButtonGroup } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"

export function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  )
}`}>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-3">Icon strip</p>
            <ButtonGroup>
              <Button variant="outline"><AlignLeft className="h-4 w-4" /></Button>
              <Button variant="outline"><AlignCenter className="h-4 w-4" /></Button>
              <Button variant="outline"><AlignRight className="h-4 w-4" /></Button>
            </ButtonGroup>
          </div>
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-3">Text labels</p>
            <ButtonGroup>
              <Button variant="outline">Day</Button>
              <Button variant="outline">Week</Button>
              <Button variant="outline">Month</Button>
              <Button variant="outline">Year</Button>
            </ButtonGroup>
          </div>
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-3">Split button</p>
            <ButtonGroup>
              <Button>Save</Button>
              <Button><ChevronDown className="h-4 w-4" /></Button>
            </ButtonGroup>
          </div>
        </div>
      </Section>

      {/* Empty */}
      <Section hidden={!show("Empty")} title="Empty" description="Zero-state placeholder with icon, title, description, and optional action." code={`import { Empty } from "@/components/ui/empty"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmptyDemo() {
  return (
    <Empty
      icon={FileText}
      title="No files found"
      description="Upload your first file to get started."
      action={<Button size="sm">Upload file</Button>}
    />
  )
}`}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Empty
            icon={<ImageOff className="h-6 w-6" />}
            title="No results found"
            description="Try adjusting your search or filter to find what you're looking for."
            action={<Button variant="outline" size="sm">Clear filters</Button>}
          />
          <Empty
            icon={<FileText className="h-6 w-6" />}
            title="No documents yet"
            description="Create your first document to get started."
            action={<Button size="sm"><Plus className="h-4 w-4" />New document</Button>}
          />
        </div>
      </Section>

      {/* Field */}
      <Section hidden={!show("Field")} title="Field" description="Form field wrapper — label, control, hint text, and error state." code={`import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldDemo() {
  return (
    <div className="space-y-4 max-w-sm">
      <Field label="Email" hint="We'll never share your email.">
        <Input type="email" placeholder="you@example.com" />
      </Field>
      <Field label="Username" error="Username is already taken.">
        <Input placeholder="johndoe" />
      </Field>
    </div>
  )
}`}>
        <div className="grid gap-6 sm:grid-cols-2 max-w-2xl">
          <Field>
            <FieldLabel htmlFor="field-name" required>Full name</FieldLabel>
            <Input id="field-name" placeholder="Erhan Lammar" />
            <FieldHint>Displayed on your public profile.</FieldHint>
          </Field>
          <Field>
            <FieldLabel htmlFor="field-email" required>Email</FieldLabel>
            <Input id="field-email" type="email" placeholder="you@example.com" className="border-destructive focus-visible:ring-destructive" />
            <FieldError>This email is already in use.</FieldError>
          </Field>
          <Field>
            <FieldLabel htmlFor="field-bio">Bio</FieldLabel>
            <Textarea id="field-bio" placeholder="Tell us about yourself…" />
            <FieldHint>Max 160 characters.</FieldHint>
          </Field>
          <Field>
            <FieldLabel htmlFor="field-role">Role</FieldLabel>
            <NativeSelect id="field-role">
              <option value="">Select a role…</option>
              <option value="designer">Designer</option>
              <option value="engineer">Engineer</option>
              <option value="pm">Product Manager</option>
            </NativeSelect>
          </Field>
        </div>
      </Section>

      {/* Item */}
      <Section hidden={!show("Item")} title="Item" description="Flexible list row primitive — start slot, title, description, end slot." code={`import { Item } from "@/components/ui/item"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function ItemDemo() {
  return (
    <div className="divide-y divide-border rounded-lg border">
      <Item
        start={<Avatar className="h-8 w-8"><AvatarFallback>EL</AvatarFallback></Avatar>}
        title="Erhan Lammar"
        description="UI Designer"
        end={<Badge>Admin</Badge>}
      />
      <Item
        start={<Avatar className="h-8 w-8"><AvatarFallback>JD</AvatarFallback></Avatar>}
        title="Jane Doe"
        description="Developer"
        end={<Badge variant="secondary">Member</Badge>}
      />
    </div>
  )
}`}>
        <div className="rounded-md border border-border divide-y divide-border max-w-md">
          <Item>
            <ItemStart>
              <Avatar className="h-8 w-8"><AvatarFallback>EL</AvatarFallback></Avatar>
            </ItemStart>
            <ItemContent>
              <ItemTitle>Erhan Lammar</ItemTitle>
              <ItemDescription>UI Designer · studio lammar</ItemDescription>
            </ItemContent>
            <ItemEnd>
              <Badge variant="secondary">Admin</Badge>
            </ItemEnd>
          </Item>
          <Item>
            <ItemStart>
              <Avatar className="h-8 w-8"><AvatarFallback>SL</AvatarFallback></Avatar>
            </ItemStart>
            <ItemContent>
              <ItemTitle>Studio Lammar</ItemTitle>
              <ItemDescription>Design system maintainer</ItemDescription>
            </ItemContent>
            <ItemEnd>
              <Badge>Owner</Badge>
            </ItemEnd>
          </Item>
          <Item>
            <ItemStart>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                <FileText className="h-4 w-4 text-muted-foreground" />
              </span>
            </ItemStart>
            <ItemContent>
              <ItemTitle>Pau Design System</ItemTitle>
              <ItemDescription>Last updated today</ItemDescription>
            </ItemContent>
            <ItemEnd>
              <Button variant="ghost" size="sm">Open</Button>
            </ItemEnd>
          </Item>
        </div>
      </Section>

    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   APP SHELL
═══════════════════════════════════════════════════════════ */

type Page = "overview" | "tokens" | "components";

const navItems: { id: Page; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "overview",    label: "Overview",    icon: Home },
  { id: "tokens",      label: "Tokens",      icon: Palette },
  { id: "components",  label: "Components",  icon: Layers },
];

export default function App() {
  const [dark, setDark] = useState(false);
  const [page, setPage] = useState<Page>("overview");

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  const currentNav = navItems.find((n) => n.id === page)!;

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <SidebarProvider defaultOpen>
          <div className="flex min-h-screen w-full">

            {/* ── Vertical Sidebar ── */}
            <Sidebar collapsible="icon">
              {/* Logo */}
              <SidebarHeader>
                <div className="flex items-center h-12 gap-3 px-2 w-full group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
                  <div className="h-7 w-7 rounded-md bg-sidebar-primary flex items-center justify-center shrink-0">
                    <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-3 text-sidebar-primary-foreground">
                      <path fillRule="evenodd" clipRule="evenodd" d="M3.48387 15.3407C5.00759 16.4699 6.92167 17.1429 9 17.1429C13.9695 17.1429 18 13.3088 18 8.57833C18 3.84783 13.9695 0 9 0C4.19113 0 0.261545 3.59019 0.0125293 8.10872C0.00425482 8.16526 0 8.22282 0 8.2812V8.56453V22.576C0 23.3626 0.788801 24 1.74194 24C2.69507 24 3.48387 23.3626 3.48387 22.576V15.3407ZM3.48387 14.6354C4.96172 15.8535 6.8863 16.5912 8.98555 16.5912C13.6228 16.5912 17.4077 12.9916 17.4077 8.56453C17.4221 4.15125 13.6517 0.551661 9 0.551661C4.86068 0.551661 1.40771 3.40195 0.697263 7.13954C0.987361 6.96216 1.3484 6.85715 1.74194 6.85715C2.08041 6.85715 2.39485 6.93484 2.66079 7.06943C3.36549 4.357 5.94273 2.34456 9 2.34456C12.5971 2.34456 15.5297 5.13045 15.5297 8.56453C15.5297 11.9986 12.5971 14.7845 9 14.7845C6.68406 14.7845 4.64358 13.6297 3.48387 11.8906V14.6354ZM2.82654 10.5931V14.0318C1.69457 12.8746 0.915849 11.3994 0.657334 9.76392V8.2812C0.657334 7.79296 1.15033 7.39965 1.74194 7.39965C2.05285 7.39965 2.33652 7.50828 2.53572 7.68223C2.49261 7.97045 2.4703 8.26503 2.4703 8.56453C2.4703 9.27475 2.59574 9.95724 2.82654 10.5931ZM0.657334 11.7854C1.14777 12.9367 1.8931 13.9641 2.82654 14.8037V22.576C2.82654 23.0642 2.34997 23.4575 1.74194 23.4575C1.1339 23.4575 0.657334 23.0642 0.657334 22.576V11.7854ZM3.48387 10.7088C4.36989 12.7836 6.51004 14.2466 9 14.2466C12.2793 14.2466 14.9518 11.709 14.9518 8.57833C14.9518 5.44765 12.2793 2.91001 9 2.91001C6.12278 2.91001 3.71263 4.86352 3.16487 7.45711C3.36613 7.68969 3.48387 7.97408 3.48387 8.2812V10.7088Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="flex flex-col leading-tight group-data-[collapsible=icon]:hidden">
                    <span className="font-bold text-sm text-sidebar-foreground">Pau</span>
                    <span className="text-[10px] text-sidebar-foreground/50">v1.0.0</span>
                  </div>
                </div>
              </SidebarHeader>

              {/* Nav items */}
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                  <SidebarMenu>
                    {navItems.map(({ id, label, icon: Icon }) => (
                      <SidebarMenuItem key={id}>
                        <SidebarMenuButton
                          tooltip={label}
                          isActive={page === id}
                          onClick={() => setPage(id)}
                        >
                          <Icon className="h-4 w-4" />
                          <span>{label}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroup>
              </SidebarContent>

              {/* Footer: dark mode + user */}
              <SidebarFooter>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip={dark ? "Light mode" : "Dark mode"} onClick={toggleDark}>
                      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                      <span>{dark ? "Light mode" : "Dark mode"}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuButton tooltip="Erhan Lammar" className="gap-2">
                          <Avatar className="h-5 w-5 shrink-0">
                            <AvatarFallback className="text-[10px] bg-sidebar-primary text-sidebar-primary-foreground">EL</AvatarFallback>
                          </Avatar>
                          <span className="truncate">Erhan Lammar</span>
                          <ChevronDown className="ml-auto h-3 w-3 opacity-50 shrink-0" />
                        </SidebarMenuButton>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="end" className="w-48">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><User className="mr-2 h-4 w-4" />Profile</DropdownMenuItem>
                        <DropdownMenuItem><Settings className="mr-2 h-4 w-4" />Settings</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive"><LogOut className="mr-2 h-4 w-4" />Log out</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarFooter>
            </Sidebar>

            {/* ── Main content area ── */}
            <div className="flex flex-col flex-1 min-w-0">
              {/* Top bar */}
              <header className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-border bg-background/95 backdrop-blur-sm px-4 sm:px-6">
                <SidebarTrigger />
                <Separator orientation="vertical" className="h-5 opacity-40" />
                <div className="flex items-center gap-2 text-sm font-medium">
                  <currentNav.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="capitalize">{currentNav.label}</span>
                </div>
              </header>

              <main className="flex-1 px-6 py-10 sm:px-10 sm:py-12">

          {/* ── Overview ── */}
          {page === "overview" && (
            <div className="animate-fade-in max-w-5xl">

              {/* Hero */}
              <div className="border-b border-border pb-16 mb-16">
                <div className="space-y-6">
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline" className="gap-1.5 font-mono text-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
                      v1.0.0
                    </Badge>
                    <Badge variant="secondary">Pau-based</Badge>
                    <Badge variant="outline">Open Source</Badge>
                  </div>

                  <h1 className="text-6xl font-extrabold tracking-tight leading-[1.05] max-w-3xl">
                    The design foundation<br />
                    <span className="text-primary">for Pau.</span>
                  </h1>

                  <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
                    A production-ready component library — tailored with Pau's brand tokens,
                    accessible by default, and built to scale across every product we ship.
                  </p>

                  <div className="flex gap-3 flex-wrap pt-2">
                    <Button size="lg" onClick={() => setPage("components")}>
                      Browse components <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => setPage("tokens")}>
                      View tokens
                    </Button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border mb-16">
                {[
                  { label: "Components",   value: "54",  desc: "Production-ready UI blocks" },
                  { label: "Color tokens", value: "70+", desc: "Semantic & brand tokens" },
                  { label: "Type styles",  value: "9",   desc: "Consistent typographic scale" },
                  { label: "Themes",       value: "2",   desc: "Light & dark mode" },
                ].map(({ label, value, desc }) => (
                  <div key={label} className="bg-background px-6 py-8">
                    <p className="text-4xl font-black text-foreground tabular-nums">{value}</p>
                    <p className="text-sm font-semibold text-foreground mt-2">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Component showcase */}
              <div className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold">Component showcase</h2>
                    <p className="text-sm text-muted-foreground mt-0.5">A live preview of available components</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setPage("components")} className="gap-1.5">
                    View all <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Buttons */}
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Buttons</p>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm">Primary</Button>
                        <Button size="sm" variant="secondary">Secondary</Button>
                        <Button size="sm" variant="outline">Outline</Button>
                        <Button size="sm" variant="ghost">Ghost</Button>
                        <Button size="sm" variant="destructive">Destructive</Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Badges + Alerts */}
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Badges</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Brand palette */}
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Brand palette</p>
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { label: "Primary",   hex: "#013229" },
                          { label: "Secondary", hex: "#FFD653" },
                          { label: "Accent",    hex: "#61CAA0" },
                          { label: "Neutral",   hex: "#333333" },
                        ].map((c) => (
                          <div key={c.label} className="space-y-1.5">
                            <div className="h-10 rounded-md border border-border/20" style={{ backgroundColor: c.hex }} />
                            <p className="text-[10px] text-muted-foreground font-mono truncate">{c.hex}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Principles */}
              <div className="mb-16">
                <h2 className="text-xl font-bold mb-6">Built on strong foundations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      icon: Layers,
                      title: "Pau-based",
                      desc: "Built on Pau — copy-paste components you own, with full access to source code and zero vendor lock-in.",
                    },
                    {
                      icon: Palette,
                      title: "Brand tokens",
                      desc: "Every color, spacing, and typography value is tokenized — keeping design and code in sync across every surface.",
                    },
                    {
                      icon: Zap,
                      title: "Accessible by default",
                      desc: "Components follow WAI-ARIA patterns with keyboard navigation, focus management, and screen-reader support built in.",
                    },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="border border-border rounded-xl p-6 space-y-3 bg-card hover:bg-muted/40 transition-colors">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA strip */}
              <div className="rounded-xl border border-border bg-muted/30 px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-1">
                  <h2 className="text-lg font-bold">Ready to build?</h2>
                  <p className="text-sm text-muted-foreground">Explore 54 ready-to-use components and start shipping faster with Pau's design system.</p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <Button onClick={() => setPage("components")}>
                    View components <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" onClick={() => setPage("tokens")}>
                    Design tokens
                  </Button>
                </div>
              </div>

            </div>
          )}

          {/* ── Tokens ── */}
          {page === "tokens" && <TokensPage dark={dark} />}

          {/* ── Components ── */}
          {page === "components" && <ComponentsPage />}

              </main>

              <footer className="border-t border-border">
                <div className="px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded bg-primary flex items-center justify-center">
                      <Zap className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="font-medium text-foreground">Pau</span>
                  </div>
                  <p>Built with Pau · Tailwind CSS · React · Vite · Unigeo</p>
                </div>
              </footer>
            </div>

          </div>
        </SidebarProvider>
      </div>
    </TooltipProvider>
  );
}
