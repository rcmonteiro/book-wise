import { Star } from 'lucide-react'
import { ComponentProps } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

export const stars = tv({
  base: 'flex gap-1',
})

export interface TextProps
  extends ComponentProps<'div'>,
    VariantProps<typeof stars> {
  rating: number
}

export function Stars({ rating, className, ...props }: TextProps) {
  return (
    <div {...props} className={stars({ className })}>
      {Array.from({ length: 5 }).map((_, index) => {
        return rating >= index + 1 ? (
          <Star
            size={16}
            key={index}
            className="text-purple-100 fill-purple-100"
          />
        ) : (
          <Star size={16} key={index} className="text-purple-100" />
        )
      })}
    </div>
  )
}
