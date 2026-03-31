import figma from "@figma/code-connect";
import { Badge } from "@/components/ui/badge";

/**
 * Code Connect mapping for the Badge component.
 * Figma: https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/SL-Design-system?node-id=127-715
 */
figma.connect(
  Badge,
  "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/SL-Design-system?node-id=127-715",
  {
    props: {
      variant: figma.enum("Variant", {
        Default:     "default",
        Secondary:   "secondary",
        Accent:      "accent",
        Destructive: "destructive",
        Success:     "success",
        Outlined:    "outlined",
        Info:        "info",
        Warning:     "warning",
        Neutral:     "neutral",
      }),
      label: figma.string("Label"),
    },
    example: ({ variant, label }) => (
      <Badge variant={variant}>{label}</Badge>
    ),
  }
);
