import { CircleUserRound } from 'lucide-react'
import { ComponentProps, ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const avatar = tv({
  base: [
    'bg-gradient-to-r from-gradientStart to-gradientEnd p-px rounded-full size-8 flex aspect-square items-center justify-center',
    '[&>img]:rounded-full',
    '[&>svg]:text-gray-600',
  ],
})

export interface AvatarProps
  extends ComponentProps<'div'>,
    VariantProps<typeof avatar> {
  children?: ReactNode
}

export function Avatar({ className, children, ...props }: AvatarProps) {
  return (
    <div {...props} className={avatar({ className })}>
      {typeof children === 'object' ? children : <CircleUserRound size={22} />}
    </div>
  )
}
