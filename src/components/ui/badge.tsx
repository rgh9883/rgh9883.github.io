import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-sm border border-transparent px-1.5 py-0.5 text-xs font-medium whitespace-nowrap",
  {
    variants: {
      variant: {
        // coral pill for standout tags. Fixed ink text, not the adaptive
        // --color-primary — coral always pairs with the same dark text.
        default: "rounded-full bg-coral px-2 text-ink",
        // badge-type: neutral surface tag, set in Geist Mono like a type signature
        secondary: "bg-secondary font-mono text-muted-foreground",
        // badge-tag: outlined neutral tag
        outline: "border-border text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
