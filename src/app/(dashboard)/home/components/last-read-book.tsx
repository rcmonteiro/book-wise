import { Box } from '@/components/ui/box'
import { Heading } from '@/components/ui/heading'
import { Stars } from '@/components/ui/stars'
import { Text } from '@/components/ui/text'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { testBook, testRating } from '../../../../../test-consts'

export const LastReadBook = () => {
  return (
    <div className="mb-10 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <Text size="sm">Sua última leitura</Text>
        <Link href="#">
          <Text
            size="sm"
            className="text-purple-100 font-semibold flex items-center justify-between"
          >
            Ver todas <ChevronRight />
          </Text>
        </Link>
      </div>
      <Box className="gap-8">
        <div className="grid grid-cols-book gap-5">
          <Image src={testBook.coverUrl} alt="" width={108} height={152} />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="flex justify-between mb-2">
                <Text size="sm" className="text-gray-300">
                  Há 2 dias
                </Text>
                <Stars rating={testRating.stars} />
              </div>
              <Heading size="xs">{testBook.title}</Heading>
              <Text size="sm" className="text-gray-400 mb-4">
                {testBook.author}
              </Text>
              <Text size="sm" className="text-gray-400">
                {testRating.review}
              </Text>
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}
