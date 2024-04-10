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
  avatar_url?: string | null
  size?: number
}

export function Avatar({
  avatar_url = null,
  size = 32,
  className,
  ...props
}: AvatarProps) {
  console.log(avatar_url)
  return (
    <div {...props} className={avatar({ className })}>
      {avatar_url ? (
        <Image src={avatar_url} width={size} height={size} alt="" />
      ) : (
        <CircleUserRound size={22} />
      )}
    </div>
  )
}
