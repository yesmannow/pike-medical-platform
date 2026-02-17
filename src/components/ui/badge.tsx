import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-border bg-background text-foreground hover:bg-primary hover:text-primary-foreground",
        primary:
          "border-primary bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/90",
        outline:
          "border-border bg-transparent text-foreground hover:bg-accent",
        success:
          "border-green-700 bg-green-600 text-white hover:bg-green-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: Readonly<BadgeProps>) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
