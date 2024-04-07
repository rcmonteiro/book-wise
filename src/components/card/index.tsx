import Image from 'next/image'
import { Avatar } from '../ui/avatar'
import { Box } from '../ui/box'
import { Heading } from '../ui/heading'
import { Text } from '../ui/text'

interface BookProps {
  title: string
  author?: string
  coverUrl: string
  description?: string
}

interface UserProps {
  name: string
  avatarUrl: string
}

interface RatingProps {
  stars: number
  review?: string
}

interface CardProps {
  book: BookProps
  user?: UserProps
  rating?: RatingProps
  updatedAt?: Date
  variant: 'small' | 'review'
}

export const Card = ({ book, user, rating, updatedAt }: CardProps) => {
  return (
    <Box>
      <div>
        {!!user && (
          <div>
            <Avatar />
            <div>
              <Heading>{user.name}</Heading>
              <Text>{updatedAt?.toISOString()}</Text>
            </div>
          </div>
        )}
        <div>estrelas</div>
        <div className="grid grid-cols-card [&>img]:row-span-3 items-start gap-3 [&>span]:text-gray-400">
          <Image src={book.coverUrl} alt="" width={108} height={152} />
          <Heading size="xs">{book.title}</Heading>
          <Text size="sm">{book.author}</Text>
          {!!rating && <Text size="sm">{rating.review}</Text>}
        </div>
      </div>
    </Box>
  )
}
