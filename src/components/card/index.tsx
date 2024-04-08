import Image from 'next/image'
import Link from 'next/link'
import { Box } from '../ui/box'
import { Heading } from '../ui/heading'
import { Stars } from '../ui/stars'
import { Text } from '../ui/text'
import { UserHeader } from '../user-header'

interface BookProps {
  title: string
  author?: string
  coverUrl: string
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
  variant: 'sidebar' | 'review'
}

export const Card = ({ book, rating, variant, user, updatedAt }: CardProps) => {
  return (
    <Box className="gap-8">
      {!!user && (
        <div className="flex justify-between">
          <UserHeader className="mb-8" updatedAt={updatedAt} user={user} />

          {!!rating?.stars && variant === 'review' && (
            <Stars rating={rating.stars} />
          )}
        </div>
      )}
      <div
        className={`grid ${variant === 'review' ? 'grid-cols-book' : 'grid-cols-bookSmall'} gap-5`}
      >
        <Image
          src={book.coverUrl}
          alt=""
          width={variant === 'review' ? 108 : 64}
          height={152}
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <Heading size="xs">{book.title}</Heading>
            <Text size="sm" className="text-gray-400">
              {book.author}
            </Text>
          </div>
          {!!rating && variant === 'review' && (
            <Text
              as="span"
              size="sm"
              className="text-gray-300 inline align-bottom"
            >
              {rating?.review}
              {` `}
              <Link className="text-purple-100 font-semibold" href="#">
                ver mais
              </Link>
            </Text>
          )}
          {!!rating?.stars && variant === 'sidebar' && (
            <Stars rating={rating.stars} />
          )}
        </div>
      </div>
    </Box>
  )
}
