import { Box } from '@/components/ui/box'
import { Heading } from '@/components/ui/heading'
import { Stars } from '@/components/ui/stars'
import { Text } from '@/components/ui/text'
import Image from 'next/image'
import { testBook, testRating } from '../../../../../test-consts'

export const Book = () => {
  return (
    <Box className="gap-8">
      <div className="grid grid-cols-book gap-5">
        <Image src={testBook.coverUrl} alt="" width={108} height={152} />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <Heading size="xs">{testBook.title}</Heading>
            <Text size="sm" className="text-gray-400">
              {testBook.author}
            </Text>
          </div>
          <Stars rating={testRating.stars} />
        </div>
      </div>
    </Box>
  )
}
