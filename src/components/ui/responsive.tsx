import * as React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, maxWidth = 'xl', ...props }, ref) => {
    const maxWidthClasses = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg', 
      xl: 'max-w-7xl',
      '2xl': 'max-w-2xl',
      full: 'max-w-full'
    }

    return (
      <div
        ref={ref}
        className={cn(
          'mx-auto px-4 sm:px-6 lg:px-8',
          maxWidthClasses[maxWidth],
          className
        )}
        {...props}
      />
    )
  }
)
Container.displayName = 'Container'

interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: {
    default?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: number | string
}

const ResponsiveGrid = React.forwardRef<HTMLDivElement, ResponsiveGridProps>(
  ({ className, cols = { default: 1, sm: 2, lg: 3 }, gap = 6, ...props }, ref) => {
    const gridClasses = []
    
    if (cols.default) gridClasses.push(`grid-cols-${cols.default}`)
    if (cols.sm) gridClasses.push(`sm:grid-cols-${cols.sm}`)
    if (cols.md) gridClasses.push(`md:grid-cols-${cols.md}`)
    if (cols.lg) gridClasses.push(`lg:grid-cols-${cols.lg}`)
    if (cols.xl) gridClasses.push(`xl:grid-cols-${cols.xl}`)

    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          ...gridClasses,
          `gap-${gap}`,
          className
        )}
        {...props}
      />
    )
  }
)
ResponsiveGrid.displayName = 'ResponsiveGrid'

export { Container, ResponsiveGrid }