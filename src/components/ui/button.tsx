import { ComponentProps, ReactNode } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

export const button = tv({
  base: 'py-5 px-6 rounded-lg flex gap-5 items-center font-default text-gray-200 font-bold bg-gray-600 hover:bg-gray-500 transition-colors duration-200 ease-in-out',

  variants: {
    variant: {
      icon: 'text-lg',
      large: 'text-md',
    },
  },

  defaultVariants: {
    variant: 'large',
  },
})

export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {
  children: ReactNode
}

export function Button({
  variant,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={button({ variant, className })}>
      {children}
    </button>
  )
}
