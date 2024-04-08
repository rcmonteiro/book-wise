import { ComponentProps, ReactNode } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

export const box = tv({
  base: 'rounded-lg flex flex-col bg-gray-700',

  variants: {
    size: {
      default: 'p-6',
      sm: 'p-5',
    },
  },

  defaultVariants: {
    size: 'default',
  },
})

export interface BoxProps
  extends ComponentProps<'div'>,
    VariantProps<typeof box> {
  children: ReactNode
}

export function Box({ size, className, children, ...props }: BoxProps) {
  return (
    <div {...props} className={box({ size, className })}>
      {children}
    </div>
  )
}
