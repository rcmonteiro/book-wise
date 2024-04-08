import { CircleUserRound } from 'lucide-react'
import Image from 'next/image'
import { ComponentProps } from 'react'
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
  user: {
    name: string
    avatarUrl?: string
  }
  size?: number
}

export function Avatar({ user, size = 32, className, ...props }: AvatarProps) {
  return (
    <div {...props} className={avatar({ className })}>
      {user?.avatarUrl ? (
        <Image src={user.avatarUrl} width={size} height={size} alt="" />
      ) : (
        <CircleUserRound size={22} />
      )}
    </div>
  )
}
