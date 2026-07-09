import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-colors outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // button-primary: black pill, the dominant CTA
        default: "rounded-full bg-primary text-primary-foreground hover:bg-primary/90",
        // button-accent-green: mint pill, reserved for brand-emphasis CTAs.
        // Text is the fixed DESIGN.md ink (not the adaptive --color-primary) —
        // mint always pairs with literal black text in both light and dark mode.
        accent: "rounded-full bg-mint text-ink hover:bg-mint/90",
        // button-secondary: outlined pill
        outline:
          "rounded-full border border-border bg-transparent text-foreground hover:bg-accent",
        secondary:
          "rounded-full border border-border bg-transparent text-foreground hover:bg-accent",
        // button-ghost: quiet rectangular ghost
        ghost: "rounded-md hover:bg-accent hover:text-accent-foreground",
        // button-link: inline text link
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2.5 has-[>svg]:px-4",
        sm: "h-8 gap-1.5 rounded-full px-3.5 has-[>svg]:px-3",
        lg: "h-11 px-6 has-[>svg]:px-5",
        icon: "size-8 rounded-full border border-border",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
