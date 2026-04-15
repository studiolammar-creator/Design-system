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
  /* ── all remaining lucide icons ── */
  AArrowDown, AArrowUp, ALargeSmall, Accessibility, AirVent, Airplay, AlarmClock, AlarmClockCheck,
  AlarmClockMinus, AlarmClockOff, AlarmClockPlus, AlarmSmoke, Album, AlignCenterHorizontal, AlignCenterVertical, AlignEndHorizontal,
  AlignEndVertical, AlignHorizontalDistributeCenter, AlignHorizontalDistributeEnd, AlignHorizontalDistributeStart, AlignHorizontalJustifyCenter, AlignHorizontalJustifyEnd, AlignHorizontalJustifyStart, AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween, AlignStartHorizontal, AlignStartVertical, AlignVerticalDistributeCenter, AlignVerticalDistributeEnd, AlignVerticalDistributeStart, AlignVerticalJustifyCenter, AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart, AlignVerticalSpaceAround, AlignVerticalSpaceBetween, Ambulance, Ampersand, Ampersands, Anchor, Angry,
  Annoyed, Antenna, Anvil, Aperture, AppWindow, AppWindowMac, Apple, ArchiveRestore,
  ArchiveX, AreaChart, Armchair, ArrowBigDown, ArrowBigDownDash, ArrowBigLeft, ArrowBigLeftDash, ArrowBigRight,
  ArrowBigRightDash, ArrowBigUp, ArrowBigUpDash, ArrowDown01, ArrowDown10, ArrowDownAZ, ArrowDownFromLine, ArrowDownNarrowWide,
  ArrowDownToDot, ArrowDownToLine, ArrowDownUp, ArrowDownWideNarrow, ArrowDownZA, ArrowLeftFromLine, ArrowLeftToLine, ArrowRightFromLine,
  ArrowRightLeft, ArrowRightToLine, ArrowUp01, ArrowUp10, ArrowUpAZ, ArrowUpFromDot, ArrowUpFromLine, ArrowUpNarrowWide,
  ArrowUpToLine, ArrowUpWideNarrow, ArrowUpZA, ArrowsUpFromLine, Asterisk, Atom, AudioLines, AudioWaveform,
  Award, Axe, Axis3d, Baby, Backpack, Badge as BadgeIcon, BadgeAlert, BadgeCent,
  BadgeCheck, BadgeDollarSign, BadgeEuro, BadgeHelp, BadgeIndianRupee, BadgeInfo, BadgeJapaneseYen, BadgeMinus,
  BadgePercent, BadgePlus, BadgePoundSterling, BadgeRussianRuble, BadgeSwissFranc, BadgeX, BaggageClaim, Ban,
  Banana, Banknote, BarChart as BarChartIcon, BarChartBig, BarChartHorizontal, BarChartHorizontalBig, Barcode, Baseline,
  Bath, Battery, BatteryCharging, BatteryFull, BatteryLow, BatteryMedium, BatteryWarning, Beaker,
  Bean, BeanOff, Bed, BedDouble, BedSingle, Beef, Beer, BeerOff,
  BellDot, BellElectric, BellMinus, BellPlus, BellRing, BetweenHorizontalEnd, BetweenHorizontalStart, BetweenVerticalEnd,
  BetweenVerticalStart, Bike, Binary, Biohazard, Bird, Bitcoin, Blend, Blinds,
  Blocks, Bluetooth, BluetoothConnected, BluetoothOff, BluetoothSearching, Bolt, Bomb, Bone,
  Book, BookA, BookAudio, BookCheck, BookCopy, BookDashed, BookDown, BookHeadphones,
  BookHeart, BookImage, BookKey, BookLock, BookMarked, BookMinus, BookOpen, BookOpenCheck,
  BookOpenText, BookPlus, BookText, BookType, BookUp, BookUp2, BookUser, BookX,
  BookmarkMinus, BookmarkPlus, BookmarkX, BoomBox, Bot, BotMessageSquare, Box, BoxSelect,
  Boxes, Braces, Brackets, Brain, BrainCircuit, BrainCog, BrickWall, Briefcase,
  BriefcaseBusiness, BriefcaseMedical, BringToFront, Brush, BugOff, BugPlay, Building, Building2,
  Bus, BusFront, Cable, CableCar, Cake, CakeSlice, Calculator, CalendarCheck2,
  CalendarClock, CalendarDays, CalendarFold, CalendarHeart, CalendarMinus, CalendarMinus2, CalendarOff, CalendarPlus2,
  CalendarRange, CalendarSearch, CalendarX, CalendarX2, CameraOff, CandlestickChart, Candy, CandyCane,
  CandyOff, Cannabis, Captions, CaptionsOff, Car, CarFront, CarTaxiFront, Caravan,
  Carrot, CaseLower, CaseSensitive, CaseUpper, CassetteTape, Cast, Castle, Cat,
  Cctv, CheckCheck, ChefHat, Cherry, ChevronFirst, ChevronLast, ChevronsDownUp, ChevronsLeftRight,
  ChevronsRightLeft, ChevronsUpDown, Chrome, Church, Cigarette, CigaretteOff, CircleAlert, CircleArrowDown,
  CircleArrowLeft, CircleArrowOutDownLeft, CircleArrowOutDownRight, CircleArrowOutUpLeft, CircleArrowOutUpRight, CircleArrowRight, CircleArrowUp, CircleCheck,
  CircleCheckBig, CircleChevronDown, CircleChevronLeft, CircleChevronRight, CircleChevronUp, CircleDashed, CircleDivide, CircleDollarSign,
  CircleDot, CircleDotDashed, CircleEllipsis, CircleEqual, CircleFadingPlus, CircleGauge, CircleHelp, CircleMinus,
  CircleOff, CircleParking, CircleParkingOff, CirclePause, CirclePercent, CirclePlay, CirclePlus, CirclePower,
  CircleSlash, CircleSlash2, CircleStop, CircleUser, CircleUserRound, CircleX, CircuitBoard, Citrus,
  Clapperboard, ClipboardCopy, ClipboardMinus, ClipboardPaste, ClipboardPen, ClipboardPenLine, ClipboardPlus, ClipboardType,
  ClipboardX, Clock10, Clock11, Clock12, Clock2, Clock3, Clock4, Clock5,
  Clock6, Clock7, Clock8, Clock9, Cloud, CloudCog, CloudDownload, CloudDrizzle,
  CloudFog, CloudHail, CloudLightning, CloudMoon, CloudMoonRain, CloudOff, CloudRain, CloudRainWind,
  CloudSnow, CloudSun, CloudSunRain, CloudUpload, Cloudy, Clover, Club, CodeXml,
  Codepen, Codesandbox, Coffee, Cog, Coins, Columns2, Columns3, Columns4,
  Combine, Command as CommandIcon, Component, Computer, ConciergeBell, Cone, Construction, ContactRound,
  Container, Contrast, Cookie, CookingPot, CopyCheck, CopyMinus, CopyPlus, CopySlash,
  CopyX, Copyleft, Copyright, CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp, CreativeCommons,
  CreditCard, Croissant, Crop, Cross, Crosshair, Crown, Cuboid, CupSoda,
  Currency, Cylinder, DatabaseBackup, DatabaseZap, Delete, Dessert, Diameter, DiamondPercent,
  Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Dices, Diff,
  Disc, Disc2, Disc3, DiscAlbum, Dna, DnaOff, Dock, Dog,
  DollarSign, Donut, DoorClosed, DoorOpen, Dot, DraftingCompass, Drama, Dribbble,
  Drill, Droplet, Droplets, Drum, Drumstick, Dumbbell, Ear, EarOff,
  Earth, EarthLock, Eclipse, Egg, EggFried, EggOff, Ellipsis, EllipsisVertical,
  Equal, EqualNot, Eraser, Euro, ExternalLink, Facebook, Factory, Fan,
  Feather, Fence, FerrisWheel, Figma, FileArchive, FileAudio, FileAudio2, FileAxis3d,
  FileBadge, FileBadge2, FileBarChart, FileBarChart2, FileBox, FileCheck2, FileClock, FileCode2,
  FileCog, FileDiff, FileDigit, FileDown, FileHeart, FileInput, FileJson2, FileKey,
  FileKey2, FileLineChart, FileLock, FileLock2, FileMinus2, FileMusic, FileOutput, FilePen,
  FilePenLine, FilePieChart, FilePlus2, FileQuestion, FileScan, FileSearch, FileSearch2, FileSliders,
  FileSpreadsheet, FileStack, FileSymlink, FileTerminal, FileType, FileType2, FileUp, FileVideo,
  FileVideo2, FileVolume, FileVolume2, FileWarning, FileX2, Files, FilterX, FireExtinguisher,
  Fish, FishOff, FishSymbol, Flag, FlagOff, FlagTriangleLeft, FlagTriangleRight, Flame,
  FlameKindling, Flashlight, FlashlightOff, FlaskConical, FlaskConicalOff, FlaskRound, FlipHorizontal, FlipHorizontal2,
  FlipVertical, FlipVertical2, Flower, Flower2, Focus, FoldHorizontal, FoldVertical, FolderArchive,
  FolderCheck, FolderClock, FolderClosed, FolderCog, FolderDot, FolderDown, FolderGit, FolderGit2,
  FolderHeart, FolderInput, FolderKanban, FolderKey, FolderLock, FolderOpenDot, FolderOutput, FolderPen,
  FolderRoot, FolderSearch, FolderSearch2, FolderSymlink, FolderSync, FolderTree, FolderUp, FolderX,
  Folders, Footprints, Forklift, Forward, Frame, Framer, Frown, Fuel,
  Fullscreen, GalleryHorizontal, GalleryHorizontalEnd, GalleryThumbnails, GalleryVertical, GalleryVerticalEnd, Gamepad, Gamepad2,
  GanttChart, Gauge, Gavel, Gem, Ghost, Gift, GitBranch, GitBranchPlus,
  GitCommitHorizontal, GitCommitVertical, GitCompare, GitCompareArrows, GitFork, GitGraph, GitMerge, GitPullRequest,
  GitPullRequestArrow, GitPullRequestClosed, GitPullRequestCreate, GitPullRequestCreateArrow, GitPullRequestDraft, Github, Gitlab, GlassWater,
  Glasses, GlobeLock, Goal, Grab, GraduationCap, Grape, Grid2x2, Grid3x3,
  Grip, GripHorizontal, GripVertical, Group, Guitar, Ham, Hand, HandCoins,
  HandHeart, HandHelping, HandMetal, HandPlatter, Handshake, HardDrive, HardDriveDownload, HardDriveUpload,
  HardHat, Haze, HdmiPort, Heading, Heading1, Heading2, Heading3, Heading4,
  Heading5, Heading6, Headphones, Headset, HeartCrack, HeartHandshake, HeartOff, HeartPulse,
  Heater, Highlighter, History, Hop, HopOff, Hospital, Hotel, Hourglass,
  IceCreamBowl, IceCreamCone, ImageDown, ImageMinus, ImagePlus, ImageUp, Images, Import,
  Inbox, IndentDecrease, IndentIncrease, IndianRupee, Infinity, InspectionPanel, Instagram, IterationCcw,
  IterationCw, JapaneseYen, Joystick, Kanban, Key, KeyRound, KeySquare, Keyboard,
  KeyboardMusic, Lamp, LampCeiling, LampDesk, LampFloor, LampWallDown, LampWallUp, LandPlot,
  Landmark, Languages, Laptop, LaptopMinimal, Lasso, LassoSelect, Laugh, Layers2,
  Layers3, LayoutPanelLeft, LayoutPanelTop, LayoutTemplate, Leaf, LeafyGreen, Library, LibraryBig,
  LifeBuoy, Ligature, Lightbulb, LightbulbOff, LineChart as LineChartIcon, Link2Off, Linkedin, ListCollapse,
  ListEnd, ListFilter, ListMinus, ListMusic, ListPlus, ListRestart, ListStart, ListTodo,
  ListTree, ListVideo, ListX, LoaderCircle, LocateFixed, LocateOff, LockKeyhole, LockKeyholeOpen,
  LockOpen, LogIn, Lollipop, Luggage, Magnet, MailCheck, MailMinus, MailPlus,
  MailQuestion, MailSearch, MailWarning, MailX, Mailbox, Mails, MapPinOff, MapPinned,
  Martini, Medal, Megaphone, MegaphoneOff, Meh, MemoryStick, Merge, MessageCircleCode,
  MessageCircleDashed, MessageCircleHeart, MessageCircleMore, MessageCircleOff, MessageCirclePlus, MessageCircleQuestion, MessageCircleReply, MessageCircleWarning,
  MessageCircleX, MessageSquareCode, MessageSquareDashed, MessageSquareDiff, MessageSquareDot, MessageSquareHeart, MessageSquareMore, MessageSquareOff,
  MessageSquarePlus, MessageSquareQuote, MessageSquareReply, MessageSquareShare, MessageSquareText, MessageSquareWarning, MessageSquareX, MessagesSquare,
  MicVocal, Microscope, Microwave, Milestone, Milk, MilkOff, Monitor, MonitorCheck,
  MonitorDot, MonitorDown, MonitorOff, MonitorPause, MonitorPlay, MonitorSmartphone, MonitorSpeaker, MonitorStop,
  MonitorUp, MonitorX, MoonStar, Mountain, MountainSnow, Mouse, MousePointer, MousePointer2,
  MousePointerClick, Move, Move3d, MoveDiagonal, MoveDiagonal2, MoveDownRight, MoveHorizontal, MoveUpLeft,
  MoveVertical, Music3, Music4, Navigation2, Navigation2Off, NavigationOff, Network, Newspaper,
  Nfc, Notebook, NotebookPen, NotebookTabs, NotebookText, NotepadText, NotepadTextDashed, Nut,
  NutOff, OctagonAlert, OctagonPause, OctagonX, Option, Orbit, Package2, PackageCheck,
  PackageMinus, PackageOpen, PackagePlus, PackageSearch, PackageX, PaintBucket, PaintRoller, Paintbrush,
  Paintbrush2, PanelBottomClose, PanelBottomDashed, PanelBottomOpen, PanelLeftClose, PanelLeftDashed, PanelLeftOpen, PanelRightClose,
  PanelRightDashed, PanelRightOpen, PanelTopClose, PanelTopDashed, PanelTopOpen, PanelsLeftBottom, PanelsRightBottom, PanelsTopLeft,
  Parentheses, ParkingMeter, PartyPopper, PawPrint, PcCase, PenLine, PenTool, PencilLine,
  PencilRuler, Percent, PersonStanding, PhoneForwarded, PhoneIncoming, PhoneMissed, PhoneOutgoing, Pi,
  Piano, Pickaxe, PictureInPicture, PictureInPicture2, PiggyBank, Pilcrow, Pill, Pin,
  PinOff, Pipette, Pizza, Plane, PlaneLanding, PlaneTakeoff, Plug, Plug2,
  PlugZap, PlugZap2, Pocket, PocketKnife, Podcast, Pointer, PointerOff, Popcorn,
  Popsicle, PoundSterling, PowerOff, Presentation, Printer, Projector, Proportions, Puzzle,
  Pyramid, QrCode, Quote, Rabbit, Radar, Radiation, Radical, RadioReceiver,
  RadioTower, Radius, RailSymbol, Rainbow, Rat, Ratio, Receipt, ReceiptCent,
  ReceiptEuro, ReceiptIndianRupee, ReceiptJapaneseYen, ReceiptPoundSterling, ReceiptRussianRuble, ReceiptSwissFranc, ReceiptText, RectangleEllipsis,
  RectangleHorizontal, RectangleVertical, Recycle, Redo2, RedoDot, RefreshCcwDot, RefreshCwOff, Refrigerator,
  Regex, RemoveFormatting, Repeat1, Replace, ReplaceAll, Reply, ReplyAll, Ribbon,
  Rocket, RockingChair, RollerCoaster, Rotate3d, RotateCcwSquare, RotateCwSquare, Route, RouteOff,
  Router, Rows2, Rows3, Rows4, Ruler, RussianRuble, Sailboat, Salad,
  Sandwich, Satellite, SatelliteDish, Save, SaveAll, Scale, Scale3d, Scaling,
  Scan, ScanBarcode, ScanEye, ScanFace, ScanLine, ScanSearch, ScanText, ScatterChart as ScatterChartIcon,
  School, Scissors, ScissorsLineDashed, ScreenShare, ScreenShareOff, Scroll, ScrollText, SearchCheck,
  SearchCode, SearchSlash, SearchX, SendHorizontal, SendToBack, SeparatorHorizontal, SeparatorVertical, ServerCog,
  ServerCrash, ServerOff, Shapes, Share, Sheet as SheetIcon, Shell, ShieldAlert, ShieldBan,
  ShieldCheck, ShieldEllipsis, ShieldHalf, ShieldMinus, ShieldOff, ShieldPlus, ShieldQuestion, ShieldX,
  Ship, ShipWheel, Shirt, ShoppingBag, ShoppingBasket, ShoppingCart, Shovel, ShowerHead,
  Shrub, Shuffle, Sigma, SignalHigh, SignalLow, SignalMedium, SignalZero, Signpost,
  SignpostBig, Siren, Skull, Slack, Slice, SlidersVertical, Smartphone, SmartphoneCharging,
  SmartphoneNfc, Smile, SmilePlus, Snail, Snowflake, Sofa, Soup, Space,
  Spade, Sparkle, Sparkles, Speaker, Speech, SpellCheck, SpellCheck2, Spline,
  Split, SprayCan, Sprout, SquareActivity, SquareArrowDown, SquareArrowDownLeft, SquareArrowDownRight, SquareArrowLeft,
  SquareArrowOutDownLeft, SquareArrowOutDownRight, SquareArrowOutUpLeft, SquareArrowOutUpRight, SquareArrowRight, SquareArrowUp, SquareArrowUpLeft, SquareArrowUpRight,
  SquareAsterisk, SquareBottomDashedScissors, SquareCheck, SquareCheckBig, SquareChevronDown, SquareChevronLeft, SquareChevronRight, SquareChevronUp,
  SquareCode, SquareDashedBottom, SquareDashedBottomCode, SquareDashedKanban, SquareDashedMousePointer, SquareDivide, SquareDot, SquareEqual,
  SquareFunction, SquareGanttChart, SquareKanban, SquareLibrary, SquareM, SquareMenu, SquareMinus, SquareMousePointer,
  SquareParking, SquareParkingOff, SquarePen, SquarePercent, SquarePi, SquarePilcrow, SquarePlay, SquarePlus,
  SquarePower, SquareRadical, SquareScissors, SquareSigma, SquareSlash, SquareSplitHorizontal, SquareSplitVertical, SquareStack,
  SquareTerminal, SquareUser, SquareUserRound, SquareX, Squircle, Squirrel, Stamp, StarHalf,
  StarOff, StepBack, StepForward, Stethoscope, Sticker, StickyNote, Store, StretchHorizontal,
  StretchVertical, Strikethrough, Subscript, SunDim, SunMedium, SunMoon, SunSnow, Sunrise,
  Sunset, Superscript, SwatchBook, SwissFranc, SwitchCamera, Sword, Swords, Syringe,
  Table as TableIcon, Table2, TableCellsMerge, TableCellsSplit, TableColumnsSplit, TableProperties, TableRowsSplit, Tablet,
  TabletSmartphone, Tablets, Tags, Tally1, Tally2, Tally3, Tally4, Tally5,
  Tangent, Target, Telescope, Tent, TentTree, TestTube, TestTubeDiagonal, TestTubes,
  Text, TextCursor, TextCursorInput, TextQuote, TextSearch, TextSelect, Theater, Thermometer,
  ThermometerSnowflake, ThermometerSun, Ticket, TicketCheck, TicketMinus, TicketPercent, TicketPlus, TicketSlash,
  TicketX, Timer, TimerOff, TimerReset, ToggleLeft, ToggleRight, Tornado, Torus,
  Touchpad, TouchpadOff, TowerControl, ToyBrick, Tractor, TrafficCone, TrainFront, TrainFrontTunnel,
  TrainTrack, TramFront, TreeDeciduous, TreePalm, TreePine, Trees, Trello, TriangleAlert,
  TriangleRight, Trophy, Truck, Turtle, Tv2, Twitch, Twitter, Type,
  Umbrella, UmbrellaOff, Underline, Undo2, UndoDot, UnfoldHorizontal, UnfoldVertical, Ungroup,
  University, Unlink, Unlink2, Unplug, Usb, UserCog, UserRound, UserRoundCheck,
  UserRoundCog, UserRoundMinus, UserRoundPlus, UserRoundSearch, UserRoundX, UserSearch, UsersRound, Utensils,
  UtensilsCrossed, UtilityPole, Variable, Vault, Vegan, VenetianMask, Vibrate, VibrateOff,
  Videotape, View, Voicemail, Vote, Wallet, WalletCards, WalletMinimal, Wallpaper,
  Wand, WandSparkles, Warehouse, WashingMachine, Watch, Waves, Waypoints, Webcam,
  Webhook, WebhookOff, Weight, Wheat, WheatOff, WholeWord, Wind, Wine,
  WineOff, Workflow, Worm, WrapText, Youtube, ZapOff,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertActions, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
      { token: "destructive",            cssVar: "--destructive",            tailwind: "bg-destructive",            lightHex: "#DC2626", darkHex: "#991B1B", description: "Error & danger states" },
      { token: "destructive-foreground", cssVar: "--destructive-foreground", tailwind: "text-destructive-foreground",lightHex: "#FFFFFF", darkHex: "#FAFAFA", description: "Text on destructive" },
    ],
  },
  {
    group: "Success",
    tokens: [
      { token: "success",            cssVar: "--success",            tailwind: "bg-success",            lightHex: "#1A9241", darkHex: "#55CE78", description: "Positive & confirmed states" },
      { token: "success-foreground", cssVar: "--success-foreground", tailwind: "text-success-foreground",lightHex: "#FFFFFF", darkHex: "#062712", description: "Text on success" },
    ],
  },
  {
    group: "Warning",
    tokens: [
      { token: "warning",            cssVar: "--warning",            tailwind: "bg-warning",            lightHex: "#FFD653", darkHex: "#FFD653", description: "Caution & alert states" },
      { token: "warning-foreground", cssVar: "--warning-foreground", tailwind: "text-warning-foreground",lightHex: "#013229", darkHex: "#013229", description: "Text on warning" },
    ],
  },
  {
    group: "Info",
    tokens: [
      { token: "info",            cssVar: "--info",            tailwind: "bg-info",            lightHex: "#0669CC", darkHex: "#3DA4F9", description: "Informational & neutral feedback" },
      { token: "info-foreground", cssVar: "--info-foreground", tailwind: "text-info-foreground",lightHex: "#FFFFFF", darkHex: "#072247", description: "Text on info" },
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

/* Semantic → Primitive references (from tokens.css) */
const semanticPrimRefs: Record<string, { light: string; dark: string }> = {
  "background":             { light: "--color-white",            dark: "--color-neutral-950" },
  "foreground":             { light: "--color-neutral-800",      dark: "--color-neutral-50"  },
  "card":                   { light: "--color-white",            dark: "--color-neutral-900" },
  "card-foreground":        { light: "--color-neutral-800",      dark: "--color-neutral-50"  },
  "popover":                { light: "--color-white",            dark: "--color-neutral-900" },
  "popover-foreground":     { light: "--color-neutral-800",      dark: "--color-neutral-50"  },
  "primary":                { light: "--color-primary-900",      dark: "--color-intense-400" },
  "primary-foreground":     { light: "--color-primary-50",       dark: "--color-primary-950" },
  "secondary":              { light: "--color-secondary-300",    dark: "--color-secondary-300" },
  "secondary-foreground":   { light: "--color-primary-900",      dark: "--color-primary-900" },
  "muted":                  { light: "--color-neutral-100",      dark: "--color-neutral-800" },
  "muted-foreground":       { light: "--color-neutral-500",      dark: "--color-neutral-400" },
  "accent":                 { light: "--color-intense-400",      dark: "--color-intense-600" },
  "accent-foreground":      { light: "--color-primary-900",      dark: "--color-intense-50"  },
  "destructive":            { light: "--color-destructive-600",  dark: "--color-destructive-800" },
  "destructive-foreground": { light: "--color-white",            dark: "--color-neutral-50"  },
  "success":                { light: "--color-success-600",      dark: "--color-success-400"  },
  "success-foreground":     { light: "--color-white",            dark: "--color-success-950"  },
  "warning":                { light: "--color-secondary-300",    dark: "--color-secondary-300" },
  "warning-foreground":     { light: "--color-primary-900",      dark: "--color-primary-900"  },
  "info":                   { light: "--color-info-600",         dark: "--color-info-400"     },
  "info-foreground":        { light: "--color-white",            dark: "--color-info-950"     },
  "border":                 { light: "--color-neutral-200",      dark: "--color-neutral-700" },
  "input":                  { light: "--color-neutral-200",      dark: "--color-neutral-700" },
  "ring":                   { light: "--color-primary-900",      dark: "--color-intense-400" },
};

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
  {
    label: "Destructive — Red", key: "destructive",
    swatches: [
      { name: "50",  hex: "#FEF2F2", textClass: "text-neutral-800" },
      { name: "100", hex: "#FEE2E2", textClass: "text-neutral-800" },
      { name: "200", hex: "#FECACA", textClass: "text-neutral-800" },
      { name: "300", hex: "#FCA5A5", textClass: "text-neutral-800" },
      { name: "400", hex: "#F87171", textClass: "text-neutral-800" },
      { name: "500", hex: "#EF4444", textClass: "text-white" },
      { name: "600", hex: "#DC2626", textClass: "text-white" },
      { name: "700", hex: "#B91C1C", textClass: "text-white" },
      { name: "800", hex: "#991B1B", textClass: "text-white" },
      { name: "900", hex: "#7F1D1D", textClass: "text-white" },
      { name: "950", hex: "#4A0E0E", textClass: "text-white" },
    ],
  },
  {
    label: "Success — Green", key: "success",
    swatches: [
      { name: "50",  hex: "#F1FCF3", textClass: "text-neutral-800" },
      { name: "100", hex: "#E1F8E6", textClass: "text-neutral-800" },
      { name: "200", hex: "#C0F0CE", textClass: "text-neutral-800" },
      { name: "300", hex: "#8EE4A8", textClass: "text-neutral-800" },
      { name: "400", hex: "#55CE78", textClass: "text-neutral-800" },
      { name: "500", hex: "#2DB558", textClass: "text-white" },
      { name: "600", hex: "#1A9241", textClass: "text-white" },
      { name: "700", hex: "#157333", textClass: "text-white" },
      { name: "800", hex: "#115828", textClass: "text-white" },
      { name: "900", hex: "#0C3E1C", textClass: "text-white" },
      { name: "950", hex: "#062712", textClass: "text-white" },
    ],
  },
  {
    label: "Info — Blue", key: "info",
    swatches: [
      { name: "50",  hex: "#EFF8FF", textClass: "text-neutral-800" },
      { name: "100", hex: "#DBEFFE", textClass: "text-neutral-800" },
      { name: "200", hex: "#B8DFFE", textClass: "text-neutral-800" },
      { name: "300", hex: "#7DC2FD", textClass: "text-neutral-800" },
      { name: "400", hex: "#3DA4F9", textClass: "text-neutral-800" },
      { name: "500", hex: "#1585EE", textClass: "text-white" },
      { name: "600", hex: "#0669CC", textClass: "text-white" },
      { name: "700", hex: "#0554A6", textClass: "text-white" },
      { name: "800", hex: "#074384", textClass: "text-white" },
      { name: "900", hex: "#093869", textClass: "text-white" },
      { name: "950", hex: "#072247", textClass: "text-white" },
    ],
  },
];

const typographyTokens = {
  fontFamily: [
    { token: "font-sans", value: "Sharphy, ui-sans-serif, system-ui, sans-serif", sample: "Aa Bb Cc 123" },
    { token: "font-mono", value: "Space Mono, ui-monospace, SFMono-Regular, Menlo, monospace", sample: "const x = 42;" },
  ],
  fontSize: [
    { token: "text-xs",   value: "12px",  cls: "text-xs" },
    { token: "text-base", value: "14px",  cls: "text-base" },
    { token: "text-md",   value: "16px",  cls: "text-md" },
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
  { token: "rounded-none", value: "0px",    cls: "rounded-none", cssVar: null },
  { token: "rounded-sm",   value: "8px",    cls: "rounded-sm",   cssVar: "calc(var(--radius) - 4px)" },
  { token: "rounded",      value: "4px",    cls: "rounded",      cssVar: null },
  { token: "rounded-md",   value: "10px",   cls: "rounded-md",   cssVar: "calc(var(--radius) - 2px)" },
  { token: "rounded-lg",   value: "12px",   cls: "rounded-lg",   cssVar: "var(--radius)" },
  { token: "rounded-xl",   value: "12px",   cls: "rounded-xl",   cssVar: null },
  { token: "rounded-2xl",  value: "16px",   cls: "rounded-2xl",  cssVar: null },
  { token: "rounded-3xl",  value: "24px",   cls: "rounded-3xl",  cssVar: null },
  { token: "rounded-full", value: "9999px", cls: "rounded-full", cssVar: null },
];

const shadowTokens = [
  { token: "shadow-none",  value: "none",                                      cls: "shadow-none" },
  { token: "shadow-sm",    value: "0 1px 2px rgba(1,50,41,0.05)",              cls: "shadow-sm" },
  { token: "shadow",       value: "0 1px 3px rgba(1,50,41,0.10)",              cls: "shadow" },
  { token: "shadow-md",    value: "0 4px 6px rgba(1,50,41,0.10)",              cls: "shadow-md" },
  { token: "shadow-lg",    value: "0 10px 15px rgba(1,50,41,0.10)",            cls: "shadow-lg" },
  { token: "shadow-xl",    value: "0 20px 25px rgba(1,50,41,0.10)",            cls: "shadow-xl" },
  { token: "shadow-2xl",   value: "0 25px 50px rgba(1,50,41,0.25)",            cls: "shadow-2xl" },
  { token: "shadow-inner", value: "inset 0 2px 4px rgba(1,50,41,0.06)",        cls: "shadow-inner" },
];

/* Named type styles — combine multiple tokens into one style */
const typeStyles = [
  {
    name: "Display",
    cls: "text-5xl font-extrabold leading-tight tracking-tight",
    sample: "Design Systems",
    tokens: [
      { tw: "text-5xl",       cssVar: "--text-5xl",              val: "3rem / 48px"  },
      { tw: "font-extrabold", cssVar: "--font-weight-extrabold", val: "800"          },
      { tw: "leading-tight",  cssVar: "--leading-tight",         val: "1.25"         },
      { tw: "tracking-tight", cssVar: "--tracking-tight",        val: "-0.025em"     },
      { tw: "font-sans",      cssVar: "--font-sans",             val: "Sharphy"     },
    ],
  },
  {
    name: "Heading 1",
    cls: "text-4xl font-bold leading-tight tracking-tight",
    sample: "Page Title",
    tokens: [
      { tw: "text-4xl",       cssVar: "--text-4xl",              val: "2.25rem / 36px" },
      { tw: "font-bold",      cssVar: "--font-weight-bold",      val: "700"            },
      { tw: "leading-tight",  cssVar: "--leading-tight",         val: "1.25"           },
      { tw: "tracking-tight", cssVar: "--tracking-tight",        val: "-0.025em"       },
      { tw: "font-sans",      cssVar: "--font-sans",             val: "Sharphy"       },
    ],
  },
  {
    name: "Heading 2",
    cls: "text-3xl font-semibold leading-snug tracking-tight",
    sample: "Section Title",
    tokens: [
      { tw: "text-3xl",        cssVar: "--text-3xl",              val: "1.875rem / 30px" },
      { tw: "font-semibold",   cssVar: "--font-weight-semibold",  val: "600"             },
      { tw: "leading-snug",    cssVar: "--leading-snug",          val: "1.375"           },
      { tw: "tracking-tight",  cssVar: "--tracking-tight",        val: "-0.025em"        },
      { tw: "font-sans",       cssVar: "--font-sans",             val: "Sharphy"        },
    ],
  },
  {
    name: "Heading 3",
    cls: "text-2xl font-semibold leading-snug",
    sample: "Subsection Title",
    tokens: [
      { tw: "text-2xl",       cssVar: "--text-2xl",             val: "1.5rem / 24px" },
      { tw: "font-semibold",  cssVar: "--font-weight-semibold", val: "600"           },
      { tw: "leading-snug",   cssVar: "--leading-snug",         val: "1.375"         },
      { tw: "tracking-normal",cssVar: "--tracking-normal",      val: "0em"           },
      { tw: "font-sans",      cssVar: "--font-sans",            val: "Sharphy"      },
    ],
  },
  {
    name: "Heading 4",
    cls: "text-xl font-medium leading-normal",
    sample: "Card Title",
    tokens: [
      { tw: "text-xl",        cssVar: "--text-xl",              val: "1.25rem / 20px" },
      { tw: "font-medium",    cssVar: "--font-weight-medium",   val: "500"            },
      { tw: "leading-normal", cssVar: "--leading-normal",       val: "1.5"            },
      { tw: "tracking-normal",cssVar: "--tracking-normal",      val: "0em"            },
      { tw: "font-sans",      cssVar: "--font-sans",            val: "Sharphy"       },
    ],
  },
  {
    name: "Body Large",
    cls: "text-lg font-normal leading-relaxed",
    sample: "The quick brown fox jumps over the lazy dog.",
    tokens: [
      { tw: "text-lg",         cssVar: "--text-lg",              val: "1.125rem / 18px" },
      { tw: "font-normal",     cssVar: "--font-weight-regular",  val: "400"             },
      { tw: "leading-relaxed", cssVar: "--leading-relaxed",      val: "1.625"           },
      { tw: "tracking-normal", cssVar: "--tracking-normal",      val: "0em"             },
      { tw: "font-sans",       cssVar: "--font-sans",            val: "Sharphy"        },
    ],
  },
  {
    name: "Body Medium",
    cls: "text-md font-normal leading-normal",
    sample: "The quick brown fox jumps over the lazy dog.",
    tokens: [
      { tw: "text-md",        cssVar: "--text-md",              val: "1rem / 16px"     },
      { tw: "font-normal",    cssVar: "--font-weight-regular",  val: "400"             },
      { tw: "leading-normal", cssVar: "--leading-normal",       val: "1.5"             },
      { tw: "tracking-normal",cssVar: "--tracking-normal",      val: "0em"             },
      { tw: "font-sans",      cssVar: "--font-sans",            val: "Sharphy"        },
    ],
  },
  {
    name: "Body",
    cls: "text-base font-normal leading-normal",
    sample: "The quick brown fox jumps over the lazy dog.",
    tokens: [
      { tw: "text-base",      cssVar: "--text-base",            val: "0.875rem / 14px" },
      { tw: "font-normal",    cssVar: "--font-weight-regular",  val: "400"             },
      { tw: "leading-normal", cssVar: "--leading-normal",       val: "1.5"             },
      { tw: "tracking-normal",cssVar: "--tracking-normal",      val: "0em"             },
      { tw: "font-sans",      cssVar: "--font-sans",            val: "Sharphy"        },
    ],
  },
  {
    name: "Body Small",
    cls: "text-xs font-normal leading-normal",
    sample: "The quick brown fox jumps over the lazy dog.",
    tokens: [
      { tw: "text-xs",        cssVar: "--text-xs",              val: "0.75rem / 12px"  },
      { tw: "font-normal",    cssVar: "--font-weight-regular",  val: "400"             },
      { tw: "leading-normal", cssVar: "--leading-normal",       val: "1.5"             },
      { tw: "tracking-normal",cssVar: "--tracking-normal",      val: "0em"             },
      { tw: "font-sans",      cssVar: "--font-sans",            val: "Sharphy"        },
    ],
  },
  {
    name: "Caption",
    cls: "text-xs font-normal leading-normal tracking-wide",
    sample: "Helper text, captions, metadata",
    tokens: [
      { tw: "text-xs",        cssVar: "--text-xs",              val: "0.75rem / 12px" },
      { tw: "font-normal",    cssVar: "--font-weight-regular",  val: "400"            },
      { tw: "leading-normal", cssVar: "--leading-normal",       val: "1.5"            },
      { tw: "tracking-wide",  cssVar: "--tracking-wide",        val: "0.025em"        },
      { tw: "font-sans",      cssVar: "--font-sans",            val: "Sharphy"       },
    ],
  },
  {
    name: "Label",
    cls: "text-xs font-medium leading-none tracking-wide uppercase",
    sample: "FORM LABEL",
    tokens: [
      { tw: "text-xs",        cssVar: "--text-xs",              val: "0.75rem / 12px" },
      { tw: "font-medium",    cssVar: "--font-weight-medium",   val: "500"            },
      { tw: "leading-none",   cssVar: "--leading-none",         val: "1"              },
      { tw: "tracking-wide",  cssVar: "--tracking-wide",        val: "0.025em"        },
      { tw: "font-sans",      cssVar: "--font-sans",            val: "Sharphy"       },
    ],
  },
  {
    name: "Code",
    cls: "text-sm font-normal leading-relaxed font-mono",
    sample: "const token = 'var(--primary)';",
    tokens: [
      { tw: "text-base",       cssVar: "--text-base",            val: "0.875rem / 14px" },
      { tw: "font-normal",     cssVar: "--font-weight-regular",  val: "400"             },
      { tw: "leading-relaxed", cssVar: "--leading-relaxed",      val: "1.625"           },
      { tw: "tracking-normal", cssVar: "--tracking-normal",      val: "0em"             },
      { tw: "font-mono",       cssVar: "--font-mono",            val: "Space Mono"      },
    ],
  },
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
   TOKENS PAGE — Token Studio JSON export
═══════════════════════════════════════════════════════════ */

type BoxShadowValue = {
  x: string; y: string; blur: string; spread: string;
  color: string; type: "dropShadow" | "innerShadow";
};

function generateTokenStudioJSON() {
  /* ── Core / Color ── */
  const coreColor: Record<string, Record<string, { value: string; type: string }>> = {};
  palettes.forEach((p) => {
    coreColor[p.key] = {};
    p.swatches.forEach((s) => {
      coreColor[p.key][s.name] = { value: s.hex, type: "color" };
    });
  });

  /* ── Core / Typography ── */
  const coreTypography: Record<string, Record<string, { value: string; type: string }>> = {
    fontFamily: {}, fontSize: {}, fontWeight: {}, lineHeight: {}, letterSpacing: {},
  };
  typographyTokens.fontFamily.forEach((f) => {
    coreTypography.fontFamily[f.token.replace("font-", "")] = { value: f.value, type: "fontFamilies" };
  });
  typographyTokens.fontSize.forEach((f) => {
    coreTypography.fontSize[f.token.replace("text-", "")] = { value: f.value.replace("px", ""), type: "fontSizes" };
  });
  typographyTokens.fontWeight.forEach((f) => {
    coreTypography.fontWeight[f.token.replace("font-", "")] = { value: f.value, type: "fontWeights" };
  });
  typographyTokens.lineHeight.forEach((f) => {
    coreTypography.lineHeight[f.token.replace("leading-", "")] = { value: f.value, type: "lineHeights" };
  });
  typographyTokens.letterSpacing.forEach((f) => {
    coreTypography.letterSpacing[f.token.replace("tracking-", "")] = { value: f.value, type: "letterSpacing" };
  });

  /* ── Core / Spacing ── */
  const coreSpacing: Record<string, { value: string; type: string }> = {};
  spacingTokens.forEach((s) => {
    const key = s.token.replace("spacing-", "");
    coreSpacing[key] = { value: String(s.px), type: "spacing" };
  });

  /* ── Core / Radius ── */
  const coreRadius: Record<string, { value: string; type: string }> = {};
  radiusTokens.forEach((r) => {
    const key = r.token === "rounded" ? "DEFAULT"
      : r.token === "rounded-full" ? "full"
      : r.token.replace("rounded-", "");
    coreRadius[key] = { value: r.value.replace("px", "") || "0", type: "borderRadius" };
  });

  /* ── Core / Shadow ── */
  const shadowMap: Record<string, BoxShadowValue> = {
    "shadow-sm":    { x: "0", y: "1",  blur: "2",  spread: "0", color: "rgba(1,50,41,0.05)", type: "dropShadow" },
    "shadow":       { x: "0", y: "1",  blur: "3",  spread: "0", color: "rgba(1,50,41,0.10)", type: "dropShadow" },
    "shadow-md":    { x: "0", y: "4",  blur: "6",  spread: "0", color: "rgba(1,50,41,0.10)", type: "dropShadow" },
    "shadow-lg":    { x: "0", y: "10", blur: "15", spread: "0", color: "rgba(1,50,41,0.10)", type: "dropShadow" },
    "shadow-xl":    { x: "0", y: "20", blur: "25", spread: "0", color: "rgba(1,50,41,0.10)", type: "dropShadow" },
    "shadow-2xl":   { x: "0", y: "25", blur: "50", spread: "0", color: "rgba(1,50,41,0.25)", type: "dropShadow" },
    "shadow-inner": { x: "0", y: "2",  blur: "4",  spread: "0", color: "rgba(1,50,41,0.06)", type: "innerShadow" },
  };
  const coreShadow: Record<string, { value: string | BoxShadowValue; type: string }> = {};
  shadowTokens.forEach((s) => {
    const key = s.token === "shadow" ? "DEFAULT" : s.token.replace("shadow-", "");
    if (s.token === "shadow-none") {
      coreShadow[key] = { value: "none", type: "boxShadow" };
    } else {
      coreShadow[key] = { value: shadowMap[s.token], type: "boxShadow" };
    }
  });

  /* ── Semantic light / dark ── */
  const semanticLight: Record<string, { value: string; type: string }> = {};
  const semanticDark: Record<string, { value: string; type: string }> = {};
  semanticColorTokens.forEach((group) => {
    group.tokens.forEach((t) => {
      semanticLight[t.token] = { value: t.lightHex, type: "color" };
      semanticDark[t.token]  = { value: t.darkHex,  type: "color" };
    });
  });

  return {
    $metadata: {
      tokenSetOrder: [
        "core/color", "core/typography", "core/spacing",
        "core/radius", "core/shadow", "semantic/light", "semantic/dark",
      ],
    },
    "core/color":      coreColor,
    "core/typography": coreTypography,
    "core/spacing":    coreSpacing,
    "core/radius":     coreRadius,
    "core/shadow":     coreShadow,
    "semantic/light":  semanticLight,
    "semantic/dark":   semanticDark,
  };
}

function downloadTokenStudioJSON() {
  const json = JSON.stringify(generateTokenStudioJSON(), null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = "studio-tokens.json";
  a.click();
  URL.revokeObjectURL(url);
}

/* ═══════════════════════════════════════════════════════════
   TOKENS PAGE
═══════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════
   CONTRAST / ACCESSIBILITY UTILITIES
═══════════════════════════════════════════════════════════ */

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

function getLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map((c) => {
    const s = c / 255;
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getContrastRatio(hex1: string, hex2: string): number {
  const l1 = getLuminance(hex1);
  const l2 = getLuminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function wcagLevel(ratio: number) {
  return {
    aa:      ratio >= 4.5,  /* normal text AA   */
    aaLarge: ratio >= 3,    /* large text / UI AA */
    aaa:     ratio >= 7,    /* normal text AAA  */
    aaaLarge: ratio >= 4.5, /* large text AAA   */
  };
}

/* Semantic foreground / background pairs for contrast audit */
const contrastPairs = [
  { label: "Body text",       fgName: "foreground",             bgName: "background",  lightFg: "#333333", lightBg: "#FFFFFF", darkFg: "#FAFAFA", darkBg: "#0D0D0D" },
  { label: "Primary button",  fgName: "primary-foreground",     bgName: "primary",     lightFg: "#F0FBF8", lightBg: "#013229", darkFg: "#001A16", darkBg: "#61CAA0" },
  { label: "Secondary",       fgName: "secondary-foreground",   bgName: "secondary",   lightFg: "#013229", lightBg: "#FFD653", darkFg: "#013229", darkBg: "#FFD653" },
  { label: "Accent",          fgName: "accent-foreground",      bgName: "accent",      lightFg: "#013229", lightBg: "#61CAA0", darkFg: "#F0FBF7", darkBg: "#28956E" },
  { label: "Muted text",      fgName: "muted-foreground",       bgName: "muted",       lightFg: "#737373", lightBg: "#F5F5F5", darkFg: "#A3A3A3", darkBg: "#333333" },
  { label: "Error / danger",  fgName: "destructive-foreground", bgName: "destructive", lightFg: "#FAFAFA", lightBg: "#EF4444", darkFg: "#FAFAFA", darkBg: "#991B1B" },
  { label: "Card",            fgName: "card-foreground",        bgName: "card",        lightFg: "#333333", lightBg: "#FFFFFF", darkFg: "#FAFAFA", darkBg: "#1A1A1A" },
];

/* ═══════════════════════════════════════════════════════════
   FOUNDATION PAGE — visual elements linked to tokens
═══════════════════════════════════════════════════════════ */

const FIGMA_FILE = "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/Design-System-with-Claude";

const FigmaIcon = ({ width = 10, height = 13 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 38 57" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M19 28.5C19 23.8056 22.8056 20 27.5 20C32.1944 20 36 23.8056 36 28.5C36 33.1944 32.1944 37 27.5 37C22.8056 37 19 33.1944 19 28.5Z"/>
    <path d="M2 46C2 41.3056 5.80558 37.5 10.5 37.5H19V46C19 50.6944 15.1944 54.5 10.5 54.5C5.80558 54.5 2 50.6944 2 46Z"/>
    <path d="M19 2V20H27.5C32.1944 20 36 16.1944 36 11.5C36 6.80558 32.1944 3 27.5 3H19Z" opacity="0.9"/>
    <path d="M2 11.5C2 16.1944 5.80558 20 10.5 20H19V3H10.5C5.80558 3 2 6.80558 2 11.5Z" opacity="0.7"/>
    <path d="M2 28.5C2 33.1944 5.80558 37 10.5 37H19V20H10.5C5.80558 20 2 23.8056 2 28.5Z" opacity="0.8"/>
  </svg>
);

const FIGMA_TABS: Record<string, string> = {
  colors: "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/Design-System-with-Claude?node-id=57-162&t=PLaHVI3nGtrAzo9Z-1",
  typography: "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/Design-System-with-Claude?node-id=41-4&t=SVftSQFngq9MDHq9-1",
  spacing: "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/Design-System-with-Claude?node-id=71-2&t=SVftSQFngq9MDHq9-1",
  radius: "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/Design-System-with-Claude?node-id=71-3&t=SVftSQFngq9MDHq9-1",
  shadows: "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/Design-System-with-Claude?node-id=71-4&t=SVftSQFngq9MDHq9-1",
};

function FoundationPage({ dark }: { dark: boolean }) {
  const [activeTab, setActiveTab] = useState("colors");

  return (
    <div className="space-y-16">

      {/* ── Intro ── */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight">Foundation</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            The core visual language — colors, type, spacing, radius, and shadow.
            Each element is linked to its design token.
          </p>
        </div>
        <a
          href={FIGMA_TABS[activeTab]}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground border border-border rounded-md px-2.5 py-1.5 transition-colors hover:border-foreground/30 shrink-0 mt-1"
        >
          <FigmaIcon />
          View in Figma
        </a>
      </div>

      <Tabs defaultValue="colors" onValueChange={setActiveTab}>
        <TabsList className="flex-wrap h-auto gap-1">
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="spacing">Spacing</TabsTrigger>
          <TabsTrigger value="radius">Radius</TabsTrigger>
          <TabsTrigger value="shadows">Shadows</TabsTrigger>
        </TabsList>

        {/* ─── Colors ─────────────────────────────── */}
        <TabsContent value="colors" className="space-y-12 pt-6">

          <Section title="Semantic Palette" description={`Semantic colors as rendered in ${dark ? "dark" : "light"} mode.`}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "background",  cssVar: "--background",  bg: "bg-background border border-border",   text: "text-foreground" },
                { label: "primary",     cssVar: "--primary",     bg: "bg-primary",                            text: "text-primary-foreground" },
                { label: "secondary",   cssVar: "--secondary",   bg: "bg-secondary",                          text: "text-secondary-foreground" },
                { label: "accent",      cssVar: "--accent",      bg: "bg-accent",                             text: "text-accent-foreground" },
                { label: "muted",       cssVar: "--muted",       bg: "bg-muted",                              text: "text-muted-foreground" },
                { label: "card",        cssVar: "--card",        bg: "bg-card border border-border",          text: "text-card-foreground" },
                { label: "destructive", cssVar: "--destructive", bg: "bg-destructive",                        text: "text-destructive-foreground" },
                { label: "border",      cssVar: "--border",      bg: "bg-border",                             text: "text-foreground" },
              ].map(({ label, cssVar, bg, text }) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <div className={`${bg} rounded-lg p-4 flex items-center justify-center h-20`}>
                    <span className={`${text} text-xs font-mono font-semibold`}>{label}</span>
                  </div>
                  <span className="font-mono text-[10px] text-primary/70 px-0.5">{cssVar}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section
            title="Contrast Ratios"
            description="WCAG 2.1 compliance for each semantic color pair. AA requires ≥ 4.5 : 1 for normal text, ≥ 3 : 1 for large text & UI. AAA requires ≥ 7 : 1 for normal text."
          >
            {/* WCAG legend */}
            <div className="flex flex-wrap gap-4 mb-6 p-4 rounded-lg bg-muted/40 border border-border text-xs">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">AA Normal</span>
                <span className="text-muted-foreground">≥ 4.5 : 1</span>
              </div>
              <span className="text-border">·</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">AA Large / UI</span>
                <span className="text-muted-foreground">≥ 3 : 1</span>
              </div>
              <span className="text-border">·</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">AAA Normal</span>
                <span className="text-muted-foreground">≥ 7 : 1</span>
              </div>
              <span className="text-border">·</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">AAA Large</span>
                <span className="text-muted-foreground">≥ 4.5 : 1</span>
              </div>
            </div>

            <div className="rounded-lg border border-border overflow-hidden">
              {contrastPairs.map((pair, i) => {
                const fg = dark ? pair.darkFg : pair.lightFg;
                const bg = dark ? pair.darkBg : pair.lightBg;
                const ratio = getContrastRatio(fg, bg);
                const { aa, aaLarge, aaa, aaaLarge } = wcagLevel(ratio);
                const passClass = "px-2 py-0.5 rounded-full text-[10px] font-semibold border bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800";
                const failClass = "px-2 py-0.5 rounded-full text-[10px] font-semibold border bg-muted text-muted-foreground border-border";

                return (
                  <div key={pair.label} className={`flex flex-wrap items-center gap-4 px-5 py-4 ${i < contrastPairs.length - 1 ? "border-b border-border" : ""} hover:bg-muted/30 transition-colors`}>

                    {/* Preview swatch */}
                    <div
                      className="h-12 w-16 rounded-lg flex items-center justify-center shrink-0 font-bold text-xl border border-border/30"
                      style={{ backgroundColor: bg, color: fg }}
                    >
                      Aa
                    </div>

                    {/* Label + tokens */}
                    <div className="flex flex-col gap-0.5 min-w-[140px]">
                      <span className="text-sm font-semibold">{pair.label}</span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {pair.fgName} <span className="opacity-50">on</span> {pair.bgName}
                      </span>
                    </div>

                    {/* Ratio */}
                    <div className="flex flex-col items-start gap-0.5 min-w-[80px]">
                      <span className="text-2xl font-extrabold tabular-nums leading-none">{ratio.toFixed(2)}</span>
                      <span className="text-xs text-muted-foreground font-mono">: 1 ratio</span>
                    </div>

                    {/* WCAG badges */}
                    <div className="flex flex-wrap gap-2 ml-auto">
                      <span className={aa ? passClass : failClass}>AA {aa ? "✓" : "✗"}</span>
                      <span className={aaLarge ? passClass : failClass}>AA Large {aaLarge ? "✓" : "✗"}</span>
                      <span className={aaa ? passClass : failClass}>AAA {aaa ? "✓" : "✗"}</span>
                      <span className={aaaLarge ? passClass : failClass}>AAA Large {aaaLarge ? "✓" : "✗"}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>

          <Section title="Color Scales" description="Primitive palettes — 11 steps from 50 to 950, each linked to its CSS token.">
            <div className="space-y-14">

              {/* Brand Colors */}
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground">Brand</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="space-y-8">
                  {palettes.filter(p => ["primary","secondary","intense","neutral"].includes(p.key)).map((p) => (
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
                            <span className="text-[9px] font-mono text-primary/70 truncate">{`--color-${p.key}-${s.name}`}</span>
                            <span className="text-[9px] font-mono text-muted-foreground truncate">{s.hex}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feedback Colors */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground">Feedback</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="space-y-8">
                  {palettes.filter(p => ["destructive","success","info"].includes(p.key)).map((p) => (
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
                            <span className="text-[9px] font-mono text-primary/70 truncate">{`--color-${p.key}-${s.name}`}</span>
                            <span className="text-[9px] font-mono text-muted-foreground truncate">{s.hex}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </Section>
        </TabsContent>

        {/* ─── Typography ─────────────────────────── */}
        <TabsContent value="typography" className="space-y-12 pt-6">

          <Section title="Type Styles" description="Named styles combining size, weight, leading, and tracking tokens.">
            <div className="space-y-2">
              {typeStyles.map((style) => (
                <div key={style.name} className="rounded-lg border border-border overflow-hidden">
                  <div className="flex items-start gap-6 px-5 py-4 border-b border-border bg-muted/20">
                    <span className="font-mono text-xs text-muted-foreground w-24 shrink-0 pt-0.5">{style.name}</span>
                    <p className={style.cls}>{style.sample}</p>
                  </div>
                  <div className="px-5 py-3 flex flex-wrap gap-3">
                    {style.tokens.map((tok) => (
                      <button
                        key={tok.cssVar}
                        onClick={() => navigator.clipboard?.writeText(tok.cssVar)}
                        title={`Copy ${tok.cssVar}`}
                        className="flex flex-col items-start gap-0.5 group cursor-pointer"
                      >
                        <span className="inline-flex items-center px-2 py-0.5 rounded bg-muted font-mono text-xs text-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                          {tok.tw}
                        </span>
                        <span className="font-mono text-[10px] text-muted-foreground px-1">{tok.cssVar}</span>
                        <span className="font-mono text-[10px] text-muted-foreground/60 px-1">{tok.val}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

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

          <Section title="Font Size" description="Type scale from xs (12px) to 5xl (48px). Base is 14px, md is 16px.">
            <div className="rounded-lg border border-border overflow-hidden">
              {typographyTokens.fontSize.map((f, i) => (
                <div key={f.token} className={`group flex items-baseline gap-4 px-5 py-3 hover:bg-muted/50 transition-colors ${i < typographyTokens.fontSize.length - 1 ? "border-b border-border" : ""}`}>
                  <span className="font-mono text-xs text-muted-foreground w-20 shrink-0">{f.token}</span>
                  <span className="font-mono text-xs text-muted-foreground w-12 shrink-0">{f.value}</span>
                  <span className={`${f.cls} font-medium leading-none`}>SL Design System</span>
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
                  <span className={`text-2xl ${f.cls}`}>SL Design System</span>
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
                    <span className={`text-sm font-medium uppercase ${f.cls}`}>studiolammar</span>
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
                  <span className="font-mono text-[10px] text-primary/60 w-32 shrink-0 hidden sm:inline">{`--${s.token.replace(".", "-")}`}</span>
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
          <Section title="Border Radius" description="From none (0) to full (9999px). Three steps are linked to the --radius base token.">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {radiusTokens.map((r) => (
                <div key={r.token} className="flex flex-col gap-3 items-start">
                  <div
                    className={`${r.cls} w-full aspect-square bg-primary/15 border-2 border-primary/40 flex items-center justify-center max-w-[100px]`}
                  />
                  <div>
                    <p className="font-mono text-sm font-medium">{r.token}</p>
                    {r.cssVar && (
                      <p className="font-mono text-[10px] text-primary/70 mt-0.5">{r.cssVar}</p>
                    )}
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
                    {s.token !== "shadow-none" && (
                      <p className="font-mono text-[10px] text-primary/70 mt-0.5">{`--${s.token}`}</p>
                    )}
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
   TOKENS PAGE — raw token definitions & values
═══════════════════════════════════════════════════════════ */

function TokensPage({ dark: _dark }: { dark: boolean }) {
  const [downloadCopied, setDownloadCopied] = useState(false);

  const handleDownload = () => {
    downloadTokenStudioJSON();
    setDownloadCopied(true);
    setTimeout(() => setDownloadCopied(false), 2500);
  };

  return (
    <div className="space-y-16">

      {/* ── Intro ── */}
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight">Design Tokens</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Raw token definitions as CSS custom properties, mapped to Tailwind utilities.
          Download <code>studio-tokens.json</code> and import it into Tokens Studio for Figma.
        </p>
      </div>

      <Tabs defaultValue="colors">
        {/* Tab bar + download button side-by-side */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <TabsList className="flex-wrap h-auto gap-1">
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="spacing">Spacing</TabsTrigger>
            <TabsTrigger value="radius">Radius</TabsTrigger>
            <TabsTrigger value="shadows">Shadows</TabsTrigger>
          </TabsList>
          <Button onClick={handleDownload} size="sm" variant="outline" className="gap-2 shrink-0">
            {downloadCopied
              ? <><Check className="h-3.5 w-3.5" /> Downloaded!</>
              : <><Download className="h-3.5 w-3.5" /> Download tokens.json</>
            }
          </Button>
        </div>

        {/* ─── Colors ─────────────────────────────── */}
        <TabsContent value="colors" className="space-y-12 pt-6">
          <Section title="Semantic Tokens" description="CSS variables that switch value between light and dark mode. Each is linked to a primitive color token.">
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
                                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded border border-border shrink-0" style={{ backgroundColor: t.lightHex }} />
                                <div className="flex flex-col min-w-0">
                                  <span className="font-mono text-xs hidden sm:inline">{t.lightHex}</span>
                                  {semanticPrimRefs[t.token] && (
                                    <span className="font-mono text-[10px] text-primary/60 hidden lg:inline truncate">{semanticPrimRefs[t.token].light}</span>
                                  )}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1.5 sm:gap-2">
                                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded border border-border shrink-0" style={{ backgroundColor: t.darkHex }} />
                                <div className="flex flex-col min-w-0">
                                  <span className="font-mono text-xs hidden sm:inline">{t.darkHex}</span>
                                  {semanticPrimRefs[t.token] && (
                                    <span className="font-mono text-[10px] text-primary/60 hidden lg:inline truncate">{semanticPrimRefs[t.token].dark}</span>
                                  )}
                                </div>
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

          <Section title="Font Size" description="Type scale from xs (12px) to 5xl (48px). Base is 14px, md is 16px.">
            <div className="rounded-lg border border-border overflow-hidden">
              {typographyTokens.fontSize.map((f, i) => (
                <div key={f.token} className={`group flex items-baseline gap-4 px-5 py-3 hover:bg-muted/50 transition-colors ${i < typographyTokens.fontSize.length - 1 ? "border-b border-border" : ""}`}>
                  <span className="font-mono text-xs text-muted-foreground w-20 shrink-0">{f.token}</span>
                  <span className="font-mono text-xs text-muted-foreground w-12 shrink-0">{f.value}</span>
                  <span className={`${f.cls} font-medium leading-none`}>SL Design System</span>
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
                  <span className={`text-2xl ${f.cls}`}>SL Design System</span>
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
                    <span className={`text-sm font-medium uppercase ${f.cls}`}>studiolammar</span>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </TabsContent>

        {/* ─── Spacing ────────────────────────────── */}
        <TabsContent value="spacing" className="pt-6">
          <Section title="Spacing Scale" description="4px base unit — 32 steps from 0 to 128px.">
            <div className="rounded-lg border border-border overflow-hidden overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Token</TableHead>
                    <TableHead>CSS Variable</TableHead>
                    <TableHead>Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {spacingTokens.map((s) => (
                    <TableRow key={s.token}>
                      <TableCell className="font-mono text-xs font-medium">{s.token}</TableCell>
                      <TableCell className="font-mono text-xs text-primary/70">{`--${s.token.replace(".", "-")}`}</TableCell>
                      <TableCell className="font-mono text-xs text-muted-foreground">{s.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Section>
        </TabsContent>

        {/* ─── Radius ─────────────────────────────── */}
        <TabsContent value="radius" className="pt-6">
          <Section title="Border Radius" description="From none (0) to full (9999px). sm, md, and lg are derived from --radius (0.75rem).">
            <div className="rounded-lg border border-border overflow-hidden overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Token</TableHead>
                    <TableHead>CSS Variable</TableHead>
                    <TableHead>Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {radiusTokens.map((r) => (
                    <TableRow key={r.token}>
                      <TableCell className="font-mono text-xs font-medium">{r.token}</TableCell>
                      <TableCell className="font-mono text-xs text-primary/70">{r.cssVar ?? "—"}</TableCell>
                      <TableCell className="font-mono text-xs text-muted-foreground">{r.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Section>
        </TabsContent>

        {/* ─── Shadows ────────────────────────────── */}
        <TabsContent value="shadows" className="pt-6">
          <Section title="Box Shadows" description="Eight levels from none to 2xl, plus inner.">
            <div className="rounded-lg border border-border overflow-hidden overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Token</TableHead>
                    <TableHead>CSS Variable</TableHead>
                    <TableHead>Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {shadowTokens.map((s) => (
                    <TableRow key={s.token}>
                      <TableCell className="font-mono text-xs font-medium">{s.token}</TableCell>
                      <TableCell className="font-mono text-xs text-primary/70">{s.token !== "shadow-none" ? `--${s.token}` : "—"}</TableCell>
                      <TableCell className="font-mono text-xs text-muted-foreground break-all">{s.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Section>
        </TabsContent>
      </Tabs>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   DESIGN SPECS — token data + renderer
═══════════════════════════════════════════════════════════ */

type SpecType = "color" | "size" | "font" | "shadow";
interface SpecItem { label: string; token: string; value: string; type: SpecType; }
interface SpecGroup { title: string; items: SpecItem[]; }
type SpecContext = { variant?: string; size?: string; style?: string; labelPosition?: string };

const COMPONENT_SPECS: Record<string, (ctx?: SpecContext) => SpecGroup[]> = {
  "Typography": () => [
    { title: "Colors", items: [
      { label: "Body text",            token: "--foreground",       value: "#333333", type: "color" },
      { label: "Muted / secondary",    token: "--muted-foreground", value: "#737373", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Sans-serif font",      token: "--font-sans",        value: "Sharphy",     type: "font" },
      { label: "Monospace font",       token: "--font-mono",        value: "Space Mono",   type: "font" },
      { label: "Scale range",          token: "--text-xs → --text-4xl", value: "12px – 36px", type: "size" },
      { label: "Heading weight",       token: "font-extrabold",     value: "800",          type: "size" },
      { label: "Body weight",          token: "font-regular",       value: "400",          type: "size" },
      { label: "Line height normal",   token: "--leading-normal",   value: "1.5",          type: "size" },
    ]},
  ],
  "Buttons": (ctx = {}) => {
    const size = ctx.size ?? "default";
    const variant = ctx.variant ?? "default";

    const colorsByVariant: Record<string, SpecItem[]> = {
      default:     [
        { label: "Background", token: "--primary",              value: "#013229", type: "color" },
        { label: "Text",       token: "--primary-foreground",   value: "#F0FBF8", type: "color" },
        { label: "Focus ring", token: "--ring",                 value: "#013229", type: "color" },
      ],
      secondary:   [
        { label: "Background", token: "--secondary",            value: "#FFD653", type: "color" },
        { label: "Text",       token: "--secondary-foreground", value: "#333333", type: "color" },
        { label: "Focus ring", token: "--ring",                 value: "#013229", type: "color" },
      ],
      accent:      [
        { label: "Background", token: "--accent",               value: "#61CAA0", type: "color" },
        { label: "Text",       token: "--accent-foreground",    value: "#013229", type: "color" },
        { label: "Focus ring", token: "--ring",                 value: "#013229", type: "color" },
      ],
      destructive: [
        { label: "Background", token: "--destructive",          value: "#DC2626", type: "color" },
        { label: "Text",       token: "--destructive-foreground", value: "#FAFAFA", type: "color" },
        { label: "Focus ring", token: "--ring",                 value: "#013229", type: "color" },
      ],
      outline:     [
        { label: "Border",     token: "--border",               value: "#E5E5E5", type: "color" },
        { label: "Text",       token: "--foreground",           value: "#333333", type: "color" },
        { label: "Hover bg",   token: "--accent/5",             value: "rgba(97,202,160,0.05)", type: "color" },
      ],
      ghost:       [
        { label: "Hover bg",   token: "--accent/10",            value: "rgba(97,202,160,0.10)", type: "color" },
        { label: "Text",       token: "--foreground",           value: "#333333", type: "color" },
      ],
      link:        [
        { label: "Text",       token: "--primary",              value: "#013229", type: "color" },
        { label: "Underline",  token: "underline-offset-4",     value: "4px",     type: "size" },
      ],
    };

    const sizeSpecs: Record<string, SpecItem[]> = {
      sm:      [
        { label: "Height",    token: "h-9",      value: "2.25rem / 36px",  type: "size" },
        { label: "Padding x", token: "px-3",     value: "0.75rem / 12px",  type: "size" },
        { label: "Font size", token: "text-base",  value: "0.875rem / 14px", type: "size" },
      ],
      default: [
        { label: "Height",    token: "h-10",     value: "2.5rem / 40px",   type: "size" },
        { label: "Padding x", token: "px-4",     value: "1rem / 16px",     type: "size" },
        { label: "Font size", token: "text-base",  value: "0.875rem / 14px", type: "size" },
      ],
      lg:      [
        { label: "Height",    token: "h-11",     value: "2.75rem / 44px",  type: "size" },
        { label: "Padding x", token: "px-8",     value: "2rem / 32px",     type: "size" },
        { label: "Font size", token: "text-base", value: "1rem / 16px",    type: "size" },
      ],
      icon:    [
        { label: "Height",    token: "h-10",     value: "2.5rem / 40px",   type: "size" },
        { label: "Width",     token: "w-10",     value: "2.5rem / 40px",   type: "size" },
        { label: "Font size", token: "text-base",  value: "0.875rem / 14px", type: "size" },
      ],
    };

    const sp = sizeSpecs[size] ?? sizeSpecs.default;

    return [
      { title: "Colors", items: colorsByVariant[variant] ?? colorsByVariant.default },
      { title: "Typography", items: [
        { label: "Font weight", token: "font-medium", value: "500", type: "size" },
        ...sp.filter(i => i.label === "Font size"),
      ]},
      { title: "Radius", items: [
        { label: "Border radius", token: "rounded-md", value: "calc(var(--radius) - 2px) ≈ 10px", type: "size" },
      ]},
      { title: "Spacing", items: sp.filter(i => i.label !== "Font size") },
    ];
  },
  "Badges": (ctx = {}) => {
    const size = ctx.size ?? "md";
    const style = ctx.style ?? "badge";

    const spacingByStyleAndSize: Record<string, Record<string, SpecItem[]>> = {
      badge: {
        sm: [
          { label: "Padding x", token: "px-1.5",      value: "0.375rem / 6px",   type: "size" },
          { label: "Padding y", token: "py-px",        value: "1px",              type: "size" },
          { label: "Font size", token: "text-[10px]",  value: "10px",             type: "size" },
          { label: "Icon size", token: "h-2.5 w-2.5",  value: "10px",            type: "size" },
          { label: "Gap",       token: "gap-1",         value: "0.25rem / 4px",   type: "size" },
        ],
        md: [
          { label: "Padding x", token: "px-2.5",      value: "0.625rem / 10px",  type: "size" },
          { label: "Padding y", token: "py-0.5",       value: "0.125rem / 2px",   type: "size" },
          { label: "Font size", token: "text-xs",      value: "0.75rem / 12px",   type: "size" },
          { label: "Icon size", token: "h-3 w-3",      value: "12px",             type: "size" },
          { label: "Gap",       token: "gap-1",         value: "0.25rem / 4px",   type: "size" },
        ],
        lg: [
          { label: "Padding x", token: "px-4",         value: "1rem / 16px",      type: "size" },
          { label: "Padding y", token: "py-1",          value: "0.25rem / 4px",    type: "size" },
          { label: "Font size", token: "text-base",       value: "0.875rem / 14px",  type: "size" },
          { label: "Icon size", token: "h-3.5 w-3.5",  value: "14px",             type: "size" },
          { label: "Gap",       token: "gap-1.5",        value: "0.375rem / 6px",  type: "size" },
        ],
      },
      pill: {
        sm: [
          { label: "Padding x", token: "px-3",         value: "0.75rem / 12px",   type: "size" },
          { label: "Padding y", token: "py-0.5",        value: "0.125rem / 2px",   type: "size" },
          { label: "Font size", token: "text-xs",       value: "0.75rem / 12px",   type: "size" },
          { label: "Icon size", token: "h-3 w-3",       value: "12px",             type: "size" },
          { label: "Gap",       token: "gap-1",          value: "0.25rem / 4px",   type: "size" },
        ],
        md: [
          { label: "Padding x", token: "px-4",          value: "1rem / 16px",      type: "size" },
          { label: "Padding y", token: "py-1.5",         value: "0.375rem / 6px",  type: "size" },
          { label: "Font size", token: "text-base",        value: "0.875rem / 14px", type: "size" },
          { label: "Icon size", token: "h-4 w-4",        value: "16px",            type: "size" },
          { label: "Gap",       token: "gap-1.5",         value: "0.375rem / 6px", type: "size" },
        ],
        lg: [
          { label: "Padding x", token: "px-5",          value: "1.25rem / 20px",   type: "size" },
          { label: "Padding y", token: "py-1",           value: "0.25rem / 4px",    type: "size" },
          { label: "Font size", token: "text-base",        value: "0.875rem / 14px",  type: "size" },
          { label: "Icon size", token: "h-4 w-4",        value: "16px",             type: "size" },
          { label: "Gap",       token: "gap-1.5",         value: "0.375rem / 6px",  type: "size" },
        ],
      },
    };

    const radiusKey = `${style}_${size}`;
    const radiusMap: Record<string, SpecItem> = {
      badge_sm: { label: "Border radius", token: "rounded",       value: "0.25rem / 4px",                       type: "size" },
      badge_md: { label: "Border radius", token: "rounded-sm",    value: "calc(var(--radius) - 4px) / 8px",     type: "size" },
      badge_lg: { label: "Border radius", token: "rounded-md",    value: "calc(var(--radius) - 2px) / 10px",    type: "size" },
      pill_sm:  { label: "Border radius", token: "rounded-full",  value: "9999px",                              type: "size" },
      pill_md:  { label: "Border radius", token: "rounded-full",  value: "9999px",                              type: "size" },
      pill_lg:  { label: "Border radius", token: "rounded-full",  value: "9999px",                              type: "size" },
    };

    const sp = (spacingByStyleAndSize[style] ?? spacingByStyleAndSize.badge)[size]
             ?? spacingByStyleAndSize.badge.md;

    return [
      { title: "Colors", items: [
        { label: "Default bg",        token: "bg-primary/10",          value: "rgba(1,50,41,0.10)",    type: "color" },
        { label: "Default text",      token: "--primary",               value: "#013229",               type: "color" },
        { label: "Secondary bg",      token: "bg-secondary/40",        value: "rgba(255,214,83,0.40)", type: "color" },
        { label: "Secondary text",    token: "--foreground",            value: "#333333",               type: "color" },
        { label: "Accent bg",         token: "bg-accent/25",           value: "rgba(97,202,160,0.25)", type: "color" },
        { label: "Accent text",       token: "--accent-foreground",     value: "#013229",               type: "color" },
        { label: "Destructive bg",    token: "bg-destructive/10",      value: "rgba(220,38,38,0.10)",  type: "color" },
        { label: "Destructive text",  token: "--destructive",           value: "#DC2626",               type: "color" },
        { label: "Success bg",        token: "bg-intense-400/20",      value: "rgba(97,202,160,0.20)", type: "color" },
        { label: "Success text",      token: "--primary",               value: "#013229",               type: "color" },
        { label: "Outlined text",     token: "--foreground",            value: "#333333",               type: "color" },
        { label: "Outlined border",   token: "--border",                value: "#E5E5E5",               type: "color" },
        { label: "Info bg",           token: "bg-sky-100",              value: "#E0F2FE",               type: "color" },
        { label: "Info text",         token: "text-sky-700",            value: "#0369A1",               type: "color" },
        { label: "Warning bg",        token: "bg-amber-100",            value: "#FEF3C7",               type: "color" },
        { label: "Warning text",      token: "text-amber-700",          value: "#B45309",               type: "color" },
        { label: "Neutral bg",        token: "--muted",                 value: "#F5F5F5",               type: "color" },
        { label: "Neutral text",      token: "--muted-foreground",      value: "#737373",               type: "color" },
      ]},
      { title: "Typography", items: [
        { label: "Font weight", token: "font-semibold", value: "600", type: "size" },
        ...sp.filter(i => i.label === "Font size"),
      ]},
      { title: "Radius", items: [
        radiusMap[radiusKey] ?? { label: "Border radius", token: "rounded-full", value: "9999px", type: "size" },
      ]},
      { title: "Spacing", items: sp.filter(i => i.label !== "Font size") },
    ];
  },
  "Cards": (ctx = {}) => {
    const variant = ctx.variant ?? "default";
    const sharedTypography: SpecGroup = { title: "Typography", items: [
      { label: "Title size",       token: "text-xl",       value: "1.25rem / 20px",  type: "size" },
      { label: "Title weight",     token: "font-semibold", value: "600",             type: "size" },
      { label: "Description size", token: "text-base",       value: "0.875rem / 14px", type: "size" },
    ]};
    const sharedRadius: SpecGroup = { title: "Radius", items: [
      { label: "Border radius", token: "--radius", value: "0.75rem / 12px", type: "size" },
    ]};
    const sharedShadow: SpecGroup = { title: "Shadow", items: [
      { label: "Elevation", token: "--shadow-sm", value: "0 1px 2px rgba(1,50,41,0.05)", type: "shadow" },
    ]};
    const sharedSpacing: SpecGroup = { title: "Spacing", items: [
      { label: "Padding",   token: "p-6",         value: "1.5rem / 24px",  type: "size" },
      { label: "Inner gap", token: "space-y-1.5", value: "0.375rem / 6px", type: "size" },
    ]};

    if (variant === "featured") return [
      { title: "Colors", items: [
        { label: "Background",        token: "--primary",              value: "#013229",               type: "color" },
        { label: "Title text",        token: "--primary-foreground",   value: "#F0FBF8",               type: "color" },
        { label: "Description text",  token: "--primary-foreground/70", value: "rgba(240,251,248,0.7)", type: "color" },
        { label: "Border",            token: "--primary",              value: "#013229",               type: "color" },
        { label: "Badge bg (solid)",  token: "--secondary",            value: "#FFD653",               type: "color" },
        { label: "Badge text",        token: "--secondary-foreground", value: "#013229",               type: "color" },
      ]},
      sharedTypography,
      sharedRadius,
      sharedShadow,
      sharedSpacing,
    ];

    if (variant === "settings") return [
      { title: "Colors", items: [
        { label: "Background",       token: "--card",             value: "#FFFFFF", type: "color" },
        { label: "Title text",       token: "--card-foreground",  value: "#333333", type: "color" },
        { label: "Description text", token: "--muted-foreground", value: "#737373", type: "color" },
        { label: "Border",           token: "--border",           value: "#E5E5E5", type: "color" },
        { label: "Switch on",        token: "--primary",          value: "#013229", type: "color" },
        { label: "Label text",       token: "--foreground",       value: "#333333", type: "color" },
      ]},
      sharedTypography,
      sharedRadius,
      sharedShadow,
      sharedSpacing,
    ];

    // default — Forest Plan
    return [
      { title: "Colors", items: [
        { label: "Background",       token: "--card",             value: "#FFFFFF", type: "color" },
        { label: "Title text",       token: "--card-foreground",  value: "#333333", type: "color" },
        { label: "Description text", token: "--muted-foreground", value: "#737373", type: "color" },
        { label: "Border",           token: "--border",           value: "#E5E5E5", type: "color" },
        { label: "Icon accent",      token: "--accent",           value: "#61CAA0", type: "color" },
      ]},
      sharedTypography,
      sharedRadius,
      sharedShadow,
      sharedSpacing,
    ];
  },
  "Input": (ctx = {}) => {
    const state = ctx.variant ?? "default";
    const borderByState: Record<string, SpecItem> = {
      default:  { label: "Border",  token: "--input",       value: "#E5E5E5",  type: "color" },
      focus:    { label: "Border",  token: "--ring",        value: "#013229",  type: "color" },
      error:    { label: "Border",  token: "--destructive", value: "#DC2626",  type: "color" },
      disabled: { label: "Border",  token: "--input/50",    value: "rgba(229,229,229,0.50)", type: "color" },
    };
    const textByState: Record<string, SpecItem> = {
      default:  { label: "Text",  token: "--foreground",    value: "#333333", type: "color" },
      focus:    { label: "Text",  token: "--foreground",    value: "#333333", type: "color" },
      error:    { label: "Text",  token: "--destructive",   value: "#DC2626", type: "color" },
      disabled: { label: "Text",  token: "--foreground/40", value: "rgba(51,51,51,0.40)", type: "color" },
    };
    return [
      { title: "Colors", items: [
        { label: "Background",  token: "--background",       value: "#FFFFFF", type: "color" },
        borderByState[state] ?? borderByState.default,
        textByState[state]   ?? textByState.default,
        { label: "Placeholder", token: "--muted-foreground", value: "#737373", type: "color" },
        { label: "Focus ring",  token: "--ring",             value: "#013229", type: "color" },
      ]},
      { title: "Typography", items: [
        { label: "Font size",   token: "text-base",    value: "0.875rem / 14px", type: "size" },
        { label: "Font weight", token: "font-regular", value: "400",             type: "size" },
      ]},
      { title: "Radius", items: [
        { label: "Border radius", token: "rounded-md", value: "calc(var(--radius) - 2px) ≈ 10px", type: "size" },
      ]},
      { title: "Spacing", items: [
        { label: "Height",    token: "h-10", value: "2.5rem / 40px",  type: "size" },
        { label: "Padding x", token: "px-3", value: "0.75rem / 12px", type: "size" },
      ]},
    ];
  },
  "Select": (ctx = {}) => {
    const state = ctx.variant ?? "default";
    const borderByState: Record<string, SpecItem> = {
      default:  { label: "Border", token: "--input",    value: "#E5E5E5", type: "color" },
      focus:    { label: "Border", token: "--ring",     value: "#013229", type: "color" },
      disabled: { label: "Border", token: "--input/50", value: "rgba(229,229,229,0.50)", type: "color" },
    };
    return [
      { title: "Colors", items: [
        { label: "Background",  token: "--background",       value: "#FFFFFF", type: "color" },
        borderByState[state] ?? borderByState.default,
        { label: "Text",        token: "--foreground",       value: "#333333", type: "color" },
        { label: "Placeholder", token: "--muted-foreground", value: "#737373", type: "color" },
        { label: "Chevron",     token: "--muted-foreground", value: "#737373", type: "color" },
        { label: "Focus ring",  token: "--ring",             value: "#013229", type: "color" },
      ]},
      { title: "Radius", items: [
        { label: "Trigger",      token: "rounded-md", value: "calc(var(--radius) - 2px) ≈ 10px", type: "size" },
        { label: "Content",      token: "rounded-md", value: "calc(var(--radius) - 2px) ≈ 10px", type: "size" },
      ]},
      { title: "Spacing", items: [
        { label: "Height",    token: "h-10", value: "2.5rem / 40px",  type: "size" },
        { label: "Padding x", token: "px-3", value: "0.75rem / 12px", type: "size" },
      ]},
    ];
  },
  "Textarea": () => [
    { title: "Colors", items: [
      { label: "Border",      token: "--input",            value: "#E5E5E5", type: "color" },
      { label: "Background",  token: "--background",       value: "#FFFFFF", type: "color" },
      { label: "Placeholder", token: "--muted-foreground", value: "#737373", type: "color" },
      { label: "Focus ring",  token: "--ring",             value: "#013229", type: "color" },
      { label: "Error border",token: "--destructive",      value: "#DC2626", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Font size",   token: "text-sm",      value: "0.875rem / 14px", type: "size" },
      { label: "Line height", token: "leading-normal", value: "1.5",           type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Border radius", token: "rounded-md", value: "≈ 10px", type: "size" },
    ]},
    { title: "Spacing", items: [
      { label: "Min height", token: "min-h-[80px]", value: "80px",           type: "size" },
      { label: "Padding x",  token: "px-3",         value: "0.75rem / 12px", type: "size" },
      { label: "Padding y",  token: "py-2",         value: "0.5rem / 8px",   type: "size" },
    ]},
  ],
  "Checkbox": (ctx = {}) => {
    const state = ctx.variant ?? "unchecked";
    const filled = state === "checked" || state === "indeterminate";
    return [
      { title: "Colors", items: [
        filled
          ? { label: "Background", token: "--primary",    value: "#013229", type: "color" as const }
          : { label: "Background", token: "--background", value: "#FFFFFF", type: "color" as const },
        { label: "Border",     token: filled ? "--primary" : "--input", value: filled ? "#013229" : "#E5E5E5", type: "color" },
        { label: "Checkmark",  token: "--primary-foreground", value: "#F0FBF8", type: "color" },
        { label: "Focus ring",        token: "--ring",               value: "#013229", type: "color" },
        { label: "Focus ring offset", token: "--background",          value: "#FFFFFF", type: "color" },
        ...(state === "disabled" ? [{ label: "Opacity", token: "opacity-50", value: "50%", type: "size" as const }] : []),
      ]},
      { title: "Sizing", items: [
        { label: "Size",           token: "h-5 w-5 (primitives/spacing.5)", value: "1.25rem / 20px", type: "size" },
        { label: "Border radius",  token: "primitives/radius.sm",            value: "2px",            type: "size" },
        { label: "Check icon",     token: "h-4 w-4",                         value: "1rem / 16px",    type: "size" },
        { label: "Minus icon",     token: "h-3 w-3",                         value: "0.75rem / 12px", type: "size" },
      ]},
      { title: "Label typography", items: [
        { label: "Font size",    token: "primitives/typography.fontSize.base", value: "0.875rem / 14px", type: "font" },
        { label: "Font weight",  token: "primitives/typography.fontWeight.medium", value: "500", type: "font" },
        { label: "Line height",  token: "primitives/typography.lineHeight.none", value: "1", type: "font" },
        { label: "Color",        token: "--foreground",  value: "#333333", type: "color" },
        ...(state === "disabled" ? [{ label: "Disabled opacity", token: "peer-disabled:opacity-70", value: "70%", type: "size" as const }] : []),
      ]},
    ];
  },
  "Radio Group": (ctx = {}) => {
    const state = ctx.variant ?? "default";
    return [
      { title: "Colors", items: [
        { label: "Border",     token: "--primary", value: "#013229", type: "color" },
        { label: "Indicator",  token: "--primary", value: "#013229", type: "color" },
        { label: "Focus ring", token: "--ring",    value: "#013229", type: "color" },
        ...(state === "disabled" ? [{ label: "Opacity", token: "opacity-50", value: "50%", type: "size" as const }] : []),
      ]},
      { title: "Sizing", items: [
        { label: "Size",      token: "h-5 w-5 (primitives/spacing.5)", value: "1.25rem / 20px", type: "size" },
        { label: "Indicator", token: "h-3 w-3 (primitives/spacing.3)", value: "0.75rem / 12px", type: "size" },
        { label: "Radius",    token: "rounded-full",                    value: "9999px",         type: "size" },
      ]},
      { title: "Spacing", items: [
        { label: "Item gap (label)",  token: "gap-2", value: "0.5rem / 8px", type: "size" },
        { label: "Group gap", token: "gap-2 (grid)", value: "0.5rem / 8px", type: "size" },
      ]},
      { title: "Label typography", items: [
        { label: "Font size",   token: "primitives/typography.fontSize.base",       value: "0.875rem / 14px", type: "font" },
        { label: "Font weight", token: "primitives/typography.fontWeight.medium",   value: "500",             type: "font" },
        { label: "Line height", token: "primitives/typography.lineHeight.none",     value: "1",               type: "font" },
        { label: "Color",       token: "--foreground",                              value: "#333333",         type: "color" },
        ...(state === "disabled"
          ? [{ label: "Disabled opacity", token: "opacity-50", value: "50%", type: "size" as const },
             { label: "Cursor", token: "cursor-not-allowed", value: "not-allowed", type: "font" as const }]
          : [{ label: "Cursor", token: "cursor-pointer", value: "pointer", type: "font" as const }]),
      ]},
    ];
  },
  "Toggle Switch": (ctx = {}) => {
    const state = ctx.variant ?? "off";
    const trackColor: SpecItem = state === "on"
      ? { label: "Track (on)",  token: "--primary", value: "#013229", type: "color" }
      : { label: "Track (off)", token: "--input",   value: "#E5E5E5", type: "color" };
    return [
      { title: "Colors", items: [
        trackColor,
        { label: "Thumb",      token: "--background", value: "#FFFFFF", type: "color" },
        { label: "Focus ring", token: "--ring",        value: "#013229", type: "color" },
        ...(state === "disabled" ? [{ label: "Opacity", token: "opacity-50", value: "50%", type: "size" as const }] : []),
      ]},
      { title: "Sizing", items: [
        { label: "Track width",  token: "w-11",  value: "2.75rem / 44px", type: "size" },
        { label: "Track height", token: "h-6",   value: "1.5rem / 24px",  type: "size" },
        { label: "Thumb size",   token: "h-5 w-5", value: "1.25rem / 20px", type: "size" },
      ]},
      { title: "Radius", items: [
        { label: "Track",  token: "rounded-full", value: "9999px", type: "size" },
        { label: "Thumb",  token: "rounded-full", value: "9999px", type: "size" },
      ]},
      { title: "Motion", items: [
        { label: "Transition", token: "transition-colors", value: "color 150ms ease", type: "font" },
        { label: "Thumb slide", token: "transition-transform", value: "transform 150ms ease", type: "font" },
      ]},
      { title: "Label", items: [
        { label: "Color",       token: "--foreground",   value: "#333333",           type: "color" },
        { label: "Font size",   token: "text-base",        value: "0.875rem / 14px",   type: "font"  },
        { label: "Font weight", token: "font-medium",    value: "500",               type: "font"  },
        { label: "Line height", token: "leading-none",   value: "1",                 type: "font"  },
        ...(state === "disabled"
          ? [{ label: "Cursor",  token: "cursor-not-allowed", value: "not-allowed", type: "font" as const },
             { label: "Opacity", token: "opacity-70",         value: "70%",         type: "size" as const }]
          : [{ label: "Cursor",  token: "cursor-pointer",     value: "pointer",     type: "font" as const }]),
      ]},
    ];
  },
  "Alerts": (ctx = {}) => {
    const variant = ctx.variant ?? "default";
    const colorsByVariant: Record<string, SpecItem[]> = {
      default: [
        { label: "Background",  token: "--background",          value: "#FFFFFF",               type: "color" },
        { label: "Border",      token: "--border",              value: "#E5E5E5",               type: "color" },
        { label: "Text",        token: "--foreground",          value: "#333333",               type: "color" },
        { label: "Icon",        token: "--foreground",          value: "#333333",               type: "color" },
      ],
      success: [
        { label: "Background",  token: "intense-50",            value: "#F0FBF7",               type: "color" },
        { label: "Border",      token: "border-intense-400/50", value: "rgba(97,202,160,0.50)", type: "color" },
        { label: "Text",        token: "text-intense-700",      value: "#1B7455",               type: "color" },
        { label: "Icon",        token: "text-intense-600",      value: "#28956E",               type: "color" },
      ],
      warning: [
        { label: "Background",  token: "secondary-50",              value: "#FFFBEB",               type: "color" },
        { label: "Border",      token: "border-secondary-400/50",   value: "rgba(255,194,32,0.50)", type: "color" },
        { label: "Text",        token: "text-secondary-800",        value: "#7A4E00",               type: "color" },
        { label: "Icon",        token: "text-secondary-600",        value: "#CC8500",               type: "color" },
      ],
      destructive: [
        { label: "Background",  token: "bg-destructive/10",     value: "rgba(220,38,38,0.10)",  type: "color" },
        { label: "Border",      token: "border-destructive/50", value: "rgba(220,38,38,0.50)",  type: "color" },
        { label: "Text",        token: "text-red-900",          value: "#7F1D1D",               type: "color" },
        { label: "Icon",        token: "text-red-700",          value: "#B91C1C",               type: "color" },
      ],
      informative: [
        { label: "Background",  token: "info-scale-50",              value: "#EFF8FF",               type: "color" },
        { label: "Border",      token: "border-info-scale-400/50",   value: "rgba(61,164,249,0.50)", type: "color" },
        { label: "Text",        token: "text-info-scale-800",        value: "#074384",               type: "color" },
        { label: "Icon",        token: "text-info-scale-600",        value: "#0669CC",               type: "color" },
      ],
    };
    return [
      { title: "Colors", items: colorsByVariant[variant] ?? colorsByVariant.default },
      { title: "Typography", items: [
        { label: "Title size",         token: "text-base",      value: "14px",            type: "font" },
        { label: "Title weight",       token: "font-medium",    value: "500",             type: "font" },
        { label: "Title line height",  token: "leading-none",   value: "1",               type: "font" },
        { label: "Title tracking",     token: "tracking-tight", value: "-0.025em",        type: "font" },
        { label: "Title margin btm",   token: "mb-1",           value: "0.25rem / 4px",   type: "size" },
        { label: "Description size",   token: "text-sm",        value: "0.875rem / 14px", type: "font" },
        { label: "Icon size",          token: "h-4 w-4",        value: "1rem / 16px",     type: "size" },
      ]},
      { title: "Radius", items: [
        { label: "Border radius", token: "--radius", value: "0.75rem / 12px", type: "size" },
      ]},
      { title: "Spacing", items: [
        { label: "Padding",               token: "p-4",    value: "1rem / 16px",    type: "size" },
        { label: "Content offset (icon)", token: "pl-7",   value: "1.75rem / 28px", type: "size" },
        { label: "Icon position left",    token: "left-4", value: "1rem / 16px",    type: "size" },
        { label: "Icon position top",     token: "top-4",  value: "1rem / 16px",    type: "size" },
        { label: "Dismiss padding right", token: "pr-10",  value: "2.5rem / 40px",   type: "size" },
        { label: "Dismiss btn position",  token: "top-3 right-3", value: "0.75rem / 12px", type: "size" },
        { label: "Actions margin top",    token: "mt-3",   value: "0.75rem / 12px", type: "size" },
        { label: "Actions gap",           token: "gap-2",  value: "0.5rem / 8px",   type: "size" },
      ]},
    ];
  },
  "Table": () => [
    { title: "Colors", items: [
      { label: "Header text",  token: "--muted-foreground", value: "#737373", type: "color" },
      { label: "Body text",    token: "--foreground",       value: "#333333", type: "color" },
      { label: "Row border",   token: "--border",           value: "#E5E5E5", type: "color" },
      { label: "Hover row bg", token: "--muted",            value: "#F5F5F5", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Font size",      token: "text-base",     value: "0.875rem / 14px", type: "size" },
      { label: "Header weight",  token: "font-medium", value: "500",             type: "size" },
    ]},
    { title: "Spacing", items: [
      { label: "Cell padding", token: "px-4 py-2", value: "1rem × 0.5rem", type: "size" },
    ]},
  ],
  "Accordion": () => [
    { title: "Colors", items: [
      { label: "Text",    token: "--foreground", value: "#333333", type: "color" },
      { label: "Divider", token: "--border",     value: "#E5E5E5", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Font size",   token: "text-base",     value: "0.875rem / 14px", type: "size" },
      { label: "Font weight", token: "font-medium", value: "500",             type: "size" },
    ]},
    { title: "Spacing", items: [
      { label: "Trigger padding y", token: "py-4", value: "0.875rem / 14px", type: "size" },
    ]},
  ],
  "Sheet": () => [
    { title: "Colors", items: [
      { label: "Background", token: "--background", value: "#FFFFFF",          type: "color" },
      { label: "Border",     token: "--border",     value: "#E5E5E5",          type: "color" },
      { label: "Overlay",    token: "black/50",     value: "rgba(0,0,0,0.5)", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Title size",   token: "text-lg",      value: "1.125rem / 18px", type: "size" },
      { label: "Title weight", token: "font-semibold", value: "600",            type: "size" },
    ]},
    { title: "Spacing", items: [
      { label: "Padding", token: "p-6", value: "1.5rem / 24px", type: "size" },
    ]},
  ],
  "Progress & Slider": () => [
    { title: "Colors", items: [
      { label: "Track background",  token: "--muted",       value: "#F5F5F5", type: "color" },
      { label: "Progress fill",     token: "--primary",     value: "#013229", type: "color" },
      { label: "Thumb background",  token: "--background",  value: "#FFFFFF", type: "color" },
      { label: "Thumb border",      token: "--primary",     value: "#013229", type: "color" },
    ]},
    { title: "Radius", items: [
      { label: "Track / thumb", token: "rounded-full", value: "9999px", type: "size" },
    ]},
    { title: "Spacing", items: [
      { label: "Track height", token: "h-2",    value: "0.5rem / 8px",   type: "size" },
      { label: "Thumb size",   token: "h-5 w-5", value: "1.25rem / 20px", type: "size" },
    ]},
  ],
  "Radio Group & Textarea": () => [
    { title: "Colors", items: [
      { label: "Radio border",      token: "--input",      value: "#E5E5E5", type: "color" },
      { label: "Radio selected",    token: "--primary",    value: "#013229", type: "color" },
      { label: "Textarea border",   token: "--input",      value: "#E5E5E5", type: "color" },
      { label: "Textarea background", token: "--background", value: "#FFFFFF", type: "color" },
      { label: "Focus ring",        token: "--ring",       value: "#013229", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Font size", token: "text-base", value: "0.875rem / 14px", type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Radio",    token: "rounded-full", value: "9999px",  type: "size" },
      { label: "Textarea", token: "rounded-md",   value: "≈ 10px",  type: "size" },
    ]},
  ],
  "Toggle & Toggle Group": () => [
    { title: "Colors", items: [
      { label: "Default bg",    token: "transparent",       value: "transparent", type: "color" },
      { label: "Hover bg",      token: "--muted",           value: "#F5F5F5",    type: "color" },
      { label: "Active bg",     token: "--accent",          value: "#61CAA0",    type: "color" },
      { label: "Active text",   token: "--accent-foreground", value: "#013229",  type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Font size", token: "text-base", value: "0.875rem / 14px", type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Border radius", token: "rounded-md", value: "≈ 10px", type: "size" },
    ]},
    { title: "Spacing", items: [
      { label: "Height",    token: "h-10", value: "2.5rem / 40px",  type: "size" },
      { label: "Padding x", token: "px-3", value: "0.75rem / 12px", type: "size" },
    ]},
  ],
  "Skeleton": () => [
    { title: "Colors", items: [
      { label: "Background", token: "--muted", value: "#F5F5F5", type: "color" },
    ]},
    { title: "Radius", items: [
      { label: "Border radius", token: "--radius", value: "0.75rem / 12px", type: "size" },
    ]},
    { title: "Animation", items: [
      { label: "Effect", token: "animate-pulse", value: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite", type: "font" },
    ]},
  ],
  "Scroll Area": () => [
    { title: "Colors", items: [
      { label: "Scrollbar thumb", token: "--border", value: "#E5E5E5", type: "color" },
    ]},
    { title: "Spacing", items: [
      { label: "Scrollbar width", token: "w-2.5", value: "0.625rem / 10px", type: "size" },
    ]},
  ],
  "Popover & Hover Card": () => [
    { title: "Colors", items: [
      { label: "Background", token: "--popover",            value: "#FFFFFF", type: "color" },
      { label: "Text",       token: "--popover-foreground", value: "#333333", type: "color" },
      { label: "Border",     token: "--border",             value: "#E5E5E5", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Font size", token: "text-base", value: "0.875rem / 14px", type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Border radius", token: "--radius", value: "0.75rem / 12px", type: "size" },
    ]},
    { title: "Shadow", items: [
      { label: "Elevation", token: "--shadow-md", value: "0 4px 6px rgba(1,50,41,0.1)", type: "shadow" },
    ]},
    { title: "Spacing", items: [
      { label: "Padding", token: "p-4", value: "0.875rem / 14px", type: "size" },
    ]},
  ],
  "Menubar & Navigation Menu": () => [
    { title: "Colors", items: [
      { label: "Background",    token: "--background", value: "#FFFFFF", type: "color" },
      { label: "Border",        token: "--border",     value: "#E5E5E5", type: "color" },
      { label: "Active item bg", token: "--accent",    value: "#61CAA0", type: "color" },
      { label: "Text",          token: "--foreground", value: "#333333", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Font size",   token: "text-base",     value: "0.875rem / 14px", type: "size" },
      { label: "Font weight", token: "font-medium", value: "500",             type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Item radius", token: "rounded-sm", value: "≈ 6px", type: "size" },
    ]},
  ],
  "Collapsible & Context Menu": () => [
    { title: "Colors", items: [
      { label: "Background",  token: "--popover",           value: "#FFFFFF", type: "color" },
      { label: "Border",      token: "--border",            value: "#E5E5E5", type: "color" },
      { label: "Hover bg",    token: "--accent",            value: "#61CAA0", type: "color" },
      { label: "Hover text",  token: "--accent-foreground", value: "#013229", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Font size", token: "text-base", value: "0.875rem / 14px", type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Menu radius", token: "--radius", value: "0.75rem / 12px", type: "size" },
    ]},
    { title: "Shadow", items: [
      { label: "Elevation", token: "--shadow-md", value: "0 4px 6px rgba(1,50,41,0.1)", type: "shadow" },
    ]},
  ],
  "Breadcrumb & Pagination": () => [
    { title: "Colors", items: [
      { label: "Active text",      token: "--foreground",       value: "#333333", type: "color" },
      { label: "Muted text",       token: "--muted-foreground", value: "#737373", type: "color" },
      { label: "Active page bg",   token: "--primary",          value: "#013229", type: "color" },
      { label: "Active page text", token: "--primary-foreground", value: "#F0FBF8", type: "color" },
      { label: "Page border",      token: "--border",           value: "#E5E5E5", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Font size", token: "text-base", value: "0.875rem / 14px", type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Page button", token: "rounded-md", value: "≈ 10px", type: "size" },
    ]},
  ],
  "Aspect Ratio & Carousel": () => [
    { title: "Colors", items: [
      { label: "Container bg",  token: "--muted",            value: "#F5F5F5", type: "color" },
      { label: "Active dot",    token: "--primary",          value: "#013229", type: "color" },
      { label: "Inactive dot",  token: "--muted-foreground", value: "#737373", type: "color" },
    ]},
    { title: "Radius", items: [
      { label: "Card radius", token: "--radius", value: "0.75rem / 12px", type: "size" },
    ]},
  ],
  "Calendar": () => [
    { title: "Colors", items: [
      { label: "Selected day bg",   token: "--primary",          value: "#013229", type: "color" },
      { label: "Selected day text", token: "--primary-foreground", value: "#F0FBF8", type: "color" },
      { label: "Today / hover bg",  token: "--accent",           value: "#61CAA0", type: "color" },
      { label: "Today text",        token: "--accent-foreground", value: "#013229", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Font size", token: "text-base", value: "0.875rem / 14px", type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Day button", token: "rounded-md", value: "≈ 10px", type: "size" },
    ]},
  ],
  "Command": () => [
    { title: "Colors", items: [
      { label: "Background",     token: "--popover",          value: "#FFFFFF", type: "color" },
      { label: "Border",         token: "--border",           value: "#E5E5E5", type: "color" },
      { label: "Active item bg", token: "--accent",           value: "#61CAA0", type: "color" },
      { label: "Group heading",  token: "--muted-foreground", value: "#737373", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Font size", token: "text-base", value: "0.875rem / 14px", type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Container", token: "--radius", value: "0.75rem / 12px", type: "size" },
    ]},
    { title: "Shadow", items: [
      { label: "Elevation", token: "--shadow-lg", value: "0 10px 15px rgba(1,50,41,0.1)", type: "shadow" },
    ]},
  ],
  "Drawer": () => [
    { title: "Colors", items: [
      { label: "Background", token: "--background",     value: "#FFFFFF",           type: "color" },
      { label: "Handle",     token: "--muted-foreground", value: "rgba(115,115,115,0.3)", type: "color" },
      { label: "Overlay",    token: "black/40",         value: "rgba(0,0,0,0.4)",  type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Title size",   token: "text-lg",       value: "1.125rem / 18px", type: "size" },
      { label: "Title weight", token: "font-semibold", value: "600",             type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Top radius", token: "rounded-t-[10px]", value: "10px (top only)", type: "size" },
    ]},
  ],
  "Input OTP": () => [
    { title: "Colors", items: [
      { label: "Cell background",  token: "--background", value: "#FFFFFF", type: "color" },
      { label: "Cell border",      token: "--input",      value: "#E5E5E5", type: "color" },
      { label: "Active cell border", token: "--ring",     value: "#013229", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Font size",   token: "text-base",   value: "0.875rem / 14px", type: "size" },
      { label: "Font weight", token: "font-medium", value: "500",         type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Cell radius", token: "rounded-md", value: "≈ 10px", type: "size" },
    ]},
    { title: "Spacing", items: [
      { label: "Cell size", token: "h-10 w-10", value: "2.5rem / 40px square", type: "size" },
    ]},
  ],
  "Sonner (Toast)": () => [
    { title: "Colors", items: [
      { label: "Background",         token: "--background", value: "#FFFFFF", type: "color" },
      { label: "Border",             token: "--border",     value: "#E5E5E5", type: "color" },
      { label: "Success indicator",  token: "--success",    value: "#3BB688", type: "color" },
      { label: "Error indicator",    token: "--destructive", value: "#DC2626", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Font size",   token: "text-base",     value: "0.875rem / 14px", type: "size" },
      { label: "Font weight", token: "font-medium", value: "500",             type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Border radius", token: "--radius", value: "0.75rem / 12px", type: "size" },
    ]},
    { title: "Shadow", items: [
      { label: "Elevation", token: "--shadow-lg", value: "0 10px 15px rgba(1,50,41,0.1)", type: "shadow" },
    ]},
  ],
  "Resizable": () => [
    { title: "Colors", items: [
      { label: "Handle color",  token: "--border",           value: "#E5E5E5", type: "color" },
      { label: "Handle hover",  token: "--muted-foreground", value: "#737373", type: "color" },
    ]},
    { title: "Spacing", items: [
      { label: "Handle width",    token: "w-px", value: "1px",          type: "size" },
      { label: "Hit area width",  token: "w-4",  value: "0.875rem / 14px",  type: "size" },
    ]},
  ],
  "Chart": () => [
    { title: "Colors", items: [
      { label: "Primary series",   token: "--primary",          value: "#013229", type: "color" },
      { label: "Secondary series", token: "--secondary",        value: "#FFD653", type: "color" },
      { label: "Accent series",    token: "--accent",           value: "#61CAA0", type: "color" },
      { label: "Grid lines",       token: "--border",           value: "#E5E5E5", type: "color" },
      { label: "Axis labels",      token: "--muted-foreground", value: "#737373", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Axis label size", token: "text-xs", value: "0.75rem / 12px", type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Bar radius", token: "rounded-sm", value: "2px", type: "size" },
    ]},
  ],
  "Sidebar": () => [
    { title: "Colors", items: [
      { label: "Background",   token: "--sidebar",           value: "#013229", type: "color" },
      { label: "Text",         token: "--sidebar-foreground", value: "#F0FBF8", type: "color" },
      { label: "Active item",  token: "--sidebar-primary",   value: "#61CAA0", type: "color" },
      { label: "Border",       token: "--sidebar-border",    value: "#065A45", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Item font size",   token: "text-base",     value: "0.875rem / 14px", type: "size" },
      { label: "Item font weight", token: "font-medium", value: "500",             type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Item radius", token: "rounded-md", value: "≈ 10px", type: "size" },
    ]},
    { title: "Spacing", items: [
      { label: "Sidebar width",     token: "w-64", value: "16rem / 256px", type: "size" },
      { label: "Collapsed width",   token: "w-12", value: "3rem / 48px",   type: "size" },
    ]},
  ],
  "Spinner": () => [
    { title: "Colors", items: [
      { label: "Track color",  token: "--primary",  value: "#013229",    type: "color" },
      { label: "Gap segment",  token: "transparent", value: "transparent", type: "color" },
    ]},
    { title: "Spacing", items: [
      { label: "Size sm",      token: "h-4 w-4",   value: "0.875rem / 14px",  type: "size" },
      { label: "Size md",      token: "h-6 w-6",   value: "1.5rem / 24px", type: "size" },
      { label: "Size lg",      token: "h-8 w-8",   value: "2rem / 32px",  type: "size" },
      { label: "Border width", token: "border-2",  value: "2px",          type: "size" },
    ]},
    { title: "Animation", items: [
      { label: "Effect", token: "animate-spin", value: "spin 1s linear infinite", type: "font" },
    ]},
  ],
  "Kbd": () => [
    { title: "Colors", items: [
      { label: "Background", token: "--muted",   value: "#F5F5F5", type: "color" },
      { label: "Border",     token: "--border",  value: "#E5E5E5", type: "color" },
      { label: "Text",       token: "--foreground", value: "#333333", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Font family", token: "--font-mono", value: "Space Mono",      type: "font" },
      { label: "Font size",   token: "text-xs",     value: "0.75rem / 12px", type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Border radius", token: "rounded", value: "≈ 6px", type: "size" },
    ]},
    { title: "Shadow", items: [
      { label: "Bottom elevation", token: "--shadow-sm", value: "0 1px 2px rgba(1,50,41,0.05)", type: "shadow" },
    ]},
    { title: "Spacing", items: [
      { label: "Padding x", token: "px-1.5", value: "0.375rem / 6px", type: "size" },
      { label: "Padding y", token: "py-0.5", value: "0.125rem / 2px", type: "size" },
    ]},
  ],
  "Native Select": () => [
    { title: "Colors", items: [
      { label: "Background", token: "--background", value: "#FFFFFF", type: "color" },
      { label: "Border",     token: "--input",      value: "#E5E5E5", type: "color" },
      { label: "Text",       token: "--foreground", value: "#333333", type: "color" },
      { label: "Focus ring", token: "--ring",       value: "#013229", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Font size", token: "text-base", value: "0.875rem / 14px", type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Border radius", token: "rounded-md", value: "≈ 10px", type: "size" },
    ]},
    { title: "Spacing", items: [
      { label: "Height",    token: "h-10", value: "2.5rem / 40px",  type: "size" },
      { label: "Padding x", token: "px-3", value: "0.75rem / 12px", type: "size" },
    ]},
  ],
  "Input Group": () => [
    { title: "Colors", items: [
      { label: "Addon background",  token: "--muted",            value: "#F5F5F5", type: "color" },
      { label: "Border",            token: "--input",            value: "#E5E5E5", type: "color" },
      { label: "Input background",  token: "--background",       value: "#FFFFFF", type: "color" },
      { label: "Icon / addon text", token: "--muted-foreground", value: "#737373", type: "color" },
    ]},
    { title: "Radius", items: [
      { label: "Outer radius", token: "rounded-md", value: "≈ 10px", type: "size" },
    ]},
    { title: "Spacing", items: [
      { label: "Height",       token: "h-10", value: "2.5rem / 40px",  type: "size" },
      { label: "Addon padding", token: "px-3", value: "0.75rem / 12px", type: "size" },
    ]},
  ],
  "Button Group": () => [
    { title: "Colors", items: [
      { label: "Border",          token: "--input",              value: "#E5E5E5", type: "color" },
      { label: "Background",      token: "--background",         value: "#FFFFFF", type: "color" },
      { label: "Active segment",  token: "--primary",            value: "#013229", type: "color" },
      { label: "Active text",     token: "--primary-foreground", value: "#F0FBF8", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Font size",   token: "text-base",     value: "0.875rem / 14px", type: "size" },
      { label: "Font weight", token: "font-medium", value: "500",             type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Edge items (first/last)", token: "rounded-md", value: "≈ 10px (edges only)", type: "size" },
    ]},
    { title: "Spacing", items: [
      { label: "Height",    token: "h-9",  value: "2.25rem / 36px", type: "size" },
      { label: "Padding x", token: "px-4", value: "0.875rem / 14px",    type: "size" },
    ]},
  ],
  "Empty": () => [
    { title: "Colors", items: [
      { label: "Icon background",   token: "--muted",            value: "#F5F5F5", type: "color" },
      { label: "Icon color",        token: "--muted-foreground", value: "#737373", type: "color" },
      { label: "Title text",        token: "--foreground",       value: "#333333", type: "color" },
      { label: "Description text",  token: "--muted-foreground", value: "#737373", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Title size",        token: "text-base",     value: "0.875rem / 14px", type: "size" },
      { label: "Title weight",      token: "font-medium", value: "500",             type: "size" },
      { label: "Description size",  token: "text-xs",     value: "0.75rem / 12px",  type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Icon container", token: "rounded-full", value: "9999px", type: "size" },
    ]},
    { title: "Spacing", items: [
      { label: "Icon size", token: "h-12 w-12", value: "3rem / 48px", type: "size" },
    ]},
  ],
  "Field": () => [
    { title: "Colors", items: [
      { label: "Label text",  token: "--foreground",       value: "#333333", type: "color" },
      { label: "Hint text",   token: "--muted-foreground", value: "#737373", type: "color" },
      { label: "Error text",  token: "--destructive",      value: "#DC2626", type: "color" },
      { label: "Input border", token: "--input",           value: "#E5E5E5", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Label size",      token: "text-base",     value: "0.875rem / 14px", type: "size" },
      { label: "Label weight",    token: "font-medium", value: "500",             type: "size" },
      { label: "Hint/error size", token: "text-xs",     value: "0.75rem / 12px",  type: "size" },
    ]},
    { title: "Spacing", items: [
      { label: "Stack gap", token: "space-y-2", value: "0.5rem / 8px", type: "size" },
    ]},
  ],
  "Item": () => [
    { title: "Colors", items: [
      { label: "Background",  token: "--card",   value: "#FFFFFF", type: "color" },
      { label: "Border",      token: "--border", value: "#E5E5E5", type: "color" },
      { label: "Hover bg",    token: "--muted",  value: "#F5F5F5", type: "color" },
      { label: "Avatar bg",   token: "--primary", value: "#013229", type: "color" },
      { label: "Avatar text", token: "--primary-foreground", value: "#F0FBF8", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Primary text size",   token: "text-base",     value: "0.875rem / 14px", type: "size" },
      { label: "Primary text weight", token: "font-medium", value: "500",             type: "size" },
      { label: "Secondary text size", token: "text-xs",     value: "0.75rem / 12px",  type: "size" },
    ]},
    { title: "Spacing", items: [
      { label: "Padding",      token: "px-3 py-2", value: "0.75rem × 0.5rem", type: "size" },
      { label: "Internal gap", token: "gap-3",     value: "0.75rem / 12px",    type: "size" },
    ]},
  ],
  "Avatar": () => [
    { title: "Colors", items: [
      { label: "Default background", token: "--primary",          value: "#013229", type: "color" },
      { label: "Default text",       token: "--primary-foreground", value: "#F0FBF8", type: "color" },
      { label: "Fallback background", token: "--muted",           value: "#F5F5F5", type: "color" },
      { label: "Fallback text",      token: "--muted-foreground", value: "#737373", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Initials size",   token: "text-xs",   value: "0.75rem / 12px", type: "size" },
      { label: "Initials weight", token: "font-bold", value: "700",            type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Shape", token: "rounded-full", value: "9999px (circle)", type: "size" },
    ]},
    { title: "Spacing", items: [
      { label: "Default size", token: "h-10 w-10", value: "2.5rem / 40px", type: "size" },
      { label: "Small size",   token: "h-8 w-8",   value: "2rem / 32px",   type: "size" },
    ]},
  ],
  "Dialogs": () => [
    { title: "Overlay", items: [
      { label: "Dialog overlay",       token: "bg-black/50",  value: "rgba(0,0,0,0.5)",  type: "color" },
      { label: "Alert dialog overlay", token: "bg-black/80",  value: "rgba(0,0,0,0.8)",  type: "color" },
    ]},
    { title: "Container", items: [
      { label: "Background",  token: "--background", value: "#FFFFFF",  type: "color" },
      { label: "Border",      token: "--border",     value: "#E5E5E5",  type: "color" },
    ]},
    { title: "Content", items: [
      { label: "Title",           token: "--foreground",      value: "#333333", type: "color" },
      { label: "Description",     token: "--muted-foreground", value: "#737373", type: "color" },
      { label: "Close button",    token: "--muted-foreground", value: "#737373", type: "color" },
    ]},
    { title: "Actions", items: [
      { label: "Primary action bg",    token: "--primary",              value: "#013229", type: "color" },
      { label: "Primary action text",  token: "--primary-foreground",   value: "#F0FBF8", type: "color" },
      { label: "Destructive action bg",token: "--destructive",          value: "#DC2626", type: "color" },
      { label: "Destructive text",     token: "--destructive-foreground",value: "#FFFFFF", type: "color" },
      { label: "Cancel border",        token: "--border",               value: "#E5E5E5", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Title size",        token: "text-lg",        value: "1.125rem / 18px",  type: "size" },
      { label: "Title weight",      token: "font-semibold",  value: "600",              type: "size" },
      { label: "Title tracking",    token: "tracking-tight", value: "−0.025em",         type: "size" },
      { label: "Description size",  token: "text-sm",        value: "0.875rem / 14px",  type: "size" },
    ]},
    { title: "Structure", items: [
      { label: "Max width",       token: "max-w-lg",  value: "32rem / 512px",  type: "size" },
      { label: "Padding",         token: "p-6",       value: "1.5rem / 24px",  type: "size" },
      { label: "Gap between rows",token: "gap-4",     value: "1rem / 16px",    type: "size" },
      { label: "Header gap",      token: "space-y-1.5", value: "0.375rem / 6px", type: "size" },
      { label: "Footer gap",      token: "space-x-2", value: "0.5rem / 8px",   type: "size" },
    ]},
    { title: "Radius & Shadow", items: [
      { label: "Border radius", token: "rounded-lg", value: "0.75rem / 12px",                    type: "size" },
      { label: "Elevation",     token: "shadow-lg",  value: "0 10px 15px rgba(1,50,41,0.1)",     type: "shadow" },
    ]},
  ],
  "Dropdown Menu": () => [
    { title: "Colors", items: [
      { label: "Background",      token: "--popover",           value: "#FFFFFF", type: "color" },
      { label: "Border",          token: "--border",            value: "#E5E5E5", type: "color" },
      { label: "Hover item bg",   token: "--accent",            value: "#61CAA0", type: "color" },
      { label: "Hover item text", token: "--accent-foreground", value: "#013229", type: "color" },
      { label: "Destructive item", token: "--destructive",      value: "#DC2626", type: "color" },
      { label: "Group label",     token: "--muted-foreground",  value: "#737373", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Item font size", token: "text-base", value: "0.875rem / 14px", type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Container", token: "--radius",   value: "0.75rem / 12px", type: "size" },
      { label: "Item",      token: "rounded-sm", value: "≈ 6px",          type: "size" },
    ]},
    { title: "Shadow", items: [
      { label: "Elevation", token: "--shadow-md", value: "0 4px 6px rgba(1,50,41,0.1)", type: "shadow" },
    ]},
    { title: "Spacing", items: [
      { label: "Item padding", token: "px-2 py-1.5", value: "0.5rem × 0.375rem", type: "size" },
    ]},
  ],
  "Tabs": () => [
    { title: "Colors", items: [
      { label: "Tab list bg",    token: "--muted",            value: "#F5F5F5", type: "color" },
      { label: "Active tab bg",  token: "--background",       value: "#FFFFFF", type: "color" },
      { label: "Active tab text", token: "--foreground",      value: "#333333", type: "color" },
      { label: "Inactive text",  token: "--muted-foreground", value: "#737373", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Font size",   token: "text-base",     value: "0.875rem / 14px", type: "size" },
      { label: "Font weight", token: "font-medium", value: "500",             type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "List radius", token: "rounded-md", value: "≈ 10px", type: "size" },
      { label: "Tab radius",  token: "rounded-sm", value: "≈ 6px",  type: "size" },
    ]},
    { title: "Shadow", items: [
      { label: "Active tab", token: "--shadow-sm", value: "0 1px 2px rgba(1,50,41,0.05)", type: "shadow" },
    ]},
    { title: "Spacing", items: [
      { label: "Tab padding", token: "px-3 py-1.5", value: "0.75rem × 0.375rem", type: "size" },
    ]},
  ],
  "Tooltip": () => [
    { title: "Colors", items: [
      { label: "Background", token: "--primary",            value: "#013229", type: "color" },
      { label: "Text",       token: "--primary-foreground", value: "#F0FBF8", type: "color" },
    ]},
    { title: "Typography", items: [
      { label: "Font size",   token: "text-xs",     value: "0.75rem / 12px", type: "size" },
      { label: "Font weight", token: "font-medium", value: "500",            type: "size" },
    ]},
    { title: "Radius", items: [
      { label: "Border radius", token: "rounded-md", value: "≈ 10px", type: "size" },
    ]},
    { title: "Shadow", items: [
      { label: "Elevation", token: "--shadow-md", value: "0 4px 6px rgba(1,50,41,0.1)", type: "shadow" },
    ]},
    { title: "Spacing", items: [
      { label: "Padding", token: "px-3 py-1.5", value: "0.75rem × 0.375rem", type: "size" },
    ]},
  ],
  "Page Sections": (ctx = {}) => {
    const variant = ctx.variant ?? "hero";
    const heroGroups: SpecGroup[] = [
      { title: "Colors", items: [
        { label: "Heading",       token: "--foreground",       value: "#333333", type: "color" },
        { label: "Accent heading", token: "--primary",          value: "#013229", type: "color" },
        { label: "Description",   token: "--muted-foreground", value: "#737373", type: "color" },
        { label: "Separator",     token: "--border",           value: "#E5E5E5", type: "color" },
      ]},
      { title: "Typography", items: [
        { label: "Eyebrow",      token: "text-xs font-mono",            value: "12px / Space Mono",  type: "font" },
        { label: "H1 size",      token: "text-5xl",                     value: "3rem / 48px",        type: "size" },
        { label: "H1 weight",    token: "font-extrabold",               value: "800",                type: "size" },
        { label: "H1 leading",   token: "leading-[1.08]",               value: "1.08",               type: "size" },
        { label: "Description",  token: "text-lg leading-relaxed",      value: "1.125rem / 18px",    type: "size" },
      ]},
      { title: "Spacing", items: [
        { label: "Section padding-b", token: "pb-14", value: "3.5rem / 56px", type: "size" },
        { label: "Eyebrow gap-b",     token: "mb-4",  value: "1rem / 16px",   type: "size" },
        { label: "H1 gap-b",          token: "mb-5",  value: "1.25rem / 20px",type: "size" },
        { label: "Description gap-b", token: "mb-8",  value: "2rem / 32px",   type: "size" },
        { label: "Actions gap",       token: "gap-3", value: "0.75rem / 12px",type: "size" },
      ]},
    ];
    const pageGroups: SpecGroup[] = [
      { title: "Colors", items: [
        { label: "Heading",     token: "--foreground",       value: "#333333", type: "color" },
        { label: "Description", token: "--muted-foreground", value: "#737373", type: "color" },
      ]},
      { title: "Typography", items: [
        { label: "H1 size",   token: "text-4xl",         value: "2.25rem / 36px", type: "size" },
        { label: "H1 weight", token: "font-extrabold",   value: "800",            type: "size" },
        { label: "H1 tracking", token: "tracking-tight", value: "-0.025em",       type: "size" },
        { label: "Description", token: "text-lg",        value: "1.125rem / 18px",type: "size" },
      ]},
      { title: "Spacing", items: [
        { label: "Layout gap", token: "gap-4",      value: "1rem / 16px",   type: "size" },
        { label: "Title gap",  token: "space-y-3",  value: "0.75rem / 12px",type: "size" },
      ]},
    ];
    const searchGroups: SpecGroup[] = [
      { title: "Colors", items: [
        { label: "Heading",          token: "--foreground",       value: "#333333", type: "color" },
        { label: "Description",      token: "--muted-foreground", value: "#737373", type: "color" },
        { label: "Input background", token: "--background",       value: "#FFFFFF", type: "color" },
        { label: "Input border",     token: "--input",            value: "#E5E5E5", type: "color" },
        { label: "Focus ring",       token: "--ring",             value: "#013229", type: "color" },
        { label: "Active pill bg",   token: "--primary",          value: "#013229", type: "color" },
      ]},
      { title: "Typography", items: [
        { label: "H1 size",     token: "text-4xl font-extrabold", value: "2.25rem / 36px", type: "size" },
        { label: "Filter pill", token: "text-xs font-medium",     value: "0.75rem / 12px", type: "size" },
      ]},
      { title: "Spacing", items: [
        { label: "Input height",  token: "h-9",          value: "2.25rem / 36px", type: "size" },
        { label: "Input padding", token: "pl-9 pr-3",    value: "2.25rem / 0.75rem", type: "size" },
        { label: "Pill padding",  token: "px-3 py-1",    value: "0.75rem × 0.25rem", type: "size" },
        { label: "Sections gap",  token: "space-y-5",    value: "1.25rem / 20px", type: "size" },
      ]},
    ];
    const sectionGroups: SpecGroup[] = [
      { title: "Colors", items: [
        { label: "H2 / H3",        token: "--foreground",       value: "#333333", type: "color" },
        { label: "Description",    token: "--muted-foreground", value: "#737373", type: "color" },
        { label: "Group label",    token: "--muted-foreground", value: "#737373", type: "color" },
        { label: "Separator line", token: "--border",           value: "#E5E5E5", type: "color" },
      ]},
      { title: "Typography", items: [
        { label: "H2 size",    token: "text-2xl font-semibold", value: "1.5rem / 24px",   type: "size" },
        { label: "H3 size",    token: "text-xl font-semibold",  value: "1.25rem / 20px",  type: "size" },
        { label: "Tracking",   token: "tracking-tight",         value: "-0.025em",         type: "size" },
        { label: "Label",      token: "text-xs font-medium tracking-wide uppercase", value: "12px / 500", type: "font" },
      ]},
      { title: "Spacing", items: [
        { label: "H2 padding-b", token: "pb-4",     value: "1rem / 16px",    type: "size" },
        { label: "H3 padding-b", token: "pb-4",     value: "1rem / 16px",    type: "size" },
        { label: "Title gap",    token: "space-y-1", value: "0.25rem / 4px", type: "size" },
      ]},
    ];
    return variant === "hero" ? heroGroups
      : variant === "page"    ? pageGroups
      : variant === "search"  ? searchGroups
      : sectionGroups;
  },
};

function DesignSpecs({ title, context, controls }: { title: string | null; context?: SpecContext; controls?: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  const contextKey = JSON.stringify(context);
  React.useEffect(() => { setOpen(true); }, [contextKey]);
  const specFn = title ? COMPONENT_SPECS[title] : undefined;
  const groups = specFn ? specFn(context) : undefined;
  if (!groups || groups.length === 0) return null;

  const shadowPreview = (value: string) => (
    <div
      className="h-5 w-8 rounded shrink-0 bg-background border border-border/40"
      style={{ boxShadow: value }}
    />
  );

  return (
    <div className="border-t border-border mt-4">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-5 pb-3">
        <div className="flex items-center gap-2 shrink-0">
          <SlidersHorizontal className="h-4 w-4 text-muted-foreground shrink-0" />
          <h3 className="text-sm font-semibold tracking-tight">Design tokens</h3>
        </div>
        {controls && <div className="flex-1">{controls}</div>}
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors ml-auto"
          aria-label="Toggle design tokens"
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 shrink-0 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      {open && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 pb-8">
          {groups.map((group) => (
            <div key={group.title} className="space-y-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70">
                {group.title}
              </p>
              <div className="space-y-2.5">
                {group.items.map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 min-w-0">
                    {item.type === "color" && (
                      <div
                        className="h-5 w-5 rounded-[5px] shrink-0 border border-black/10 shadow-sm"
                        style={{ backgroundColor: item.value }}
                      />
                    )}
                    {item.type === "shadow" && shadowPreview(item.value)}
                    {(item.type === "size" || item.type === "font") && (
                      <span className="font-mono text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded shrink-0 leading-none">
                        {item.value.split(" ")[0]}
                      </span>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-foreground truncate leading-tight">{item.label}</p>
                      <p className="text-[10px] font-mono text-muted-foreground/60 truncate mt-0.5">
                        {item.type === "color" ? item.value : item.token}
                      </p>
                    </div>
                    {item.type === "color" && (
                      <span className="font-mono text-[10px] text-muted-foreground shrink-0 hidden sm:block">
                        {item.token}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TextareaWithCount() {
  const [value, setValue] = useState("");
  const max = 200;
  return (
    <div className="space-y-1">
      <Textarea
        id="ta-count"
        placeholder="Enter your message…"
        value={value}
        onChange={(e) => setValue(e.target.value.slice(0, max))}
        className="resize-none"
        rows={3}
      />
      <p className={`text-xs text-right ${value.length >= max ? "text-destructive" : "text-muted-foreground"}`}>
        {value.length} / {max}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPONENTS PAGE
═══════════════════════════════════════════════════════════ */

function ComponentsPage() {
  const [sliderValue, setSliderValue] = useState([40]);
  const [radioValue, setRadioValue] = useState("option-1");
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);
  const [sizeTabVariant, setSizeTabVariant] = useState<"default" | "secondary" | "accent" | "destructive" | "outline" | "ghost" | "link">("default");
  const [badgeClickable, setBadgeClickable] = useState(false);
  const [badgeStyle, setBadgeStyle] = useState<"badge" | "pill">("badge");
  const [badgeSize, setBadgeSize] = useState<"sm" | "md" | "lg">("md");
  const [badgeLeadingIcon, setBadgeLeadingIcon] = useState<string | null>(null);
  const [badgeTrailingIcon, setBadgeTrailingIcon] = useState<string | null>(null);
  const [btnLeadingIcon, setBtnLeadingIcon] = useState<string | null>(null);
  const [btnTrailingIcon, setBtnTrailingIcon] = useState<string | null>(null);
  const [buttonActiveSize, setButtonActiveSize] = useState<"sm" | "default" | "lg" | "icon">("default");
  const [alertVariant, setAlertVariant] = useState<"default" | "success" | "warning" | "destructive" | "informative">("default");
  const [alertsDismissed, setAlertsDismissed] = useState<Set<string>>(new Set());
  const dismissAlert = (id: string) => setAlertsDismissed(prev => new Set(prev).add(id));
  const [inputState, setInputState] = useState<"default" | "focus" | "error" | "disabled">("default");
  const [datePickerDate, setDatePickerDate] = useState<Date | undefined>(undefined);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [cardVariant, setCardVariant] = useState<"default" | "featured" | "settings">("default");
  const [switchState, setSwitchState] = useState<"off" | "on" | "disabled">("off");
  const [switchLabelPosition, setSwitchLabelPosition] = useState<"leading" | "trailing">("trailing");
  const [pageSectionsVariant, setPageSectionsVariant] = useState<"hero" | "page" | "search" | "section">("hero");
  const [selectState, setSelectState] = useState<"default" | "focus" | "disabled">("default");
  const [checkboxState, setCheckboxState] = useState<"unchecked" | "checked" | "indeterminate" | "disabled">("unchecked");
  const [radioState, setRadioState] = useState<"default" | "selected" | "disabled">("default");
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const getComponentFromHash = () => {
    const hash = window.location.hash.replace("#", "");
    const parts = hash.split("/");
    if (parts[0] === "components" && parts[1]) return decodeURIComponent(parts[1]);
    return null;
  };
  const [selectedComponent, setSelectedComponent] = useState<string | null>(getComponentFromHash);
  const [view, setView] = useState<"grid" | "detail">(() => getComponentFromHash() ? "detail" : "grid");

  React.useEffect(() => {
    const onHashChange = () => {
      const component = getComponentFromHash();
      setSelectedComponent(component);
      setView(component ? "detail" : "grid");
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const componentMeta: { title: string; description: string; category: string; preview: React.ReactNode; figmaUrl?: string }[] = [
    { title: "Typography",               category: "Foundation", description: "Text scales and font styles.",                  figmaUrl: FIGMA_FILE, preview: <div className="space-y-1 pointer-events-none select-none"><p className="text-sm font-bold tracking-tight">Heading</p><p className="text-xs text-muted-foreground">Body text sample</p><p className="text-[10px] font-mono text-muted-foreground/60">Code</p></div> },
    { title: "Buttons",                  category: "Actions",    description: "Seven variants × four sizes.",                  figmaUrl: "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/SL-Design-system?node-id=47-2&t=vHpjN3uTrCixVfg0-1", preview: <div className="flex flex-wrap gap-1.5 pointer-events-none select-none"><Button size="sm">Primary</Button><Button size="sm" variant="ghost">Outline</Button><Button size="sm" variant="ghost">Ghost</Button></div> },
    { title: "Badges",                   category: "Display",    description: "Status indicators and labels.",                 figmaUrl: "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/SL-Design-system?node-id=127-715&t=fO3P1QEsKAc0ShcW-1", preview: <div className="flex flex-wrap gap-1.5 pointer-events-none select-none"><Badge>Default</Badge><Badge variant="secondary">Secondary</Badge><Badge variant="outlined">Outlined</Badge></div> },
    { title: "Cards",                    category: "Layout",     description: "Content containers with header and footer.",    figmaUrl: "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/SL-Design-system?node-id=140-218&t=anHAdcWSDLhg0F9c-1", preview: <div className="pointer-events-none select-none border border-border rounded-lg p-3 w-full bg-card"><p className="font-semibold text-xs">Card title</p><p className="text-muted-foreground text-[10px] mt-0.5">Short description here.</p></div> },
    { title: "Toggle Switch",             category: "Forms",      description: "On/off control for boolean settings.",          figmaUrl: "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/SL-Design-system?node-id=142-511&t=anHAdcWSDLhg0F9c-1", preview: <div className="flex items-center gap-3 pointer-events-none select-none"><div className="h-6 w-11 rounded-full bg-primary flex items-center px-0.5 justify-end"><div className="h-5 w-5 rounded-full bg-background shadow-sm" /></div><div className="h-6 w-11 rounded-full bg-input flex items-center px-0.5"><div className="h-5 w-5 rounded-full bg-background shadow-sm" /></div></div> },
    { title: "Input",                     category: "Forms",      description: "Text, email, password, search, number, and URL inputs.", figmaUrl: "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/SL-Design-system?node-id=150-582&t=jHkW48H5YomBpzoL-1", preview: <div className="space-y-1.5 pointer-events-none select-none w-full"><div className="h-7 rounded-md border border-input bg-background px-2 flex items-center"><span className="text-[10px] text-muted-foreground">Email address</span></div><div className="h-7 rounded-md border border-input bg-background px-2 flex items-center"><span className="text-[10px] text-muted-foreground">Password ••••••</span></div></div> },
    { title: "Select",                    category: "Forms",      description: "Dropdown selection with keyboard navigation.",            figmaUrl: "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/SL-Design-system?node-id=151-658&t=jHkW48H5YomBpzoL-1", preview: <div className="pointer-events-none select-none w-full h-7 rounded-md border border-input bg-background px-2 flex items-center justify-between"><span className="text-[10px] text-muted-foreground">Select an option</span><ChevronDown className="h-3 w-3 text-muted-foreground shrink-0" /></div> },
    { title: "Textarea",                  category: "Forms",      description: "Multi-line text input with resize and state variants.",    figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none w-full h-14 rounded-md border border-input bg-background px-2 py-1.5 flex items-start"><span className="text-[10px] text-muted-foreground">Enter your message…</span></div> },
    { title: "Checkbox",                  category: "Forms",      description: "Binary selection control with indeterminate state.",      figmaUrl: "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/SL-Design-system?node-id=155-1229&t=jHkW48H5YomBpzoL-1", preview: <div className="flex flex-col gap-2 pointer-events-none select-none"><div className="flex items-center gap-2"><div className="h-5 w-5 rounded-[2px] bg-primary border border-primary flex items-center justify-center"><Check className="h-3 w-3 text-primary-foreground" /></div><span className="text-[10px]">Checked</span></div><div className="flex items-center gap-2"><div className="h-5 w-5 rounded-[2px] border border-input bg-background" /><span className="text-[10px] text-muted-foreground">Unchecked</span></div></div> },
    { title: "Alerts",                   category: "Feedback",   description: "Five variants — dismissable with actions.",                       figmaUrl: "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/SL-Design-system?node-id=184-567&t=LxRKPfVCe6qST8HF-1", preview: <div className="pointer-events-none select-none border border-border rounded-md p-2.5 w-full flex gap-2 items-start"><div className="h-3 w-3 rounded-full bg-primary mt-0.5 shrink-0" /><div><p className="text-[10px] font-semibold">Alert title</p><p className="text-[9px] text-muted-foreground mt-0.5">Alert description text.</p></div></div> },
    { title: "Table",                    category: "Data",       description: "Data display with status badges.",              figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none w-full text-[9px]"><div className="flex gap-3 border-b border-border pb-1 mb-1 font-semibold text-muted-foreground"><span className="flex-1">Invoice</span><span>Status</span><span>Amount</span></div><div className="flex gap-3"><span className="flex-1 text-foreground">INV-001</span><Badge className="text-[8px] h-3.5 px-1">Paid</Badge><span>$250</span></div></div> },
    { title: "Accordion",                category: "Navigation", description: "Collapsible sections.",                         figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none w-full space-y-1"><div className="border-b border-border pb-1.5 flex items-center justify-between"><span className="text-[10px] font-medium">Is it accessible?</span><span className="text-[10px] text-muted-foreground">+</span></div><div className="border-b border-border pb-1.5 flex items-center justify-between"><span className="text-[10px] font-medium">Is it styled?</span><span className="text-[10px] text-muted-foreground">+</span></div></div> },
    { title: "Sheet",                    category: "Overlay",    description: "Slide-in panels from any edge.",                figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none flex gap-2 w-full"><Button size="sm" variant="ghost" className="text-[10px] h-6 px-2">Open →</Button><div className="flex-1 border-l border-border pl-2"><p className="text-[10px] font-medium">Sheet title</p><p className="text-[9px] text-muted-foreground">Content here.</p></div></div> },
    { title: "Progress & Slider",        category: "Forms",      description: "Progress bars and range inputs.",               figmaUrl: FIGMA_FILE, preview: <div className="space-y-2 pointer-events-none select-none w-full"><div className="h-2 rounded-full bg-muted overflow-hidden"><div className="h-full bg-primary rounded-full" style={{width:"60%"}} /></div><div className="h-2 rounded-full bg-muted relative"><div className="absolute left-[35%] top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-primary bg-background shadow" /></div></div> },
    { title: "Radio Group",              category: "Forms",      description: "Single-selection controls with keyboard support.",       figmaUrl: "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/SL-Design-system?node-id=184-474&t=jHkW48H5YomBpzoL-1", preview: <div className="flex flex-col gap-1.5 pointer-events-none select-none"><div className="flex items-center gap-2"><div className="h-5 w-5 rounded-full border-2 border-primary bg-background flex items-center justify-center"><div className="h-2.5 w-2.5 rounded-full bg-primary" /></div><span className="text-[10px]">Selected</span></div><div className="flex items-center gap-2"><div className="h-5 w-5 rounded-full border border-input bg-background" /><span className="text-[10px] text-muted-foreground">Option 2</span></div></div> },
    { title: "Toggle & Toggle Group",    category: "Actions",    description: "Toggle and grouped toggle buttons.",            figmaUrl: FIGMA_FILE, preview: <div className="flex gap-1 pointer-events-none select-none"><div className="h-7 w-7 rounded border border-border flex items-center justify-center bg-muted"><span className="text-[10px] font-bold">B</span></div><div className="h-7 w-7 rounded border border-border flex items-center justify-center"><span className="text-[10px] italic">I</span></div><div className="h-7 w-7 rounded border border-border flex items-center justify-center"><span className="text-[10px] underline">U</span></div></div> },
    { title: "Skeleton",                 category: "Feedback",   description: "Loading placeholder states.",                   figmaUrl: FIGMA_FILE, preview: <div className="flex items-center gap-2 pointer-events-none select-none w-full"><div className="h-8 w-8 rounded-full bg-muted animate-pulse shrink-0" /><div className="flex-1 space-y-1.5"><div className="h-2.5 rounded bg-muted animate-pulse" /><div className="h-2.5 rounded bg-muted animate-pulse w-3/4" /></div></div> },
    { title: "Scroll Area",              category: "Layout",     description: "Custom-styled scrollable containers.",          figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none border border-border rounded-md p-2 h-14 w-full overflow-hidden relative"><div className="space-y-0.5"><p className="text-[9px] text-muted-foreground">Item 1</p><p className="text-[9px] text-muted-foreground">Item 2</p><p className="text-[9px] text-muted-foreground">Item 3</p></div><div className="absolute right-1 top-1 w-1 h-8 rounded-full bg-muted" /></div> },
    { title: "Popover & Hover Card",     category: "Overlay",    description: "Floating content on click or hover.",          figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none relative flex gap-2"><Button size="sm" variant="ghost" className="text-[10px] h-6 px-2">Open</Button><div className="border border-border rounded-md p-2 shadow-md bg-popover text-[9px] text-muted-foreground">Popover content</div></div> },
    { title: "Menubar & Navigation Menu",category: "Navigation", description: "Desktop menus and site navigation.",            figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none flex gap-1 border border-border rounded-md p-1 bg-background w-full"><span className="text-[10px] px-2 py-0.5 rounded hover:bg-muted">File</span><span className="text-[10px] px-2 py-0.5 rounded bg-muted">Edit</span><span className="text-[10px] px-2 py-0.5 rounded">View</span></div> },
    { title: "Collapsible & Context Menu",category:"Navigation", description: "Expand/collapse and right-click menus.",        figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none w-full space-y-1"><div className="flex items-center justify-between border border-border rounded px-2 py-1"><span className="text-[10px] font-medium">Toggle content</span><span className="text-[10px] text-muted-foreground">↓</span></div><div className="border border-dashed border-border rounded px-2 py-1"><span className="text-[9px] text-muted-foreground">Collapsed content</span></div></div> },
    { title: "Breadcrumb & Pagination",  category: "Navigation", description: "Trails and page navigation.",                   figmaUrl: FIGMA_FILE, preview: <div className="space-y-2 pointer-events-none select-none"><div className="flex items-center gap-1 text-[9px] text-muted-foreground"><span className="text-foreground">Home</span><span>/</span><span className="text-foreground">Components</span><span>/</span><span className="text-primary">Button</span></div><div className="flex items-center gap-1"><div className="h-5 w-5 rounded border border-border flex items-center justify-center text-[9px]">‹</div><div className="h-5 w-5 rounded bg-primary text-primary-foreground flex items-center justify-center text-[9px]">1</div><div className="h-5 w-5 rounded border border-border flex items-center justify-center text-[9px]">2</div><div className="h-5 w-5 rounded border border-border flex items-center justify-center text-[9px]">›</div></div></div> },
    { title: "Aspect Ratio & Carousel",  category: "Layout",     description: "Fixed-ratio containers and slideshows.",        figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none flex gap-1 items-center w-full"><div className="h-12 flex-1 rounded-md bg-muted flex items-center justify-center text-[9px] text-muted-foreground">1</div><div className="h-12 flex-1 rounded-md border-2 border-primary bg-muted/50 flex items-center justify-center text-[9px] font-bold">2</div><div className="h-12 flex-1 rounded-md bg-muted flex items-center justify-center text-[9px] text-muted-foreground">3</div></div> },
    { title: "Calendar",                 category: "Forms",      description: "Date picker with range selection.",             figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none w-full text-[9px]"><div className="flex justify-between mb-1 font-medium"><span>March 2026</span><div className="flex gap-1"><span>‹</span><span>›</span></div></div><div className="grid grid-cols-7 gap-0.5 text-center text-muted-foreground"><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span><span className="rounded bg-primary text-primary-foreground">1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span></div></div> },
    { title: "Command",                  category: "Navigation", description: "Keyboard-driven command palette.",              figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none border border-border rounded-lg w-full overflow-hidden bg-popover"><div className="flex items-center border-b border-border px-2 py-1 gap-1"><Search className="h-2.5 w-2.5 text-muted-foreground" /><span className="text-[9px] text-muted-foreground">Search commands…</span></div><div className="p-1 space-y-0.5"><div className="rounded px-2 py-0.5 bg-accent text-[9px]">Calendar</div><div className="rounded px-2 py-0.5 text-[9px] text-muted-foreground">Settings</div></div></div> },
    { title: "Drawer",                   category: "Overlay",    description: "Mobile-optimised bottom sheet.",                figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none w-full border border-border rounded-t-xl p-3 bg-card"><div className="mx-auto h-1 w-8 rounded bg-muted mb-2" /><p className="text-[10px] font-semibold">Drawer title</p><p className="text-[9px] text-muted-foreground mt-0.5">Swipe down to close.</p></div> },
    { title: "Input OTP",                category: "Forms",      description: "One-time password input.",                      figmaUrl: FIGMA_FILE, preview: <div className="flex gap-1 pointer-events-none select-none"><div className="h-7 w-7 rounded border-2 border-primary bg-background flex items-center justify-center text-xs font-bold">1</div><div className="h-7 w-7 rounded border border-input bg-background flex items-center justify-center text-xs">2</div><div className="h-7 w-7 rounded border border-input bg-background flex items-center justify-center text-xs">3</div><span className="flex items-center text-muted-foreground">—</span><div className="h-7 w-7 rounded border border-input bg-background" /><div className="h-7 w-7 rounded border border-input bg-background" /><div className="h-7 w-7 rounded border border-input bg-background" /></div> },
    { title: "Sonner (Toast)",           category: "Feedback",   description: "Notification toasts.",                          figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none space-y-1 w-full"><div className="border border-border rounded-lg px-3 py-2 bg-card flex items-center gap-2 shadow-sm"><div className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" /><span className="text-[10px] font-medium">Saved successfully!</span></div><div className="border border-border rounded-lg px-3 py-2 bg-card flex items-center gap-2 shadow-sm"><div className="h-2 w-2 rounded-full bg-destructive shrink-0" /><span className="text-[10px] font-medium">Something went wrong</span></div></div> },
    { title: "Resizable",                category: "Layout",     description: "Drag-to-resize panel layouts.",                 figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none flex h-12 w-full rounded border border-border overflow-hidden"><div className="flex-1 flex items-center justify-center bg-muted/30 text-[9px] text-muted-foreground">Panel A</div><div className="w-px bg-border relative flex items-center justify-center"><div className="w-1 h-4 rounded bg-border" /></div><div className="flex-1 flex items-center justify-center bg-muted/30 text-[9px] text-muted-foreground">Panel B</div></div> },
    { title: "Chart",                    category: "Data",       description: "Data visualisation with brand tokens.",         figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none flex items-end gap-1 h-12 w-full px-1"><div className="flex-1 bg-primary/80 rounded-sm" style={{height:"40%"}} /><div className="flex-1 bg-primary/80 rounded-sm" style={{height:"60%"}} /><div className="flex-1 bg-primary rounded-sm" style={{height:"100%"}} /><div className="flex-1 bg-primary/80 rounded-sm" style={{height:"75%"}} /><div className="flex-1 bg-primary/80 rounded-sm" style={{height:"50%"}} /></div> },
    { title: "Sidebar",                  category: "Layout",     description: "Collapsible navigation sidebar.",               figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none flex h-14 w-full rounded border border-border overflow-hidden"><div className="w-16 bg-sidebar p-2 space-y-1.5"><div className="h-2 w-8 rounded bg-sidebar-foreground/20" /><div className="h-2 w-6 rounded bg-sidebar-primary" /><div className="h-2 w-7 rounded bg-sidebar-foreground/20" /></div><div className="flex-1 bg-background p-2"><div className="h-2 w-20 rounded bg-muted mb-1.5" /><div className="h-2 w-16 rounded bg-muted" /></div></div> },
    { title: "Page Sections",            category: "Layout",     description: "Hero, page, and section header patterns.",      figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none w-full space-y-1.5 px-1"><div className="space-y-1"><div className="h-2.5 w-16 rounded bg-foreground/80" /><div className="h-1.5 w-28 rounded bg-muted-foreground/30" /></div><div className="flex gap-1 mt-1"><div className="h-4 w-10 rounded-sm bg-primary" /><div className="h-4 w-10 rounded-sm border border-border" /></div></div> },
    { title: "Spinner",                  category: "Feedback",   description: "Animated loading indicator.",                   figmaUrl: FIGMA_FILE, preview: <div className="flex items-center gap-3 pointer-events-none select-none"><div className="h-4 w-4 rounded-full border-2 border-primary border-t-transparent animate-spin" /><div className="h-6 w-6 rounded-full border-2 border-primary border-t-transparent animate-spin" /><div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" /></div> },
    { title: "Kbd",                      category: "Display",    description: "Keyboard key display.",                         figmaUrl: FIGMA_FILE, preview: <div className="flex items-center gap-1 pointer-events-none select-none"><span className="inline-flex items-center rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono shadow-sm">⌘</span><span className="text-[10px] text-muted-foreground">+</span><span className="inline-flex items-center rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono shadow-sm">K</span></div> },
    { title: "Native Select",            category: "Forms",      description: "Browser-native select element.",                figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none w-full h-7 rounded-md border border-input bg-background px-2 flex items-center justify-between"><span className="text-[10px] text-muted-foreground">Pick an option</span><span className="text-[10px] text-muted-foreground">▾</span></div> },
    { title: "Input Group",              category: "Forms",      description: "Input with prefix / suffix addons.",            figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none flex h-7 w-full rounded-md border border-input overflow-hidden"><div className="px-2 flex items-center bg-muted border-r border-input"><Search className="h-3 w-3 text-muted-foreground" /></div><div className="flex-1 px-2 flex items-center bg-background"><span className="text-[10px] text-muted-foreground">Search…</span></div></div> },
    { title: "Button Group",             category: "Actions",    description: "Segmented strip of attached buttons.",          figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none flex"><div className="h-7 px-2.5 border border-r-0 border-input rounded-l-md bg-background flex items-center text-[10px]">Left</div><div className="h-7 px-2.5 border border-input bg-muted flex items-center text-[10px] font-medium">Center</div><div className="h-7 px-2.5 border border-l-0 border-input rounded-r-md bg-background flex items-center text-[10px]">Right</div></div> },
    { title: "Empty",                    category: "Display",    description: "Zero-state placeholder.",                       figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none flex flex-col items-center justify-center gap-1.5 py-2"><div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center"><FileText className="h-4 w-4 text-muted-foreground" /></div><p className="text-[10px] font-medium">No files found</p><p className="text-[9px] text-muted-foreground">Upload to get started</p></div> },
    { title: "Field",                    category: "Forms",      description: "Form field with label, hint, and error.",       figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none space-y-1 w-full"><p className="text-[10px] font-medium">Email</p><div className="h-7 rounded-md border border-input bg-background px-2 flex items-center"><span className="text-[10px] text-muted-foreground">you@example.com</span></div><p className="text-[9px] text-muted-foreground">We'll never share your email.</p></div> },
    { title: "Item",                     category: "Display",    description: "Flexible list row primitive.",                  figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none divide-y divide-border rounded-md border border-border w-full overflow-hidden"><div className="flex items-center gap-2 px-2 py-1.5"><div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center text-[8px] text-primary-foreground font-bold shrink-0">EL</div><div className="flex-1 min-w-0"><p className="text-[10px] font-medium truncate">Erhan Lammar</p><p className="text-[9px] text-muted-foreground">Designer</p></div><Badge className="text-[8px] h-3.5 px-1">Admin</Badge></div></div> },
    { title: "Avatar",                   category: "Display",    description: "User profile image with initials fallback.",    figmaUrl: FIGMA_FILE, preview: <div className="flex items-center gap-2 pointer-events-none select-none"><div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground shrink-0">EL</div><div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground shrink-0">JD</div><div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center text-[9px] font-bold text-secondary-foreground shrink-0">SL</div></div> },
    { title: "Dialogs",                  category: "Overlay",    description: "Modal dialogs and destructive confirmation alerts.", figmaUrl: "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/SL-Design-system?node-id=213-99&t=pE3oUPtM10E3HlQL-1", preview: <div className="pointer-events-none select-none border border-border rounded-lg p-3 w-full bg-card shadow-sm space-y-2"><p className="text-[10px] font-semibold">Edit profile</p><div className="h-5 rounded border border-input bg-background px-2 flex items-center"><span className="text-[9px] text-muted-foreground">Display name</span></div><div className="flex gap-1.5 justify-end"><div className="h-5 px-2 rounded border border-border flex items-center"><span className="text-[9px]">Cancel</span></div><div className="h-5 px-2 rounded bg-primary flex items-center"><span className="text-[9px] text-primary-foreground">Save</span></div></div></div> },
    { title: "Dropdown Menu",            category: "Overlay",    description: "Context menus and action dropdowns.",           figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none w-full"><div className="border border-border rounded-md p-1 bg-popover shadow-sm space-y-0.5 w-28"><div className="rounded px-2 py-0.5 bg-accent text-[9px]">Profile</div><div className="rounded px-2 py-0.5 text-[9px] text-muted-foreground">Settings</div><div className="h-px bg-border my-0.5" /><div className="rounded px-2 py-0.5 text-[9px] text-destructive">Log out</div></div></div> },
    { title: "Tabs",                     category: "Navigation", description: "Tab panels for switching between views.",       figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none w-full space-y-2"><div className="flex gap-0 border-b border-border"><span className="text-[9px] font-semibold border-b-2 border-primary pb-1 px-2 -mb-px">Account</span><span className="text-[9px] text-muted-foreground pb-1 px-2">Password</span><span className="text-[9px] text-muted-foreground pb-1 px-2">Settings</span></div><div className="space-y-1 pt-1"><div className="h-1.5 w-20 rounded bg-muted" /><div className="h-1.5 w-14 rounded bg-muted" /></div></div> },
    { title: "Tooltip",                  category: "Overlay",    description: "Contextual hints on hover or focus.",           figmaUrl: FIGMA_FILE, preview: <div className="pointer-events-none select-none flex flex-col items-center gap-2"><div className="rounded border border-border bg-popover px-2 py-1 text-[9px] shadow-md font-medium">Add to library</div><div className="h-0 w-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border -mt-0.5" /><div className="h-6 w-6 rounded-md border border-border flex items-center justify-center"><Plus className="h-3 w-3 text-muted-foreground" /></div></div> },
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
                All studiolammar components, pre-themed with studiolammar's brand tokens. Click any component to explore it.
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
                  <div
                    key={c.title}
                    onClick={() => { window.location.hash = "components/" + encodeURIComponent(c.title); }}
                    className="group text-left border border-border rounded-xl overflow-hidden bg-card hover:border-primary/50 hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    {/* Preview area */}
                    <div className="h-32 bg-muted/30 border-b border-border flex items-center justify-center px-6">
                      {c.preview}
                    </div>
                    {/* Label area */}
                    <div className="px-4 py-3 flex items-center justify-between">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold group-hover:text-primary transition-colors">{c.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{c.description}</p>
                      </div>
                      <div className="flex items-center gap-1 shrink-0 ml-2">
                        {c.figmaUrl && (
                          <a
                            href={c.figmaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            title="View in Figma"
                            className="p-1 rounded text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-all"
                          >
                            <FigmaIcon width={12} height={16} />
                          </a>
                        )}
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      )}

      {/* ── Detail view breadcrumb + back ── */}
      {view === "detail" && (() => {
        const meta = componentMeta.find((c) => c.title === selectedComponent);
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <button
                  onClick={() => { window.location.hash = "components"; }}
                  className="hover:text-foreground transition-colors"
                >
                  Components
                </button>
                <span>/</span>
                <span className="text-foreground font-medium">{selectedComponent}</span>
              </div>
              {meta?.figmaUrl && (
                <a
                  href={meta.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground border border-border rounded-md px-2.5 py-1.5 transition-colors hover:border-foreground/30"
                >
                  <FigmaIcon />
                  View in Figma
                </a>
              )}
            </div>
            <button
              onClick={() => { window.location.hash = "components"; }}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              Back to components
            </button>
          </div>
        );
      })()}

      {/* ── All sections (hidden in grid view, filtered to selected in detail view) ── */}
      <div className={view === "grid" ? "hidden" : "space-y-16"}>

      {/* Typography */}
      <Section hidden={selectedComponent !== "Typography"} title="Typography" description="Sharphy — headings to captions." code={`import { cn } from "@/lib/utils"

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
          <TabsContent value="variants" className="pt-4 space-y-5">
            {/* Icon controls */}
            {(() => {
              const btnIcons: Record<string, React.ElementType> = { ArrowRight, Zap, Star, Check, Plus, Bell, Settings, Search };
              const iconPicker = (
                label: string,
                active: string | null,
                setActive: (v: string | null) => void
              ) => (
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">{label}</p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <button
                      onClick={() => setActive(null)}
                      className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${!active ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"}`}>
                      None
                    </button>
                    {(["ArrowRight","Zap","Star","Check","Plus","Bell","Settings","Search"] as const).map((name) => {
                      const Ic = btnIcons[name];
                      return (
                        <button key={name} onClick={() => setActive(active === name ? null : name)} title={name}
                          className={`h-7 w-7 rounded-full border flex items-center justify-center transition-colors ${active === name ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"}`}>
                          <Ic className="h-3.5 w-3.5" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
              const BtnLeading  = btnLeadingIcon  ? btnIcons[btnLeadingIcon]  : null;
              const BtnTrailing = btnTrailingIcon ? btnIcons[btnTrailingIcon] : null;
              return (
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-6 items-start">
                    {iconPicker("Leading icon",  btnLeadingIcon,  setBtnLeadingIcon)}
                    {iconPicker("Trailing icon", btnTrailingIcon, setBtnTrailingIcon)}
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex flex-wrap gap-3">
                    {(["default","secondary","accent","destructive","outline","ghost","link"] as const).map((v) => (
                      <Button key={v} variant={v}>
                        {BtnLeading  && <BtnLeading  className="h-4 w-4" />}
                        {v.charAt(0).toUpperCase() + v.slice(1)}
                        {BtnTrailing && <BtnTrailing className="h-4 w-4" />}
                      </Button>
                    ))}
                  </div>
                </div>
              );
            })()}
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
              <Button size="sm" variant={sizeTabVariant} onClick={() => setButtonActiveSize("sm")}>Small</Button>
              <Button variant={sizeTabVariant} onClick={() => setButtonActiveSize("default")}>Default</Button>
              <Button size="lg" variant={sizeTabVariant} onClick={() => setButtonActiveSize("lg")}>Large</Button>
              <Button size="icon" variant={sizeTabVariant} onClick={() => setButtonActiveSize("icon")}><Bell className="h-4 w-4" /></Button>
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
          const usedIcons = [...new Set([badgeLeadingIcon, badgeTrailingIcon].filter(Boolean))] as string[];
          const iconImport = usedIcons.length ? `\nimport { ${usedIcons.join(", ")} } from "lucide-react"` : "";
          const iSz = isPill ? "h-4 w-4" : "h-3 w-3";
          const leadJsx  = badgeLeadingIcon  ? `<${badgeLeadingIcon} className="${iSz}" /> ` : "";
          const trailJsx = badgeTrailingIcon ? ` <${badgeTrailingIcon} className="${iSz}" />` : "";
          const pillClass = isPill ? ` className="px-4 py-1.5 text-sm gap-1.5"` : "";
          const clickClass = badgeClickable ? ` cursor-pointer active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 hover:shadow-sm` : "";
          const variants6 = ["default","secondary","accent","success","destructive","outlined","info","warning","neutral"];
          const filledRows = variants6.map((v) =>
            badgeClickable
              ? `      <button className={cn(badgeVariants({ variant: "${v}" }),"${clickClass.trim()}"${isPill ? `,"px-4 py-1.5 text-sm gap-1.5"` : ""})}>${leadJsx}${v.charAt(0).toUpperCase()+v.slice(1)}${trailJsx}</button>`
              : `      <Badge variant="${v}"${pillClass}>${leadJsx}${v.charAt(0).toUpperCase()+v.slice(1)}${trailJsx}</Badge>`
          ).join("\n");
          const outlineRows = variants6.map((v) =>
            badgeClickable
              ? `      <button className={cn(badgeVariants({ variant: "outlined" }),"${clickClass.trim()}"${isPill ? `,"px-4 py-1.5 text-sm gap-1.5"` : ""})}>${leadJsx}${v.charAt(0).toUpperCase()+v.slice(1)}${trailJsx}</button>`
              : `      <Badge variant="outlined"${pillClass}>${leadJsx}${v.charAt(0).toUpperCase()+v.slice(1)}${trailJsx}</Badge>`
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
          const BadgeLeading  = badgeLeadingIcon  ? badgeIcons[badgeLeadingIcon]  : null;
          const BadgeTrailing = badgeTrailingIcon ? badgeIcons[badgeTrailingIcon] : null;
          const isPill = badgeStyle === "pill";
          const variants = [
            { key: "default",     label: "Default" },
            { key: "secondary",   label: "Secondary" },
            { key: "accent",      label: "Accent" },
            { key: "success",     label: "Success" },
            { key: "destructive", label: "Destructive" },
            { key: "outlined",    label: "Outlined" },
            { key: "info",        label: "Info" },
            { key: "warning",     label: "Warning" },
            { key: "neutral",     label: "Neutral" },
          ] as const;

          // Size + radius lookup — badge gets square-ish corners, pill keeps rounded-full
          const sizeLookup = {
            badge: {
              sm: { cls: "!rounded px-1.5 py-px text-[10px] gap-1",     icon: "h-2.5 w-2.5" },
              md: { cls: "!rounded-sm px-2.5 py-0.5 text-xs gap-1",     icon: "h-3 w-3" },
              lg: { cls: "!rounded-md px-4 py-1 text-sm gap-1.5",       icon: "h-3.5 w-3.5" },
            },
            pill: {
              sm: { cls: "px-3 py-0.5 text-xs gap-1",                  icon: "h-3 w-3" },
              md: { cls: "px-4 py-1.5 text-sm gap-1.5",                icon: "h-4 w-4" },
              lg: { cls: "px-5 py-1 text-sm gap-1.5",                  icon: "h-4 w-4" },
            },
          };
          const { cls: sizeClass, icon: iconSize } = sizeLookup[badgeStyle][badgeSize];

          // Outlined variant overrides — transparent bg + colored border/text
          const outlineStyles: Record<string, string> = {
            default:     "bg-transparent border-primary/60 text-primary",
            secondary:   "bg-transparent border-secondary text-secondary-foreground dark:text-secondary",
            accent:      "bg-transparent border-accent text-accent-foreground",
            success:     "bg-transparent border-intense-400/70 text-intense-400",
            destructive: "bg-transparent border-destructive/60 text-destructive",
            outlined:    "bg-transparent border-border text-muted-foreground",
            info:        "bg-transparent border-sky-400/70 text-sky-600 dark:text-sky-400",
            warning:     "bg-transparent border-amber-400/70 text-amber-600 dark:text-amber-400",
            neutral:     "bg-transparent border-border text-muted-foreground",
          };

          // Hover tint for outlined clickable — lowest opacity of each variant's colour
          const outlineHoverStyles: Record<string, string> = {
            default:     "hover:bg-primary/10",
            secondary:   "hover:bg-secondary/20",
            accent:      "hover:bg-accent/15",
            success:     "hover:bg-intense-400/10",
            destructive: "hover:bg-destructive/10",
            outlined:    "hover:bg-muted",
            info:        "hover:bg-sky-50",
            warning:     "hover:bg-amber-50",
            neutral:     "hover:bg-muted",
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

                {/* Leading icon picker */}
                {(() => {
                  const iconRow = (label: string, active: string | null, setActive: (v: string | null) => void) => (
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">{label}</p>
                      <div className="flex flex-wrap items-center gap-1.5">
                        <button onClick={() => setActive(null)}
                          className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${!active ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"}`}>
                          None
                        </button>
                        {(["Check","Star","Zap","Shield","Tag","Info","AlertCircle","X"] as const).map((name) => {
                          const Ic = badgeIcons[name];
                          return (
                            <button key={name} onClick={() => setActive(active === name ? null : name)} title={name}
                              className={`h-7 w-7 rounded-full border flex items-center justify-center transition-colors ${active === name ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"}`}>
                              <Ic className="h-3.5 w-3.5" />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                  return (
                    <>
                      {iconRow("Leading icon",  badgeLeadingIcon,  setBadgeLeadingIcon)}
                      {iconRow("Trailing icon", badgeTrailingIcon, setBadgeTrailingIcon)}
                    </>
                  );
                })()}
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
                          {BadgeLeading  && <BadgeLeading  className={iconSize} />}
                          {label}
                          {BadgeTrailing && <BadgeTrailing className={iconSize} />}
                        </button>
                      ) : (
                        <Badge key={key} variant={key} className={cn(sizeClass, staticClass)}>
                          {BadgeLeading  && <BadgeLeading  className={iconSize} />}
                          {label}
                          {BadgeTrailing && <BadgeTrailing className={iconSize} />}
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
                        <button key={key} className={cn(badgeVariants({ variant: "outlined" }), sizeClass, outlineStyles[key], outlineHoverStyles[key], clickableClassOutline)}>
                          {BadgeLeading  && <BadgeLeading  className={iconSize} />}
                          {label}
                          {BadgeTrailing && <BadgeTrailing className={iconSize} />}
                        </button>
                      ) : (
                        <Badge key={key} variant="outlined" className={cn(sizeClass, outlineStyles[key], staticClass)}>
                          {BadgeLeading  && <BadgeLeading  className={iconSize} />}
                          {label}
                          {BadgeTrailing && <BadgeTrailing className={iconSize} />}
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
        <Button size="sm" variant="ghost">Cancel</Button>
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
              <Badge variant="solid" className="w-fit">Popular</Badge>
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
              <Button variant="secondary" className="w-full">Get started</Button>
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

      {/* Toggle Switch */}
      <Section hidden={selectedComponent !== "Toggle Switch"} title="Toggle Switch" description="On/off control for boolean settings." code={`import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function SwitchDemo() {
  return (
    <div className="flex items-center gap-3">
      <Switch id="demo" />
      <Label htmlFor="demo">Enable notifications</Label>
    </div>
  )
}`}>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground">Label position</p>
            <div className="flex items-center rounded-md border border-border bg-muted p-0.5 w-fit">
              {(["leading","trailing"] as const).map((pos) => (
                <button key={pos} onClick={() => setSwitchLabelPosition(pos)}
                  className={`px-3 py-1 text-xs rounded font-medium transition-colors capitalize ${switchLabelPosition === pos ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                  {pos}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 max-w-2xl">
          <div className="space-y-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">States</p>
            <div className="space-y-4">
              {[
                { id: "sw-off",  label: "Off",      checked: false,  disabled: false },
                { id: "sw-on",   label: "On",       checked: true,   disabled: false },
                { id: "sw-doff", label: "Disabled off", checked: false, disabled: true },
                { id: "sw-don",  label: "Disabled on",  checked: true,  disabled: true },
              ].map(({ id, label, checked, disabled }) => (
                <div key={id} className="flex items-center gap-3">
                  {switchLabelPosition === "leading" && (
                    <Label htmlFor={id} className={disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}>{label}</Label>
                  )}
                  <Switch id={id} defaultChecked={checked} disabled={disabled} />
                  {switchLabelPosition === "trailing" && (
                    <Label htmlFor={id} className={disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}>{label}</Label>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">In context</p>
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Manage your alert preferences.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { id: "sw-email", label: "Email notifications", defaultChecked: true  },
                  { id: "sw-sms",   label: "SMS alerts",          defaultChecked: false },
                  { id: "sw-push",  label: "Push notifications",  defaultChecked: true  },
                ].map(({ id, label, defaultChecked }) => (
                  <div key={id} className="flex items-center justify-between">
                    <Label htmlFor={id} className="cursor-pointer">{label}</Label>
                    <Switch id={id} defaultChecked={defaultChecked} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </Section>

      {/* Input */}
      <Section hidden={selectedComponent !== "Input"} title="Input" description="All input types with full state coverage." code={`import { useState } from "react"
import { Search, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarPicker } from "@/components/ui/calendar"

export function InputDemo() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-4 max-w-sm">
      <div className="space-y-1.5">
        <Label htmlFor="text">Text</Label>
        <Input id="text" type="text" placeholder="Enter text…" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="••••••••" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="search">Search</Label>
        <div className="relative">
          <Input id="search" type="search" placeholder="Search…" className="pr-9" />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="date">Date</Label>
        <Popover open={open} onOpenChange={setOpen}>
          <div className="relative">
            <PopoverTrigger asChild>
              <button type="button" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground hover:text-foreground transition-colors z-10">
                <Calendar className="h-4 w-4" />
              </button>
            </PopoverTrigger>
            <Input
              id="date"
              type="text"
              readOnly
              placeholder="Pick a date…"
              className="pl-9"
              value={date ? date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : ""}
            />
          </div>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarPicker mode="single" selected={date} onSelect={(d) => { setDate(d); setOpen(false) }} />
          </PopoverContent>
        </Popover>
      </div>
      <Input placeholder="Disabled" disabled />
      <Input defaultValue="Error state" className="border-destructive focus-visible:ring-destructive" />
    </div>
  )
}`}>
        <div className="grid gap-8 sm:grid-cols-2 max-w-2xl">
          <div className="space-y-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Types</p>
            <div className="space-y-3">
              {([
                { id: "inp-text",     type: "text",     label: "Text",     placeholder: "Enter text…" },
                { id: "inp-email",    type: "email",    label: "Email",    placeholder: "you@example.com" },
                { id: "inp-password", type: "password", label: "Password", placeholder: "••••••••" },
              ] as const).map(({ id, type, label, placeholder }) => (
                <div key={id} className="space-y-1.5">
                  <Label htmlFor={id}>{label}</Label>
                  <Input id={id} type={type} placeholder={placeholder} />
                </div>
              ))}
              <div className="space-y-1.5">
                <Label htmlFor="inp-search">Search</Label>
                <div className="relative">
                  <Input id="inp-search" type="search" placeholder="Search…" className="pr-9" />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="inp-date">Date</Label>
                <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                  <div className="relative">
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-10"
                        aria-label="Open date picker"
                      >
                        <CalendarLucide className="h-4 w-4" />
                      </button>
                    </PopoverTrigger>
                    <Input
                      id="inp-date"
                      type="text"
                      readOnly
                      placeholder="Pick a date…"
                      className="pl-9"
                      value={datePickerDate ? datePickerDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : ""}
                    />
                  </div>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={datePickerDate}
                      onSelect={(d) => { setDatePickerDate(d); setDatePickerOpen(false); }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              {([
                { id: "inp-number",   type: "number",   label: "Number",   placeholder: "0" },
                { id: "inp-url",      type: "url",      label: "URL",      placeholder: "https://…" },
              ] as const).map(({ id, type, label, placeholder }) => (
                <div key={id} className="space-y-1.5">
                  <Label htmlFor={id}>{label}</Label>
                  <Input id={id} type={type} placeholder={placeholder} />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">States</p>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label htmlFor="inp-default">Default</Label>
                <Input id="inp-default" placeholder="Default input" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="inp-filled">Filled</Label>
                <Input id="inp-filled" defaultValue="studiolammar@gmail.com" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="inp-disabled">Disabled</Label>
                <Input id="inp-disabled" placeholder="Disabled" disabled />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="inp-error" className="text-destructive">Error</Label>
                <Input id="inp-error" defaultValue="invalid-email" className="border-destructive focus-visible:ring-destructive" />
                <p className="text-xs text-destructive">Please enter a valid email address.</p>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="inp-readonly">Read-only</Label>
                <Input id="inp-readonly" defaultValue="Read-only value" readOnly />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Select */}
      <Section hidden={selectedComponent !== "Select"} title="Select" description="Dropdown selection with keyboard navigation and search." code={`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function SelectDemo() {
  return (
    <div className="space-y-4 max-w-sm">
      <div className="space-y-1.5">
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
    </div>
  )
}`}>
        <div className="grid gap-8 sm:grid-cols-2 max-w-2xl">
          <div className="space-y-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Variants</p>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label htmlFor="sel-role">Role</Label>
                <Select>
                  <SelectTrigger id="sel-role">
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
              <div className="space-y-1.5">
                <Label htmlFor="sel-country">Country</Label>
                <Select>
                  <SelectTrigger id="sel-country">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nl">Netherlands</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">States</p>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label>Default (empty)</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">Option A</SelectItem>
                    <SelectItem value="b">Option B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>With value</Label>
                <Select defaultValue="designer">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="developer">Developer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Disabled</Label>
                <Select disabled>
                  <SelectTrigger>
                    <SelectValue placeholder="Disabled" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">Option A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Textarea */}
      <Section hidden={selectedComponent !== "Textarea"} title="Textarea" description="Multi-line text input with resize and state variants." code={`import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function TextareaDemo() {
  return (
    <div className="space-y-4 max-w-sm">
      <div className="space-y-1.5">
        <Label htmlFor="ta-default">Default</Label>
        <Textarea id="ta-default" placeholder="Enter your message…" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="ta-disabled">Disabled</Label>
        <Textarea id="ta-disabled" placeholder="Disabled" disabled />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="ta-error" className="text-destructive">Error</Label>
        <Textarea id="ta-error" defaultValue="Too short." className="border-destructive focus-visible:ring-destructive" />
        <p className="text-xs text-destructive">Must be at least 20 characters.</p>
      </div>
    </div>
  )
}`}>
        <div className="grid gap-8 sm:grid-cols-2 max-w-2xl">
          <div className="space-y-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">States</p>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="ta-default">Default</Label>
                <Textarea id="ta-default" placeholder="Enter your message…" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="ta-filled">Filled</Label>
                <Textarea id="ta-filled" defaultValue="This is some existing content that has already been entered by the user." />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="ta-disabled">Disabled</Label>
                <Textarea id="ta-disabled" placeholder="Cannot edit this" disabled />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="ta-readonly">Read-only</Label>
                <Textarea id="ta-readonly" defaultValue="Read-only content" readOnly />
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Variants</p>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="ta-error" className="text-destructive">Error</Label>
                <Textarea id="ta-error" defaultValue="Too short." className="border-destructive focus-visible:ring-destructive" />
                <p className="text-xs text-destructive">Must be at least 20 characters.</p>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="ta-count">With character count</Label>
                <TextareaWithCount />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="ta-noresize">No resize</Label>
                <Textarea id="ta-noresize" placeholder="This textarea cannot be resized." className="resize-none" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Checkbox */}
      <Section hidden={selectedComponent !== "Checkbox"} title="Checkbox" description="Binary selection control with checked, unchecked, and indeterminate states." code={`import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CheckboxDemo() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Checkbox id="accept" />
        <Label htmlFor="accept">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checked" defaultChecked />
        <Label htmlFor="checked">Checked by default</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled" className="opacity-50 cursor-not-allowed">Disabled</Label>
      </div>
    </div>
  )
}`}>
        <div className="grid gap-8 sm:grid-cols-2 max-w-2xl">
          <div className="space-y-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">States</p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox id="cb-unchecked" />
                <Label htmlFor="cb-unchecked" className="cursor-pointer">Unchecked</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="cb-checked" defaultChecked />
                <Label htmlFor="cb-checked" className="cursor-pointer">Checked</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="cb-indeterminate" checked="indeterminate" />
                <Label htmlFor="cb-indeterminate" className="cursor-pointer">Indeterminate</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="cb-disabled-off" disabled />
                <Label htmlFor="cb-disabled-off" className="opacity-50 cursor-not-allowed">Disabled unchecked</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="cb-disabled-on" disabled defaultChecked />
                <Label htmlFor="cb-disabled-on" className="opacity-50 cursor-not-allowed">Disabled checked</Label>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">In context</p>
            <Card>
              <CardHeader>
                <CardTitle>Notification preferences</CardTitle>
                <CardDescription>Choose what updates you'd like to receive.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { id: "cb-email",    label: "Email updates",    defaultChecked: true  },
                  { id: "cb-sms",      label: "SMS alerts",       defaultChecked: false },
                  { id: "cb-push",     label: "Push notifications", defaultChecked: true },
                  { id: "cb-monthly",  label: "Monthly digest",   defaultChecked: false },
                ].map(({ id, label, defaultChecked }) => (
                  <div key={id} className="flex items-center gap-2">
                    <Checkbox id={id} defaultChecked={defaultChecked} />
                    <Label htmlFor={id} className="cursor-pointer">{label}</Label>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Alerts */}
      <Section hidden={selectedComponent !== "Alerts"} title="Alerts" description="Five semantic variants — with icon, dismissable, and actions." code={`import { Alert, AlertActions, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, Check, Bell, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

// Dismissable
const [visible, setVisible] = React.useState(true)

{visible && (
  <Alert onDismiss={() => setVisible(false)}>
    <Info className="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>You can add components using the CLI.</AlertDescription>
  </Alert>
)}

// With actions
<Alert variant="informative">
  <Info className="h-4 w-4" />
  <AlertTitle>New feature available</AlertTitle>
  <AlertDescription>Check out the latest updates in your dashboard.</AlertDescription>
  <AlertActions>
    <Button size="sm" variant="ghost">Learn more</Button>
    <Button size="sm">Got it</Button>
  </AlertActions>
</Alert>`}>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">With icon</p>
            <div className="space-y-3">
              <Alert><Info className="h-4 w-4" /><AlertTitle>Heads up!</AlertTitle><AlertDescription>You can add components to your app using the CLI.</AlertDescription></Alert>
              <Alert variant="informative"><Info className="h-4 w-4" /><AlertTitle>New feature available</AlertTitle><AlertDescription>Check out the latest updates in your dashboard.</AlertDescription></Alert>
              <Alert variant="success"><Check className="h-4 w-4" /><AlertTitle>All systems operational</AlertTitle><AlertDescription>Everything is running smoothly.</AlertDescription></Alert>
              <Alert variant="warning"><Bell className="h-4 w-4" /><AlertTitle>Approaching limit</AlertTitle><AlertDescription>You have used 80% of your storage quota.</AlertDescription></Alert>
              <Alert variant="destructive"><AlertCircle className="h-4 w-4" /><AlertTitle>Deployment failed</AlertTitle><AlertDescription>Check your configuration and try again.</AlertDescription></Alert>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Without icon</p>
            <div className="space-y-3">
              <Alert><AlertTitle>Heads up!</AlertTitle><AlertDescription>You can add components to your app using the CLI.</AlertDescription></Alert>
              <Alert variant="informative"><AlertTitle>New feature available</AlertTitle><AlertDescription>Check out the latest updates in your dashboard.</AlertDescription></Alert>
              <Alert variant="success"><AlertTitle>All systems operational</AlertTitle><AlertDescription>Everything is running smoothly.</AlertDescription></Alert>
              <Alert variant="warning"><AlertTitle>Approaching limit</AlertTitle><AlertDescription>You have used 80% of your storage quota.</AlertDescription></Alert>
              <Alert variant="destructive"><AlertTitle>Deployment failed</AlertTitle><AlertDescription>Check your configuration and try again.</AlertDescription></Alert>
            </div>
          </div>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Dismissable</p>
              {alertsDismissed.size > 0 && (
                <button onClick={() => setAlertsDismissed(new Set())} className="text-[10px] text-muted-foreground hover:text-foreground transition-colors">Reset</button>
              )}
            </div>
            <div className="space-y-3">
              {!alertsDismissed.has("d-default")      && <Alert onDismiss={() => dismissAlert("d-default")}><Info className="h-4 w-4" /><AlertTitle>Heads up!</AlertTitle><AlertDescription>You can add components to your app using the CLI.</AlertDescription></Alert>}
              {!alertsDismissed.has("d-informative")  && <Alert variant="informative" onDismiss={() => dismissAlert("d-informative")}><Info className="h-4 w-4" /><AlertTitle>New feature available</AlertTitle><AlertDescription>Check out the latest updates in your dashboard.</AlertDescription></Alert>}
              {!alertsDismissed.has("d-success")      && <Alert variant="success" onDismiss={() => dismissAlert("d-success")}><Check className="h-4 w-4" /><AlertTitle>All systems operational</AlertTitle><AlertDescription>Everything is running smoothly.</AlertDescription></Alert>}
              {!alertsDismissed.has("d-warning")      && <Alert variant="warning" onDismiss={() => dismissAlert("d-warning")}><Bell className="h-4 w-4" /><AlertTitle>Approaching limit</AlertTitle><AlertDescription>You have used 80% of your storage quota.</AlertDescription></Alert>}
              {!alertsDismissed.has("d-destructive")  && <Alert variant="destructive" onDismiss={() => dismissAlert("d-destructive")}><AlertCircle className="h-4 w-4" /><AlertTitle>Deployment failed</AlertTitle><AlertDescription>Check your configuration and try again.</AlertDescription></Alert>}
              {alertsDismissed.size === 5 && <p className="text-xs text-muted-foreground italic">All dismissed — hit Reset to restore.</p>}
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">With actions</p>
            <div className="space-y-3">
              <Alert><Info className="h-4 w-4" /><AlertTitle>Heads up!</AlertTitle><AlertDescription>You can add components to your app.</AlertDescription><AlertActions><Button size="sm" variant="ghost">Learn more</Button></AlertActions></Alert>
              <Alert variant="informative"><Info className="h-4 w-4" /><AlertTitle>New feature available</AlertTitle><AlertDescription>Check out the latest updates in your dashboard.</AlertDescription><AlertActions><Button size="sm" variant="ghost">Learn more</Button><Button size="sm">Got it</Button></AlertActions></Alert>
              <Alert variant="success"><Check className="h-4 w-4" /><AlertTitle>All systems operational</AlertTitle><AlertDescription>Everything is running smoothly.</AlertDescription><AlertActions><Button size="sm" variant="ghost">View status</Button><Button size="sm">Resolve</Button></AlertActions></Alert>
              <Alert variant="warning"><Bell className="h-4 w-4" /><AlertTitle>Approaching limit</AlertTitle><AlertDescription>You have used 80% of your storage quota.</AlertDescription><AlertActions><Button size="sm" variant="ghost">Manage storage</Button><Button size="sm">Upgrade</Button></AlertActions></Alert>
              <Alert variant="destructive"><AlertCircle className="h-4 w-4" /><AlertTitle>Deployment failed</AlertTitle><AlertDescription>Check your configuration and try again.</AlertDescription><AlertActions><Button size="sm" variant="ghost">View logs</Button><Button size="sm">Retry</Button></AlertActions></Alert>
            </div>
          </div>
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
            { value: "item-1", trigger: "What is SL Design System?", content: "SL Design System is a fully-themed component library built on Radix UI primitives, tailored with brand tokens for Forest Green, Golden Yellow, and Mint Teal." },
            { value: "item-2", trigger: "Which typefaces are included?", content: "Sharphy is the primary display and body typeface across all weights (Thin to Extrabold). Space Mono handles monospace code snippets." },
            { value: "item-3", trigger: "Is dark mode supported?", content: "Yes — every component and token adapts seamlessly between light and dark modes. Toggle it with the sun/moon button in the header." },
          ].map(({ value, trigger, content }) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger>{trigger}</AccordionTrigger>
              <AccordionContent>{content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
                  <SheetTitle>studiolammar Panel</SheetTitle>
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
      {/* Radio Group */}
      <Section hidden={selectedComponent !== "Radio Group"} title="Radio Group" description="Single-selection controls with full keyboard navigation." code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="r1" />
        <Label htmlFor="r1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="r2" />
        <Label htmlFor="r2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="r3" />
        <Label htmlFor="r3">Option 3</Label>
      </div>
    </RadioGroup>
  )
}`}>
        <div className="space-y-10">
          <div className="space-y-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Radio Button</p>
            <div className="flex flex-wrap gap-8">
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Unselected</p>
                <RadioGroup>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="rb-solo-1" id="rb-solo-1" />
                    <Label htmlFor="rb-solo-1" className="cursor-pointer">Label</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Selected</p>
                <RadioGroup defaultValue="rb-solo-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="rb-solo-2" id="rb-solo-2" />
                    <Label htmlFor="rb-solo-2" className="cursor-pointer">Label</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Disabled unselected</p>
                <RadioGroup disabled>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="rb-solo-3" id="rb-solo-3" />
                    <Label htmlFor="rb-solo-3" className="opacity-50 cursor-not-allowed">Label</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Disabled selected</p>
                <RadioGroup disabled defaultValue="rb-solo-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="rb-solo-4" id="rb-solo-4" />
                    <Label htmlFor="rb-solo-4" className="opacity-50 cursor-not-allowed">Label</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 max-w-2xl">
          <div className="space-y-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">States</p>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Default (unselected)</p>
                <RadioGroup>
                  {["Option A", "Option B", "Option C"].map((label, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <RadioGroupItem value={`a${i}`} id={`rg-a${i}`} />
                      <Label htmlFor={`rg-a${i}`} className="cursor-pointer">{label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">With selection</p>
                <RadioGroup defaultValue="rg-b1">
                  {[
                    { id: "rg-b0", label: "Option A" },
                    { id: "rg-b1", label: "Option B (selected)" },
                    { id: "rg-b2", label: "Option C" },
                  ].map(({ id, label }) => (
                    <div key={id} className="flex items-center gap-2">
                      <RadioGroupItem value={id} id={id} />
                      <Label htmlFor={id} className="cursor-pointer">{label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Disabled</p>
                <RadioGroup disabled defaultValue="rg-c0">
                  {[
                    { id: "rg-c0", label: "Option A" },
                    { id: "rg-c1", label: "Option B" },
                  ].map(({ id, label }) => (
                    <div key={id} className="flex items-center gap-2">
                      <RadioGroupItem value={id} id={id} />
                      <Label htmlFor={id} className="opacity-50 cursor-not-allowed">{label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">In context</p>
            <Card>
              <CardHeader>
                <CardTitle>Subscription plan</CardTitle>
                <CardDescription>Choose the plan that fits your needs.</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={radioValue} onValueChange={setRadioValue} className="space-y-1">
                  {[
                    { id: "option-1", label: "Forest Plan",  price: "$29/mo" },
                    { id: "option-2", label: "Golden Plan",  price: "$79/mo" },
                    { id: "option-3", label: "Enterprise",   price: "Custom" },
                  ].map(({ id, label, price }) => (
                    <div key={id} className="flex items-center justify-between rounded-md border border-border px-3 py-2 hover:bg-muted/40 transition-colors">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value={id} id={id} />
                        <Label htmlFor={id} className="cursor-pointer font-medium">{label}</Label>
                      </div>
                      <span className="text-xs text-muted-foreground">{price}</span>
                    </div>
                  ))}
                </RadioGroup>
                <p className="text-xs text-muted-foreground mt-3">Selected: {radioValue}</p>
              </CardContent>
            </Card>
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
                <Button variant="link">@studiolammar_design</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-72">
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">PD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">SL Design System</h4>
                    <p className="text-xs text-muted-foreground">Open-source component library built on SL Design System with Forest Green brand tokens.</p>
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
                        { title: "Introduction", href: "#", description: "Learn about the studiolammar design system." },
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
                <BreadcrumbItem><BreadcrumbLink href="#">studiolammar</BreadcrumbLink></BreadcrumbItem>
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
          <Button variant="ghost" onClick={() => toast.info("New version available", { description: "SL Design System v1.1.0 is out." })}>Info</Button>
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
                      <Zap className="h-4 w-4" /><span>studiolammar</span>
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
              <ItemTitle>studiolammar</ItemTitle>
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
              <ItemTitle>SL Design System</ItemTitle>
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

      {/* Dialogs */}
      <Section hidden={selectedComponent !== "Dialogs"} title="Dialogs" description="Modal dialogs and destructive confirmation alerts — always visible." code={`// Dialog (form)
import {
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
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Input id="role" defaultValue="UI Designer" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Alert Dialog (destructive confirmation)
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription,
  AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete project</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete project?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete the project and all its data.
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className={buttonVariants({ variant: "destructive" })}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`}>
        <div className="grid gap-6 lg:grid-cols-2">

          {/* ── Dialog ── */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Dialog</p>
            {/* Scene: blurred page content + overlay + dialog card */}
            <div className="relative rounded-xl overflow-hidden border border-border h-[420px]">
              {/* Ghost page content */}
              <div className="p-8 space-y-3 pointer-events-none select-none" aria-hidden>
                <div className="h-4 w-40 rounded bg-foreground/10" />
                <div className="h-2.5 w-full rounded bg-foreground/5" />
                <div className="h-2.5 w-5/6 rounded bg-foreground/5" />
                <div className="h-2.5 w-4/5 rounded bg-foreground/5" />
                <div className="mt-6 h-3 w-28 rounded bg-foreground/10" />
                <div className="h-2.5 w-full rounded bg-foreground/5" />
                <div className="h-2.5 w-3/4 rounded bg-foreground/5" />
                <div className="mt-4 flex gap-2">
                  <div className="h-7 w-20 rounded-md bg-foreground/10" />
                  <div className="h-7 w-20 rounded-md bg-foreground/10" />
                </div>
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" aria-hidden />
              {/* Dialog card */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="relative w-full max-w-sm border border-border bg-background p-6 shadow-lg rounded-lg grid gap-4">
                  {/* Close button */}
                  <button className="absolute right-4 top-4 opacity-70 pointer-events-none" tabIndex={-1} aria-hidden>
                    <X className="h-4 w-4" />
                  </button>
                  {/* Header */}
                  <div className="flex flex-col space-y-1.5">
                    <p className="text-lg font-semibold leading-none tracking-tight">Edit profile</p>
                    <p className="text-sm text-muted-foreground">Make changes to your profile here. Click save when you're done.</p>
                  </div>
                  {/* Content */}
                  <div className="grid gap-3">
                    <div className="space-y-1.5">
                      <Label htmlFor="sd-name">Name</Label>
                      <Input id="sd-name" defaultValue="Erhan Lammar" readOnly className="pointer-events-none" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="sd-role">Role</Label>
                      <Input id="sd-role" defaultValue="UI Designer" readOnly className="pointer-events-none" />
                    </div>
                  </div>
                  {/* Footer */}
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" className="pointer-events-none" tabIndex={-1}>Cancel</Button>
                    <Button className="pointer-events-none" tabIndex={-1}>Save changes</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Alert Dialog ── */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Alert Dialog</p>
            {/* Scene: page content + heavier overlay + alert card */}
            <div className="relative rounded-xl overflow-hidden border border-border" style={{ minHeight: 340 }}>
              {/* Ghost page content */}
              <div className="p-8 space-y-3 pointer-events-none select-none" aria-hidden>
                <div className="h-4 w-40 rounded bg-foreground/10" />
                <div className="h-2.5 w-full rounded bg-foreground/5" />
                <div className="h-2.5 w-5/6 rounded bg-foreground/5" />
                <div className="h-2.5 w-4/5 rounded bg-foreground/5" />
                <div className="mt-6 h-3 w-28 rounded bg-foreground/10" />
                <div className="h-2.5 w-full rounded bg-foreground/5" />
                <div className="h-2.5 w-3/4 rounded bg-foreground/5" />
                <div className="mt-4 flex gap-2">
                  <div className="h-7 w-20 rounded-md bg-foreground/10" />
                  <div className="h-7 w-20 rounded-md bg-foreground/10" />
                </div>
              </div>
              {/* Heavier overlay — matches bg-black/80 */}
              <div className="absolute inset-0 bg-black/80" aria-hidden />
              {/* Alert Dialog card */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="w-full max-w-sm border border-border bg-background p-6 shadow-lg rounded-lg grid gap-4">
                  {/* Header */}
                  <div className="flex flex-col space-y-2">
                    <p className="text-lg font-semibold">Delete project?</p>
                    <p className="text-sm text-muted-foreground">
                      This will permanently delete "Forest Initiative" and all its data. This action cannot be undone.
                    </p>
                  </div>
                  {/* Footer */}
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" className="pointer-events-none" tabIndex={-1}>Cancel</Button>
                    <Button variant="destructive" className="pointer-events-none" tabIndex={-1}>Delete</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

      {/* Page Sections */}
      <Section hidden={selectedComponent !== "Page Sections"} title="Page Sections" description="Reusable header patterns for pages and content areas." code={`// Hero Header
function HeroHeader() {
  return (
    <div className="border-b border-border pb-14">
      <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-4">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
        <span>v1.0.0</span>
        <span className="text-border">·</span>
        <span>Product name</span>
      </div>
      <h1 className="text-5xl font-extrabold tracking-tight leading-[1.08] max-w-3xl mb-5">
        Your headline<br />
        <span className="text-primary">for your brand.</span>
      </h1>
      <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-8">
        Short description of this product or section.
      </p>
      <div className="flex gap-3 flex-wrap">
        <Button size="lg">Primary action <ArrowRight className="ml-2 h-4 w-4" /></Button>
        <Button size="lg" variant="outline">Secondary</Button>
      </div>
    </div>
  )
}

// Page Header
function PageHeader() {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight">Page title</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Short description of what this page is about.
        </p>
      </div>
      <Button variant="outline" size="sm">Action</Button>
    </div>
  )
}

// Page Header + Search
function PageHeaderSearch() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight">Page title</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Short description of what this page is about.
        </p>
      </div>
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input type="text" placeholder="Search…"
          className="w-full h-9 rounded-md border border-input bg-background pl-9 pr-3 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {["All", "Category A", "Category B", "Category C"].map((cat, i) => (
          <span key={cat} className={\`px-3 py-1 rounded-full text-xs font-medium border \${i === 0 ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground"}\`}>
            {cat}
          </span>
        ))}
      </div>
    </div>
  )
}

// Section Header
function SectionHeader() {
  return (
    <div className="space-y-1 border-b border-border pb-4">
      <h2 className="text-2xl font-semibold tracking-tight">Section title</h2>
      <p className="text-muted-foreground text-sm">Short description of this section.</p>
    </div>
  )
}`}>
        <Tabs defaultValue="hero">
          <TabsList>
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="page">Page</TabsTrigger>
            <TabsTrigger value="search">Page + Search</TabsTrigger>
            <TabsTrigger value="section">Section</TabsTrigger>
          </TabsList>

          {/* Hero */}
          <TabsContent value="hero" className="pt-6 space-y-4">
            <div className="border border-border rounded-xl p-10 bg-card">
              <div className="border-b border-border pb-10">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
                  <span>v1.0.0</span>
                  <span className="text-border">·</span>
                  <span>SL Design System</span>
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight leading-[1.08] max-w-3xl mb-5">
                  The design foundation<br />
                  <span className="text-primary">for your brand.</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-8">
                  Short description of what this product or section is about. Keep it focused and action-oriented.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Button size="lg">Primary action <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  <Button size="lg" variant="outline">Secondary</Button>
                  <Button size="lg" variant="ghost">Ghost</Button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 text-xs font-mono text-muted-foreground border border-border rounded-lg p-4">
              <p>eyebrow · <span className="text-foreground">text-xs font-mono</span></p>
              <p>h1 · <span className="text-foreground">text-5xl font-extrabold tracking-tight</span></p>
              <p>description · <span className="text-foreground">text-lg text-muted-foreground max-w-2xl</span></p>
              <p>separator · <span className="text-foreground">border-b border-border pb-14</span></p>
            </div>
          </TabsContent>

          {/* Page */}
          <TabsContent value="page" className="pt-6 space-y-4">
            <div className="border border-border rounded-xl p-10 bg-card">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <h1 className="text-4xl font-extrabold tracking-tight">Page title</h1>
                  <p className="text-muted-foreground text-lg max-w-2xl">
                    Short description of what this page contains. One or two lines maximum.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-md px-2.5 py-1.5 shrink-0 mt-1">
                  <FigmaIcon />
                  View in Figma
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 text-xs font-mono text-muted-foreground border border-border rounded-lg p-4">
              <p>h1 · <span className="text-foreground">text-4xl font-extrabold tracking-tight</span></p>
              <p>description · <span className="text-foreground">text-lg text-muted-foreground max-w-2xl</span></p>
              <p>layout · <span className="text-foreground">flex items-start justify-between gap-4</span></p>
              <p>action · <span className="text-foreground">optional — Figma link or Button</span></p>
            </div>
          </TabsContent>

          {/* Page + Search */}
          <TabsContent value="search" className="pt-6 space-y-4">
            <div className="border border-border rounded-xl p-10 bg-card">
              <div className="space-y-5">
                <div className="space-y-2">
                  <h1 className="text-4xl font-extrabold tracking-tight">Page title</h1>
                  <p className="text-muted-foreground text-lg max-w-2xl">
                    Short description of what this page contains. One or two lines maximum.
                  </p>
                </div>
                <div className="relative max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  <input type="text" placeholder="Search…" readOnly
                    className="w-full h-9 rounded-md border border-input bg-background pl-9 pr-3 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {["All", "Category A", "Category B", "Category C"].map((cat, i) => (
                    <span key={cat} className={`px-3 py-1 rounded-full text-xs font-medium border ${i === 0 ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground"}`}>
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 text-xs font-mono text-muted-foreground border border-border rounded-lg p-4">
              <p>h1 · <span className="text-foreground">text-4xl font-extrabold tracking-tight</span></p>
              <p>description · <span className="text-foreground">text-lg text-muted-foreground max-w-2xl</span></p>
              <p>search input · <span className="text-foreground">h-9 border border-input pl-9</span></p>
              <p>filter pills · <span className="text-foreground">rounded-full text-xs border</span></p>
            </div>
          </TabsContent>

          {/* Section Header */}
          <TabsContent value="section" className="pt-6 space-y-4">
            <div className="border border-border rounded-xl p-10 bg-card space-y-10">
              <div>
                <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground mb-3">H2 — Section</p>
                <div className="space-y-1 border-b border-border pb-4">
                  <h2 className="text-2xl font-semibold tracking-tight">Section title</h2>
                  <p className="text-muted-foreground text-sm">Short description of this section and what it covers.</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground mb-3">H3 — Sub-section</p>
                <div className="space-y-0.5 border-b border-border pb-4">
                  <h3 className="text-xl font-semibold tracking-tight">Sub-section title</h3>
                  <p className="text-muted-foreground text-sm">Optional one-liner description.</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground mb-3">Group label</p>
                <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Group label</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 text-xs font-mono text-muted-foreground border border-border rounded-lg p-4">
              <p>h2 · <span className="text-foreground">text-2xl font-semibold tracking-tight</span></p>
              <p>h3 · <span className="text-foreground">text-xl font-semibold tracking-tight</span></p>
              <p>group label · <span className="text-foreground">text-xs font-medium tracking-wide uppercase</span></p>
              <p>separator · <span className="text-foreground">border-b border-border pb-4</span></p>
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      </div>{/* end sections wrapper */}

      {/* ── Design specs panel (detail view only) ── */}
      {view === "detail" && (
        <DesignSpecs
          title={selectedComponent}
          context={
            selectedComponent === "Badges"
              ? { size: badgeSize, style: badgeStyle }
              : selectedComponent === "Buttons"
              ? { variant: sizeTabVariant, size: buttonActiveSize }
              : selectedComponent === "Alerts"
              ? { variant: alertVariant }
              : selectedComponent === "Input"
              ? { variant: inputState }
              : selectedComponent === "Select"
              ? { variant: selectState }
              : selectedComponent === "Checkbox"
              ? { variant: checkboxState }
              : selectedComponent === "Radio Group"
              ? { variant: radioState }
              : selectedComponent === "Cards"
              ? { variant: cardVariant }
              : selectedComponent === "Toggle Switch"
              ? { variant: switchState, labelPosition: switchLabelPosition }
              : selectedComponent === "Page Sections"
              ? { variant: pageSectionsVariant }
              : undefined
          }
          controls={
            selectedComponent === "Buttons" ? (
              <div className="flex items-center rounded-md border border-border bg-muted p-0.5 w-fit">
                {(["sm","default","lg","icon"] as const).map((s) => (
                  <button key={s} onClick={() => setButtonActiveSize(s)}
                    className={`px-3 py-1 text-xs rounded font-medium transition-colors ${buttonActiveSize === s ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                    {s === "default" ? "MD" : s.toUpperCase()}
                  </button>
                ))}
              </div>
            ) : selectedComponent === "Cards" ? (
              <div className="flex items-center rounded-md border border-border bg-muted p-0.5 w-fit">
                {(["default","featured","settings"] as const).map((v) => (
                  <button key={v} onClick={() => setCardVariant(v)}
                    className={`px-3 py-1 text-xs rounded font-medium transition-colors ${cardVariant === v ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                    {v === "default" ? "Default" : v === "featured" ? "Inverted" : "Interactive"}
                  </button>
                ))}
              </div>
            ) : selectedComponent === "Toggle Switch" ? (
              <div className="flex items-center rounded-md border border-border bg-muted p-0.5 w-fit">
                {(["off","on","disabled"] as const).map((s) => (
                  <button key={s} onClick={() => setSwitchState(s)}
                    className={`px-3 py-1 text-xs rounded font-medium transition-colors capitalize ${switchState === s ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                    {s}
                  </button>
                ))}
              </div>
            ) : selectedComponent === "Input" ? (
              <div className="flex items-center rounded-md border border-border bg-muted p-0.5 w-fit">
                {(["default","focus","error","disabled"] as const).map((s) => (
                  <button key={s} onClick={() => setInputState(s)}
                    className={`px-3 py-1 text-xs rounded font-medium transition-colors capitalize ${inputState === s ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                    {s}
                  </button>
                ))}
              </div>
            ) : selectedComponent === "Select" ? (
              <div className="flex items-center rounded-md border border-border bg-muted p-0.5 w-fit">
                {(["default","focus","disabled"] as const).map((s) => (
                  <button key={s} onClick={() => setSelectState(s)}
                    className={`px-3 py-1 text-xs rounded font-medium transition-colors capitalize ${selectState === s ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                    {s}
                  </button>
                ))}
              </div>
            ) : selectedComponent === "Checkbox" ? (
              <div className="flex items-center rounded-md border border-border bg-muted p-0.5 w-fit">
                {(["unchecked","checked","indeterminate","disabled"] as const).map((s) => (
                  <button key={s} onClick={() => setCheckboxState(s)}
                    className={`px-3 py-1 text-xs rounded font-medium transition-colors capitalize ${checkboxState === s ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                    {s}
                  </button>
                ))}
              </div>
            ) : selectedComponent === "Radio Group" ? (
              <div className="flex items-center rounded-md border border-border bg-muted p-0.5 w-fit">
                {(["default","selected","disabled"] as const).map((s) => (
                  <button key={s} onClick={() => setRadioState(s)}
                    className={`px-3 py-1 text-xs rounded font-medium transition-colors capitalize ${radioState === s ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                    {s}
                  </button>
                ))}
              </div>
            ) : selectedComponent === "Alerts" ? (
              <div className="flex items-center rounded-md border border-border bg-muted p-0.5 w-fit">
                {(["default","informative","success","warning","destructive"] as const).map((v) => (
                  <button key={v} onClick={() => setAlertVariant(v)}
                    className={`px-3 py-1 text-xs rounded font-medium transition-colors capitalize ${alertVariant === v ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                    {v}
                  </button>
                ))}
              </div>
            ) : selectedComponent === "Page Sections" ? (
              <div className="flex items-center rounded-md border border-border bg-muted p-0.5 w-fit">
                {(["hero","page","search","section"] as const).map((v) => (
                  <button key={v} onClick={() => setPageSectionsVariant(v)}
                    className={`px-3 py-1 text-xs rounded font-medium transition-colors capitalize ${pageSectionsVariant === v ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                    {v === "search" ? "Page + Search" : v.charAt(0).toUpperCase() + v.slice(1)}
                  </button>
                ))}
              </div>
            ) : undefined
          }
        />
      )}

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
  /* Analytics (new) */
  { name: "AreaChart",                   component: AreaChart,                   category: "Analytics" },
  { name: "BarChart",                    component: BarChartIcon,                    category: "Analytics" },
  { name: "BarChartBig",                 component: BarChartBig,                 category: "Analytics" },
  { name: "BarChartHorizontal",          component: BarChartHorizontal,          category: "Analytics" },
  { name: "BarChartHorizontalBig",       component: BarChartHorizontalBig,       category: "Analytics" },
  { name: "LineChart",                   component: LineChartIcon,                   category: "Analytics" },
  { name: "ScatterChart",                component: ScatterChartIcon,                category: "Analytics" },
  /* Animals (new) */
  { name: "Bird",                        component: Bird,                        category: "Animals" },
  { name: "Cat",                         component: Cat,                         category: "Animals" },
  { name: "Dog",                         component: Dog,                         category: "Animals" },
  { name: "Feather",                     component: Feather,                     category: "Animals" },
  { name: "Fish",                        component: Fish,                        category: "Animals" },
  { name: "FishOff",                     component: FishOff,                     category: "Animals" },
  { name: "FishSymbol",                  component: FishSymbol,                  category: "Animals" },
  { name: "PawPrint",                    component: PawPrint,                    category: "Animals" },
  { name: "Rabbit",                      component: Rabbit,                      category: "Animals" },
  { name: "Rat",                         component: Rat,                         category: "Animals" },
  { name: "Snail",                       component: Snail,                       category: "Animals" },
  { name: "Squirrel",                    component: Squirrel,                    category: "Animals" },
  { name: "Turtle",                      component: Turtle,                      category: "Animals" },
  /* Arrows (new) */
  { name: "ArrowBigDown",                component: ArrowBigDown,                category: "Arrows" },
  { name: "ArrowBigDownDash",            component: ArrowBigDownDash,            category: "Arrows" },
  { name: "ArrowBigLeft",                component: ArrowBigLeft,                category: "Arrows" },
  { name: "ArrowBigLeftDash",            component: ArrowBigLeftDash,            category: "Arrows" },
  { name: "ArrowBigRight",               component: ArrowBigRight,               category: "Arrows" },
  { name: "ArrowBigRightDash",           component: ArrowBigRightDash,           category: "Arrows" },
  { name: "ArrowBigUp",                  component: ArrowBigUp,                  category: "Arrows" },
  { name: "ArrowBigUpDash",              component: ArrowBigUpDash,              category: "Arrows" },
  { name: "ArrowDown01",                 component: ArrowDown01,                 category: "Arrows" },
  { name: "ArrowDown10",                 component: ArrowDown10,                 category: "Arrows" },
  { name: "ArrowDownAZ",                 component: ArrowDownAZ,                 category: "Arrows" },
  { name: "ArrowDownFromLine",           component: ArrowDownFromLine,           category: "Arrows" },
  { name: "ArrowDownNarrowWide",         component: ArrowDownNarrowWide,         category: "Arrows" },
  { name: "ArrowDownToDot",              component: ArrowDownToDot,              category: "Arrows" },
  { name: "ArrowDownToLine",             component: ArrowDownToLine,             category: "Arrows" },
  { name: "ArrowDownUp",                 component: ArrowDownUp,                 category: "Arrows" },
  { name: "ArrowDownWideNarrow",         component: ArrowDownWideNarrow,         category: "Arrows" },
  { name: "ArrowDownZA",                 component: ArrowDownZA,                 category: "Arrows" },
  { name: "ArrowLeftFromLine",           component: ArrowLeftFromLine,           category: "Arrows" },
  { name: "ArrowLeftToLine",             component: ArrowLeftToLine,             category: "Arrows" },
  { name: "ArrowRightFromLine",          component: ArrowRightFromLine,          category: "Arrows" },
  { name: "ArrowRightLeft",              component: ArrowRightLeft,              category: "Arrows" },
  { name: "ArrowRightToLine",            component: ArrowRightToLine,            category: "Arrows" },
  { name: "ArrowUp01",                   component: ArrowUp01,                   category: "Arrows" },
  { name: "ArrowUp10",                   component: ArrowUp10,                   category: "Arrows" },
  { name: "ArrowUpAZ",                   component: ArrowUpAZ,                   category: "Arrows" },
  { name: "ArrowUpFromDot",              component: ArrowUpFromDot,              category: "Arrows" },
  { name: "ArrowUpFromLine",             component: ArrowUpFromLine,             category: "Arrows" },
  { name: "ArrowUpNarrowWide",           component: ArrowUpNarrowWide,           category: "Arrows" },
  { name: "ArrowUpToLine",               component: ArrowUpToLine,               category: "Arrows" },
  { name: "ArrowUpWideNarrow",           component: ArrowUpWideNarrow,           category: "Arrows" },
  { name: "ArrowUpZA",                   component: ArrowUpZA,                   category: "Arrows" },
  { name: "ArrowsUpFromLine",            component: ArrowsUpFromLine,            category: "Arrows" },
  /* Buildings (new) */
  { name: "BrickWall",                   component: BrickWall,                   category: "Buildings" },
  { name: "Building",                    component: Building,                    category: "Buildings" },
  { name: "Building2",                   component: Building2,                   category: "Buildings" },
  { name: "Castle",                      component: Castle,                      category: "Buildings" },
  { name: "Church",                      component: Church,                      category: "Buildings" },
  { name: "Factory",                     component: Factory,                     category: "Buildings" },
  { name: "Hotel",                       component: Hotel,                       category: "Buildings" },
  { name: "Landmark",                    component: Landmark,                    category: "Buildings" },
  { name: "Library",                     component: Library,                     category: "Buildings" },
  { name: "LibraryBig",                  component: LibraryBig,                  category: "Buildings" },
  { name: "School",                      component: School,                      category: "Buildings" },
  { name: "Tent",                        component: Tent,                        category: "Buildings" },
  { name: "TentTree",                    component: TentTree,                    category: "Buildings" },
  { name: "Theater",                     component: Theater,                     category: "Buildings" },
  { name: "University",                  component: University,                  category: "Buildings" },
  { name: "Warehouse",                   component: Warehouse,                   category: "Buildings" },
  /* Communication (new) */
  { name: "Airplay",                     component: Airplay,                     category: "Communication" },
  { name: "Antenna",                     component: Antenna,                     category: "Communication" },
  { name: "Cast",                        component: Cast,                        category: "Communication" },
  { name: "MailCheck",                   component: MailCheck,                   category: "Communication" },
  { name: "MailMinus",                   component: MailMinus,                   category: "Communication" },
  { name: "MailPlus",                    component: MailPlus,                    category: "Communication" },
  { name: "MailQuestion",                component: MailQuestion,                category: "Communication" },
  { name: "MailSearch",                  component: MailSearch,                  category: "Communication" },
  { name: "MailWarning",                 component: MailWarning,                 category: "Communication" },
  { name: "MailX",                       component: MailX,                       category: "Communication" },
  { name: "Mailbox",                     component: Mailbox,                     category: "Communication" },
  { name: "Mails",                       component: Mails,                       category: "Communication" },
  { name: "MessageCircleCode",           component: MessageCircleCode,           category: "Communication" },
  { name: "MessageCircleDashed",         component: MessageCircleDashed,         category: "Communication" },
  { name: "MessageCircleHeart",          component: MessageCircleHeart,          category: "Communication" },
  { name: "MessageCircleMore",           component: MessageCircleMore,           category: "Communication" },
  { name: "MessageCircleOff",            component: MessageCircleOff,            category: "Communication" },
  { name: "MessageCirclePlus",           component: MessageCirclePlus,           category: "Communication" },
  { name: "MessageCircleQuestion",       component: MessageCircleQuestion,       category: "Communication" },
  { name: "MessageCircleReply",          component: MessageCircleReply,          category: "Communication" },
  { name: "MessageCircleWarning",        component: MessageCircleWarning,        category: "Communication" },
  { name: "MessageCircleX",              component: MessageCircleX,              category: "Communication" },
  { name: "MessageSquareCode",           component: MessageSquareCode,           category: "Communication" },
  { name: "MessageSquareDashed",         component: MessageSquareDashed,         category: "Communication" },
  { name: "MessageSquareDiff",           component: MessageSquareDiff,           category: "Communication" },
  { name: "MessageSquareDot",            component: MessageSquareDot,            category: "Communication" },
  { name: "MessageSquareHeart",          component: MessageSquareHeart,          category: "Communication" },
  { name: "MessageSquareMore",           component: MessageSquareMore,           category: "Communication" },
  { name: "MessageSquareOff",            component: MessageSquareOff,            category: "Communication" },
  { name: "MessageSquarePlus",           component: MessageSquarePlus,           category: "Communication" },
  { name: "MessageSquareQuote",          component: MessageSquareQuote,          category: "Communication" },
  { name: "MessageSquareReply",          component: MessageSquareReply,          category: "Communication" },
  { name: "MessageSquareShare",          component: MessageSquareShare,          category: "Communication" },
  { name: "MessageSquareText",           component: MessageSquareText,           category: "Communication" },
  { name: "MessageSquareWarning",        component: MessageSquareWarning,        category: "Communication" },
  { name: "MessageSquareX",              component: MessageSquareX,              category: "Communication" },
  { name: "MessagesSquare",              component: MessagesSquare,              category: "Communication" },
  { name: "MicVocal",                    component: MicVocal,                    category: "Communication" },
  { name: "Microwave",                   component: Microwave,                   category: "Communication" },
  { name: "PhoneForwarded",              component: PhoneForwarded,              category: "Communication" },
  { name: "PhoneIncoming",               component: PhoneIncoming,               category: "Communication" },
  { name: "PhoneMissed",                 component: PhoneMissed,                 category: "Communication" },
  { name: "PhoneOutgoing",               component: PhoneOutgoing,               category: "Communication" },
  { name: "Share",                       component: Share,                       category: "Communication" },
  { name: "SignalHigh",                  component: SignalHigh,                  category: "Communication" },
  { name: "SignalLow",                   component: SignalLow,                   category: "Communication" },
  { name: "SignalMedium",                component: SignalMedium,                category: "Communication" },
  { name: "SignalZero",                  component: SignalZero,                  category: "Communication" },
  { name: "Videotape",                   component: Videotape,                   category: "Communication" },
  /* Devices (new) */
  { name: "Battery",                     component: Battery,                     category: "Devices" },
  { name: "BatteryCharging",             component: BatteryCharging,             category: "Devices" },
  { name: "BatteryFull",                 component: BatteryFull,                 category: "Devices" },
  { name: "BatteryLow",                  component: BatteryLow,                  category: "Devices" },
  { name: "BatteryMedium",               component: BatteryMedium,               category: "Devices" },
  { name: "BatteryWarning",              component: BatteryWarning,              category: "Devices" },
  { name: "Bluetooth",                   component: Bluetooth,                   category: "Devices" },
  { name: "BluetoothConnected",          component: BluetoothConnected,          category: "Devices" },
  { name: "BluetoothOff",                component: BluetoothOff,                category: "Devices" },
  { name: "BluetoothSearching",          component: BluetoothSearching,          category: "Devices" },
  { name: "Gamepad",                     component: Gamepad,                     category: "Devices" },
  { name: "Gamepad2",                    component: Gamepad2,                    category: "Devices" },
  { name: "HardDrive",                   component: HardDrive,                   category: "Devices" },
  { name: "HardDriveDownload",           component: HardDriveDownload,           category: "Devices" },
  { name: "HardDriveUpload",             component: HardDriveUpload,             category: "Devices" },
  { name: "Keyboard",                    component: Keyboard,                    category: "Devices" },
  { name: "KeyboardMusic",               component: KeyboardMusic,               category: "Devices" },
  { name: "Laptop",                      component: Laptop,                      category: "Devices" },
  { name: "LaptopMinimal",               component: LaptopMinimal,               category: "Devices" },
  { name: "MemoryStick",                 component: MemoryStick,                 category: "Devices" },
  { name: "Monitor",                     component: Monitor,                     category: "Devices" },
  { name: "MonitorCheck",                component: MonitorCheck,                category: "Devices" },
  { name: "MonitorDot",                  component: MonitorDot,                  category: "Devices" },
  { name: "MonitorDown",                 component: MonitorDown,                 category: "Devices" },
  { name: "MonitorOff",                  component: MonitorOff,                  category: "Devices" },
  { name: "MonitorPause",                component: MonitorPause,                category: "Devices" },
  { name: "MonitorPlay",                 component: MonitorPlay,                 category: "Devices" },
  { name: "MonitorSmartphone",           component: MonitorSmartphone,           category: "Devices" },
  { name: "MonitorSpeaker",              component: MonitorSpeaker,              category: "Devices" },
  { name: "MonitorStop",                 component: MonitorStop,                 category: "Devices" },
  { name: "MonitorUp",                   component: MonitorUp,                   category: "Devices" },
  { name: "MonitorX",                    component: MonitorX,                    category: "Devices" },
  { name: "Mouse",                       component: Mouse,                       category: "Devices" },
  { name: "MousePointer",                component: MousePointer,                category: "Devices" },
  { name: "MousePointer2",               component: MousePointer2,               category: "Devices" },
  { name: "MousePointerClick",           component: MousePointerClick,           category: "Devices" },
  { name: "Printer",                     component: Printer,                     category: "Devices" },
  { name: "Webcam",                      component: Webcam,                      category: "Devices" },
  /* Files (new) */
  { name: "ArchiveRestore",              component: ArchiveRestore,              category: "Files" },
  { name: "ArchiveX",                    component: ArchiveX,                    category: "Files" },
  { name: "Barcode",                     component: Barcode,                     category: "Files" },
  { name: "Book",                        component: Book,                        category: "Files" },
  { name: "BookA",                       component: BookA,                       category: "Files" },
  { name: "BookAudio",                   component: BookAudio,                   category: "Files" },
  { name: "BookCheck",                   component: BookCheck,                   category: "Files" },
  { name: "BookCopy",                    component: BookCopy,                    category: "Files" },
  { name: "BookDashed",                  component: BookDashed,                  category: "Files" },
  { name: "BookDown",                    component: BookDown,                    category: "Files" },
  { name: "BookHeadphones",              component: BookHeadphones,              category: "Files" },
  { name: "BookHeart",                   component: BookHeart,                   category: "Files" },
  { name: "BookImage",                   component: BookImage,                   category: "Files" },
  { name: "BookKey",                     component: BookKey,                     category: "Files" },
  { name: "BookLock",                    component: BookLock,                    category: "Files" },
  { name: "BookMarked",                  component: BookMarked,                  category: "Files" },
  { name: "BookMinus",                   component: BookMinus,                   category: "Files" },
  { name: "BookOpen",                    component: BookOpen,                    category: "Files" },
  { name: "BookOpenCheck",               component: BookOpenCheck,               category: "Files" },
  { name: "BookOpenText",                component: BookOpenText,                category: "Files" },
  { name: "BookPlus",                    component: BookPlus,                    category: "Files" },
  { name: "BookText",                    component: BookText,                    category: "Files" },
  { name: "BookType",                    component: BookType,                    category: "Files" },
  { name: "BookUp",                      component: BookUp,                      category: "Files" },
  { name: "BookUp2",                     component: BookUp2,                     category: "Files" },
  { name: "BookUser",                    component: BookUser,                    category: "Files" },
  { name: "BookX",                       component: BookX,                       category: "Files" },
  { name: "BookmarkMinus",               component: BookmarkMinus,               category: "Files" },
  { name: "BookmarkPlus",                component: BookmarkPlus,                category: "Files" },
  { name: "BookmarkX",                   component: BookmarkX,                   category: "Files" },
  { name: "ClipboardCopy",               component: ClipboardCopy,               category: "Files" },
  { name: "ClipboardMinus",              component: ClipboardMinus,              category: "Files" },
  { name: "ClipboardPaste",              component: ClipboardPaste,              category: "Files" },
  { name: "ClipboardPen",                component: ClipboardPen,                category: "Files" },
  { name: "ClipboardPenLine",            component: ClipboardPenLine,            category: "Files" },
  { name: "ClipboardPlus",               component: ClipboardPlus,               category: "Files" },
  { name: "ClipboardType",               component: ClipboardType,               category: "Files" },
  { name: "ClipboardX",                  component: ClipboardX,                  category: "Files" },
  { name: "FileArchive",                 component: FileArchive,                 category: "Files" },
  { name: "FileAudio",                   component: FileAudio,                   category: "Files" },
  { name: "FileAudio2",                  component: FileAudio2,                  category: "Files" },
  { name: "FileAxis3d",                  component: FileAxis3d,                  category: "Files" },
  { name: "FileBadge",                   component: FileBadge,                   category: "Files" },
  { name: "FileBadge2",                  component: FileBadge2,                  category: "Files" },
  { name: "FileBarChart",                component: FileBarChart,                category: "Files" },
  { name: "FileBarChart2",               component: FileBarChart2,               category: "Files" },
  { name: "FileBox",                     component: FileBox,                     category: "Files" },
  { name: "FileCheck2",                  component: FileCheck2,                  category: "Files" },
  { name: "FileClock",                   component: FileClock,                   category: "Files" },
  { name: "FileCode2",                   component: FileCode2,                   category: "Files" },
  { name: "FileCog",                     component: FileCog,                     category: "Files" },
  { name: "FileDiff",                    component: FileDiff,                    category: "Files" },
  { name: "FileDigit",                   component: FileDigit,                   category: "Files" },
  { name: "FileDown",                    component: FileDown,                    category: "Files" },
  { name: "FileHeart",                   component: FileHeart,                   category: "Files" },
  { name: "FileInput",                   component: FileInput,                   category: "Files" },
  { name: "FileJson2",                   component: FileJson2,                   category: "Files" },
  { name: "FileKey",                     component: FileKey,                     category: "Files" },
  { name: "FileKey2",                    component: FileKey2,                    category: "Files" },
  { name: "FileLineChart",               component: FileLineChart,               category: "Files" },
  { name: "FileLock",                    component: FileLock,                    category: "Files" },
  { name: "FileLock2",                   component: FileLock2,                   category: "Files" },
  { name: "FileMinus2",                  component: FileMinus2,                  category: "Files" },
  { name: "FileMusic",                   component: FileMusic,                   category: "Files" },
  { name: "FileOutput",                  component: FileOutput,                  category: "Files" },
  { name: "FilePen",                     component: FilePen,                     category: "Files" },
  { name: "FilePenLine",                 component: FilePenLine,                 category: "Files" },
  { name: "FilePieChart",                component: FilePieChart,                category: "Files" },
  { name: "FilePlus2",                   component: FilePlus2,                   category: "Files" },
  { name: "FileQuestion",                component: FileQuestion,                category: "Files" },
  { name: "FileScan",                    component: FileScan,                    category: "Files" },
  { name: "FileSearch",                  component: FileSearch,                  category: "Files" },
  { name: "FileSearch2",                 component: FileSearch2,                 category: "Files" },
  { name: "FileSliders",                 component: FileSliders,                 category: "Files" },
  { name: "FileSpreadsheet",             component: FileSpreadsheet,             category: "Files" },
  { name: "FileStack",                   component: FileStack,                   category: "Files" },
  { name: "FileSymlink",                 component: FileSymlink,                 category: "Files" },
  { name: "FileTerminal",                component: FileTerminal,                category: "Files" },
  { name: "FileType",                    component: FileType,                    category: "Files" },
  { name: "FileType2",                   component: FileType2,                   category: "Files" },
  { name: "FileUp",                      component: FileUp,                      category: "Files" },
  { name: "FileVideo",                   component: FileVideo,                   category: "Files" },
  { name: "FileVideo2",                  component: FileVideo2,                  category: "Files" },
  { name: "FileVolume",                  component: FileVolume,                  category: "Files" },
  { name: "FileVolume2",                 component: FileVolume2,                 category: "Files" },
  { name: "FileWarning",                 component: FileWarning,                 category: "Files" },
  { name: "FileX2",                      component: FileX2,                      category: "Files" },
  { name: "Files",                       component: Files,                       category: "Files" },
  { name: "FolderArchive",               component: FolderArchive,               category: "Files" },
  { name: "FolderCheck",                 component: FolderCheck,                 category: "Files" },
  { name: "FolderClock",                 component: FolderClock,                 category: "Files" },
  { name: "FolderClosed",                component: FolderClosed,                category: "Files" },
  { name: "FolderCog",                   component: FolderCog,                   category: "Files" },
  { name: "FolderDot",                   component: FolderDot,                   category: "Files" },
  { name: "FolderDown",                  component: FolderDown,                  category: "Files" },
  { name: "FolderGit",                   component: FolderGit,                   category: "Files" },
  { name: "FolderGit2",                  component: FolderGit2,                  category: "Files" },
  { name: "FolderHeart",                 component: FolderHeart,                 category: "Files" },
  { name: "FolderInput",                 component: FolderInput,                 category: "Files" },
  { name: "FolderKanban",                component: FolderKanban,                category: "Files" },
  { name: "FolderKey",                   component: FolderKey,                   category: "Files" },
  { name: "FolderLock",                  component: FolderLock,                  category: "Files" },
  { name: "FolderOpenDot",               component: FolderOpenDot,               category: "Files" },
  { name: "FolderOutput",                component: FolderOutput,                category: "Files" },
  { name: "FolderPen",                   component: FolderPen,                   category: "Files" },
  { name: "FolderRoot",                  component: FolderRoot,                  category: "Files" },
  { name: "FolderSearch",                component: FolderSearch,                category: "Files" },
  { name: "FolderSearch2",               component: FolderSearch2,               category: "Files" },
  { name: "FolderSymlink",               component: FolderSymlink,               category: "Files" },
  { name: "FolderSync",                  component: FolderSync,                  category: "Files" },
  { name: "FolderTree",                  component: FolderTree,                  category: "Files" },
  { name: "FolderUp",                    component: FolderUp,                    category: "Files" },
  { name: "FolderX",                     component: FolderX,                     category: "Files" },
  { name: "Folders",                     component: Folders,                     category: "Files" },
  { name: "Notebook",                    component: Notebook,                    category: "Files" },
  { name: "NotebookPen",                 component: NotebookPen,                 category: "Files" },
  { name: "NotebookTabs",                component: NotebookTabs,                category: "Files" },
  { name: "NotebookText",                component: NotebookText,                category: "Files" },
  { name: "Package2",                    component: Package2,                    category: "Files" },
  { name: "PackageCheck",                component: PackageCheck,                category: "Files" },
  { name: "PackageMinus",                component: PackageMinus,                category: "Files" },
  { name: "PackageOpen",                 component: PackageOpen,                 category: "Files" },
  { name: "PackagePlus",                 component: PackagePlus,                 category: "Files" },
  { name: "PackageSearch",               component: PackageSearch,               category: "Files" },
  { name: "PackageX",                    component: PackageX,                    category: "Files" },
  { name: "QrCode",                      component: QrCode,                      category: "Files" },
  { name: "Save",                        component: Save,                        category: "Files" },
  { name: "SaveAll",                     component: SaveAll,                     category: "Files" },
  { name: "Scan",                        component: Scan,                        category: "Files" },
  { name: "ScanBarcode",                 component: ScanBarcode,                 category: "Files" },
  { name: "ScanEye",                     component: ScanEye,                     category: "Files" },
  { name: "ScanFace",                    component: ScanFace,                    category: "Files" },
  { name: "ScanLine",                    component: ScanLine,                    category: "Files" },
  { name: "ScanSearch",                  component: ScanSearch,                  category: "Files" },
  { name: "ScanText",                    component: ScanText,                    category: "Files" },
  { name: "Scroll",                      component: Scroll,                      category: "Files" },
  { name: "ScrollText",                  component: ScrollText,                  category: "Files" },
  { name: "Sheet",                       component: SheetIcon,                       category: "Files" },
  /* Finance (new) */
  { name: "BadgeCent",                   component: BadgeCent,                   category: "Finance" },
  { name: "BadgeDollarSign",             component: BadgeDollarSign,             category: "Finance" },
  { name: "BadgeEuro",                   component: BadgeEuro,                   category: "Finance" },
  { name: "BadgeIndianRupee",            component: BadgeIndianRupee,            category: "Finance" },
  { name: "BadgeJapaneseYen",            component: BadgeJapaneseYen,            category: "Finance" },
  { name: "BadgePoundSterling",          component: BadgePoundSterling,          category: "Finance" },
  { name: "BadgeRussianRuble",           component: BadgeRussianRuble,           category: "Finance" },
  { name: "BadgeSwissFranc",             component: BadgeSwissFranc,             category: "Finance" },
  { name: "Banknote",                    component: Banknote,                    category: "Finance" },
  { name: "Bitcoin",                     component: Bitcoin,                     category: "Finance" },
  { name: "CircleDollarSign",            component: CircleDollarSign,            category: "Finance" },
  { name: "Coins",                       component: Coins,                       category: "Finance" },
  { name: "CreditCard",                  component: CreditCard,                  category: "Finance" },
  { name: "DollarSign",                  component: DollarSign,                  category: "Finance" },
  { name: "Euro",                        component: Euro,                        category: "Finance" },
  { name: "IndianRupee",                 component: IndianRupee,                 category: "Finance" },
  { name: "JapaneseYen",                 component: JapaneseYen,                 category: "Finance" },
  { name: "PiggyBank",                   component: PiggyBank,                   category: "Finance" },
  { name: "PoundSterling",               component: PoundSterling,               category: "Finance" },
  { name: "Receipt",                     component: Receipt,                     category: "Finance" },
  { name: "ReceiptCent",                 component: ReceiptCent,                 category: "Finance" },
  { name: "ReceiptEuro",                 component: ReceiptEuro,                 category: "Finance" },
  { name: "ReceiptIndianRupee",          component: ReceiptIndianRupee,          category: "Finance" },
  { name: "ReceiptJapaneseYen",          component: ReceiptJapaneseYen,          category: "Finance" },
  { name: "ReceiptPoundSterling",        component: ReceiptPoundSterling,        category: "Finance" },
  { name: "ReceiptRussianRuble",         component: ReceiptRussianRuble,         category: "Finance" },
  { name: "ReceiptSwissFranc",           component: ReceiptSwissFranc,           category: "Finance" },
  { name: "ReceiptText",                 component: ReceiptText,                 category: "Finance" },
  { name: "RussianRuble",                component: RussianRuble,                category: "Finance" },
  { name: "ShoppingBag",                 component: ShoppingBag,                 category: "Finance" },
  { name: "ShoppingBasket",              component: ShoppingBasket,              category: "Finance" },
  { name: "ShoppingCart",                component: ShoppingCart,                category: "Finance" },
  { name: "SwissFranc",                  component: SwissFranc,                  category: "Finance" },
  { name: "Wallet",                      component: Wallet,                      category: "Finance" },
  { name: "WalletCards",                 component: WalletCards,                 category: "Finance" },
  { name: "WalletMinimal",               component: WalletMinimal,               category: "Finance" },
  /* Food & Drink (new) */
  { name: "Apple",                       component: Apple,                       category: "Food & Drink" },
  { name: "Banana",                      component: Banana,                      category: "Food & Drink" },
  { name: "Bean",                        component: Bean,                        category: "Food & Drink" },
  { name: "BeanOff",                     component: BeanOff,                     category: "Food & Drink" },
  { name: "Beef",                        component: Beef,                        category: "Food & Drink" },
  { name: "Beer",                        component: Beer,                        category: "Food & Drink" },
  { name: "BeerOff",                     component: BeerOff,                     category: "Food & Drink" },
  { name: "Candy",                       component: Candy,                       category: "Food & Drink" },
  { name: "CandyCane",                   component: CandyCane,                   category: "Food & Drink" },
  { name: "CandyOff",                    component: CandyOff,                    category: "Food & Drink" },
  { name: "ChefHat",                     component: ChefHat,                     category: "Food & Drink" },
  { name: "Cherry",                      component: Cherry,                      category: "Food & Drink" },
  { name: "Citrus",                      component: Citrus,                      category: "Food & Drink" },
  { name: "Cookie",                      component: Cookie,                      category: "Food & Drink" },
  { name: "CookingPot",                  component: CookingPot,                  category: "Food & Drink" },
  { name: "Croissant",                   component: Croissant,                   category: "Food & Drink" },
  { name: "CupSoda",                     component: CupSoda,                     category: "Food & Drink" },
  { name: "Dessert",                     component: Dessert,                     category: "Food & Drink" },
  { name: "Drumstick",                   component: Drumstick,                   category: "Food & Drink" },
  { name: "Egg",                         component: Egg,                         category: "Food & Drink" },
  { name: "EggFried",                    component: EggFried,                    category: "Food & Drink" },
  { name: "EggOff",                      component: EggOff,                      category: "Food & Drink" },
  { name: "Forklift",                    component: Forklift,                    category: "Food & Drink" },
  { name: "GlassWater",                  component: GlassWater,                  category: "Food & Drink" },
  { name: "Glasses",                     component: Glasses,                     category: "Food & Drink" },
  { name: "Grape",                       component: Grape,                       category: "Food & Drink" },
  { name: "Ham",                         component: Ham,                         category: "Food & Drink" },
  { name: "IceCreamBowl",                component: IceCreamBowl,                category: "Food & Drink" },
  { name: "IceCreamCone",                component: IceCreamCone,                category: "Food & Drink" },
  { name: "Martini",                     component: Martini,                     category: "Food & Drink" },
  { name: "Milk",                        component: Milk,                        category: "Food & Drink" },
  { name: "MilkOff",                     component: MilkOff,                     category: "Food & Drink" },
  { name: "Nut",                         component: Nut,                         category: "Food & Drink" },
  { name: "NutOff",                      component: NutOff,                      category: "Food & Drink" },
  { name: "Pizza",                       component: Pizza,                       category: "Food & Drink" },
  { name: "Popcorn",                     component: Popcorn,                     category: "Food & Drink" },
  { name: "Salad",                       component: Salad,                       category: "Food & Drink" },
  { name: "Sandwich",                    component: Sandwich,                    category: "Food & Drink" },
  { name: "Soup",                        component: Soup,                        category: "Food & Drink" },
  { name: "Utensils",                    component: Utensils,                    category: "Food & Drink" },
  { name: "UtensilsCrossed",             component: UtensilsCrossed,             category: "Food & Drink" },
  { name: "Vegan",                       component: Vegan,                       category: "Food & Drink" },
  { name: "Wheat",                       component: Wheat,                       category: "Food & Drink" },
  { name: "WheatOff",                    component: WheatOff,                    category: "Food & Drink" },
  { name: "Wine",                        component: Wine,                        category: "Food & Drink" },
  { name: "WineOff",                     component: WineOff,                     category: "Food & Drink" },
  /* General (new) */
  { name: "Accessibility",               component: Accessibility,               category: "General" },
  { name: "AirVent",                     component: AirVent,                     category: "General" },
  { name: "Ampersand",                   component: Ampersand,                   category: "General" },
  { name: "Ampersands",                  component: Ampersands,                  category: "General" },
  { name: "Anchor",                      component: Anchor,                      category: "General" },
  { name: "Angry",                       component: Angry,                       category: "General" },
  { name: "Annoyed",                     component: Annoyed,                     category: "General" },
  { name: "Aperture",                    component: Aperture,                    category: "General" },
  { name: "Armchair",                    component: Armchair,                    category: "General" },
  { name: "Asterisk",                    component: Asterisk,                    category: "General" },
  { name: "Atom",                        component: Atom,                        category: "General" },
  { name: "Award",                       component: Award,                       category: "General" },
  { name: "Axis3d",                      component: Axis3d,                      category: "General" },
  { name: "Baby",                        component: Baby,                        category: "General" },
  { name: "Backpack",                    component: Backpack,                    category: "General" },
  { name: "Badge",                       component: BadgeIcon,                       category: "General" },
  { name: "BadgeAlert",                  component: BadgeAlert,                  category: "General" },
  { name: "BadgeCheck",                  component: BadgeCheck,                  category: "General" },
  { name: "BadgeHelp",                   component: BadgeHelp,                   category: "General" },
  { name: "BadgeInfo",                   component: BadgeInfo,                   category: "General" },
  { name: "BadgeMinus",                  component: BadgeMinus,                  category: "General" },
  { name: "BadgePercent",                component: BadgePercent,                category: "General" },
  { name: "BadgePlus",                   component: BadgePlus,                   category: "General" },
  { name: "BadgeX",                      component: BadgeX,                      category: "General" },
  { name: "BaggageClaim",                component: BaggageClaim,                category: "General" },
  { name: "Ban",                         component: Ban,                         category: "General" },
  { name: "Bath",                        component: Bath,                        category: "General" },
  { name: "Beaker",                      component: Beaker,                      category: "General" },
  { name: "Bed",                         component: Bed,                         category: "General" },
  { name: "BedDouble",                   component: BedDouble,                   category: "General" },
  { name: "BedSingle",                   component: BedSingle,                   category: "General" },
  { name: "BellDot",                     component: BellDot,                     category: "General" },
  { name: "BellElectric",                component: BellElectric,                category: "General" },
  { name: "BellMinus",                   component: BellMinus,                   category: "General" },
  { name: "BellPlus",                    component: BellPlus,                    category: "General" },
  { name: "BellRing",                    component: BellRing,                    category: "General" },
  { name: "Binary",                      component: Binary,                      category: "General" },
  { name: "Blend",                       component: Blend,                       category: "General" },
  { name: "Blinds",                      component: Blinds,                      category: "General" },
  { name: "Blocks",                      component: Blocks,                      category: "General" },
  { name: "Bomb",                        component: Bomb,                        category: "General" },
  { name: "BoomBox",                     component: BoomBox,                     category: "General" },
  { name: "Bot",                         component: Bot,                         category: "General" },
  { name: "BotMessageSquare",            component: BotMessageSquare,            category: "General" },
  { name: "Box",                         component: Box,                         category: "General" },
  { name: "BoxSelect",                   component: BoxSelect,                   category: "General" },
  { name: "Boxes",                       component: Boxes,                       category: "General" },
  { name: "Braces",                      component: Braces,                      category: "General" },
  { name: "Brackets",                    component: Brackets,                    category: "General" },
  { name: "Briefcase",                   component: Briefcase,                   category: "General" },
  { name: "BriefcaseBusiness",           component: BriefcaseBusiness,           category: "General" },
  { name: "BriefcaseMedical",            component: BriefcaseMedical,            category: "General" },
  { name: "BringToFront",                component: BringToFront,                category: "General" },
  { name: "Cable",                       component: Cable,                       category: "General" },
  { name: "Cake",                        component: Cake,                        category: "General" },
  { name: "CakeSlice",                   component: CakeSlice,                   category: "General" },
  { name: "Calculator",                  component: Calculator,                  category: "General" },
  { name: "CameraOff",                   component: CameraOff,                   category: "General" },
  { name: "CandlestickChart",            component: CandlestickChart,            category: "General" },
  { name: "Cannabis",                    component: Cannabis,                    category: "General" },
  { name: "Captions",                    component: Captions,                    category: "General" },
  { name: "CaptionsOff",                 component: CaptionsOff,                 category: "General" },
  { name: "Caravan",                     component: Caravan,                     category: "General" },
  { name: "Carrot",                      component: Carrot,                      category: "General" },
  { name: "CassetteTape",                component: CassetteTape,                category: "General" },
  { name: "Cctv",                        component: Cctv,                        category: "General" },
  { name: "CheckCheck",                  component: CheckCheck,                  category: "General" },
  { name: "ChevronFirst",                component: ChevronFirst,                category: "General" },
  { name: "ChevronLast",                 component: ChevronLast,                 category: "General" },
  { name: "ChevronsDownUp",              component: ChevronsDownUp,              category: "General" },
  { name: "ChevronsLeftRight",           component: ChevronsLeftRight,           category: "General" },
  { name: "ChevronsRightLeft",           component: ChevronsRightLeft,           category: "General" },
  { name: "ChevronsUpDown",              component: ChevronsUpDown,              category: "General" },
  { name: "Chrome",                      component: Chrome,                      category: "General" },
  { name: "Cigarette",                   component: Cigarette,                   category: "General" },
  { name: "CigaretteOff",                component: CigaretteOff,                category: "General" },
  { name: "CircuitBoard",                component: CircuitBoard,                category: "General" },
  { name: "Club",                        component: Club,                        category: "General" },
  { name: "Coffee",                      component: Coffee,                      category: "General" },
  { name: "Cog",                         component: Cog,                         category: "General" },
  { name: "Columns2",                    component: Columns2,                    category: "General" },
  { name: "Columns3",                    component: Columns3,                    category: "General" },
  { name: "Columns4",                    component: Columns4,                    category: "General" },
  { name: "Combine",                     component: Combine,                     category: "General" },
  { name: "Component",                   component: Component,                   category: "General" },
  { name: "Computer",                    component: Computer,                    category: "General" },
  { name: "ConciergeBell",               component: ConciergeBell,               category: "General" },
  { name: "Container",                   component: Container,                   category: "General" },
  { name: "Contrast",                    component: Contrast,                    category: "General" },
  { name: "CopyCheck",                   component: CopyCheck,                   category: "General" },
  { name: "CopyMinus",                   component: CopyMinus,                   category: "General" },
  { name: "CopyPlus",                    component: CopyPlus,                    category: "General" },
  { name: "CopySlash",                   component: CopySlash,                   category: "General" },
  { name: "CopyX",                       component: CopyX,                       category: "General" },
  { name: "Copyleft",                    component: Copyleft,                    category: "General" },
  { name: "Copyright",                   component: Copyright,                   category: "General" },
  { name: "CornerLeftDown",              component: CornerLeftDown,              category: "General" },
  { name: "CornerLeftUp",                component: CornerLeftUp,                category: "General" },
  { name: "CornerRightDown",             component: CornerRightDown,             category: "General" },
  { name: "CornerRightUp",               component: CornerRightUp,               category: "General" },
  { name: "CreativeCommons",             component: CreativeCommons,             category: "General" },
  { name: "Crop",                        component: Crop,                        category: "General" },
  { name: "Cross",                       component: Cross,                       category: "General" },
  { name: "Crosshair",                   component: Crosshair,                   category: "General" },
  { name: "Crown",                       component: Crown,                       category: "General" },
  { name: "Cuboid",                      component: Cuboid,                      category: "General" },
  { name: "Currency",                    component: Currency,                    category: "General" },
  { name: "DatabaseBackup",              component: DatabaseBackup,              category: "General" },
  { name: "DatabaseZap",                 component: DatabaseZap,                 category: "General" },
  { name: "Delete",                      component: Delete,                      category: "General" },
  { name: "Diameter",                    component: Diameter,                    category: "General" },
  { name: "DiamondPercent",              component: DiamondPercent,              category: "General" },
  { name: "Dice1",                       component: Dice1,                       category: "General" },
  { name: "Dice2",                       component: Dice2,                       category: "General" },
  { name: "Dice3",                       component: Dice3,                       category: "General" },
  { name: "Dice4",                       component: Dice4,                       category: "General" },
  { name: "Dice5",                       component: Dice5,                       category: "General" },
  { name: "Dice6",                       component: Dice6,                       category: "General" },
  { name: "Dices",                       component: Dices,                       category: "General" },
  { name: "Diff",                        component: Diff,                        category: "General" },
  { name: "Dock",                        component: Dock,                        category: "General" },
  { name: "Donut",                       component: Donut,                       category: "General" },
  { name: "DoorClosed",                  component: DoorClosed,                  category: "General" },
  { name: "DoorOpen",                    component: DoorOpen,                    category: "General" },
  { name: "Dot",                         component: Dot,                         category: "General" },
  { name: "DraftingCompass",             component: DraftingCompass,             category: "General" },
  { name: "Drama",                       component: Drama,                       category: "General" },
  { name: "Dribbble",                    component: Dribbble,                    category: "General" },
  { name: "Drum",                        component: Drum,                        category: "General" },
  { name: "Dumbbell",                    component: Dumbbell,                    category: "General" },
  { name: "Ear",                         component: Ear,                         category: "General" },
  { name: "EarOff",                      component: EarOff,                      category: "General" },
  { name: "Eclipse",                     component: Eclipse,                     category: "General" },
  { name: "Ellipsis",                    component: Ellipsis,                    category: "General" },
  { name: "EllipsisVertical",            component: EllipsisVertical,            category: "General" },
  { name: "Equal",                       component: Equal,                       category: "General" },
  { name: "EqualNot",                    component: EqualNot,                    category: "General" },
  { name: "Eraser",                      component: Eraser,                      category: "General" },
  { name: "ExternalLink",                component: ExternalLink,                category: "General" },
  { name: "Facebook",                    component: Facebook,                    category: "General" },
  { name: "Fan",                         component: Fan,                         category: "General" },
  { name: "Fence",                       component: Fence,                       category: "General" },
  { name: "FerrisWheel",                 component: FerrisWheel,                 category: "General" },
  { name: "Figma",                       component: Figma,                       category: "General" },
  { name: "FireExtinguisher",            component: FireExtinguisher,            category: "General" },
  { name: "Flashlight",                  component: Flashlight,                  category: "General" },
  { name: "FlashlightOff",               component: FlashlightOff,               category: "General" },
  { name: "Focus",                       component: Focus,                       category: "General" },
  { name: "FoldHorizontal",              component: FoldHorizontal,              category: "General" },
  { name: "FoldVertical",                component: FoldVertical,                category: "General" },
  { name: "Footprints",                  component: Footprints,                  category: "General" },
  { name: "Forward",                     component: Forward,                     category: "General" },
  { name: "Frame",                       component: Frame,                       category: "General" },
  { name: "Framer",                      component: Framer,                      category: "General" },
  { name: "Frown",                       component: Frown,                       category: "General" },
  { name: "GanttChart",                  component: GanttChart,                  category: "General" },
  { name: "Gauge",                       component: Gauge,                       category: "General" },
  { name: "Gavel",                       component: Gavel,                       category: "General" },
  { name: "Gem",                         component: Gem,                         category: "General" },
  { name: "Ghost",                       component: Ghost,                       category: "General" },
  { name: "Gift",                        component: Gift,                        category: "General" },
  { name: "GitBranch",                   component: GitBranch,                   category: "General" },
  { name: "GitBranchPlus",               component: GitBranchPlus,               category: "General" },
  { name: "GitCommitHorizontal",         component: GitCommitHorizontal,         category: "General" },
  { name: "GitCommitVertical",           component: GitCommitVertical,           category: "General" },
  { name: "GitCompare",                  component: GitCompare,                  category: "General" },
  { name: "GitCompareArrows",            component: GitCompareArrows,            category: "General" },
  { name: "GitFork",                     component: GitFork,                     category: "General" },
  { name: "GitGraph",                    component: GitGraph,                    category: "General" },
  { name: "GitMerge",                    component: GitMerge,                    category: "General" },
  { name: "GitPullRequest",              component: GitPullRequest,              category: "General" },
  { name: "GitPullRequestArrow",         component: GitPullRequestArrow,         category: "General" },
  { name: "GitPullRequestClosed",        component: GitPullRequestClosed,        category: "General" },
  { name: "GitPullRequestCreate",        component: GitPullRequestCreate,        category: "General" },
  { name: "GitPullRequestCreateArrow",   component: GitPullRequestCreateArrow,   category: "General" },
  { name: "GitPullRequestDraft",         component: GitPullRequestDraft,         category: "General" },
  { name: "Github",                      component: Github,                      category: "General" },
  { name: "Gitlab",                      component: Gitlab,                      category: "General" },
  { name: "GlobeLock",                   component: GlobeLock,                   category: "General" },
  { name: "Goal",                        component: Goal,                        category: "General" },
  { name: "Grab",                        component: Grab,                        category: "General" },
  { name: "GraduationCap",               component: GraduationCap,               category: "General" },
  { name: "Grid2x2",                     component: Grid2x2,                     category: "General" },
  { name: "Grid3x3",                     component: Grid3x3,                     category: "General" },
  { name: "Grip",                        component: Grip,                        category: "General" },
  { name: "GripHorizontal",              component: GripHorizontal,              category: "General" },
  { name: "GripVertical",                component: GripVertical,                category: "General" },
  { name: "Guitar",                      component: Guitar,                      category: "General" },
  { name: "Hand",                        component: Hand,                        category: "General" },
  { name: "HandCoins",                   component: HandCoins,                   category: "General" },
  { name: "HandHeart",                   component: HandHeart,                   category: "General" },
  { name: "HandHelping",                 component: HandHelping,                 category: "General" },
  { name: "HandMetal",                   component: HandMetal,                   category: "General" },
  { name: "HandPlatter",                 component: HandPlatter,                 category: "General" },
  { name: "Handshake",                   component: Handshake,                   category: "General" },
  { name: "HardHat",                     component: HardHat,                     category: "General" },
  { name: "HdmiPort",                    component: HdmiPort,                    category: "General" },
  { name: "Heading",                     component: Heading,                     category: "General" },
  { name: "Headset",                     component: Headset,                     category: "General" },
  { name: "HeartOff",                    component: HeartOff,                    category: "General" },
  { name: "Heater",                      component: Heater,                      category: "General" },
  { name: "Highlighter",                 component: Highlighter,                 category: "General" },
  { name: "History",                     component: History,                     category: "General" },
  { name: "Home",                        component: Home,                        category: "General" },
  { name: "Hop",                         component: Hop,                         category: "General" },
  { name: "HopOff",                      component: HopOff,                      category: "General" },
  { name: "ImageDown",                   component: ImageDown,                   category: "General" },
  { name: "ImageMinus",                  component: ImageMinus,                  category: "General" },
  { name: "ImagePlus",                   component: ImagePlus,                   category: "General" },
  { name: "ImageUp",                     component: ImageUp,                     category: "General" },
  { name: "Images",                      component: Images,                      category: "General" },
  { name: "Import",                      component: Import,                      category: "General" },
  { name: "Inbox",                       component: Inbox,                       category: "General" },
  { name: "IndentDecrease",              component: IndentDecrease,              category: "General" },
  { name: "IndentIncrease",              component: IndentIncrease,              category: "General" },
  { name: "Infinity",                    component: Infinity,                    category: "General" },
  { name: "InspectionPanel",             component: InspectionPanel,             category: "General" },
  { name: "Instagram",                   component: Instagram,                   category: "General" },
  { name: "IterationCcw",                component: IterationCcw,                category: "General" },
  { name: "IterationCw",                 component: IterationCw,                 category: "General" },
  { name: "Joystick",                    component: Joystick,                    category: "General" },
  { name: "Kanban",                      component: Kanban,                      category: "General" },
  { name: "Lamp",                        component: Lamp,                        category: "General" },
  { name: "LampCeiling",                 component: LampCeiling,                 category: "General" },
  { name: "LampDesk",                    component: LampDesk,                    category: "General" },
  { name: "LampFloor",                   component: LampFloor,                   category: "General" },
  { name: "LampWallDown",                component: LampWallDown,                category: "General" },
  { name: "LampWallUp",                  component: LampWallUp,                  category: "General" },
  { name: "LandPlot",                    component: LandPlot,                    category: "General" },
  { name: "Languages",                   component: Languages,                   category: "General" },
  { name: "Lasso",                       component: Lasso,                       category: "General" },
  { name: "LassoSelect",                 component: LassoSelect,                 category: "General" },
  { name: "Laugh",                       component: Laugh,                       category: "General" },
  { name: "Layers",                      component: Layers,                      category: "General" },
  { name: "Layers2",                     component: Layers2,                     category: "General" },
  { name: "Layers3",                     component: Layers3,                     category: "General" },
  { name: "LifeBuoy",                    component: LifeBuoy,                    category: "General" },
  { name: "Ligature",                    component: Ligature,                    category: "General" },
  { name: "Lightbulb",                   component: Lightbulb,                   category: "General" },
  { name: "LightbulbOff",                component: LightbulbOff,                category: "General" },
  { name: "Link2Off",                    component: Link2Off,                    category: "General" },
  { name: "Linkedin",                    component: Linkedin,                    category: "General" },
  { name: "ListCollapse",                component: ListCollapse,                category: "General" },
  { name: "ListEnd",                     component: ListEnd,                     category: "General" },
  { name: "ListFilter",                  component: ListFilter,                  category: "General" },
  { name: "ListMinus",                   component: ListMinus,                   category: "General" },
  { name: "ListMusic",                   component: ListMusic,                   category: "General" },
  { name: "ListPlus",                    component: ListPlus,                    category: "General" },
  { name: "ListRestart",                 component: ListRestart,                 category: "General" },
  { name: "ListStart",                   component: ListStart,                   category: "General" },
  { name: "ListTodo",                    component: ListTodo,                    category: "General" },
  { name: "ListTree",                    component: ListTree,                    category: "General" },
  { name: "ListVideo",                   component: ListVideo,                   category: "General" },
  { name: "ListX",                       component: ListX,                       category: "General" },
  { name: "LockKeyhole",                 component: LockKeyhole,                 category: "General" },
  { name: "LockKeyholeOpen",             component: LockKeyholeOpen,             category: "General" },
  { name: "LockOpen",                    component: LockOpen,                    category: "General" },
  { name: "LogIn",                       component: LogIn,                       category: "General" },
  { name: "Lollipop",                    component: Lollipop,                    category: "General" },
  { name: "Luggage",                     component: Luggage,                     category: "General" },
  { name: "Magnet",                      component: Magnet,                      category: "General" },
  { name: "Medal",                       component: Medal,                       category: "General" },
  { name: "Megaphone",                   component: Megaphone,                   category: "General" },
  { name: "MegaphoneOff",                component: MegaphoneOff,                category: "General" },
  { name: "Meh",                         component: Meh,                         category: "General" },
  { name: "Merge",                       component: Merge,                       category: "General" },
  { name: "Milestone",                   component: Milestone,                   category: "General" },
  { name: "Moon",                        component: Moon,                        category: "General" },
  { name: "Move",                        component: Move,                        category: "General" },
  { name: "Move3d",                      component: Move3d,                      category: "General" },
  { name: "MoveDiagonal",                component: MoveDiagonal,                category: "General" },
  { name: "MoveDiagonal2",               component: MoveDiagonal2,               category: "General" },
  { name: "MoveDownRight",               component: MoveDownRight,               category: "General" },
  { name: "MoveHorizontal",              component: MoveHorizontal,              category: "General" },
  { name: "MoveUpLeft",                  component: MoveUpLeft,                  category: "General" },
  { name: "MoveVertical",                component: MoveVertical,                category: "General" },
  { name: "Network",                     component: Network,                     category: "General" },
  { name: "Newspaper",                   component: Newspaper,                   category: "General" },
  { name: "Nfc",                         component: Nfc,                         category: "General" },
  { name: "NotepadText",                 component: NotepadText,                 category: "General" },
  { name: "NotepadTextDashed",           component: NotepadTextDashed,           category: "General" },
  { name: "Option",                      component: Option,                      category: "General" },
  { name: "Orbit",                       component: Orbit,                       category: "General" },
  { name: "Palette",                     component: Palette,                     category: "General" },
  { name: "PanelBottomClose",            component: PanelBottomClose,            category: "General" },
  { name: "PanelBottomDashed",           component: PanelBottomDashed,           category: "General" },
  { name: "PanelBottomOpen",             component: PanelBottomOpen,             category: "General" },
  { name: "PanelLeftClose",              component: PanelLeftClose,              category: "General" },
  { name: "PanelLeftDashed",             component: PanelLeftDashed,             category: "General" },
  { name: "PanelLeftOpen",               component: PanelLeftOpen,               category: "General" },
  { name: "PanelRightDashed",            component: PanelRightDashed,            category: "General" },
  { name: "PanelTopClose",               component: PanelTopClose,               category: "General" },
  { name: "PanelTopDashed",              component: PanelTopDashed,              category: "General" },
  { name: "PanelTopOpen",                component: PanelTopOpen,                category: "General" },
  { name: "PanelsLeftBottom",            component: PanelsLeftBottom,            category: "General" },
  { name: "PanelsRightBottom",           component: PanelsRightBottom,           category: "General" },
  { name: "PanelsTopLeft",               component: PanelsTopLeft,               category: "General" },
  { name: "Parentheses",                 component: Parentheses,                 category: "General" },
  { name: "ParkingMeter",                component: ParkingMeter,                category: "General" },
  { name: "PartyPopper",                 component: PartyPopper,                 category: "General" },
  { name: "PcCase",                      component: PcCase,                      category: "General" },
  { name: "PenLine",                     component: PenLine,                     category: "General" },
  { name: "PenTool",                     component: PenTool,                     category: "General" },
  { name: "PencilLine",                  component: PencilLine,                  category: "General" },
  { name: "PencilRuler",                 component: PencilRuler,                 category: "General" },
  { name: "Percent",                     component: Percent,                     category: "General" },
  { name: "Pi",                          component: Pi,                          category: "General" },
  { name: "Piano",                       component: Piano,                       category: "General" },
  { name: "Pipette",                     component: Pipette,                     category: "General" },
  { name: "Plug",                        component: Plug,                        category: "General" },
  { name: "Plug2",                       component: Plug2,                       category: "General" },
  { name: "PlugZap",                     component: PlugZap,                     category: "General" },
  { name: "PlugZap2",                    component: PlugZap2,                    category: "General" },
  { name: "Pocket",                      component: Pocket,                      category: "General" },
  { name: "PocketKnife",                 component: PocketKnife,                 category: "General" },
  { name: "Podcast",                     component: Podcast,                     category: "General" },
  { name: "Pointer",                     component: Pointer,                     category: "General" },
  { name: "PointerOff",                  component: PointerOff,                  category: "General" },
  { name: "Popsicle",                    component: Popsicle,                    category: "General" },
  { name: "Presentation",                component: Presentation,                category: "General" },
  { name: "Projector",                   component: Projector,                   category: "General" },
  { name: "Proportions",                 component: Proportions,                 category: "General" },
  { name: "Puzzle",                      component: Puzzle,                      category: "General" },
  { name: "Radar",                       component: Radar,                       category: "General" },
  { name: "Radiation",                   component: Radiation,                   category: "General" },
  { name: "Radical",                     component: Radical,                     category: "General" },
  { name: "RadioReceiver",               component: RadioReceiver,               category: "General" },
  { name: "RadioTower",                  component: RadioTower,                  category: "General" },
  { name: "Radius",                      component: Radius,                      category: "General" },
  { name: "RailSymbol",                  component: RailSymbol,                  category: "General" },
  { name: "Ratio",                       component: Ratio,                       category: "General" },
  { name: "Refrigerator",                component: Refrigerator,                category: "General" },
  { name: "Regex",                       component: Regex,                       category: "General" },
  { name: "Replace",                     component: Replace,                     category: "General" },
  { name: "ReplaceAll",                  component: ReplaceAll,                  category: "General" },
  { name: "Reply",                       component: Reply,                       category: "General" },
  { name: "ReplyAll",                    component: ReplyAll,                    category: "General" },
  { name: "Ribbon",                      component: Ribbon,                      category: "General" },
  { name: "Rocket",                      component: Rocket,                      category: "General" },
  { name: "RockingChair",                component: RockingChair,                category: "General" },
  { name: "Rows2",                       component: Rows2,                       category: "General" },
  { name: "Rows3",                       component: Rows3,                       category: "General" },
  { name: "Rows4",                       component: Rows4,                       category: "General" },
  { name: "Sailboat",                    component: Sailboat,                    category: "General" },
  { name: "Satellite",                   component: Satellite,                   category: "General" },
  { name: "SatelliteDish",               component: SatelliteDish,               category: "General" },
  { name: "Scale",                       component: Scale,                       category: "General" },
  { name: "Scale3d",                     component: Scale3d,                     category: "General" },
  { name: "Scaling",                     component: Scaling,                     category: "General" },
  { name: "ScreenShare",                 component: ScreenShare,                 category: "General" },
  { name: "ScreenShareOff",              component: ScreenShareOff,              category: "General" },
  { name: "SendHorizontal",              component: SendHorizontal,              category: "General" },
  { name: "SendToBack",                  component: SendToBack,                  category: "General" },
  { name: "SeparatorHorizontal",         component: SeparatorHorizontal,         category: "General" },
  { name: "SeparatorVertical",           component: SeparatorVertical,           category: "General" },
  { name: "Shapes",                      component: Shapes,                      category: "General" },
  { name: "ShieldAlert",                 component: ShieldAlert,                 category: "General" },
  { name: "ShieldBan",                   component: ShieldBan,                   category: "General" },
  { name: "ShieldCheck",                 component: ShieldCheck,                 category: "General" },
  { name: "ShieldEllipsis",              component: ShieldEllipsis,              category: "General" },
  { name: "ShieldHalf",                  component: ShieldHalf,                  category: "General" },
  { name: "ShieldMinus",                 component: ShieldMinus,                 category: "General" },
  { name: "ShieldOff",                   component: ShieldOff,                   category: "General" },
  { name: "ShieldPlus",                  component: ShieldPlus,                  category: "General" },
  { name: "ShieldQuestion",              component: ShieldQuestion,              category: "General" },
  { name: "ShieldX",                     component: ShieldX,                     category: "General" },
  { name: "Shirt",                       component: Shirt,                       category: "General" },
  { name: "ShowerHead",                  component: ShowerHead,                  category: "General" },
  { name: "Shrub",                       component: Shrub,                       category: "General" },
  { name: "Shuffle",                     component: Shuffle,                     category: "General" },
  { name: "Sigma",                       component: Sigma,                       category: "General" },
  { name: "Signpost",                    component: Signpost,                    category: "General" },
  { name: "SignpostBig",                 component: SignpostBig,                 category: "General" },
  { name: "Siren",                       component: Siren,                       category: "General" },
  { name: "Skull",                       component: Skull,                       category: "General" },
  { name: "Slack",                       component: Slack,                       category: "General" },
  { name: "Slice",                       component: Slice,                       category: "General" },
  { name: "Smartphone",                  component: Smartphone,                  category: "General" },
  { name: "SmartphoneCharging",          component: SmartphoneCharging,          category: "General" },
  { name: "SmartphoneNfc",               component: SmartphoneNfc,               category: "General" },
  { name: "Smile",                       component: Smile,                       category: "General" },
  { name: "SmilePlus",                   component: SmilePlus,                   category: "General" },
  { name: "Sofa",                        component: Sofa,                        category: "General" },
  { name: "Space",                       component: Space,                       category: "General" },
  { name: "Spade",                       component: Spade,                       category: "General" },
  { name: "Sparkle",                     component: Sparkle,                     category: "General" },
  { name: "Sparkles",                    component: Sparkles,                    category: "General" },
  { name: "Speech",                      component: Speech,                      category: "General" },
  { name: "Spline",                      component: Spline,                      category: "General" },
  { name: "SprayCan",                    component: SprayCan,                    category: "General" },
  { name: "Squircle",                    component: Squircle,                    category: "General" },
  { name: "StarHalf",                    component: StarHalf,                    category: "General" },
  { name: "StarOff",                     component: StarOff,                     category: "General" },
  { name: "StepBack",                    component: StepBack,                    category: "General" },
  { name: "StepForward",                 component: StepForward,                 category: "General" },
  { name: "Sticker",                     component: Sticker,                     category: "General" },
  { name: "StickyNote",                  component: StickyNote,                  category: "General" },
  { name: "Store",                       component: Store,                       category: "General" },
  { name: "StretchHorizontal",           component: StretchHorizontal,           category: "General" },
  { name: "StretchVertical",             component: StretchVertical,             category: "General" },
  { name: "SwatchBook",                  component: SwatchBook,                  category: "General" },
  { name: "SwitchCamera",                component: SwitchCamera,                category: "General" },
  { name: "Sword",                       component: Sword,                       category: "General" },
  { name: "Swords",                      component: Swords,                      category: "General" },
  { name: "Tags",                        component: Tags,                        category: "General" },
  { name: "Tally1",                      component: Tally1,                      category: "General" },
  { name: "Tally2",                      component: Tally2,                      category: "General" },
  { name: "Tally3",                      component: Tally3,                      category: "General" },
  { name: "Tally4",                      component: Tally4,                      category: "General" },
  { name: "Tally5",                      component: Tally5,                      category: "General" },
  { name: "Tangent",                     component: Tangent,                     category: "General" },
  { name: "Target",                      component: Target,                      category: "General" },
  { name: "Telescope",                   component: Telescope,                   category: "General" },
  { name: "Text",                        component: Text,                        category: "General" },
  { name: "TextSearch",                  component: TextSearch,                  category: "General" },
  { name: "Thermometer",                 component: Thermometer,                 category: "General" },
  { name: "ThermometerSnowflake",        component: ThermometerSnowflake,        category: "General" },
  { name: "ThermometerSun",              component: ThermometerSun,              category: "General" },
  { name: "Ticket",                      component: Ticket,                      category: "General" },
  { name: "TicketCheck",                 component: TicketCheck,                 category: "General" },
  { name: "TicketMinus",                 component: TicketMinus,                 category: "General" },
  { name: "TicketPercent",               component: TicketPercent,               category: "General" },
  { name: "TicketPlus",                  component: TicketPlus,                  category: "General" },
  { name: "TicketSlash",                 component: TicketSlash,                 category: "General" },
  { name: "TicketX",                     component: TicketX,                     category: "General" },
  { name: "Touchpad",                    component: Touchpad,                    category: "General" },
  { name: "TouchpadOff",                 component: TouchpadOff,                 category: "General" },
  { name: "TowerControl",                component: TowerControl,                category: "General" },
  { name: "ToyBrick",                    component: ToyBrick,                    category: "General" },
  { name: "TramFront",                   component: TramFront,                   category: "General" },
  { name: "Trello",                      component: Trello,                      category: "General" },
  { name: "Trophy",                      component: Trophy,                      category: "General" },
  { name: "Tv2",                         component: Tv2,                         category: "General" },
  { name: "Twitch",                      component: Twitch,                      category: "General" },
  { name: "Twitter",                     component: Twitter,                     category: "General" },
  { name: "Type",                        component: Type,                        category: "General" },
  { name: "UnfoldHorizontal",            component: UnfoldHorizontal,            category: "General" },
  { name: "UnfoldVertical",              component: UnfoldVertical,              category: "General" },
  { name: "Ungroup",                     component: Ungroup,                     category: "General" },
  { name: "Unlink",                      component: Unlink,                      category: "General" },
  { name: "Unlink2",                     component: Unlink2,                     category: "General" },
  { name: "Unplug",                      component: Unplug,                      category: "General" },
  { name: "Usb",                         component: Usb,                         category: "General" },
  { name: "UtilityPole",                 component: UtilityPole,                 category: "General" },
  { name: "Variable",                    component: Variable,                    category: "General" },
  { name: "Vault",                       component: Vault,                       category: "General" },
  { name: "VenetianMask",                component: VenetianMask,                category: "General" },
  { name: "Vibrate",                     component: Vibrate,                     category: "General" },
  { name: "VibrateOff",                  component: VibrateOff,                  category: "General" },
  { name: "View",                        component: View,                        category: "General" },
  { name: "Voicemail",                   component: Voicemail,                   category: "General" },
  { name: "Vote",                        component: Vote,                        category: "General" },
  { name: "Wallpaper",                   component: Wallpaper,                   category: "General" },
  { name: "Wand",                        component: Wand,                        category: "General" },
  { name: "WandSparkles",                component: WandSparkles,                category: "General" },
  { name: "WashingMachine",              component: WashingMachine,              category: "General" },
  { name: "Waves",                       component: Waves,                       category: "General" },
  { name: "Webhook",                     component: Webhook,                     category: "General" },
  { name: "WebhookOff",                  component: WebhookOff,                  category: "General" },
  { name: "Weight",                      component: Weight,                      category: "General" },
  { name: "Workflow",                    component: Workflow,                    category: "General" },
  { name: "Worm",                        component: Worm,                        category: "General" },
  { name: "WrapText",                    component: WrapText,                    category: "General" },
  { name: "Youtube",                     component: Youtube,                     category: "General" },
  /* Layout (new) */
  { name: "AlignCenterHorizontal",       component: AlignCenterHorizontal,       category: "Layout" },
  { name: "AlignCenterVertical",         component: AlignCenterVertical,         category: "Layout" },
  { name: "AlignEndHorizontal",          component: AlignEndHorizontal,          category: "Layout" },
  { name: "AlignEndVertical",            component: AlignEndVertical,            category: "Layout" },
  { name: "AlignHorizontalDistributeCenter", component: AlignHorizontalDistributeCenter, category: "Layout" },
  { name: "AlignHorizontalDistributeEnd", component: AlignHorizontalDistributeEnd, category: "Layout" },
  { name: "AlignHorizontalDistributeStart", component: AlignHorizontalDistributeStart, category: "Layout" },
  { name: "AlignHorizontalJustifyCenter", component: AlignHorizontalJustifyCenter, category: "Layout" },
  { name: "AlignHorizontalJustifyEnd",   component: AlignHorizontalJustifyEnd,   category: "Layout" },
  { name: "AlignHorizontalJustifyStart", component: AlignHorizontalJustifyStart, category: "Layout" },
  { name: "AlignHorizontalSpaceAround",  component: AlignHorizontalSpaceAround,  category: "Layout" },
  { name: "AlignHorizontalSpaceBetween", component: AlignHorizontalSpaceBetween, category: "Layout" },
  { name: "AlignStartHorizontal",        component: AlignStartHorizontal,        category: "Layout" },
  { name: "AlignStartVertical",          component: AlignStartVertical,          category: "Layout" },
  { name: "AlignVerticalDistributeCenter", component: AlignVerticalDistributeCenter, category: "Layout" },
  { name: "AlignVerticalDistributeEnd",  component: AlignVerticalDistributeEnd,  category: "Layout" },
  { name: "AlignVerticalDistributeStart", component: AlignVerticalDistributeStart, category: "Layout" },
  { name: "AlignVerticalJustifyCenter",  component: AlignVerticalJustifyCenter,  category: "Layout" },
  { name: "AlignVerticalJustifyEnd",     component: AlignVerticalJustifyEnd,     category: "Layout" },
  { name: "AlignVerticalJustifyStart",   component: AlignVerticalJustifyStart,   category: "Layout" },
  { name: "AlignVerticalSpaceAround",    component: AlignVerticalSpaceAround,    category: "Layout" },
  { name: "AlignVerticalSpaceBetween",   component: AlignVerticalSpaceBetween,   category: "Layout" },
  { name: "AppWindow",                   component: AppWindow,                   category: "Layout" },
  { name: "AppWindowMac",                component: AppWindowMac,                category: "Layout" },
  { name: "BetweenHorizontalEnd",        component: BetweenHorizontalEnd,        category: "Layout" },
  { name: "BetweenHorizontalStart",      component: BetweenHorizontalStart,      category: "Layout" },
  { name: "BetweenVerticalEnd",          component: BetweenVerticalEnd,          category: "Layout" },
  { name: "BetweenVerticalStart",        component: BetweenVerticalStart,        category: "Layout" },
  { name: "FlipHorizontal",              component: FlipHorizontal,              category: "Layout" },
  { name: "FlipHorizontal2",             component: FlipHorizontal2,             category: "Layout" },
  { name: "FlipVertical",                component: FlipVertical,                category: "Layout" },
  { name: "FlipVertical2",               component: FlipVertical2,               category: "Layout" },
  { name: "Fullscreen",                  component: Fullscreen,                  category: "Layout" },
  { name: "GalleryHorizontal",           component: GalleryHorizontal,           category: "Layout" },
  { name: "GalleryHorizontalEnd",        component: GalleryHorizontalEnd,        category: "Layout" },
  { name: "GalleryThumbnails",           component: GalleryThumbnails,           category: "Layout" },
  { name: "GalleryVertical",             component: GalleryVertical,             category: "Layout" },
  { name: "GalleryVerticalEnd",          component: GalleryVerticalEnd,          category: "Layout" },
  { name: "LayoutPanelLeft",             component: LayoutPanelLeft,             category: "Layout" },
  { name: "LayoutPanelTop",              component: LayoutPanelTop,              category: "Layout" },
  { name: "LayoutTemplate",              component: LayoutTemplate,              category: "Layout" },
  { name: "PanelRightClose",             component: PanelRightClose,             category: "Layout" },
  { name: "PanelRightOpen",              component: PanelRightOpen,              category: "Layout" },
  { name: "PictureInPicture",            component: PictureInPicture,            category: "Layout" },
  { name: "PictureInPicture2",           component: PictureInPicture2,           category: "Layout" },
  { name: "Split",                       component: Split,                       category: "Layout" },
  { name: "Table",                       component: TableIcon,                       category: "Layout" },
  { name: "Table2",                      component: Table2,                      category: "Layout" },
  { name: "TableCellsMerge",             component: TableCellsMerge,             category: "Layout" },
  { name: "TableCellsSplit",             component: TableCellsSplit,             category: "Layout" },
  { name: "TableColumnsSplit",           component: TableColumnsSplit,           category: "Layout" },
  { name: "TableProperties",             component: TableProperties,             category: "Layout" },
  { name: "TableRowsSplit",              component: TableRowsSplit,              category: "Layout" },
  { name: "Tablet",                      component: Tablet,                      category: "Layout" },
  { name: "TabletSmartphone",            component: TabletSmartphone,            category: "Layout" },
  { name: "Tablets",                     component: Tablets,                     category: "Layout" },
  { name: "ToggleLeft",                  component: ToggleLeft,                  category: "Layout" },
  { name: "ToggleRight",                 component: ToggleRight,                 category: "Layout" },
  /* Maps (new) */
  { name: "Flag",                        component: Flag,                        category: "Maps" },
  { name: "FlagOff",                     component: FlagOff,                     category: "Maps" },
  { name: "FlagTriangleLeft",            component: FlagTriangleLeft,            category: "Maps" },
  { name: "FlagTriangleRight",           component: FlagTriangleRight,           category: "Maps" },
  { name: "LocateFixed",                 component: LocateFixed,                 category: "Maps" },
  { name: "LocateOff",                   component: LocateOff,                   category: "Maps" },
  { name: "MapPinOff",                   component: MapPinOff,                   category: "Maps" },
  { name: "MapPinned",                   component: MapPinned,                   category: "Maps" },
  { name: "Navigation2",                 component: Navigation2,                 category: "Maps" },
  { name: "Navigation2Off",              component: Navigation2Off,              category: "Maps" },
  { name: "NavigationOff",               component: NavigationOff,               category: "Maps" },
  { name: "Pin",                         component: Pin,                         category: "Maps" },
  { name: "PinOff",                      component: PinOff,                      category: "Maps" },
  { name: "Route",                       component: Route,                       category: "Maps" },
  { name: "RouteOff",                    component: RouteOff,                    category: "Maps" },
  { name: "Router",                      component: Router,                      category: "Maps" },
  { name: "Waypoints",                   component: Waypoints,                   category: "Maps" },
  /* Media (new) */
  { name: "Album",                       component: Album,                       category: "Media" },
  { name: "AudioLines",                  component: AudioLines,                  category: "Media" },
  { name: "AudioWaveform",               component: AudioWaveform,               category: "Media" },
  { name: "Clapperboard",                component: Clapperboard,                category: "Media" },
  { name: "Disc",                        component: Disc,                        category: "Media" },
  { name: "Disc2",                       component: Disc2,                       category: "Media" },
  { name: "Disc3",                       component: Disc3,                       category: "Media" },
  { name: "DiscAlbum",                   component: DiscAlbum,                   category: "Media" },
  { name: "Headphones",                  component: Headphones,                  category: "Media" },
  { name: "Music3",                      component: Music3,                      category: "Media" },
  { name: "Music4",                      component: Music4,                      category: "Media" },
  { name: "Speaker",                     component: Speaker,                     category: "Media" },
  /* Medical (new) */
  { name: "Ambulance",                   component: Ambulance,                   category: "Medical" },
  { name: "Biohazard",                   component: Biohazard,                   category: "Medical" },
  { name: "Bone",                        component: Bone,                        category: "Medical" },
  { name: "Brain",                       component: Brain,                       category: "Medical" },
  { name: "BrainCircuit",                component: BrainCircuit,                category: "Medical" },
  { name: "BrainCog",                    component: BrainCog,                    category: "Medical" },
  { name: "Dna",                         component: Dna,                         category: "Medical" },
  { name: "DnaOff",                      component: DnaOff,                      category: "Medical" },
  { name: "FlaskConical",                component: FlaskConical,                category: "Medical" },
  { name: "FlaskConicalOff",             component: FlaskConicalOff,             category: "Medical" },
  { name: "FlaskRound",                  component: FlaskRound,                  category: "Medical" },
  { name: "HeartCrack",                  component: HeartCrack,                  category: "Medical" },
  { name: "HeartHandshake",              component: HeartHandshake,              category: "Medical" },
  { name: "HeartPulse",                  component: HeartPulse,                  category: "Medical" },
  { name: "Hospital",                    component: Hospital,                    category: "Medical" },
  { name: "Microscope",                  component: Microscope,                  category: "Medical" },
  { name: "Pill",                        component: Pill,                        category: "Medical" },
  { name: "Stethoscope",                 component: Stethoscope,                 category: "Medical" },
  { name: "Syringe",                     component: Syringe,                     category: "Medical" },
  { name: "TestTube",                    component: TestTube,                    category: "Medical" },
  { name: "TestTubeDiagonal",            component: TestTubeDiagonal,            category: "Medical" },
  { name: "TestTubes",                   component: TestTubes,                   category: "Medical" },
  /* Nature (new) */
  { name: "Clover",                      component: Clover,                      category: "Nature" },
  { name: "Earth",                       component: Earth,                       category: "Nature" },
  { name: "EarthLock",                   component: EarthLock,                   category: "Nature" },
  { name: "Flower",                      component: Flower,                      category: "Nature" },
  { name: "Flower2",                     component: Flower2,                     category: "Nature" },
  { name: "Leaf",                        component: Leaf,                        category: "Nature" },
  { name: "LeafyGreen",                  component: LeafyGreen,                  category: "Nature" },
  { name: "Mountain",                    component: Mountain,                    category: "Nature" },
  { name: "MountainSnow",                component: MountainSnow,                category: "Nature" },
  { name: "Recycle",                     component: Recycle,                     category: "Nature" },
  { name: "Shell",                       component: Shell,                       category: "Nature" },
  { name: "Sprout",                      component: Sprout,                      category: "Nature" },
  { name: "TreeDeciduous",               component: TreeDeciduous,               category: "Nature" },
  { name: "TreePalm",                    component: TreePalm,                    category: "Nature" },
  { name: "TreePine",                    component: TreePine,                    category: "Nature" },
  { name: "Trees",                       component: Trees,                       category: "Nature" },
  /* Shapes (new) */
  { name: "CircleAlert",                 component: CircleAlert,                 category: "Shapes" },
  { name: "CircleArrowDown",             component: CircleArrowDown,             category: "Shapes" },
  { name: "CircleArrowLeft",             component: CircleArrowLeft,             category: "Shapes" },
  { name: "CircleArrowOutDownLeft",      component: CircleArrowOutDownLeft,      category: "Shapes" },
  { name: "CircleArrowOutDownRight",     component: CircleArrowOutDownRight,     category: "Shapes" },
  { name: "CircleArrowOutUpLeft",        component: CircleArrowOutUpLeft,        category: "Shapes" },
  { name: "CircleArrowOutUpRight",       component: CircleArrowOutUpRight,       category: "Shapes" },
  { name: "CircleArrowRight",            component: CircleArrowRight,            category: "Shapes" },
  { name: "CircleArrowUp",               component: CircleArrowUp,               category: "Shapes" },
  { name: "CircleCheck",                 component: CircleCheck,                 category: "Shapes" },
  { name: "CircleCheckBig",              component: CircleCheckBig,              category: "Shapes" },
  { name: "CircleChevronDown",           component: CircleChevronDown,           category: "Shapes" },
  { name: "CircleChevronLeft",           component: CircleChevronLeft,           category: "Shapes" },
  { name: "CircleChevronRight",          component: CircleChevronRight,          category: "Shapes" },
  { name: "CircleChevronUp",             component: CircleChevronUp,             category: "Shapes" },
  { name: "CircleDashed",                component: CircleDashed,                category: "Shapes" },
  { name: "CircleDivide",                component: CircleDivide,                category: "Shapes" },
  { name: "CircleDot",                   component: CircleDot,                   category: "Shapes" },
  { name: "CircleDotDashed",             component: CircleDotDashed,             category: "Shapes" },
  { name: "CircleEllipsis",              component: CircleEllipsis,              category: "Shapes" },
  { name: "CircleEqual",                 component: CircleEqual,                 category: "Shapes" },
  { name: "CircleFadingPlus",            component: CircleFadingPlus,            category: "Shapes" },
  { name: "CircleGauge",                 component: CircleGauge,                 category: "Shapes" },
  { name: "CircleHelp",                  component: CircleHelp,                  category: "Shapes" },
  { name: "CircleMinus",                 component: CircleMinus,                 category: "Shapes" },
  { name: "CircleOff",                   component: CircleOff,                   category: "Shapes" },
  { name: "CircleParking",               component: CircleParking,               category: "Shapes" },
  { name: "CircleParkingOff",            component: CircleParkingOff,            category: "Shapes" },
  { name: "CirclePause",                 component: CirclePause,                 category: "Shapes" },
  { name: "CirclePercent",               component: CirclePercent,               category: "Shapes" },
  { name: "CirclePlay",                  component: CirclePlay,                  category: "Shapes" },
  { name: "CirclePlus",                  component: CirclePlus,                  category: "Shapes" },
  { name: "CirclePower",                 component: CirclePower,                 category: "Shapes" },
  { name: "CircleSlash",                 component: CircleSlash,                 category: "Shapes" },
  { name: "CircleSlash2",                component: CircleSlash2,                category: "Shapes" },
  { name: "CircleStop",                  component: CircleStop,                  category: "Shapes" },
  { name: "CircleUser",                  component: CircleUser,                  category: "Shapes" },
  { name: "CircleUserRound",             component: CircleUserRound,             category: "Shapes" },
  { name: "CircleX",                     component: CircleX,                     category: "Shapes" },
  { name: "Cone",                        component: Cone,                        category: "Shapes" },
  { name: "Cylinder",                    component: Cylinder,                    category: "Shapes" },
  { name: "OctagonAlert",                component: OctagonAlert,                category: "Shapes" },
  { name: "OctagonPause",                component: OctagonPause,                category: "Shapes" },
  { name: "OctagonX",                    component: OctagonX,                    category: "Shapes" },
  { name: "Pyramid",                     component: Pyramid,                     category: "Shapes" },
  { name: "RectangleEllipsis",           component: RectangleEllipsis,           category: "Shapes" },
  { name: "RectangleHorizontal",         component: RectangleHorizontal,         category: "Shapes" },
  { name: "RectangleVertical",           component: RectangleVertical,           category: "Shapes" },
  { name: "SquareActivity",              component: SquareActivity,              category: "Shapes" },
  { name: "SquareArrowDown",             component: SquareArrowDown,             category: "Shapes" },
  { name: "SquareArrowDownLeft",         component: SquareArrowDownLeft,         category: "Shapes" },
  { name: "SquareArrowDownRight",        component: SquareArrowDownRight,        category: "Shapes" },
  { name: "SquareArrowLeft",             component: SquareArrowLeft,             category: "Shapes" },
  { name: "SquareArrowOutDownLeft",      component: SquareArrowOutDownLeft,      category: "Shapes" },
  { name: "SquareArrowOutDownRight",     component: SquareArrowOutDownRight,     category: "Shapes" },
  { name: "SquareArrowOutUpLeft",        component: SquareArrowOutUpLeft,        category: "Shapes" },
  { name: "SquareArrowOutUpRight",       component: SquareArrowOutUpRight,       category: "Shapes" },
  { name: "SquareArrowRight",            component: SquareArrowRight,            category: "Shapes" },
  { name: "SquareArrowUp",               component: SquareArrowUp,               category: "Shapes" },
  { name: "SquareArrowUpLeft",           component: SquareArrowUpLeft,           category: "Shapes" },
  { name: "SquareArrowUpRight",          component: SquareArrowUpRight,          category: "Shapes" },
  { name: "SquareAsterisk",              component: SquareAsterisk,              category: "Shapes" },
  { name: "SquareBottomDashedScissors",  component: SquareBottomDashedScissors,  category: "Shapes" },
  { name: "SquareCheck",                 component: SquareCheck,                 category: "Shapes" },
  { name: "SquareCheckBig",              component: SquareCheckBig,              category: "Shapes" },
  { name: "SquareChevronDown",           component: SquareChevronDown,           category: "Shapes" },
  { name: "SquareChevronLeft",           component: SquareChevronLeft,           category: "Shapes" },
  { name: "SquareChevronRight",          component: SquareChevronRight,          category: "Shapes" },
  { name: "SquareChevronUp",             component: SquareChevronUp,             category: "Shapes" },
  { name: "SquareCode",                  component: SquareCode,                  category: "Shapes" },
  { name: "SquareDashedBottom",          component: SquareDashedBottom,          category: "Shapes" },
  { name: "SquareDashedBottomCode",      component: SquareDashedBottomCode,      category: "Shapes" },
  { name: "SquareDashedKanban",          component: SquareDashedKanban,          category: "Shapes" },
  { name: "SquareDashedMousePointer",    component: SquareDashedMousePointer,    category: "Shapes" },
  { name: "SquareDivide",                component: SquareDivide,                category: "Shapes" },
  { name: "SquareDot",                   component: SquareDot,                   category: "Shapes" },
  { name: "SquareEqual",                 component: SquareEqual,                 category: "Shapes" },
  { name: "SquareFunction",              component: SquareFunction,              category: "Shapes" },
  { name: "SquareGanttChart",            component: SquareGanttChart,            category: "Shapes" },
  { name: "SquareKanban",                component: SquareKanban,                category: "Shapes" },
  { name: "SquareLibrary",               component: SquareLibrary,               category: "Shapes" },
  { name: "SquareM",                     component: SquareM,                     category: "Shapes" },
  { name: "SquareMenu",                  component: SquareMenu,                  category: "Shapes" },
  { name: "SquareMinus",                 component: SquareMinus,                 category: "Shapes" },
  { name: "SquareMousePointer",          component: SquareMousePointer,          category: "Shapes" },
  { name: "SquareParking",               component: SquareParking,               category: "Shapes" },
  { name: "SquareParkingOff",            component: SquareParkingOff,            category: "Shapes" },
  { name: "SquarePen",                   component: SquarePen,                   category: "Shapes" },
  { name: "SquarePercent",               component: SquarePercent,               category: "Shapes" },
  { name: "SquarePi",                    component: SquarePi,                    category: "Shapes" },
  { name: "SquarePilcrow",               component: SquarePilcrow,               category: "Shapes" },
  { name: "SquarePlay",                  component: SquarePlay,                  category: "Shapes" },
  { name: "SquarePlus",                  component: SquarePlus,                  category: "Shapes" },
  { name: "SquarePower",                 component: SquarePower,                 category: "Shapes" },
  { name: "SquareRadical",               component: SquareRadical,               category: "Shapes" },
  { name: "SquareScissors",              component: SquareScissors,              category: "Shapes" },
  { name: "SquareSigma",                 component: SquareSigma,                 category: "Shapes" },
  { name: "SquareSlash",                 component: SquareSlash,                 category: "Shapes" },
  { name: "SquareSplitHorizontal",       component: SquareSplitHorizontal,       category: "Shapes" },
  { name: "SquareSplitVertical",         component: SquareSplitVertical,         category: "Shapes" },
  { name: "SquareStack",                 component: SquareStack,                 category: "Shapes" },
  { name: "SquareTerminal",              component: SquareTerminal,              category: "Shapes" },
  { name: "SquareUser",                  component: SquareUser,                  category: "Shapes" },
  { name: "SquareUserRound",             component: SquareUserRound,             category: "Shapes" },
  { name: "SquareX",                     component: SquareX,                     category: "Shapes" },
  { name: "Torus",                       component: Torus,                       category: "Shapes" },
  { name: "TriangleAlert",               component: TriangleAlert,               category: "Shapes" },
  { name: "TriangleRight",               component: TriangleRight,               category: "Shapes" },
  /* System (new) */
  { name: "BugOff",                      component: BugOff,                      category: "System" },
  { name: "BugPlay",                     component: BugPlay,                     category: "System" },
  { name: "CodeXml",                     component: CodeXml,                     category: "System" },
  { name: "Codepen",                     component: Codepen,                     category: "System" },
  { name: "Codesandbox",                 component: Codesandbox,                 category: "System" },
  { name: "Command",                     component: CommandIcon,                     category: "System" },
  { name: "FilterX",                     component: FilterX,                     category: "System" },
  { name: "Key",                         component: Key,                         category: "System" },
  { name: "KeyRound",                    component: KeyRound,                    category: "System" },
  { name: "KeySquare",                   component: KeySquare,                   category: "System" },
  { name: "LoaderCircle",                component: LoaderCircle,                category: "System" },
  { name: "PowerOff",                    component: PowerOff,                    category: "System" },
  { name: "Redo2",                       component: Redo2,                       category: "System" },
  { name: "RedoDot",                     component: RedoDot,                     category: "System" },
  { name: "RefreshCcwDot",               component: RefreshCcwDot,               category: "System" },
  { name: "RefreshCwOff",                component: RefreshCwOff,                category: "System" },
  { name: "Repeat1",                     component: Repeat1,                     category: "System" },
  { name: "Rotate3d",                    component: Rotate3d,                    category: "System" },
  { name: "RotateCcwSquare",             component: RotateCcwSquare,             category: "System" },
  { name: "RotateCwSquare",              component: RotateCwSquare,              category: "System" },
  { name: "SearchCheck",                 component: SearchCheck,                 category: "System" },
  { name: "SearchCode",                  component: SearchCode,                  category: "System" },
  { name: "SearchSlash",                 component: SearchSlash,                 category: "System" },
  { name: "SearchX",                     component: SearchX,                     category: "System" },
  { name: "ServerCog",                   component: ServerCog,                   category: "System" },
  { name: "ServerCrash",                 component: ServerCrash,                 category: "System" },
  { name: "ServerOff",                   component: ServerOff,                   category: "System" },
  { name: "SlidersVertical",             component: SlidersVertical,             category: "System" },
  { name: "Undo2",                       component: Undo2,                       category: "System" },
  { name: "UndoDot",                     component: UndoDot,                     category: "System" },
  { name: "ZapOff",                      component: ZapOff,                      category: "System" },
  /* Time (new) */
  { name: "AlarmClock",                  component: AlarmClock,                  category: "Time" },
  { name: "AlarmClockCheck",             component: AlarmClockCheck,             category: "Time" },
  { name: "AlarmClockMinus",             component: AlarmClockMinus,             category: "Time" },
  { name: "AlarmClockOff",               component: AlarmClockOff,               category: "Time" },
  { name: "AlarmClockPlus",              component: AlarmClockPlus,              category: "Time" },
  { name: "AlarmSmoke",                  component: AlarmSmoke,                  category: "Time" },
  { name: "CalendarCheck2",              component: CalendarCheck2,              category: "Time" },
  { name: "CalendarClock",               component: CalendarClock,               category: "Time" },
  { name: "CalendarDays",                component: CalendarDays,                category: "Time" },
  { name: "CalendarFold",                component: CalendarFold,                category: "Time" },
  { name: "CalendarHeart",               component: CalendarHeart,               category: "Time" },
  { name: "CalendarMinus",               component: CalendarMinus,               category: "Time" },
  { name: "CalendarMinus2",              component: CalendarMinus2,              category: "Time" },
  { name: "CalendarOff",                 component: CalendarOff,                 category: "Time" },
  { name: "CalendarPlus2",               component: CalendarPlus2,               category: "Time" },
  { name: "CalendarRange",               component: CalendarRange,               category: "Time" },
  { name: "CalendarSearch",              component: CalendarSearch,              category: "Time" },
  { name: "CalendarX",                   component: CalendarX,                   category: "Time" },
  { name: "CalendarX2",                  component: CalendarX2,                  category: "Time" },
  { name: "Clock10",                     component: Clock10,                     category: "Time" },
  { name: "Clock11",                     component: Clock11,                     category: "Time" },
  { name: "Clock12",                     component: Clock12,                     category: "Time" },
  { name: "Clock2",                      component: Clock2,                      category: "Time" },
  { name: "Clock3",                      component: Clock3,                      category: "Time" },
  { name: "Clock4",                      component: Clock4,                      category: "Time" },
  { name: "Clock5",                      component: Clock5,                      category: "Time" },
  { name: "Clock6",                      component: Clock6,                      category: "Time" },
  { name: "Clock7",                      component: Clock7,                      category: "Time" },
  { name: "Clock8",                      component: Clock8,                      category: "Time" },
  { name: "Clock9",                      component: Clock9,                      category: "Time" },
  { name: "Hourglass",                   component: Hourglass,                   category: "Time" },
  { name: "Timer",                       component: Timer,                       category: "Time" },
  { name: "TimerOff",                    component: TimerOff,                    category: "Time" },
  { name: "TimerReset",                  component: TimerReset,                  category: "Time" },
  { name: "Watch",                       component: Watch,                       category: "Time" },
  /* Tools (new) */
  { name: "Anvil",                       component: Anvil,                       category: "Tools" },
  { name: "Axe",                         component: Axe,                         category: "Tools" },
  { name: "Bolt",                        component: Bolt,                        category: "Tools" },
  { name: "Brush",                       component: Brush,                       category: "Tools" },
  { name: "Drill",                       component: Drill,                       category: "Tools" },
  { name: "PaintBucket",                 component: PaintBucket,                 category: "Tools" },
  { name: "PaintRoller",                 component: PaintRoller,                 category: "Tools" },
  { name: "Paintbrush",                  component: Paintbrush,                  category: "Tools" },
  { name: "Paintbrush2",                 component: Paintbrush2,                 category: "Tools" },
  { name: "Pickaxe",                     component: Pickaxe,                     category: "Tools" },
  { name: "RollerCoaster",               component: RollerCoaster,               category: "Tools" },
  { name: "Ruler",                       component: Ruler,                       category: "Tools" },
  { name: "Scissors",                    component: Scissors,                    category: "Tools" },
  { name: "ScissorsLineDashed",          component: ScissorsLineDashed,          category: "Tools" },
  { name: "Shovel",                      component: Shovel,                      category: "Tools" },
  { name: "Stamp",                       component: Stamp,                       category: "Tools" },
  /* Transportation (new) */
  { name: "Bike",                        component: Bike,                        category: "Transportation" },
  { name: "Bus",                         component: Bus,                         category: "Transportation" },
  { name: "BusFront",                    component: BusFront,                    category: "Transportation" },
  { name: "CableCar",                    component: CableCar,                    category: "Transportation" },
  { name: "Car",                         component: Car,                         category: "Transportation" },
  { name: "CarFront",                    component: CarFront,                    category: "Transportation" },
  { name: "CarTaxiFront",                component: CarTaxiFront,                category: "Transportation" },
  { name: "Construction",                component: Construction,                category: "Transportation" },
  { name: "Fuel",                        component: Fuel,                        category: "Transportation" },
  { name: "Plane",                       component: Plane,                       category: "Transportation" },
  { name: "PlaneLanding",                component: PlaneLanding,                category: "Transportation" },
  { name: "PlaneTakeoff",                component: PlaneTakeoff,                category: "Transportation" },
  { name: "Ship",                        component: Ship,                        category: "Transportation" },
  { name: "ShipWheel",                   component: ShipWheel,                   category: "Transportation" },
  { name: "Tractor",                     component: Tractor,                     category: "Transportation" },
  { name: "TrafficCone",                 component: TrafficCone,                 category: "Transportation" },
  { name: "TrainFront",                  component: TrainFront,                  category: "Transportation" },
  { name: "TrainFrontTunnel",            component: TrainFrontTunnel,            category: "Transportation" },
  { name: "TrainTrack",                  component: TrainTrack,                  category: "Transportation" },
  { name: "Truck",                       component: Truck,                       category: "Transportation" },
  /* Typography (new) */
  { name: "AArrowDown",                  component: AArrowDown,                  category: "Typography" },
  { name: "AArrowUp",                    component: AArrowUp,                    category: "Typography" },
  { name: "ALargeSmall",                 component: ALargeSmall,                 category: "Typography" },
  { name: "Baseline",                    component: Baseline,                    category: "Typography" },
  { name: "CaseLower",                   component: CaseLower,                   category: "Typography" },
  { name: "CaseSensitive",               component: CaseSensitive,               category: "Typography" },
  { name: "CaseUpper",                   component: CaseUpper,                   category: "Typography" },
  { name: "Heading1",                    component: Heading1,                    category: "Typography" },
  { name: "Heading2",                    component: Heading2,                    category: "Typography" },
  { name: "Heading3",                    component: Heading3,                    category: "Typography" },
  { name: "Heading4",                    component: Heading4,                    category: "Typography" },
  { name: "Heading5",                    component: Heading5,                    category: "Typography" },
  { name: "Heading6",                    component: Heading6,                    category: "Typography" },
  { name: "Pilcrow",                     component: Pilcrow,                     category: "Typography" },
  { name: "Quote",                       component: Quote,                       category: "Typography" },
  { name: "RemoveFormatting",            component: RemoveFormatting,            category: "Typography" },
  { name: "SpellCheck",                  component: SpellCheck,                  category: "Typography" },
  { name: "SpellCheck2",                 component: SpellCheck2,                 category: "Typography" },
  { name: "Strikethrough",               component: Strikethrough,               category: "Typography" },
  { name: "Subscript",                   component: Subscript,                   category: "Typography" },
  { name: "Superscript",                 component: Superscript,                 category: "Typography" },
  { name: "TextCursor",                  component: TextCursor,                  category: "Typography" },
  { name: "TextCursorInput",             component: TextCursorInput,             category: "Typography" },
  { name: "TextQuote",                   component: TextQuote,                   category: "Typography" },
  { name: "TextSelect",                  component: TextSelect,                  category: "Typography" },
  { name: "Underline",                   component: Underline,                   category: "Typography" },
  { name: "WholeWord",                   component: WholeWord,                   category: "Typography" },
  /* Users (new) */
  { name: "ContactRound",                component: ContactRound,                category: "Users" },
  { name: "Group",                       component: Group,                       category: "Users" },
  { name: "PersonStanding",              component: PersonStanding,              category: "Users" },
  { name: "UserCog",                     component: UserCog,                     category: "Users" },
  { name: "UserRound",                   component: UserRound,                   category: "Users" },
  { name: "UserRoundCheck",              component: UserRoundCheck,              category: "Users" },
  { name: "UserRoundCog",                component: UserRoundCog,                category: "Users" },
  { name: "UserRoundMinus",              component: UserRoundMinus,              category: "Users" },
  { name: "UserRoundPlus",               component: UserRoundPlus,               category: "Users" },
  { name: "UserRoundSearch",             component: UserRoundSearch,             category: "Users" },
  { name: "UserRoundX",                  component: UserRoundX,                  category: "Users" },
  { name: "UserSearch",                  component: UserSearch,                  category: "Users" },
  { name: "UsersRound",                  component: UsersRound,                  category: "Users" },
  /* Weather (new) */
  { name: "Cloud",                       component: Cloud,                       category: "Weather" },
  { name: "CloudCog",                    component: CloudCog,                    category: "Weather" },
  { name: "CloudDownload",               component: CloudDownload,               category: "Weather" },
  { name: "CloudDrizzle",                component: CloudDrizzle,                category: "Weather" },
  { name: "CloudFog",                    component: CloudFog,                    category: "Weather" },
  { name: "CloudHail",                   component: CloudHail,                   category: "Weather" },
  { name: "CloudLightning",              component: CloudLightning,              category: "Weather" },
  { name: "CloudMoon",                   component: CloudMoon,                   category: "Weather" },
  { name: "CloudMoonRain",               component: CloudMoonRain,               category: "Weather" },
  { name: "CloudOff",                    component: CloudOff,                    category: "Weather" },
  { name: "CloudRain",                   component: CloudRain,                   category: "Weather" },
  { name: "CloudRainWind",               component: CloudRainWind,               category: "Weather" },
  { name: "CloudSnow",                   component: CloudSnow,                   category: "Weather" },
  { name: "CloudSun",                    component: CloudSun,                    category: "Weather" },
  { name: "CloudSunRain",                component: CloudSunRain,                category: "Weather" },
  { name: "CloudUpload",                 component: CloudUpload,                 category: "Weather" },
  { name: "Cloudy",                      component: Cloudy,                      category: "Weather" },
  { name: "Droplet",                     component: Droplet,                     category: "Weather" },
  { name: "Droplets",                    component: Droplets,                    category: "Weather" },
  { name: "Flame",                       component: Flame,                       category: "Weather" },
  { name: "FlameKindling",               component: FlameKindling,               category: "Weather" },
  { name: "Haze",                        component: Haze,                        category: "Weather" },
  { name: "MoonStar",                    component: MoonStar,                    category: "Weather" },
  { name: "Rainbow",                     component: Rainbow,                     category: "Weather" },
  { name: "Snowflake",                   component: Snowflake,                   category: "Weather" },
  { name: "Sun",                         component: Sun,                         category: "Weather" },
  { name: "SunDim",                      component: SunDim,                      category: "Weather" },
  { name: "SunMedium",                   component: SunMedium,                   category: "Weather" },
  { name: "SunMoon",                     component: SunMoon,                     category: "Weather" },
  { name: "SunSnow",                     component: SunSnow,                     category: "Weather" },
  { name: "Sunrise",                     component: Sunrise,                     category: "Weather" },
  { name: "Sunset",                      component: Sunset,                      category: "Weather" },
  { name: "Tornado",                     component: Tornado,                     category: "Weather" },
  { name: "Umbrella",                    component: Umbrella,                    category: "Weather" },
  { name: "UmbrellaOff",                 component: UmbrellaOff,                 category: "Weather" },
  { name: "Wind",                        component: Wind,                        category: "Weather" },
  /* Maps */
  { name: "MapPin",            component: MapPin,            category: "Maps" },
  { name: "Map",               component: Map,               category: "Maps" },
  { name: "Navigation",        component: Navigation,        category: "Maps" },
  { name: "Compass",           component: Compass,           category: "Maps" },
  { name: "Locate",            component: Locate,            category: "Maps" },
  /* ── Deprecated aliases (kept for search compatibility) ── */
  { name: "ActivitySquare", component: SquareActivity, category: "General" },
  { name: "AlarmCheck", component: AlarmClockCheck, category: "System" },
  { name: "AlarmMinus", component: AlarmClockMinus, category: "System" },
  { name: "AlarmPlus", component: AlarmClockPlus, category: "System" },
  { name: "AlertOctagon", component: OctagonAlert, category: "General" },
  { name: "ArrowDownAz", component: ArrowDownAZ, category: "Arrows" },
  { name: "ArrowDownCircle", component: CircleArrowDown, category: "Arrows" },
  { name: "ArrowDownLeftFromCircle", component: CircleArrowOutDownLeft, category: "Arrows" },
  { name: "ArrowDownLeftFromSquare", component: SquareArrowOutDownLeft, category: "Arrows" },
  { name: "ArrowDownLeftSquare", component: SquareArrowDownLeft, category: "Arrows" },
  { name: "ArrowDownRightFromCircle", component: CircleArrowOutDownRight, category: "Arrows" },
  { name: "ArrowDownRightFromSquare", component: SquareArrowOutDownRight, category: "Arrows" },
  { name: "ArrowDownRightSquare", component: SquareArrowDownRight, category: "Arrows" },
  { name: "ArrowDownSquare", component: SquareArrowDown, category: "Arrows" },
  { name: "ArrowDownZa", component: ArrowDownZA, category: "Arrows" },
  { name: "ArrowLeftCircle", component: CircleArrowLeft, category: "Arrows" },
  { name: "ArrowLeftSquare", component: SquareArrowLeft, category: "Arrows" },
  { name: "ArrowRightCircle", component: CircleArrowRight, category: "Arrows" },
  { name: "ArrowRightSquare", component: SquareArrowRight, category: "Arrows" },
  { name: "ArrowUpAz", component: ArrowUpAZ, category: "Arrows" },
  { name: "ArrowUpCircle", component: CircleArrowUp, category: "Arrows" },
  { name: "ArrowUpLeftFromCircle", component: CircleArrowOutUpLeft, category: "Arrows" },
  { name: "ArrowUpLeftFromSquare", component: SquareArrowOutUpLeft, category: "Arrows" },
  { name: "ArrowUpLeftSquare", component: SquareArrowUpLeft, category: "Arrows" },
  { name: "ArrowUpRightFromCircle", component: CircleArrowOutUpRight, category: "Arrows" },
  { name: "ArrowUpRightFromSquare", component: SquareArrowOutUpRight, category: "Arrows" },
  { name: "ArrowUpRightSquare", component: SquareArrowUpRight, category: "Arrows" },
  { name: "ArrowUpSquare", component: SquareArrowUp, category: "Arrows" },
  { name: "ArrowUpZa", component: ArrowUpZA, category: "Arrows" },
  { name: "AsteriskSquare", component: SquareAsterisk, category: "General" },
  { name: "Axis3D", component: Axis3d, category: "General" },
  { name: "BetweenHorizonalEnd", component: BetweenHorizontalEnd, category: "Communication" },
  { name: "BetweenHorizonalStart", component: BetweenHorizontalStart, category: "Communication" },
  { name: "BookTemplate", component: BookDashed, category: "Files" },
  { name: "CheckSquare", component: SquareCheckBig, category: "General" },
  { name: "CheckSquare2", component: SquareCheck, category: "General" },
  { name: "ChevronDownCircle", component: CircleChevronDown, category: "General" },
  { name: "ChevronDownSquare", component: SquareChevronDown, category: "General" },
  { name: "ChevronLeftCircle", component: CircleChevronLeft, category: "General" },
  { name: "ChevronLeftSquare", component: SquareChevronLeft, category: "General" },
  { name: "ChevronRightCircle", component: CircleChevronRight, category: "General" },
  { name: "ChevronRightSquare", component: SquareChevronRight, category: "General" },
  { name: "ChevronUpCircle", component: CircleChevronUp, category: "General" },
  { name: "ChevronUpSquare", component: SquareChevronUp, category: "General" },
  { name: "CircleSlashed", component: CircleSlash2, category: "General" },
  { name: "ClipboardEdit", component: ClipboardPen, category: "Files" },
  { name: "ClipboardSignature", component: ClipboardPenLine, category: "Files" },
  { name: "CodeSquare", component: SquareCode, category: "Layout" },
  { name: "Contact2", component: ContactRound, category: "Users" },
  { name: "CurlyBraces", component: Braces, category: "General" },
  { name: "DivideCircle", component: CircleDivide, category: "General" },
  { name: "DivideSquare", component: SquareDivide, category: "General" },
  { name: "DotSquare", component: SquareDot, category: "General" },
  { name: "DownloadCloud", component: CloudDownload, category: "Files" },
  { name: "EqualSquare", component: SquareEqual, category: "General" },
  { name: "FileAxis3D", component: FileAxis3d, category: "Files" },
  { name: "FileCog2", component: FileCog, category: "Files" },
  { name: "FileEdit", component: FilePen, category: "Files" },
  { name: "FileSignature", component: FilePenLine, category: "Files" },
  { name: "FolderCog2", component: FolderCog, category: "Files" },
  { name: "FolderEdit", component: FolderPen, category: "Files" },
  { name: "FormInput", component: RectangleEllipsis, category: "General" },
  { name: "FunctionSquare", component: SquareFunction, category: "Layout" },
  { name: "GanttChartSquare", component: SquareGanttChart, category: "Layout" },
  { name: "GaugeCircle", component: CircleGauge, category: "General" },
  { name: "GitCommit", component: GitCommitHorizontal, category: "System" },
  { name: "HelpingHand", component: HandHelping, category: "General" },
  { name: "IceCream", component: IceCreamCone, category: "Food & Drink" },
  { name: "IceCream2", component: IceCreamBowl, category: "Food & Drink" },
  { name: "Indent", component: IndentIncrease, category: "Layout" },
  { name: "Inspect", component: SquareMousePointer, category: "General" },
  { name: "KanbanSquare", component: SquareKanban, category: "Layout" },
  { name: "KanbanSquareDashed", component: SquareDashedKanban, category: "Layout" },
  { name: "Laptop2", component: LaptopMinimal, category: "Devices" },
  { name: "Layout", component: PanelsTopLeft, category: "Layout" },
  { name: "LibrarySquare", component: SquareLibrary, category: "Layout" },
  { name: "MSquare", component: SquareM, category: "General" },
  { name: "MenuSquare", component: SquareMenu, category: "Layout" },
  { name: "Mic2", component: MicVocal, category: "Communication" },
  { name: "MinusCircle", component: CircleMinus, category: "General" },
  { name: "MinusSquare", component: SquareMinus, category: "General" },
  { name: "MousePointerSquareDashed", component: SquareDashedMousePointer, category: "General" },
  { name: "Move3D", component: Move3d, category: "General" },
  { name: "Outdent", component: IndentDecrease, category: "Layout" },
  { name: "Palmtree", component: TreePalm, category: "Nature" },
  { name: "PanelBottomInactive", component: PanelBottomDashed, category: "Layout" },
  { name: "PanelLeftInactive", component: PanelLeftDashed, category: "Layout" },
  { name: "PanelRightInactive", component: PanelRightDashed, category: "Layout" },
  { name: "PanelTopInactive", component: PanelTopDashed, category: "Layout" },
  { name: "PanelsLeftRight", component: Columns3, category: "Layout" },
  { name: "PanelsTopBottom", component: Rows3, category: "Layout" },
  { name: "ParkingCircle", component: CircleParking, category: "Transportation" },
  { name: "ParkingCircleOff", component: CircleParkingOff, category: "Transportation" },
  { name: "ParkingSquare", component: SquareParking, category: "Transportation" },
  { name: "ParkingSquareOff", component: SquareParkingOff, category: "Transportation" },
  { name: "PauseCircle", component: CirclePause, category: "General" },
  { name: "PauseOctagon", component: OctagonPause, category: "General" },
  { name: "PenBox", component: SquarePen, category: "General" },
  { name: "PenSquare", component: SquarePen, category: "General" },
  { name: "PercentCircle", component: CirclePercent, category: "General" },
  { name: "PercentDiamond", component: DiamondPercent, category: "General" },
  { name: "PercentSquare", component: SquarePercent, category: "General" },
  { name: "PiSquare", component: SquarePi, category: "General" },
  { name: "PilcrowSquare", component: SquarePilcrow, category: "General" },
  { name: "PlayCircle", component: CirclePlay, category: "Media" },
  { name: "PlaySquare", component: SquarePlay, category: "Media" },
  { name: "PlusCircle", component: CirclePlus, category: "General" },
  { name: "PlusSquare", component: SquarePlus, category: "General" },
  { name: "PowerCircle", component: CirclePower, category: "System" },
  { name: "PowerSquare", component: SquarePower, category: "System" },
  { name: "Rotate3D", component: Rotate3d, category: "General" },
  { name: "Scale3D", component: Scale3d, category: "General" },
  { name: "School2", component: University, category: "Buildings" },
  { name: "ScissorsSquare", component: SquareScissors, category: "General" },
  { name: "ScissorsSquareDashedBottom", component: SquareBottomDashedScissors, category: "General" },
  { name: "SendHorizonal", component: SendHorizontal, category: "Communication" },
  { name: "ShieldClose", component: ShieldX, category: "General" },
  { name: "Sidebar", component: PanelLeft, category: "Layout" },
  { name: "SidebarClose", component: PanelLeftClose, category: "Layout" },
  { name: "SidebarOpen", component: PanelLeftOpen, category: "Layout" },
  { name: "SigmaSquare", component: SquareSigma, category: "General" },
  { name: "SlashSquare", component: SquareSlash, category: "General" },
  { name: "SortAsc", component: ArrowUpNarrowWide, category: "Arrows" },
  { name: "SortDesc", component: ArrowDownWideNarrow, category: "Arrows" },
  { name: "SplitSquareHorizontal", component: SquareSplitHorizontal, category: "Layout" },
  { name: "SplitSquareVertical", component: SquareSplitVertical, category: "Layout" },
  { name: "Stars", component: Sparkles, category: "General" },
  { name: "StopCircle", component: CircleStop, category: "Media" },
  { name: "Subtitles", component: Captions, category: "Communication" },
  { name: "TerminalSquare", component: SquareTerminal, category: "Layout" },
  { name: "TestTube2", component: TestTubeDiagonal, category: "General" },
  { name: "TextSelection", component: TextSelect, category: "General" },
  { name: "Train", component: TramFront, category: "Transportation" },
  { name: "UnlockKeyhole", component: LockKeyholeOpen, category: "System" },
  { name: "UploadCloud", component: CloudUpload, category: "Files" },
  { name: "User2", component: UserRound, category: "Users" },
  { name: "UserCheck2", component: UserRoundCheck, category: "Users" },
  { name: "UserCircle", component: CircleUser, category: "Users" },
  { name: "UserCircle2", component: CircleUserRound, category: "Users" },
  { name: "UserCog2", component: UserRoundCog, category: "Users" },
  { name: "UserMinus2", component: UserRoundMinus, category: "Users" },
  { name: "UserPlus2", component: UserRoundPlus, category: "Users" },
  { name: "UserSquare", component: SquareUser, category: "Users" },
  { name: "UserSquare2", component: SquareUserRound, category: "Users" },
  { name: "UserX2", component: UserRoundX, category: "Users" },
  { name: "Users2", component: UsersRound, category: "Users" },
  { name: "Verified", component: BadgeCheck, category: "Finance" },
  { name: "Wallet2", component: WalletMinimal, category: "Finance" },
  { name: "Wand2", component: WandSparkles, category: "General" },
  { name: "XOctagon", component: OctagonX, category: "General" },
  { name: "XSquare", component: SquareX, category: "General" },
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
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-3">
              <span className="px-1.5 py-0.5 rounded bg-muted">lucide-react</span>
              <span>{ICON_REGISTRY.length} icons</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-3">Icons</h1>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              SL Design System ships with <a href="https://lucide.dev" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">Lucide</a> — a clean, consistent icon family with {ICON_REGISTRY.length}+ icons ready to import. Click any icon to copy its import statement.
            </p>
          </div>
          <a
            href="https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/SL-Design-system?node-id=117-2&t=vHpjN3uTrCixVfg0-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground border border-border rounded-md px-2.5 py-1.5 transition-colors hover:border-foreground/30 shrink-0 mt-1"
          >
            <FigmaIcon />
            View in Figma
          </a>
        </div>
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

type Page = "overview" | "foundation" | "tokens" | "components" | "icons";

const navItems: { id: Page; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "overview",    label: "Overview",    icon: Home },
  { id: "foundation",  label: "Foundation",  icon: Diamond },
  { id: "tokens",      label: "Tokens",      icon: Palette },
  { id: "components",  label: "Components",  icon: Layers },
  { id: "icons",       label: "Icons",       icon: Grid2X2 },
];

export default function App() {
  const [dark, setDark] = useState(false);
  const [page, setPage] = useState<Page>(() => {
    const hash = window.location.hash.replace("#", "");
    const base = hash.split("/")[0] as Page;
    return ["overview","foundation","tokens","components","icons"].includes(base) ? base : "overview";
  });

  const navigate = (p: Page) => {
    setPage(p);
    window.location.hash = p;
  };

  React.useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const base = hash.split("/")[0] as Page;
      if (["overview","foundation","tokens","components","icons"].includes(base)) setPage(base);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

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
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sidebar-primary-foreground">
                      {/* S */}
                      <path d="M2 3.5C2 2.67 2.67 2 3.5 2H7.5C8.88 2 10 3.12 10 4.5C10 5.88 8.88 7 7.5 7H4.5C3.12 7 2 8.12 2 9.5C2 10.88 3.12 12 4.5 12H8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      {/* L */}
                      <path d="M11 2V12H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex flex-col leading-tight group-data-[collapsible=icon]:hidden">
                    <span className="font-bold text-sm text-sidebar-foreground tracking-tight">studiolammar</span>
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
                          onClick={() => navigate(id)}
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
            <div className="animate-fade-in max-w-5xl space-y-0">

              {/* Hero */}
              <div className="border-b border-border pb-14 mb-20">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
                  <span>v1.0.0</span>
                  <span className="text-border">·</span>
                  <span>SL Design System</span>
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight leading-[1.08] max-w-3xl mb-5">
                  Crafted by studiolammar.<br />
                  <span className="text-primary">Built to scale.</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-8">
                  A production-ready component library — tailored with studiolammar's brand tokens,
                  accessible by default, and built to scale across every product we ship.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Button size="lg" onClick={() => navigate("components")}>
                    Browse components <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => navigate("tokens")}>
                    View tokens
                  </Button>
                  <Button size="lg" variant="ghost" onClick={() => navigate("icons")}>
                    Icons
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
                {[
                  { label: "Components",   value: "45",   desc: "Production-ready UI blocks" },
                  { label: "Icons",        value: "1619", desc: "Lucide icon library" },
                  { label: "Tokens",       value: "130",  desc: "Color, type, spacing, radius & shadows" },
                  { label: "Themes",       value: "2",    desc: "Light & dark mode" },
                ].map(({ label, value, desc }) => (
                  <div key={label} className="bg-background px-6 py-8">
                    <p className="text-4xl font-black text-foreground tabular-nums">{value}</p>
                    <p className="text-sm font-semibold text-foreground mt-2">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Component showcase */}
              <div className="pt-20 mb-0">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight">Component showcase</h2>
                    <p className="text-sm text-muted-foreground mt-1">A live look at key building blocks</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => navigate("components")} className="gap-1.5 text-xs">
                    View all <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Buttons */}
                  <div className="border border-border rounded-xl p-5 bg-card space-y-4 hover:bg-muted/30 transition-colors">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Buttons</p>
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm">Primary</Button>
                      <Button size="sm" variant="secondary">Secondary</Button>
                      <Button size="sm" variant="ghost">Outline</Button>
                      <Button size="sm" variant="ghost">Ghost</Button>
                      <Button size="sm" variant="destructive">Destructive</Button>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="border border-border rounded-xl p-5 bg-card space-y-4 hover:bg-muted/30 transition-colors">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Badges</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="accent">Accent</Badge>
                      <Badge variant="outlined">Outlined</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outlined" className="bg-transparent border-primary/60 text-primary">Default</Badge>
                      <Badge variant="outlined" className="bg-transparent border-secondary text-secondary-foreground">Secondary</Badge>
                      <Badge variant="outlined" className="bg-transparent border-accent text-accent-foreground">Accent</Badge>
                      <Badge variant="outlined" className="bg-transparent border-destructive/60 text-destructive">Destructive</Badge>
                    </div>
                  </div>

                  {/* Brand palette */}
                  <div className="border border-border rounded-xl p-5 bg-card space-y-4 hover:bg-muted/30 transition-colors">
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
                          <p className="text-[10px] text-muted-foreground font-mono truncate">{c.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Principles */}
              <div className="pt-20 mb-0">
                <div className="mb-4">
                  <h2 className="text-xl font-bold tracking-tight">Built to last</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      icon: Layers,
                      title: "studiolammar-based",
                      desc: "Copy-paste components you own — full access to source code, zero vendor lock-in.",
                    },
                    {
                      icon: Palette,
                      title: "Brand tokens",
                      desc: "Every color, spacing, and type value is tokenized, keeping design and code in sync.",
                    },
                    {
                      icon: Zap,
                      title: "Accessible by default",
                      desc: "WAI-ARIA patterns, keyboard navigation, focus management, and screen-reader support built in.",
                    },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="border border-border rounded-xl p-6 space-y-3 bg-card hover:bg-muted/40 transition-colors">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <p className="font-semibold text-sm">{title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA strip */}
              <div className="pt-20">
              <div className="rounded-xl border border-border bg-muted/30 px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-1">
                  <h2 className="text-base font-bold">Ready to build?</h2>
                  <p className="text-sm text-muted-foreground">45 components · 1619 icons · light &amp; dark mode — all pre-themed with studiolammar's brand tokens.</p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <Button onClick={() => navigate("components")}>
                    Components <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                  <Button variant="outline" onClick={() => navigate("tokens")}>
                    Tokens
                  </Button>
                </div>
              </div>
              </div>{/* end CTA pt wrapper */}

            </div>
          )}

          {/* ── Tokens ── */}
          {page === "foundation" && <FoundationPage dark={dark} />}
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
                    <span className="font-medium text-foreground">studiolammar</span>
                  </div>
                  <p>Built with studiolammar · Tailwind CSS · React · Vite · Sharphy</p>
                </div>
              </footer>
            </div>

          </div>
        </SidebarProvider>
      </div>
    </TooltipProvider>
  );
}
