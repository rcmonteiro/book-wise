import { Box } from '@/components/ui/box'
import { Heading } from '@/components/ui/heading'
import { Stars } from '@/components/ui/stars'
import { Text } from '@/components/ui/text'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { testBook, testRating } from '../../../../../test-consts'

export const PopularBooks = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Text size="sm">Livros populares</Text>
        <Link href="#">
          <Text
            size="sm"
            className="text-purple-100 font-semibold flex items-center justify-between"
          >
            Ver todos <ChevronRight />
          </Text>
        </Link>
      </div>
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <Box key={index} className="gap-8">
            <div className="grid grid-cols-bookSmall gap-5">
              <Image src={testBook.coverUrl} alt="" width={64} height={94} />
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
      })}
    </>
  )
}
