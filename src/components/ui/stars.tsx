import { Star } from 'lucide-react'
import { ComponentProps } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

export const stars = tv({
  base: 'flex gap-1',
})

export interface TextProps
  extends ComponentProps<'div'>,
    VariantProps<typeof stars> {
  count: number
}

export function Stars({ count, className, ...props }: TextProps) {
  return (
    <div {...props} className={stars({ className })}>
      {Array.from({ length: count }).map((_, index) => {
        return <Star key={index} />
      })}
    </div>
  )
}
