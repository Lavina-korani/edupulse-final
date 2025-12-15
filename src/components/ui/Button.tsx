import { cn } from '../../lib/utils'
import type { ButtonHTMLAttributes } from 'react'

const variantStyles: Record<string, string> = {
  primary: 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
  ghost: 'border border-white/30 text-white bg-white/5 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white',
  outline: 'border border-white/30 text-white/80 hover:text-white hover:border-white'
}

const sizeStyles: Record<string, string> = {
  sm: 'px-4 py-2 text-sm font-semibold',
  md: 'px-6 py-3 text-base font-semibold',
  lg: 'px-8 py-3.5 text-lg font-semibold'
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variantStyles
  size?: keyof typeof sizeStyles
}

// Button structure draws inspiration from shadcn/ui for consistent spacing and focus behavior.
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full transition duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-offset-2',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  )
}
