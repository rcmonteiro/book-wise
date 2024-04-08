import { ComponentProps, ElementType } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

export const text = tv({
  base: 'font-default text-gray-200 leading-base text-left',

  variants: {
    size: {
      lg: 'text-xl',
      md: 'text-base',
      sm: 'text-sm',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps
  extends ComponentProps<'span'>,
    VariantProps<typeof text> {
  as?: ElementType
}

export function Text({
  as: Tag = 'span',
  size,
  className,
  ...props
}: TextProps) {
  return <Tag {...props} className={text({ size, className })} />
}
