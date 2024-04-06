import { ComponentProps, ElementType } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const heading = tv({
  base: 'font-default text-gray-100 leading-short font-bold',

  variants: {
    size: {
      lg: 'text-lg',
      md: 'text-md',
      sm: 'text-sm',
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
