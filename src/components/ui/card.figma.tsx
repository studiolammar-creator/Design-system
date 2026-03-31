import figma from "@figma/code-connect";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

/**
 * Code Connect mapping for the Card component.
 * Figma: https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/SL-Design-system?node-id=140-218
 */
figma.connect(
  Card,
  "https://www.figma.com/design/Pa10O4NTaU3tKf3whoQoWV/SL-Design-system?node-id=140-218",
  {
    props: {
      title:       figma.string("Title"),
      description: figma.string("Description"),
      hasFooter:   figma.boolean("Has Footer"),
    },
    example: ({ title, description, hasFooter }) => (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {/* card content */}
        </CardContent>
        {hasFooter && (
          <CardFooter>
            {/* footer actions */}
          </CardFooter>
        )}
      </Card>
    ),
  }
);
