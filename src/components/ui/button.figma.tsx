import figma from "@figma/code-connect";
import { Button } from "@/components/ui/button";

/**
 * Code Connect mapping for the Button component.
 * Figma: https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/SL-Design-system?node-id=47-2
 */
figma.connect(
  Button,
  "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/SL-Design-system?node-id=47-2",
  {
    props: {
      variant: figma.enum("Variant", {
        Default:     "default",
        Secondary:   "secondary",
        Accent:      "accent",
        Destructive: "destructive",
        Outline:     "outline",
        Ghost:       "ghost",
        Link:        "link",
      }),
      size: figma.enum("Size", {
        Default: "default",
        Small:   "sm",
        Large:   "lg",
        Icon:    "icon",
      }),
      label: figma.string("Label"),
      disabled: figma.boolean("Disabled"),
    },
    example: ({ variant, size, label, disabled }) => (
      <Button variant={variant} size={size} disabled={disabled}>
        {label}
      </Button>
    ),
  }
);
