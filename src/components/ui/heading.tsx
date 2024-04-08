import { ComponentProps, ElementType } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const heading = tv({
  base: 'font-default text-gray-100 leading-short font-bold flex gap-3 [&>svg]:h-8 [&>svg]:text-green-100 items-center',

  variants: {
    size: {
      lg: 'text-2xl',
      md: 'text-xl',
      sm: 'text-lg',
      xs: 'text-base',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface HeadingProps
  extends ComponentProps<'h2'>,
    VariantProps<typeof heading> {
  as?: ElementType
}

export function Heading({
  as: Tag = 'h2',
  size,
  className,
  ...props
}: HeadingProps) {
  return <Tag {...props} className={heading({ size, className })} />
}
