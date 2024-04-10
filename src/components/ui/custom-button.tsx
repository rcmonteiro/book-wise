'use client'

import { ComponentProps, ReactNode } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

export const button = tv({
  base: [
    'rounded-lg flex w-full gap-5 items-center font-default transition-colors duration-200 ease-in-out',
    'text-gray-200  bg-gray-600 hover:bg-gray-500',
  ],

  variants: {
    variant: {
      icon: 'text-lg p-2 rounded-sm',
      large: 'rounded-lg text-md py-5 px-6 font-bold',
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

export function CustomButton({
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
