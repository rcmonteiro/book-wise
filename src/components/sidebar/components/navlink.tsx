import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

export const navlink = tv({
  base: 'flex items-center gap-3 hover:text-gray-100 transition-colors duration-200 ease-in-out pl-4 py-2 [&>svg]:size-6',

  variants: {
    variant: {
      active: [
        'text-gray-100 font-bold relative',
        'before:left-0 before:absolute before:flex before:rounded-md before:w-1 before:h-[24px]',
        'before:bg-gradient-to-b before:from-gradientStart before:to-gradientEnd',
      ],
      default: 'text-gray-400',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

export interface NavLinkProps
  extends ComponentProps<typeof Link>,
    VariantProps<typeof navlink> {
  children: ReactNode
  href: string
}

export function NavLink({
  className,
  href,
  variant,
  children,
  ...props
}: NavLinkProps) {
  return (
    <Link href={href} {...props} className={navlink({ variant, className })}>
      {children}
    </Link>
  )
}
