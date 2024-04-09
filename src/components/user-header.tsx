import '@/lib/dayjs'
import dayjs from 'dayjs'
import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { Avatar } from './ui/avatar'
import { Text } from './ui/text'

export const userHeader = tv({
  base: 'flex items-center gap-4',
})

export interface UserHeaderProps
  extends ComponentProps<'div'>,
    VariantProps<typeof userHeader> {
  user: {
    name: string
    avatarUrl?: string
  }
  updatedAt?: Date
}

export const UserHeader = ({
  user,
  updatedAt,
  className,
  ...props
}: UserHeaderProps) => {
  return (
    <div {...props} className={userHeader(className)}>
      <Avatar user={user} size={40} className="size-10" />
      <div className="flex flex-col">
        <Text size="md">{user.name}</Text>
        {!!updatedAt && (
          <Text size="sm" className="text-gray-400">
            {dayjs(updatedAt).fromNow()}
          </Text>
        )}
      </div>
    </div>
  )
}
