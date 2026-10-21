import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: "center" | "left"
  className?: string
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {eyebrow ? <div className={cn("eyebrow mb-4", light && "border-white/15 bg-white/8 text-white")}>{eyebrow}</div> : null}
      <h2 className={cn("heading-section", light ? "text-white" : "text-zinc-900")}>{title}</h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-relaxed", light ? "text-zinc-400" : "text-zinc-600")}>{description}</p>
      ) : null}
    </div>
  )
}
