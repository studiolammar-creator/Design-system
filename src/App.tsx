import React, { useState, useMemo } from "react";
import {
  /* ── existing ── */
  AlertCircle, AlignCenter, AlignLeft, AlignRight, ArrowRight, Bell, Bold, Check, ChevronDown,
  Copy, FileText, Home, Info, Italic, Layers, LayoutDashboard, LogOut, Moon,
  Palette, Settings, Shield, Star, Sun, Tag, User, X, Zap, Search, AtSign, ImageOff, Plus,
  /* ── arrows & navigation ── */
  ArrowLeft, ArrowUp, ArrowDown, ArrowUpRight, ArrowDownLeft, ArrowUpLeft, ArrowDownRight,
  ArrowLeftRight, ArrowUpDown, ChevronLeft, ChevronRight, ChevronUp,
  ChevronsLeft, ChevronsRight, ChevronsUp, ChevronsDown,
  MoveLeft, MoveRight, MoveUp, MoveDown, MoveUpRight, MoveDownLeft,
  CornerDownLeft, CornerDownRight, CornerUpLeft, CornerUpRight,
  RefreshCw, RefreshCcw, RotateCcw, RotateCw, Undo, Redo, Repeat, Repeat2,
  /* ── general / ui ── */
  AlertTriangle, CheckCircle, CheckCircle2, XCircle, HelpCircle, Eye, EyeOff,
  Lock, Unlock, BellOff, BookmarkCheck, Bookmark, Heart, ThumbsUp, ThumbsDown,
  Trash, Trash2, Edit, Edit2, Edit3, Pencil, Pen, Slash, Minus, Divide, Hash,
  /* ── layout ── */
  Grid, Grid2X2, Grid3X3, List, ListOrdered, ListChecks, Columns, Rows, LayoutGrid, LayoutList,
  PanelLeft, PanelRight, PanelTop, PanelBottom, Menu, MoreHorizontal, MoreVertical,
  Maximize, Maximize2, Minimize, Minimize2, Expand, Shrink, AlignJustify,
  /* ── files & data ── */
  File, FilePlus, FileMinus, FileCheck, FileX, FileCode, FileJson, FileImage,
  Folder, FolderOpen, FolderPlus, FolderMinus, Archive, Download, Upload,
  Link, Link2, Paperclip, Clipboard, ClipboardCheck, ClipboardList,
  /* ── communication ── */
  Mail, MailOpen, MessageSquare, MessageCircle, Phone, PhoneCall, PhoneOff,
  Video, VideoOff, Mic, MicOff, Globe, Send, Share2, Rss,
  /* ── data & analytics ── */
  BarChart2, BarChart3, BarChart4, PieChart, TrendingUp, TrendingDown,
  Activity, Database, Server, Cpu, Wifi, WifiOff, Signal,
  /* ── media ── */
  Play, Pause, Square, SkipForward, SkipBack, FastForward, Rewind,
  Volume, Volume1, Volume2, VolumeX, Music, Music2, Image, Camera, Film, Tv, Radio,
  /* ── users ── */
  Users, UserPlus, UserMinus, UserCheck, UserX, Contact, Fingerprint,
  /* ── system & tools ── */
  Settings2, SlidersHorizontal, Sliders, Filter, ZoomIn, ZoomOut,
  Power, Loader, Loader2, Clock, Clock1, Calendar as CalendarLucide, CalendarCheck, CalendarPlus,
  Terminal, Code, Code2, Bug, Wrench, Hammer, Package,
  /* ── shapes & design ── */
  Circle, Triangle, Hexagon, Pentagon, Diamond, Octagon,
  /* ── maps & places ── */
  MapPin, Map, Navigation, Compass, Locate, Globe2,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
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
            className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/15 hover:bg-white/25 text-white text-xs font-mono transition-colors"
          >
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }} className="rounded-xl p-5 pr-24 text-xs font-mono overflow-x-auto leading-relaxed whitespace-pre">
            <code style={{ color: "inherit", backgroundColor: "transparent" }}>{code}</code>
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
  const [sizeTabVariant, setSizeTabVariant] = useState<"default" | "secondary" | "accent" | "destructive" | "outline" | "ghost" | "link">("default");
  const [badgeClickable, setBadgeClickable] = useState(false);
  const [badgeStyle, setBadgeStyle] = useState<"badge" | "pill">("badge");
  const [badgeSize, setBadgeSize] = useState<"sm" | "md" | "lg">("md");
  const [badgeIconName, setBadgeIconName] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [view, setView] = useState<"grid" | "detail">("grid");
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const componentMeta: { title: string; description: string; category: string; preview: React.ReactNode }[] = [
    { title: "Typography",               category: "Foundation", description: "Text scales and font styles.",                  preview: <div className="space-y-1 pointer-events-none select-none"><p className="text-sm font-bold tracking-tight">Heading</p><p className="text-xs text-muted-foreground">Body text sample</p><p className="text-[10px] font-mono text-muted-foreground/60">Code</p></div> },
    { title: "Buttons",                  category: "Actions",    description: "Seven variants × four sizes.",                  preview: <div className="flex flex-wrap gap-1.5 pointer-events-none select-none"><Button size="sm">Primary</Button><Button size="sm" variant="outline">Outline</Button><Button size="sm" variant="ghost">Ghost</Button></div> },
    { title: "Badges",                   category: "Display",    description: "Status indicators and labels.",                 preview: <div className="flex flex-wrap gap-1.5 pointer-events-none select-none"><Badge>Default</Badge><Badge variant="secondary">Secondary</Badge><Badge variant="outline">Outline</Badge></div> },
    { title: "Cards",                    category: "Layout",     description: "Content containers with header and footer.",    preview: <div className="pointer-events-none select-none border border-border rounded-lg p-3 w-full bg-card"><p className="font-semibold text-xs">Card title</p><p className="text-muted-foreground text-[10px] mt-0.5">Short description here.</p></div> },
    { title: "Form Controls",            category: "Forms",      description: "Inputs, selects, checkboxes, and switches.",    preview: <div className="space-y-1.5 pointer-events-none select-none w-full"><div className="h-7 rounded-md border border-input bg-background px-2 flex items-center"><span className="text-[10px] text-muted-foreground">Email address</span></div><div className="flex items-center gap-1.5"><div className="h-3.5 w-3.5 rounded-sm border border-input bg-background" /><span className="text-[10px] text-muted-foreground">Accept terms</span></div></div> },
    { title: "Alerts",                   category: "Feedback",   description: "Four semantic variants.",                       preview: <div className="pointer-events-none select-none border border-border rounded-md p-2.5 w-full flex gap-2 items-start"><div className="h-3 w-3 rounded-full bg-primary mt-0.5 shrink-0" /><div><p className="text-[10px] font-semibold">Alert title</p><p className="text-[9px] text-muted-foreground mt-0.5">Alert description text.</p></div></div> },
    { title: "Table",                    category: "Data",       description: "Data display with status badges.",              preview: <div className="pointer-events-none select-none w-full text-[9px]"><div className="flex gap-3 border-b border-border pb-1 mb-1 font-semibold text-muted-foreground"><span className="flex-1">Invoice</span><span>Status</span><span>Amount</span></div><div className="flex gap-3"><span className="flex-1 text-foreground">INV-001</span><Badge className="text-[8px] h-3.5 px-1">Paid</Badge><span>$250</span></div></div> },
    { title: "Accordion",                category: "Navigation", description: "Collapsible sections.",                         preview: <div className="pointer-events-none select-none w-full space-y-1"><div className="border-b border-border pb-1.5 flex items-center justify-between"><span className="text-[10px] font-medium">Is it accessible?</span><span className="text-[10px] text-muted-foreground">+</span></div><div className="border-b border-border pb-1.5 flex items-center justify-between"><span className="text-[10px] font-medium">Is it styled?</span><span className="text-[10px] text-muted-foreground">+</span></div></div> },
    { title: "Alert Dialog",             category: "Overlay",    description: "Blocking confirmation dialogs.",                preview: <div className="pointer-events-none select-none border border-border rounded-lg p-3 w-full bg-card shadow-sm"><p className="text-[10px] font-semibold">Are you sure?</p><p className="text-[9px] text-muted-foreground mt-0.5">This action cannot be undone.</p><div className="flex gap-1.5 mt-2"><div className="h-5 px-2 rounded bg-destructive flex items-center"><span className="text-[9px] text-white">Delete</span></div><div className="h-5 px-2 rounded border border-border flex items-center"><span className="text-[9px]">Cancel</span></div></div></div> },
    { title: "Sheet",                    category: "Overlay",    description: "Slide-in panels from any edge.",                preview: <div className="pointer-events-none select-none flex gap-2 w-full"><Button size="sm" variant="outline" className="text-[10px] h-6 px-2">Open →</Button><div className="flex-1 border-l border-border pl-2"><p className="text-[10px] font-medium">Sheet title</p><p className="text-[9px] text-muted-foreground">Content here.</p></div></div> },
    { title: "Progress & Slider",        category: "Forms",      description: "Progress bars and range inputs.",               preview: <div className="space-y-2 pointer-events-none select-none w-full"><div className="h-2 rounded-full bg-muted overflow-hidden"><div className="h-full bg-primary rounded-full" style={{width:"60%"}} /></div><div className="h-2 rounded-full bg-muted relative"><div className="absolute left-[35%] top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-primary bg-background shadow" /></div></div> },
    { title: "Radio Group & Textarea",   category: "Forms",      description: "Radio buttons and multi-line inputs.",          preview: <div className="space-y-1.5 pointer-events-none select-none"><div className="flex items-center gap-1.5"><div className="h-3 w-3 rounded-full border-2 border-primary bg-background flex items-center justify-center"><div className="h-1.5 w-1.5 rounded-full bg-primary" /></div><span className="text-[10px]">Option 1</span></div><div className="h-10 rounded-md border border-input bg-background w-full" /></div> },
    { title: "Toggle & Toggle Group",    category: "Actions",    description: "Toggle and grouped toggle buttons.",            preview: <div className="flex gap-1 pointer-events-none select-none"><div className="h-7 w-7 rounded border border-border flex items-center justify-center bg-muted"><span className="text-[10px] font-bold">B</span></div><div className="h-7 w-7 rounded border border-border flex items-center justify-center"><span className="text-[10px] italic">I</span></div><div className="h-7 w-7 rounded border border-border flex items-center justify-center"><span className="text-[10px] underline">U</span></div></div> },
    { title: "Skeleton",                 category: "Feedback",   description: "Loading placeholder states.",                   preview: <div className="flex items-center gap-2 pointer-events-none select-none w-full"><div className="h-8 w-8 rounded-full bg-muted animate-pulse shrink-0" /><div className="flex-1 space-y-1.5"><div className="h-2.5 rounded bg-muted animate-pulse" /><div className="h-2.5 rounded bg-muted animate-pulse w-3/4" /></div></div> },
    { title: "Scroll Area",              category: "Layout",     description: "Custom-styled scrollable containers.",          preview: <div className="pointer-events-none select-none border border-border rounded-md p-2 h-14 w-full overflow-hidden relative"><div className="space-y-0.5"><p className="text-[9px] text-muted-foreground">Item 1</p><p className="text-[9px] text-muted-foreground">Item 2</p><p className="text-[9px] text-muted-foreground">Item 3</p></div><div className="absolute right-1 top-1 w-1 h-8 rounded-full bg-muted" /></div> },
    { title: "Popover & Hover Card",     category: "Overlay",    description: "Floating content on click or hover.",          preview: <div className="pointer-events-none select-none relative flex gap-2"><Button size="sm" variant="outline" className="text-[10px] h-6 px-2">Open</Button><div className="border border-border rounded-md p-2 shadow-md bg-popover text-[9px] text-muted-foreground">Popover content</div></div> },
    { title: "Menubar & Navigation Menu",category: "Navigation", description: "Desktop menus and site navigation.",            preview: <div className="pointer-events-none select-none flex gap-1 border border-border rounded-md p-1 bg-background w-full"><span className="text-[10px] px-2 py-0.5 rounded hover:bg-muted">File</span><span className="text-[10px] px-2 py-0.5 rounded bg-muted">Edit</span><span className="text-[10px] px-2 py-0.5 rounded">View</span></div> },
    { title: "Collapsible & Context Menu",category:"Navigation", description: "Expand/collapse and right-click menus.",        preview: <div className="pointer-events-none select-none w-full space-y-1"><div className="flex items-center justify-between border border-border rounded px-2 py-1"><span className="text-[10px] font-medium">Toggle content</span><span className="text-[10px] text-muted-foreground">↓</span></div><div className="border border-dashed border-border rounded px-2 py-1"><span className="text-[9px] text-muted-foreground">Collapsed content</span></div></div> },
    { title: "Breadcrumb & Pagination",  category: "Navigation", description: "Trails and page navigation.",                   preview: <div className="space-y-2 pointer-events-none select-none"><div className="flex items-center gap-1 text-[9px] text-muted-foreground"><span className="text-foreground">Home</span><span>/</span><span className="text-foreground">Components</span><span>/</span><span className="text-primary">Button</span></div><div className="flex items-center gap-1"><div className="h-5 w-5 rounded border border-border flex items-center justify-center text-[9px]">‹</div><div className="h-5 w-5 rounded bg-primary text-primary-foreground flex items-center justify-center text-[9px]">1</div><div className="h-5 w-5 rounded border border-border flex items-center justify-center text-[9px]">2</div><div className="h-5 w-5 rounded border border-border flex items-center justify-center text-[9px]">›</div></div></div> },
    { title: "Aspect Ratio & Carousel",  category: "Layout",     description: "Fixed-ratio containers and slideshows.",        preview: <div className="pointer-events-none select-none flex gap-1 items-center w-full"><div className="h-12 flex-1 rounded-md bg-muted flex items-center justify-center text-[9px] text-muted-foreground">1</div><div className="h-12 flex-1 rounded-md border-2 border-primary bg-muted/50 flex items-center justify-center text-[9px] font-bold">2</div><div className="h-12 flex-1 rounded-md bg-muted flex items-center justify-center text-[9px] text-muted-foreground">3</div></div> },
    { title: "Calendar",                 category: "Forms",      description: "Date picker with range selection.",             preview: <div className="pointer-events-none select-none w-full text-[9px]"><div className="flex justify-between mb-1 font-medium"><span>March 2026</span><div className="flex gap-1"><span>‹</span><span>›</span></div></div><div className="grid grid-cols-7 gap-0.5 text-center text-muted-foreground"><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span><span className="rounded bg-primary text-primary-foreground">1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span></div></div> },
    { title: "Command",                  category: "Navigation", description: "Keyboard-driven command palette.",              preview: <div className="pointer-events-none select-none border border-border rounded-lg w-full overflow-hidden bg-popover"><div className="flex items-center border-b border-border px-2 py-1 gap-1"><Search className="h-2.5 w-2.5 text-muted-foreground" /><span className="text-[9px] text-muted-foreground">Search commands…</span></div><div className="p-1 space-y-0.5"><div className="rounded px-2 py-0.5 bg-accent text-[9px]">Calendar</div><div className="rounded px-2 py-0.5 text-[9px] text-muted-foreground">Settings</div></div></div> },
    { title: "Drawer",                   category: "Overlay",    description: "Mobile-optimised bottom sheet.",                preview: <div className="pointer-events-none select-none w-full border border-border rounded-t-xl p-3 bg-card"><div className="mx-auto h-1 w-8 rounded bg-muted mb-2" /><p className="text-[10px] font-semibold">Drawer title</p><p className="text-[9px] text-muted-foreground mt-0.5">Swipe down to close.</p></div> },
    { title: "Input OTP",                category: "Forms",      description: "One-time password input.",                      preview: <div className="flex gap-1 pointer-events-none select-none"><div className="h-7 w-7 rounded border-2 border-primary bg-background flex items-center justify-center text-xs font-bold">1</div><div className="h-7 w-7 rounded border border-input bg-background flex items-center justify-center text-xs">2</div><div className="h-7 w-7 rounded border border-input bg-background flex items-center justify-center text-xs">3</div><span className="flex items-center text-muted-foreground">—</span><div className="h-7 w-7 rounded border border-input bg-background" /><div className="h-7 w-7 rounded border border-input bg-background" /><div className="h-7 w-7 rounded border border-input bg-background" /></div> },
    { title: "Sonner (Toast)",           category: "Feedback",   description: "Notification toasts.",                          preview: <div className="pointer-events-none select-none space-y-1 w-full"><div className="border border-border rounded-lg px-3 py-2 bg-card flex items-center gap-2 shadow-sm"><div className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" /><span className="text-[10px] font-medium">Saved successfully!</span></div><div className="border border-border rounded-lg px-3 py-2 bg-card flex items-center gap-2 shadow-sm"><div className="h-2 w-2 rounded-full bg-destructive shrink-0" /><span className="text-[10px] font-medium">Something went wrong</span></div></div> },
    { title: "Resizable",                category: "Layout",     description: "Drag-to-resize panel layouts.",                 preview: <div className="pointer-events-none select-none flex h-12 w-full rounded border border-border overflow-hidden"><div className="flex-1 flex items-center justify-center bg-muted/30 text-[9px] text-muted-foreground">Panel A</div><div className="w-px bg-border relative flex items-center justify-center"><div className="w-1 h-4 rounded bg-border" /></div><div className="flex-1 flex items-center justify-center bg-muted/30 text-[9px] text-muted-foreground">Panel B</div></div> },
    { title: "Chart",                    category: "Data",       description: "Data visualisation with brand tokens.",         preview: <div className="pointer-events-none select-none flex items-end gap-1 h-12 w-full px-1"><div className="flex-1 bg-primary/80 rounded-sm" style={{height:"40%"}} /><div className="flex-1 bg-primary/80 rounded-sm" style={{height:"60%"}} /><div className="flex-1 bg-primary rounded-sm" style={{height:"100%"}} /><div className="flex-1 bg-primary/80 rounded-sm" style={{height:"75%"}} /><div className="flex-1 bg-primary/80 rounded-sm" style={{height:"50%"}} /></div> },
    { title: "Sidebar",                  category: "Layout",     description: "Collapsible navigation sidebar.",               preview: <div className="pointer-events-none select-none flex h-14 w-full rounded border border-border overflow-hidden"><div className="w-16 bg-sidebar p-2 space-y-1.5"><div className="h-2 w-8 rounded bg-sidebar-foreground/20" /><div className="h-2 w-6 rounded bg-sidebar-primary" /><div className="h-2 w-7 rounded bg-sidebar-foreground/20" /></div><div className="flex-1 bg-background p-2"><div className="h-2 w-20 rounded bg-muted mb-1.5" /><div className="h-2 w-16 rounded bg-muted" /></div></div> },
    { title: "Spinner",                  category: "Feedback",   description: "Animated loading indicator.",                   preview: <div className="flex items-center gap-3 pointer-events-none select-none"><div className="h-4 w-4 rounded-full border-2 border-primary border-t-transparent animate-spin" /><div className="h-6 w-6 rounded-full border-2 border-primary border-t-transparent animate-spin" /><div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" /></div> },
    { title: "Kbd",                      category: "Display",    description: "Keyboard key display.",                         preview: <div className="flex items-center gap-1 pointer-events-none select-none"><span className="inline-flex items-center rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono shadow-sm">⌘</span><span className="text-[10px] text-muted-foreground">+</span><span className="inline-flex items-center rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono shadow-sm">K</span></div> },
    { title: "Native Select",            category: "Forms",      description: "Browser-native select element.",                preview: <div className="pointer-events-none select-none w-full h-7 rounded-md border border-input bg-background px-2 flex items-center justify-between"><span className="text-[10px] text-muted-foreground">Pick an option</span><span className="text-[10px] text-muted-foreground">▾</span></div> },
    { title: "Input Group",              category: "Forms",      description: "Input with prefix / suffix addons.",            preview: <div className="pointer-events-none select-none flex h-7 w-full rounded-md border border-input overflow-hidden"><div className="px-2 flex items-center bg-muted border-r border-input"><Search className="h-3 w-3 text-muted-foreground" /></div><div className="flex-1 px-2 flex items-center bg-background"><span className="text-[10px] text-muted-foreground">Search…</span></div></div> },
    { title: "Button Group",             category: "Actions",    description: "Segmented strip of attached buttons.",          preview: <div className="pointer-events-none select-none flex"><div className="h-7 px-2.5 border border-r-0 border-input rounded-l-md bg-background flex items-center text-[10px]">Left</div><div className="h-7 px-2.5 border border-input bg-muted flex items-center text-[10px] font-medium">Center</div><div className="h-7 px-2.5 border border-l-0 border-input rounded-r-md bg-background flex items-center text-[10px]">Right</div></div> },
    { title: "Empty",                    category: "Display",    description: "Zero-state placeholder.",                       preview: <div className="pointer-events-none select-none flex flex-col items-center justify-center gap-1.5 py-2"><div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center"><FileText className="h-4 w-4 text-muted-foreground" /></div><p className="text-[10px] font-medium">No files found</p><p className="text-[9px] text-muted-foreground">Upload to get started</p></div> },
    { title: "Field",                    category: "Forms",      description: "Form field with label, hint, and error.",       preview: <div className="pointer-events-none select-none space-y-1 w-full"><p className="text-[10px] font-medium">Email</p><div className="h-7 rounded-md border border-input bg-background px-2 flex items-center"><span className="text-[10px] text-muted-foreground">you@example.com</span></div><p className="text-[9px] text-muted-foreground">We'll never share your email.</p></div> },
    { title: "Item",                     category: "Display",    description: "Flexible list row primitive.",                  preview: <div className="pointer-events-none select-none divide-y divide-border rounded-md border border-border w-full overflow-hidden"><div className="flex items-center gap-2 px-2 py-1.5"><div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center text-[8px] text-primary-foreground font-bold shrink-0">EL</div><div className="flex-1 min-w-0"><p className="text-[10px] font-medium truncate">Erhan Lammar</p><p className="text-[9px] text-muted-foreground">Designer</p></div><Badge className="text-[8px] h-3.5 px-1">Admin</Badge></div></div> },
    { title: "Avatar",                   category: "Display",    description: "User profile image with initials fallback.",    preview: <div className="flex items-center gap-2 pointer-events-none select-none"><div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground shrink-0">EL</div><div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground shrink-0">JD</div><div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center text-[9px] font-bold text-secondary-foreground shrink-0">SL</div></div> },
    { title: "Dialog",                   category: "Overlay",    description: "Modal dialogs for focused interactions.",       preview: <div className="pointer-events-none select-none border border-border rounded-lg p-3 w-full bg-card shadow-sm space-y-2"><p className="text-[10px] font-semibold">Edit profile</p><div className="h-5 rounded border border-input bg-background px-2 flex items-center"><span className="text-[9px] text-muted-foreground">Display name</span></div><div className="flex gap-1.5 mt-1.5"><div className="h-5 flex-1 rounded bg-primary flex items-center justify-center"><span className="text-[9px] text-primary-foreground font-medium">Save</span></div><div className="h-5 flex-1 rounded border border-border flex items-center justify-center"><span className="text-[9px]">Cancel</span></div></div></div> },
    { title: "Dropdown Menu",            category: "Overlay",    description: "Context menus and action dropdowns.",           preview: <div className="pointer-events-none select-none w-full"><div className="border border-border rounded-md p-1 bg-popover shadow-sm space-y-0.5 w-28"><div className="rounded px-2 py-0.5 bg-accent text-[9px]">Profile</div><div className="rounded px-2 py-0.5 text-[9px] text-muted-foreground">Settings</div><div className="h-px bg-border my-0.5" /><div className="rounded px-2 py-0.5 text-[9px] text-destructive">Log out</div></div></div> },
    { title: "Tabs",                     category: "Navigation", description: "Tab panels for switching between views.",       preview: <div className="pointer-events-none select-none w-full space-y-2"><div className="flex gap-0 border-b border-border"><span className="text-[9px] font-semibold border-b-2 border-primary pb-1 px-2 -mb-px">Account</span><span className="text-[9px] text-muted-foreground pb-1 px-2">Password</span><span className="text-[9px] text-muted-foreground pb-1 px-2">Settings</span></div><div className="space-y-1 pt-1"><div className="h-1.5 w-20 rounded bg-muted" /><div className="h-1.5 w-14 rounded bg-muted" /></div></div> },
    { title: "Tooltip",                  category: "Overlay",    description: "Contextual hints on hover or focus.",           preview: <div className="pointer-events-none select-none flex flex-col items-center gap-2"><div className="rounded border border-border bg-popover px-2 py-1 text-[9px] shadow-md font-medium">Add to library</div><div className="h-0 w-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border -mt-0.5" /><div className="h-6 w-6 rounded-md border border-border flex items-center justify-center"><Plus className="h-3 w-3 text-muted-foreground" /></div></div> },
  ];

  return (
    <div className="space-y-8">

      {/* ── Grid view ── */}
      {view === "grid" && (
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-5">
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tight">Components</h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                All Pau components, pre-themed with Pau's brand tokens. Click any component to explore it.
              </p>
            </div>
            {/* Search */}
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
          </div>

          {/* Category chips */}
          {(() => {
            const categories = Array.from(new Set(componentMeta.map((c) => c.category))).sort();
            return (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                    !selectedCategory
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            );
          })()}

          {/* Grid */}
          {(() => {
            const filtered = componentMeta.filter((c) => {
              const matchesQuery = !query.trim() || c.title.toLowerCase().includes(query.toLowerCase()) || c.category.toLowerCase().includes(query.toLowerCase());
              const matchesCategory = !selectedCategory || c.category === selectedCategory;
              return matchesQuery && matchesCategory;
            });
            if (filtered.length === 0) {
              return (
                <div className="py-20 text-center text-muted-foreground text-sm">
                  No components found for "<span className="font-medium text-foreground">{query}</span>"
                </div>
              );
            }
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((c) => (
                  <button
                    key={c.title}
                    onClick={() => { setSelectedComponent(c.title); setView("detail"); }}
                    className="group text-left border border-border rounded-xl overflow-hidden bg-card hover:border-primary/50 hover:shadow-md transition-all duration-200"
                  >
                    {/* Preview area */}
                    <div className="h-32 bg-muted/30 border-b border-border flex items-center justify-center px-6">
                      {c.preview}
                    </div>
                    {/* Label area */}
                    <div className="px-4 py-3 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold group-hover:text-primary transition-colors">{c.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{c.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                    </div>
                  </button>
                ))}
              </div>
            );
          })()}
        </div>
      )}

      {/* ── Detail view breadcrumb + back ── */}
      {view === "detail" && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <button
              onClick={() => { setView("grid"); setSelectedComponent(null); }}
              className="hover:text-foreground transition-colors"
            >
              Components
            </button>
            <span>/</span>
            <span className="text-foreground font-medium">{selectedComponent}</span>
          </div>
          <button
            onClick={() => { setView("grid"); setSelectedComponent(null); }}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to components
          </button>
        </div>
      )}

      {/* ── All sections (hidden in grid view, filtered to selected in detail view) ── */}
      <div className={view === "grid" ? "hidden" : "space-y-16"}>

      {/* Typography */}
      <Section hidden={selectedComponent !== "Typography"} title="Typography" description="Unigeo32 — headings to captions." code={`import { cn } from "@/lib/utils"

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
      <Section hidden={selectedComponent !== "Buttons"} title="Buttons" description="Seven variants × four sizes." code={`import { Button } from "@/components/ui/button"

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
          <TabsContent value="sizes" className="pt-4 space-y-5">
            {/* Variant switcher */}
            <div className="flex flex-wrap gap-1.5">
              {(["default", "secondary", "accent", "destructive", "outline", "ghost", "link"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setSizeTabVariant(v)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors capitalize ${
                    sizeTabVariant === v
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
            {/* Size preview */}
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm" variant={sizeTabVariant}>Small</Button>
              <Button variant={sizeTabVariant}>Default</Button>
              <Button size="lg" variant={sizeTabVariant}>Large</Button>
              <Button size="icon" variant={sizeTabVariant}><Bell className="h-4 w-4" /></Button>
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
      <Section hidden={selectedComponent !== "Badges"} title="Badges" description="Status indicators and labels." code={(() => {
          const isPill = badgeStyle === "pill";
          const iconImport = badgeIconName ? `\nimport { ${badgeIconName} } from "lucide-react"` : "";
          const iconJsx = badgeIconName ? `<${badgeIconName} className="${isPill ? "h-4 w-4" : "h-3 w-3"}" /> ` : "";
          const pillClass = isPill ? ` className="px-4 py-1.5 text-sm gap-1.5"` : "";
          const clickClass = badgeClickable ? ` cursor-pointer active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 hover:shadow-sm` : "";
          const variants6 = ["default","secondary","accent","success","destructive","outline"];
          const filledRows = variants6.map((v) =>
            badgeClickable
              ? `      <button className={cn(badgeVariants({ variant: "${v}" }),"${clickClass.trim()}"${isPill ? `,"px-4 py-1.5 text-sm gap-1.5"` : ""})}>${iconJsx}${v.charAt(0).toUpperCase()+v.slice(1)}</button>`
              : `      <Badge variant="${v}"${pillClass}>${iconJsx}${v.charAt(0).toUpperCase()+v.slice(1)}</Badge>`
          ).join("\n");
          const outlineRows = variants6.map((v) =>
            badgeClickable
              ? `      <button className={cn(badgeVariants({ variant: "outline" }),"${clickClass.trim()}"${isPill ? `,"px-4 py-1.5 text-sm gap-1.5"` : ""})}>${iconJsx}${v.charAt(0).toUpperCase()+v.slice(1)}</button>`
              : `      <Badge variant="outline"${pillClass}>${iconJsx}${v.charAt(0).toUpperCase()+v.slice(1)}</Badge>`
          ).join("\n");
          return `import { Badge${badgeClickable ? ", badgeVariants" : ""} } from "@/components/ui/badge"${iconImport}${badgeClickable ? `\nimport { cn } from "@/lib/utils"` : ""}

export function BadgeDemo() {
  return (
    <div className="space-y-4">
      {/* Filled */}
      <div className="flex flex-wrap gap-3">
${filledRows}
      </div>
      {/* Outlined */}
      <div className="flex flex-wrap gap-3">
${outlineRows}
      </div>
    </div>
  )
}`;
        })()}>
        {(() => {
          const badgeIcons: Record<string, React.ElementType> = { Check, Star, Zap, Shield, Tag, Info, AlertCircle, X };
          const BadgeIcon = badgeIconName ? badgeIcons[badgeIconName] : null;
          const isPill = badgeStyle === "pill";
          const variants = [
            { key: "default",     label: "Default" },
            { key: "secondary",   label: "Secondary" },
            { key: "accent",      label: "Accent" },
            { key: "success",     label: "Success" },
            { key: "destructive", label: "Destructive" },
            { key: "outline",     label: "Outline" },
          ] as const;

          // Size + radius lookup — badge gets square-ish corners, pill keeps rounded-full
          const sizeLookup = {
            badge: {
              sm: { cls: "!rounded-sm px-1.5 py-px text-[10px] gap-1",  icon: "h-2.5 w-2.5" },
              md: { cls: "!rounded px-2.5 py-0.5 text-xs gap-1",        icon: "h-3 w-3" },
              lg: { cls: "!rounded px-3.5 py-1 text-sm gap-1.5",        icon: "h-3.5 w-3.5" },
            },
            pill: {
              sm: { cls: "px-3 py-0.5 text-xs gap-1",                  icon: "h-3 w-3" },
              md: { cls: "px-4 py-1.5 text-sm gap-1.5",                icon: "h-4 w-4" },
              lg: { cls: "px-5 py-2 text-base gap-2",                  icon: "h-5 w-5" },
            },
          };
          const { cls: sizeClass, icon: iconSize } = sizeLookup[badgeStyle][badgeSize];

          // Outlined variant overrides — transparent bg + colored border/text
          const outlineStyles: Record<string, string> = {
            default:     "bg-transparent border-primary/60 text-primary",
            secondary:   "bg-transparent border-secondary text-secondary-foreground",
            accent:      "bg-transparent border-accent text-accent-foreground",
            success:     "bg-transparent border-intense-400/70 text-intense-400",
            destructive: "bg-transparent border-destructive/60 text-destructive",
            outline:     "bg-transparent border-border text-muted-foreground",
          };

          // Hover tint for outlined clickable — lowest opacity of each variant's colour
          const outlineHoverStyles: Record<string, string> = {
            default:     "hover:bg-primary/8",
            secondary:   "hover:bg-secondary/20",
            accent:      "hover:bg-accent/15",
            success:     "hover:bg-intense-400/10",
            destructive: "hover:bg-destructive/8",
            outline:     "hover:bg-muted",
          };

          // Interaction classes
          const staticClass           = "pointer-events-none opacity-90";
          const clickableClass        = "cursor-pointer active:scale-95 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 hover:shadow-sm hover:brightness-105";
          const clickableClassOutline = "cursor-pointer active:scale-95 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1";

          const segmentBtn = (active: boolean, onClick: () => void, label: string) => (
            <button key={label} onClick={onClick}
              className={`px-3 py-1 text-xs rounded font-medium transition-colors ${active ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
              {label}
            </button>
          );

          return (
            <div className="space-y-6">
              {/* Controls */}
              <div className="flex flex-wrap gap-6 items-start">

                {/* Interaction */}
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">Interaction</p>
                  <div className="flex items-center rounded-md border border-border bg-muted p-0.5 w-fit">
                    {segmentBtn(!badgeClickable, () => setBadgeClickable(false), "Static")}
                    {segmentBtn(badgeClickable,  () => setBadgeClickable(true),  "Clickable")}
                  </div>
                  <p className="text-[10px] text-muted-foreground max-w-[160px] leading-snug">
                    {badgeClickable ? "Rendered as <button> — hover, active scale & focus ring active." : "Rendered as <div> — hover effects disabled, purely informational."}
                  </p>
                </div>

                {/* Style */}
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">Style</p>
                  <div className="flex items-center rounded-md border border-border bg-muted p-0.5 w-fit">
                    {segmentBtn(badgeStyle === "badge", () => setBadgeStyle("badge"), "Badge")}
                    {segmentBtn(badgeStyle === "pill",  () => setBadgeStyle("pill"),  "Pill")}
                  </div>
                  <p className="text-[10px] text-muted-foreground max-w-[160px] leading-snug">
                    {isPill ? "Rounded-full — filter chips or tags." : "Rounded corners — status labels and counts."}
                  </p>
                </div>

                {/* Size */}
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">Size</p>
                  <div className="flex items-center rounded-md border border-border bg-muted p-0.5 w-fit">
                    {segmentBtn(badgeSize === "sm", () => setBadgeSize("sm"), "S")}
                    {segmentBtn(badgeSize === "md", () => setBadgeSize("md"), "M")}
                    {segmentBtn(badgeSize === "lg", () => setBadgeSize("lg"), "L")}
                  </div>
                </div>

                {/* Icon picker */}
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">Icon</p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <button onClick={() => setBadgeIconName(null)}
                      className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${!badgeIconName ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"}`}>
                      None
                    </button>
                    {(["Check","Star","Zap","Shield","Tag","Info","AlertCircle","X"] as const).map((name) => {
                      const Ic = badgeIcons[name];
                      return (
                        <button key={name} onClick={() => setBadgeIconName(badgeIconName === name ? null : name)} title={name}
                          className={`h-7 w-7 rounded-full border flex items-center justify-center transition-colors ${badgeIconName === name ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"}`}>
                          <Ic className="h-3.5 w-3.5" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-border" />

              {/* Badge preview */}
              <div className="space-y-5">
                {/* Filled row */}
                <div className="space-y-2">
                  <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">Filled</p>
                  <div className="flex flex-wrap items-center gap-3">
                    {variants.map(({ key, label }) =>
                      badgeClickable ? (
                        <button key={key} className={cn(badgeVariants({ variant: key }), sizeClass, clickableClass)}>
                          {BadgeIcon && <BadgeIcon className={iconSize} />}
                          {label}
                        </button>
                      ) : (
                        <Badge key={key} variant={key} className={cn(sizeClass, staticClass)}>
                          {BadgeIcon && <BadgeIcon className={iconSize} />}
                          {label}
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                {/* Outlined row */}
                <div className="space-y-2">
                  <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">Outlined</p>
                  <div className="flex flex-wrap items-center gap-3">
                    {variants.map(({ key, label }) =>
                      badgeClickable ? (
                        <button key={key} className={cn(badgeVariants({ variant: "outline" }), sizeClass, outlineStyles[key], outlineHoverStyles[key], clickableClassOutline)}>
                          {BadgeIcon && <BadgeIcon className={iconSize} />}
                          {label}
                        </button>
                      ) : (
                        <Badge key={key} variant="outline" className={cn(sizeClass, outlineStyles[key], staticClass)}>
                          {BadgeIcon && <BadgeIcon className={iconSize} />}
                          {label}
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                {badgeClickable && (
                  <p className="text-[11px] text-muted-foreground">↑ Hover or click to see the interactive states</p>
                )}
              </div>
            </div>
          );
        })()}
      </Section>

      {/* Cards */}
      <Section hidden={selectedComponent !== "Cards"} title="Cards" description="Content containers with header, body, and footer." code={`import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
      <Section hidden={selectedComponent !== "Form Controls"} title="Form Controls" description="Inputs, selects, checkboxes, and switches." code={`import { Input } from "@/components/ui/input"
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
      <Section hidden={selectedComponent !== "Alerts"} title="Alerts" description="Four semantic variants." code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
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
      <Section hidden={selectedComponent !== "Table"} title="Table" description="Data display with status badges." code={`import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
      <Section hidden={selectedComponent !== "Accordion"} title="Accordion" description="Collapsible sections for progressive disclosure." code={`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
      <Section hidden={selectedComponent !== "Alert Dialog"} title="Alert Dialog" description="Blocking confirmation dialogs for destructive actions." code={`import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
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
      <Section hidden={selectedComponent !== "Sheet"} title="Sheet" description="Slide-in panels from any edge of the screen." code={`import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
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
      <Section hidden={selectedComponent !== "Progress & Slider"} title="Progress & Slider" description="Linear progress indicators and range inputs." code={`import { Progress } from "@/components/ui/progress"
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
      <Section hidden={selectedComponent !== "Radio Group & Textarea"} title="Radio Group & Textarea" description="Single-selection controls and multi-line text input." code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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
      <Section hidden={selectedComponent !== "Toggle & Toggle Group"} title="Toggle & Toggle Group" description="Single and grouped toggle buttons." code={`import { Toggle } from "@/components/ui/toggle"
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
      <Section hidden={selectedComponent !== "Skeleton"} title="Skeleton" description="Loading placeholders that mimic content layout." code={`import { Skeleton } from "@/components/ui/skeleton"

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
      <Section hidden={selectedComponent !== "Scroll Area"} title="Scroll Area" description="Custom-styled scrollable containers." code={`import { ScrollArea } from "@/components/ui/scroll-area"

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
      <Section hidden={selectedComponent !== "Popover & Hover Card"} title="Popover & Hover Card" description="Floating content triggered by click or hover." code={`import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
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
      <Section hidden={selectedComponent !== "Menubar & Navigation Menu"} title="Menubar & Navigation Menu" description="Desktop-style application menus and site navigation." code={`import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"

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
      <Section hidden={selectedComponent !== "Collapsible & Context Menu"} title="Collapsible & Context Menu" description="Expand/collapse sections and right-click menus." code={`import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
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
      <Section hidden={selectedComponent !== "Breadcrumb & Pagination"} title="Breadcrumb & Pagination" description="Navigation trails and page navigation." code={`import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
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
      <Section hidden={selectedComponent !== "Aspect Ratio & Carousel"} title="Aspect Ratio & Carousel" description="Fixed-ratio containers and scrollable slide shows." code={`import { AspectRatio } from "@/components/ui/aspect-ratio"
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
      <Section hidden={selectedComponent !== "Calendar"} title="Calendar" description="Date picker with range selection support." code={`import { Calendar } from "@/components/ui/calendar"
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
      <Section hidden={selectedComponent !== "Command"} title="Command" description="Keyboard-driven searchable command palette." code={`import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"

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
      <Section hidden={selectedComponent !== "Drawer"} title="Drawer" description="Mobile-optimised bottom sheet with swipe-to-close." code={`import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
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
      <Section hidden={selectedComponent !== "Input OTP"} title="Input OTP" description="One-time password input with slot groups." code={`import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp"

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
      <Section hidden={selectedComponent !== "Sonner (Toast)"} title="Sonner (Toast)" description="Notification toasts for success, error, and info states." code={`import { Toaster, toast } from "sonner"
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
      <Section hidden={selectedComponent !== "Resizable"} title="Resizable" description="Drag-to-resize panel layouts." code={`import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

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
      <Section hidden={selectedComponent !== "Chart"} title="Chart" description="Data visualisation built on Recharts with brand tokens." code={`import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

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
      <Section hidden={selectedComponent !== "Sidebar"} title="Sidebar" description="Collapsible navigation sidebar with icon mode." code={`import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
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
      <Section hidden={selectedComponent !== "Spinner"} title="Spinner" description="Animated loading indicator with size and colour variants." code={`import { Spinner } from "@/components/ui/spinner"

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
      <Section hidden={selectedComponent !== "Kbd"} title="Kbd" description="Keyboard key display for shortcuts and hotkeys." code={`import { Kbd } from "@/components/ui/kbd"

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
      <Section hidden={selectedComponent !== "Native Select"} title="Native Select" description="Browser-native <select> styled to match the design system — zero JS overhead." code={`import { NativeSelect } from "@/components/ui/native-select"

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
      <Section hidden={selectedComponent !== "Input Group"} title="Input Group" description="Compose an input with prefix / suffix addons — icons, text, or actions." code={`import { InputGroup, InputGroupAddon } from "@/components/ui/input-group"
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
      <Section hidden={selectedComponent !== "Button Group"} title="Button Group" description="Segmented strip of attached buttons — layouts, alignments, filters." code={`import { ButtonGroup } from "@/components/ui/button-group"
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
      <Section hidden={selectedComponent !== "Empty"} title="Empty" description="Zero-state placeholder with icon, title, description, and optional action." code={`import { Empty } from "@/components/ui/empty"
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
      <Section hidden={selectedComponent !== "Field"} title="Field" description="Form field wrapper — label, control, hint text, and error state." code={`import { Field } from "@/components/ui/field"
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
      <Section hidden={selectedComponent !== "Item"} title="Item" description="Flexible list row primitive — start slot, title, description, end slot." code={`import { Item } from "@/components/ui/item"
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

      {/* Avatar */}
      <Section hidden={selectedComponent !== "Avatar"} title="Avatar" description="User profile image with initials fallback." code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>EL</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarFallback className="text-lg">SL</AvatarFallback>
      </Avatar>
    </div>
  )
}`}>
        <div className="flex flex-wrap items-end gap-6">
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground font-medium">With image fallback</p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="EL" />
                <AvatarFallback>EL</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>SL</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground font-medium">Sizes</p>
            <div className="flex items-center gap-3">
              <Avatar className="h-6 w-6"><AvatarFallback className="text-[10px]">XS</AvatarFallback></Avatar>
              <Avatar className="h-8 w-8"><AvatarFallback className="text-xs">SM</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>MD</AvatarFallback></Avatar>
              <Avatar className="h-12 w-12"><AvatarFallback className="text-lg">LG</AvatarFallback></Avatar>
              <Avatar className="h-16 w-16"><AvatarFallback className="text-xl">XL</AvatarFallback></Avatar>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground font-medium">Avatar group</p>
            <div className="flex -space-x-2">
              {["EL", "JD", "SL", "MK"].map((init, i) => (
                <Avatar key={init} className="border-2 border-background" style={{ zIndex: 4 - i }}>
                  <AvatarFallback className="text-xs">{init}</AvatarFallback>
                </Avatar>
              ))}
              <div className="h-10 w-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs text-muted-foreground">+3</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Dialog */}
      <Section hidden={selectedComponent !== "Dialog"} title="Dialog" description="Modal dialogs for focused interactions." code={`import {
  Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Erhan Lammar" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`}>
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Edit profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="dialog-name">Name</Label>
                  <Input id="dialog-name" defaultValue="Erhan Lammar" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dialog-role">Role</Label>
                  <Input id="dialog-role" defaultValue="UI Designer" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete project</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px]">
              <DialogHeader>
                <DialogTitle>Delete project?</DialogTitle>
                <DialogDescription>
                  This will permanently delete the project and all its data. This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="gap-2">
                <Button variant="outline">Cancel</Button>
                <Button variant="destructive">Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </Section>

      {/* Dropdown Menu */}
      <Section hidden={selectedComponent !== "Dropdown Menu"} title="Dropdown Menu" description="Context menus and action dropdowns." code={`import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function DropdownDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}>
        <div className="flex flex-wrap gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">My account</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel>My account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><User className="mr-2 h-4 w-4" />Profile</DropdownMenuItem>
              <DropdownMenuItem><Settings className="mr-2 h-4 w-4" />Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive"><LogOut className="mr-2 h-4 w-4" />Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Actions <ChevronDown className="ml-2 h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem>Rename</DropdownMenuItem>
              <DropdownMenuItem>Archive</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Section>

      {/* Tabs */}
      <Section hidden={selectedComponent !== "Tabs"} title="Tabs" description="Tab panels for switching between views." code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-muted-foreground">Account settings go here.</p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-muted-foreground">Password settings go here.</p>
      </TabsContent>
      <TabsContent value="settings">
        <p className="text-sm text-muted-foreground">General settings go here.</p>
      </TabsContent>
    </Tabs>
  )
}`}>
        <Tabs defaultValue="account" className="max-w-lg">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Manage your account details and preferences.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="tabs-name">Display name</Label>
                  <Input id="tabs-name" defaultValue="Erhan Lammar" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="tabs-email">Email</Label>
                  <Input id="tabs-email" defaultValue="erhan@studiolammar.com" type="email" />
                </div>
                <Button size="sm">Save changes</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password here. You'll be logged out after saving.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="tabs-current">Current password</Label>
                  <Input id="tabs-current" type="password" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="tabs-new">New password</Label>
                  <Input id="tabs-new" type="password" />
                </div>
                <Button size="sm">Update password</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Manage notification and appearance preferences.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Email notifications</p>
                    <p className="text-xs text-muted-foreground">Receive updates by email.</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Marketing emails</p>
                    <p className="text-xs text-muted-foreground">Receive news and promotions.</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Section>

      {/* Tooltip */}
      <Section hidden={selectedComponent !== "Tooltip"} title="Tooltip" description="Contextual hints shown on hover or focus." code={`import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`}>
        <div className="flex flex-wrap gap-4 items-center">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <Tooltip key={side}>
              <TooltipTrigger asChild>
                <Button variant="outline" className="capitalize">{side}</Button>
              </TooltipTrigger>
              <TooltipContent side={side}>
                <p>Tooltip on the {side}</p>
              </TooltipContent>
            </Tooltip>
          ))}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost"><Info className="h-4 w-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>More information</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </Section>

      </div>{/* end sections wrapper */}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ICONS PAGE
═══════════════════════════════════════════════════════════ */

type IconEntry = { name: string; component: React.ComponentType<{ className?: string }>; category: string };

const ICON_REGISTRY: IconEntry[] = [
  /* Arrows & Navigation */
  { name: "ArrowLeft",         component: ArrowLeft,         category: "Arrows" },
  { name: "ArrowRight",        component: ArrowRight,        category: "Arrows" },
  { name: "ArrowUp",           component: ArrowUp,           category: "Arrows" },
  { name: "ArrowDown",         component: ArrowDown,         category: "Arrows" },
  { name: "ArrowUpRight",      component: ArrowUpRight,      category: "Arrows" },
  { name: "ArrowDownLeft",     component: ArrowDownLeft,     category: "Arrows" },
  { name: "ArrowUpLeft",       component: ArrowUpLeft,       category: "Arrows" },
  { name: "ArrowDownRight",    component: ArrowDownRight,    category: "Arrows" },
  { name: "ArrowLeftRight",    component: ArrowLeftRight,    category: "Arrows" },
  { name: "ArrowUpDown",       component: ArrowUpDown,       category: "Arrows" },
  { name: "ChevronLeft",       component: ChevronLeft,       category: "Arrows" },
  { name: "ChevronRight",      component: ChevronRight,      category: "Arrows" },
  { name: "ChevronUp",         component: ChevronUp,         category: "Arrows" },
  { name: "ChevronDown",       component: ChevronDown,       category: "Arrows" },
  { name: "ChevronsLeft",      component: ChevronsLeft,      category: "Arrows" },
  { name: "ChevronsRight",     component: ChevronsRight,     category: "Arrows" },
  { name: "ChevronsUp",        component: ChevronsUp,        category: "Arrows" },
  { name: "ChevronsDown",      component: ChevronsDown,      category: "Arrows" },
  { name: "MoveLeft",          component: MoveLeft,          category: "Arrows" },
  { name: "MoveRight",         component: MoveRight,         category: "Arrows" },
  { name: "MoveUp",            component: MoveUp,            category: "Arrows" },
  { name: "MoveDown",          component: MoveDown,          category: "Arrows" },
  { name: "MoveUpRight",       component: MoveUpRight,       category: "Arrows" },
  { name: "MoveDownLeft",      component: MoveDownLeft,      category: "Arrows" },
  { name: "CornerDownLeft",    component: CornerDownLeft,    category: "Arrows" },
  { name: "CornerDownRight",   component: CornerDownRight,   category: "Arrows" },
  { name: "CornerUpLeft",      component: CornerUpLeft,      category: "Arrows" },
  { name: "CornerUpRight",     component: CornerUpRight,     category: "Arrows" },
  { name: "RefreshCw",         component: RefreshCw,         category: "Arrows" },
  { name: "RefreshCcw",        component: RefreshCcw,        category: "Arrows" },
  { name: "RotateCcw",         component: RotateCcw,         category: "Arrows" },
  { name: "RotateCw",          component: RotateCw,          category: "Arrows" },
  { name: "Undo",              component: Undo,              category: "Arrows" },
  { name: "Redo",              component: Redo,              category: "Arrows" },
  { name: "Repeat",            component: Repeat,            category: "Arrows" },
  { name: "Repeat2",           component: Repeat2,           category: "Arrows" },
  /* General / UI */
  { name: "AlertCircle",       component: AlertCircle,       category: "General" },
  { name: "AlertTriangle",     component: AlertTriangle,     category: "General" },
  { name: "Check",             component: Check,             category: "General" },
  { name: "CheckCircle",       component: CheckCircle,       category: "General" },
  { name: "CheckCircle2",      component: CheckCircle2,      category: "General" },
  { name: "X",                 component: X,                 category: "General" },
  { name: "XCircle",           component: XCircle,           category: "General" },
  { name: "Info",              component: Info,              category: "General" },
  { name: "HelpCircle",        component: HelpCircle,        category: "General" },
  { name: "Eye",               component: Eye,               category: "General" },
  { name: "EyeOff",            component: EyeOff,            category: "General" },
  { name: "Lock",              component: Lock,              category: "General" },
  { name: "Unlock",            component: Unlock,            category: "General" },
  { name: "Bell",              component: Bell,              category: "General" },
  { name: "BellOff",           component: BellOff,           category: "General" },
  { name: "Bookmark",          component: Bookmark,          category: "General" },
  { name: "BookmarkCheck",     component: BookmarkCheck,     category: "General" },
  { name: "Star",              component: Star,              category: "General" },
  { name: "Heart",             component: Heart,             category: "General" },
  { name: "ThumbsUp",          component: ThumbsUp,          category: "General" },
  { name: "ThumbsDown",        component: ThumbsDown,        category: "General" },
  { name: "Trash",             component: Trash,             category: "General" },
  { name: "Trash2",            component: Trash2,            category: "General" },
  { name: "Edit",              component: Edit,              category: "General" },
  { name: "Edit2",             component: Edit2,             category: "General" },
  { name: "Edit3",             component: Edit3,             category: "General" },
  { name: "Pencil",            component: Pencil,            category: "General" },
  { name: "Pen",               component: Pen,               category: "General" },
  { name: "Slash",             component: Slash,             category: "General" },
  { name: "Minus",             component: Minus,             category: "General" },
  { name: "Plus",              component: Plus,              category: "General" },
  { name: "Divide",            component: Divide,            category: "General" },
  { name: "Hash",              component: Hash,              category: "General" },
  { name: "Search",            component: Search,            category: "General" },
  { name: "ZoomIn",            component: ZoomIn,            category: "General" },
  { name: "ZoomOut",           component: ZoomOut,           category: "General" },
  { name: "Filter",            component: Filter,            category: "General" },
  { name: "Tag",               component: Tag,               category: "General" },
  { name: "Shield",            component: Shield,            category: "General" },
  { name: "Fingerprint",       component: Fingerprint,       category: "General" },
  /* Layout */
  { name: "Grid",              component: Grid,              category: "Layout" },
  { name: "Grid2X2",           component: Grid2X2,           category: "Layout" },
  { name: "Grid3X3",           component: Grid3X3,           category: "Layout" },
  { name: "List",              component: List,              category: "Layout" },
  { name: "ListOrdered",       component: ListOrdered,       category: "Layout" },
  { name: "ListChecks",        component: ListChecks,        category: "Layout" },
  { name: "Columns",           component: Columns,           category: "Layout" },
  { name: "Rows",              component: Rows,              category: "Layout" },
  { name: "LayoutDashboard",   component: LayoutDashboard,   category: "Layout" },
  { name: "LayoutGrid",        component: LayoutGrid,        category: "Layout" },
  { name: "LayoutList",        component: LayoutList,        category: "Layout" },
  { name: "PanelLeft",         component: PanelLeft,         category: "Layout" },
  { name: "PanelRight",        component: PanelRight,        category: "Layout" },
  { name: "PanelTop",          component: PanelTop,          category: "Layout" },
  { name: "PanelBottom",       component: PanelBottom,       category: "Layout" },
  { name: "Menu",              component: Menu,              category: "Layout" },
  { name: "MoreHorizontal",    component: MoreHorizontal,    category: "Layout" },
  { name: "MoreVertical",      component: MoreVertical,      category: "Layout" },
  { name: "Maximize",          component: Maximize,          category: "Layout" },
  { name: "Maximize2",         component: Maximize2,         category: "Layout" },
  { name: "Minimize",          component: Minimize,          category: "Layout" },
  { name: "Minimize2",         component: Minimize2,         category: "Layout" },
  { name: "Expand",            component: Expand,            category: "Layout" },
  { name: "Shrink",            component: Shrink,            category: "Layout" },
  { name: "AlignLeft",         component: AlignLeft,         category: "Layout" },
  { name: "AlignCenter",       component: AlignCenter,       category: "Layout" },
  { name: "AlignRight",        component: AlignRight,        category: "Layout" },
  { name: "AlignJustify",      component: AlignJustify,      category: "Layout" },
  { name: "Bold",              component: Bold,              category: "Layout" },
  { name: "Italic",            component: Italic,            category: "Layout" },
  /* Files & Data */
  { name: "File",              component: File,              category: "Files" },
  { name: "FileText",          component: FileText,          category: "Files" },
  { name: "FilePlus",          component: FilePlus,          category: "Files" },
  { name: "FileMinus",         component: FileMinus,         category: "Files" },
  { name: "FileCheck",         component: FileCheck,         category: "Files" },
  { name: "FileX",             component: FileX,             category: "Files" },
  { name: "FileCode",          component: FileCode,          category: "Files" },
  { name: "FileJson",          component: FileJson,          category: "Files" },
  { name: "FileImage",         component: FileImage,         category: "Files" },
  { name: "Folder",            component: Folder,            category: "Files" },
  { name: "FolderOpen",        component: FolderOpen,        category: "Files" },
  { name: "FolderPlus",        component: FolderPlus,        category: "Files" },
  { name: "FolderMinus",       component: FolderMinus,       category: "Files" },
  { name: "Archive",           component: Archive,           category: "Files" },
  { name: "Download",          component: Download,          category: "Files" },
  { name: "Upload",            component: Upload,            category: "Files" },
  { name: "Link",              component: Link,              category: "Files" },
  { name: "Link2",             component: Link2,             category: "Files" },
  { name: "Paperclip",         component: Paperclip,         category: "Files" },
  { name: "Clipboard",         component: Clipboard,         category: "Files" },
  { name: "ClipboardCheck",    component: ClipboardCheck,    category: "Files" },
  { name: "ClipboardList",     component: ClipboardList,     category: "Files" },
  { name: "Copy",              component: Copy,              category: "Files" },
  { name: "Package",           component: Package,           category: "Files" },
  /* Communication */
  { name: "Mail",              component: Mail,              category: "Communication" },
  { name: "MailOpen",          component: MailOpen,          category: "Communication" },
  { name: "MessageSquare",     component: MessageSquare,     category: "Communication" },
  { name: "MessageCircle",     component: MessageCircle,     category: "Communication" },
  { name: "Phone",             component: Phone,             category: "Communication" },
  { name: "PhoneCall",         component: PhoneCall,         category: "Communication" },
  { name: "PhoneOff",          component: PhoneOff,          category: "Communication" },
  { name: "Video",             component: Video,             category: "Communication" },
  { name: "VideoOff",          component: VideoOff,          category: "Communication" },
  { name: "Mic",               component: Mic,               category: "Communication" },
  { name: "MicOff",            component: MicOff,            category: "Communication" },
  { name: "Globe",             component: Globe,             category: "Communication" },
  { name: "Globe2",            component: Globe2,            category: "Communication" },
  { name: "AtSign",            component: AtSign,            category: "Communication" },
  { name: "Send",              component: Send,              category: "Communication" },
  { name: "Share2",            component: Share2,            category: "Communication" },
  { name: "Rss",               component: Rss,               category: "Communication" },
  /* Analytics */
  { name: "BarChart2",         component: BarChart2,         category: "Analytics" },
  { name: "BarChart3",         component: BarChart3,         category: "Analytics" },
  { name: "BarChart4",         component: BarChart4,         category: "Analytics" },
  { name: "PieChart",          component: PieChart,          category: "Analytics" },
  { name: "TrendingUp",        component: TrendingUp,        category: "Analytics" },
  { name: "TrendingDown",      component: TrendingDown,      category: "Analytics" },
  { name: "Activity",          component: Activity,          category: "Analytics" },
  { name: "Database",          component: Database,          category: "Analytics" },
  { name: "Server",            component: Server,            category: "Analytics" },
  { name: "Cpu",               component: Cpu,               category: "Analytics" },
  { name: "Wifi",              component: Wifi,              category: "Analytics" },
  { name: "WifiOff",           component: WifiOff,           category: "Analytics" },
  { name: "Signal",            component: Signal,            category: "Analytics" },
  /* Media */
  { name: "Play",              component: Play,              category: "Media" },
  { name: "Pause",             component: Pause,             category: "Media" },
  { name: "Square",            component: Square,            category: "Media" },
  { name: "SkipForward",       component: SkipForward,       category: "Media" },
  { name: "SkipBack",          component: SkipBack,          category: "Media" },
  { name: "FastForward",       component: FastForward,       category: "Media" },
  { name: "Rewind",            component: Rewind,            category: "Media" },
  { name: "Volume",            component: Volume,            category: "Media" },
  { name: "Volume1",           component: Volume1,           category: "Media" },
  { name: "Volume2",           component: Volume2,           category: "Media" },
  { name: "VolumeX",           component: VolumeX,           category: "Media" },
  { name: "Music",             component: Music,             category: "Media" },
  { name: "Music2",            component: Music2,            category: "Media" },
  { name: "Image",             component: Image,             category: "Media" },
  { name: "ImageOff",          component: ImageOff,          category: "Media" },
  { name: "Camera",            component: Camera,            category: "Media" },
  { name: "Film",              component: Film,              category: "Media" },
  { name: "Tv",                component: Tv,                category: "Media" },
  { name: "Radio",             component: Radio,             category: "Media" },
  /* Users */
  { name: "User",              component: User,              category: "Users" },
  { name: "Users",             component: Users,             category: "Users" },
  { name: "UserPlus",          component: UserPlus,          category: "Users" },
  { name: "UserMinus",         component: UserMinus,         category: "Users" },
  { name: "UserCheck",         component: UserCheck,         category: "Users" },
  { name: "UserX",             component: UserX,             category: "Users" },
  { name: "Contact",           component: Contact,           category: "Users" },
  /* System */
  { name: "Settings",          component: Settings,          category: "System" },
  { name: "Settings2",         component: Settings2,         category: "System" },
  { name: "SlidersHorizontal", component: SlidersHorizontal, category: "System" },
  { name: "Sliders",           component: Sliders,           category: "System" },
  { name: "Power",             component: Power,             category: "System" },
  { name: "Loader",            component: Loader,            category: "System" },
  { name: "Loader2",           component: Loader2,           category: "System" },
  { name: "Clock",             component: Clock,             category: "System" },
  { name: "Clock1",            component: Clock1,            category: "System" },
  { name: "Calendar",          component: CalendarLucide,    category: "System" },
  { name: "CalendarCheck",     component: CalendarCheck,     category: "System" },
  { name: "CalendarPlus",      component: CalendarPlus,      category: "System" },
  { name: "Terminal",          component: Terminal,          category: "System" },
  { name: "Code",              component: Code,              category: "System" },
  { name: "Code2",             component: Code2,             category: "System" },
  { name: "Bug",               component: Bug,               category: "System" },
  { name: "Wrench",            component: Wrench,            category: "System" },
  { name: "Hammer",            component: Hammer,            category: "System" },
  { name: "Zap",               component: Zap,               category: "System" },
  { name: "LogOut",            component: LogOut,            category: "System" },
  /* Shapes */
  { name: "Circle",            component: Circle,            category: "Shapes" },
  { name: "Triangle",          component: Triangle,          category: "Shapes" },
  { name: "Hexagon",           component: Hexagon,           category: "Shapes" },
  { name: "Pentagon",          component: Pentagon,          category: "Shapes" },
  { name: "Diamond",           component: Diamond,           category: "Shapes" },
  { name: "Octagon",           component: Octagon,           category: "Shapes" },
  /* Maps */
  { name: "MapPin",            component: MapPin,            category: "Maps" },
  { name: "Map",               component: Map,               category: "Maps" },
  { name: "Navigation",        component: Navigation,        category: "Maps" },
  { name: "Compass",           component: Compass,           category: "Maps" },
  { name: "Locate",            component: Locate,            category: "Maps" },
];

const ICON_CATEGORIES = ["All", ...Array.from(new Set(ICON_REGISTRY.map((i) => i.category)))];
const ICON_SIZES = [16, 20, 24, 32] as const;

function IconsPage() {
  const [query, setQuery]       = useState("");
  const [category, setCategory] = useState("All");
  const [size, setSize]         = useState<16 | 20 | 24 | 32>(24);
  const ICON_SIZE_CLS: Record<number, string> = { 16: "h-4 w-4", 20: "h-5 w-5", 24: "h-6 w-6", 32: "h-8 w-8" };
  const [copied, setCopied]     = useState<string | null>(null);

  const filtered = useMemo(() => {
    return ICON_REGISTRY.filter((icon) => {
      const matchQuery    = icon.name.toLowerCase().includes(query.toLowerCase());
      const matchCategory = category === "All" || icon.category === category;
      return matchQuery && matchCategory;
    });
  }, [query, category]);

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(`import { ${name} } from "lucide-react";`);
    setCopied(name);
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <div className="max-w-5xl space-y-10 animate-fade-in">

      {/* Header */}
      <div className="border-b border-border pb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-3">
          <span className="px-1.5 py-0.5 rounded bg-muted">lucide-react</span>
          <span>{ICON_REGISTRY.length} icons</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">Icons</h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Pau ships with <a href="https://lucide.dev" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">Lucide</a> — a clean, consistent icon family with {ICON_REGISTRY.length}+ icons ready to import. Click any icon to copy its import statement.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Search icons…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 h-9 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 transition"
          />
          {query && (
            <button onClick={() => setQuery("")} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Size picker */}
        <div className="flex items-center gap-1 rounded-md border border-border p-0.5">
          {ICON_SIZES.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                size === s
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {s}px
            </button>
          ))}
        </div>
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2">
        {ICON_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
              category === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
            }`}
          >
            {cat}
            {cat !== "All" && (
              <span className="ml-1 opacity-60">
                {ICON_REGISTRY.filter((i) => i.category === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Results count */}
      {query || category !== "All" ? (
        <p className="text-sm text-muted-foreground -mt-4">
          {filtered.length === 0 ? "No icons found" : `${filtered.length} icon${filtered.length === 1 ? "" : "s"}`}
        </p>
      ) : null}

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
          <ImageOff className="h-10 w-10 text-muted-foreground/40" />
          <p className="text-muted-foreground">No icons match <strong>"{query}"</strong></p>
          <button onClick={() => { setQuery(""); setCategory("All"); }} className="text-sm text-primary underline underline-offset-2">Clear search</button>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-2">
          {filtered.map(({ name, component: Icon }) => (
            <TooltipProvider key={name} delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => handleCopy(name)}
                    className={`group relative flex flex-col items-center justify-center gap-2 p-3 rounded-xl border transition-all text-center ${
                      copied === name
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border bg-card hover:border-primary/50 hover:bg-muted/60 text-foreground"
                    }`}
                  >
                    {copied === name ? (
                      <Check className={`${ICON_SIZE_CLS[size]} text-primary`} />
                    ) : (
                      <Icon className={ICON_SIZE_CLS[size]} />
                    )}
                    <span className="text-[10px] leading-tight text-muted-foreground group-hover:text-foreground break-all transition-colors line-clamp-2">
                      {name}
                    </span>
                    {copied === name && (
                      <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary flex items-center justify-center">
                        <Check className="h-2.5 w-2.5 text-primary-foreground" />
                      </span>
                    )}
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top" className="text-xs font-mono">
                  {copied === name ? "Copied!" : `import { ${name} } from "lucide-react"`}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      )}

      {/* Usage note */}
      <div className="rounded-xl border border-border bg-muted/30 p-5 space-y-2">
        <p className="text-sm font-medium">Usage</p>
        <pre className="text-xs text-muted-foreground font-mono bg-muted rounded-md p-3 overflow-x-auto">
{`import { Star } from "lucide-react";

<Star className="h-4 w-4" />`}
        </pre>
        <p className="text-xs text-muted-foreground">All icons accept a <code className="px-1 py-0.5 bg-muted rounded text-[11px] font-mono">className</code> prop. Use Tailwind's <code className="px-1 py-0.5 bg-muted rounded text-[11px] font-mono">h-*</code> / <code className="px-1 py-0.5 bg-muted rounded text-[11px] font-mono">w-*</code> utilities to control size.</p>
      </div>

    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   APP SHELL
═══════════════════════════════════════════════════════════ */

type Page = "overview" | "tokens" | "components" | "icons";

const navItems: { id: Page; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "overview",    label: "Overview",    icon: Home },
  { id: "tokens",      label: "Tokens",      icon: Palette },
  { id: "components",  label: "Components",  icon: Layers },
  { id: "icons",       label: "Icons",       icon: Grid2X2 },
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

          {/* ── Icons ── */}
          {page === "icons" && <IconsPage />}

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
