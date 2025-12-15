import { cn } from '../../lib/utils'
import type { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <article
      className={cn(
        'relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-xl',
        className
      )}
      {...props}
    >
      {children}
    </article>
  )
}
