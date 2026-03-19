import { useState } from "react";
import {
  AlertCircle, Bell, Check, ChevronDown, Info, LogOut,
  Moon, Settings, Sun, User, Zap,
} from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Table, TableBody, TableCaption, TableCell, TableHead,
  TableHeader, TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

/* ─── Types ──────────────────────────────────────── */
type ColorSwatch = { name: string; hex: string; textClass: string };
type Palette = { label: string; swatches: ColorSwatch[] };

/* ─── Color Data ──────────────────────────────────── */
const palettes: Palette[] = [
  {
    label: "Primary — Forest Green",
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
    label: "Secondary — Golden Yellow",
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
    label: "Intense — Mint Teal",
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
    label: "Neutral — Grey",
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

const invoices = [
  { invoice: "INV-001", status: "Paid",    method: "Credit Card", amount: "$250.00" },
  { invoice: "INV-002", status: "Pending", method: "PayPal",      amount: "$150.00" },
  { invoice: "INV-003", status: "Paid",    method: "Bank Transfer",amount: "$350.00" },
  { invoice: "INV-004", status: "Overdue", method: "Credit Card", amount: "$450.00" },
];

/* ─── Section wrapper ─────────────────────────────── */
function Section({
  title, description, children,
}: {
  title: string; description?: string; children: React.ReactNode;
}) {
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

/* ─── App ─────────────────────────────────────────── */
export default function App() {
  const [dark, setDark] = useState(false);
  const [checked, setChecked] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

        {/* ── Header ───────────────────────────────── */}
        <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg tracking-tight">Obra Design System</span>
              <Badge variant="secondary" className="hidden sm:inline-flex">v1.0.0</Badge>
            </div>
            <div className="flex items-center gap-2">
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

        <main className="container py-12 space-y-16">

          {/* ── Hero ─────────────────────────────── */}
          <div className="space-y-4 animate-fade-in">
            <div className="flex gap-2 flex-wrap">
              <Badge>ShadCN-based</Badge>
              <Badge variant="secondary">Brand Tokens</Badge>
              <Badge variant="accent" className="bg-accent text-accent-foreground border-transparent">Accessible</Badge>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight max-w-2xl leading-tight">
              Obra Design System
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              A production-ready component library built on ShadCN with a custom brand palette —
              forest green, golden yellow, mint teal, and neutral grey.
            </p>
            <div className="flex gap-3 flex-wrap pt-2">
              <Button size="lg">Get started</Button>
              <Button size="lg" variant="outline">View tokens</Button>
              <Button size="lg" variant="secondary">Browse components</Button>
            </div>
          </div>

          {/* ── Colors ───────────────────────────── */}
          <Section title="Color System" description="Four brand palettes with 11 steps each (50–950).">
            <div className="space-y-8">
              {palettes.map((p) => (
                <div key={p.label} className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">{p.label}</p>
                  <div className="grid grid-cols-11 gap-1 overflow-x-auto">
                    {p.swatches.map((s) => (
                      <div key={s.name} className="flex flex-col gap-1 min-w-[56px]">
                        <div
                          className={`h-12 w-full rounded-md flex items-end p-1.5 ${s.textClass}`}
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

          {/* ── Typography ───────────────────────── */}
          <Section title="Typography" description="Inter font family — headings to captions.">
            <div className="space-y-6">
              {[
                { el: "h1", label: "Heading 1", cls: "text-4xl font-extrabold tracking-tight" },
                { el: "h2", label: "Heading 2", cls: "text-3xl font-semibold tracking-tight" },
                { el: "h3", label: "Heading 3", cls: "text-2xl font-semibold tracking-tight" },
                { el: "h4", label: "Heading 4", cls: "text-xl font-semibold tracking-tight" },
                { el: "p",  label: "Body",      cls: "text-base leading-relaxed" },
                { el: "p",  label: "Body Small", cls: "text-sm leading-normal" },
                { el: "p",  label: "Caption",   cls: "text-xs font-medium tracking-wide uppercase" },
              ].map(({ label, cls }) => (
                <div key={label} className="flex items-baseline gap-6 border-b border-border pb-4 last:border-0">
                  <span className="w-24 shrink-0 text-xs text-muted-foreground font-mono">{label}</span>
                  <p className={cls}>The quick brown fox jumps over the lazy dog</p>
                </div>
              ))}
            </div>
          </Section>

          {/* ── Buttons ──────────────────────────── */}
          <Section title="Buttons" description="Seven variants across four sizes.">
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

          {/* ── Badges ───────────────────────────── */}
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

          {/* ── Cards ────────────────────────────── */}
          <Section title="Cards" description="Content containers with header, body, and footer.">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Forest Green Plan</CardTitle>
                  <CardDescription>Perfect for growing teams and projects.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">$29<span className="text-base font-normal text-muted-foreground">/mo</span></p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {["Unlimited projects", "10 team members", "Analytics dashboard", "Priority support"].map((f) => (
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
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Get started
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Manage your preferences.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { id: "email",  label: "Email notifications" },
                    { id: "sms",    label: "SMS alerts" },
                    { id: "push",   label: "Push notifications" },
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

          {/* ── Form Controls ────────────────────── */}
          <Section title="Form Controls" description="Inputs, selects, checkboxes, and switches.">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input id="email" type="email" placeholder="hello@obra.studio" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select>
                    <SelectTrigger id="role">
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
                  <Checkbox
                    id="terms"
                    checked={checked}
                    onCheckedChange={(v) => setChecked(!!v)}
                  />
                  <Label htmlFor="terms" className="cursor-pointer">
                    I agree to the terms and conditions
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    id="notifications"
                    checked={switchOn}
                    onCheckedChange={setSwitchOn}
                  />
                  <Label htmlFor="notifications" className="cursor-pointer">
                    {switchOn ? "Notifications enabled" : "Notifications disabled"}
                  </Label>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Avatars</Label>
                  <div className="flex items-center gap-3">
                    {["EL", "AB", "CD", "EF"].map((initials) => (
                      <Avatar key={initials}>
                        <AvatarImage src="" />
                        <AvatarFallback>{initials}</AvatarFallback>
                      </Avatar>
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
                        <DialogDescription>
                          This action cannot be undone. Are you sure you want to continue?
                        </DialogDescription>
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

          {/* ── Alerts ───────────────────────────── */}
          <Section title="Alerts" description="Four semantic variants.">
            <div className="space-y-3">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
              </Alert>
              <Alert variant="success">
                <Check className="h-4 w-4" />
                <AlertTitle>All systems operational</AlertTitle>
                <AlertDescription>Everything is running smoothly.</AlertDescription>
              </Alert>
              <Alert variant="warning">
                <Bell className="h-4 w-4" />
                <AlertTitle>Approaching limit</AlertTitle>
                <AlertDescription>You have used 80% of your storage quota.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Deployment failed</AlertTitle>
                <AlertDescription>Check your configuration and try again.</AlertDescription>
              </Alert>
            </div>
          </Section>

          {/* ── Table ────────────────────────────── */}
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
                        <Badge
                          variant={
                            row.status === "Paid"    ? "success"     :
                            row.status === "Pending" ? "secondary"   : "destructive"
                          }
                        >
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

        </main>

        {/* ── Footer ───────────────────────────────── */}
        <footer className="border-t border-border mt-16">
          <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-primary flex items-center justify-center">
                <Zap className="h-3 w-3 text-primary-foreground" />
              </div>
              <span className="font-medium text-foreground">Obra Design System</span>
            </div>
            <p>Built with ShadCN · Tailwind CSS · React · Vite</p>
          </div>
        </footer>

      </div>
    </TooltipProvider>
  );
}
