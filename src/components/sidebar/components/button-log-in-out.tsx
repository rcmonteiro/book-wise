import { SignIn } from '@phosphor-icons/react'
import { ComponentProps, ReactNode } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

export const buttonLogInOut = tv({
  base: 'flex items-center m-auto gap-3 hover:text-gray-200 text-gray-100 transition-colors duration-200 ease-in-out leading-base',

  variants: {
    variant: {
      visitor: 'text-md [&>svg]:fill-green-100',
      signed: 'text-sm [&>svg]:fill-danger',
    },
  },

  defaultVariants: {
    variant: 'visitor',
  },
})

export interface ButtonLogInOutProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonLogInOut> {
  children: ReactNode
}

export function ButtonLogInOut({
  className,
  variant,
  children,
  ...props
}: ButtonLogInOutProps) {
  return (
    <button {...props} className={buttonLogInOut({ variant, className })}>
      {children}
      <SignIn size={20} />
    </button>
  )
}
