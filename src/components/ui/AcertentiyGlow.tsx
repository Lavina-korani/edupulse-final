import { cn } from '../../lib/utils'
import type { ReactNode } from 'react'

interface AcertentiyGlowProps {
  className?: string
  children: ReactNode
}

// The glow frame echoing Acertentiy UI treatments for luminous, layered surfaces.
export function AcertentiyGlow({ className, children }: AcertentiyGlowProps) {
  return (
    <div
      className={cn(
        'relative isolate overflow-hidden rounded-[40px] border border-white/20 bg-gradient-to-b from-white/10 to-transparent p-1',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-transparent opacity-70 blur-3xl" />
      <div className="relative rounded-[36px] bg-[#05060f]/80 p-6 shadow-[0_20px_65px_rgba(0,0,0,0.45)]">
        {children}
      </div>
    </div>
  )
}
