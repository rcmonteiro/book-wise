import { BookType } from '@/app/api/books/route'
import { Box } from '@/components/ui/box'
import { Heading } from '@/components/ui/heading'
import { Stars } from '@/components/ui/stars'
import { Text } from '@/components/ui/text'
import Image from 'next/image'
import { testRating } from '../../../../../test-consts'

export const Book = ({ title, author, coverUrl }: BookType) => {
  return (
    <Box className="gap-8">
      <div className="grid grid-cols-book gap-5">
        <Image
          src={coverUrl}
          alt=""
          width={108}
          height={152}
          className="h-auto w-full"
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col text-left">
            <Heading size="xs">{title}</Heading>
            <Text size="sm" className="text-gray-400">
              {author}
            </Text>
          </div>
          <Stars rating={testRating.stars} />
        </div>
      </div>
    </Box>
  )
}
