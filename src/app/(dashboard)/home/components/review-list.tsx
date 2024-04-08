import { Box } from '@/components/ui/box'
import { Heading } from '@/components/ui/heading'
import { Stars } from '@/components/ui/stars'
import { Text } from '@/components/ui/text'
import { UserHeader } from '@/components/user-header'
import Image from 'next/image'
import Link from 'next/link'
import { testBook, testRating, testUser } from '../../../../../test-consts'

export const ReviewList = () => {
  return (
    <div className="mb-10 flex flex-col gap-3">
      <Text size="sm">Avaliações mais recentes</Text>
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <Box key={index} className="gap-8">
            <div className="flex justify-between">
              <UserHeader
                className="mb-8"
                updatedAt={new Date()}
                user={testUser}
              />

              <Stars rating={testRating.stars} />
            </div>

            <div className="grid grid-cols-book gap-5">
              <Image src={testBook.coverUrl} alt="" width={108} height={152} />
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <Heading size="xs">{testBook.title}</Heading>
                  <Text size="sm" className="text-gray-400">
                    {testBook.author}
                  </Text>
                </div>

                <Text
                  as="span"
                  size="sm"
                  className="text-gray-300 inline align-bottom"
                >
                  {testRating.review}
                  <Link className="text-purple-100 font-semibold" href="#">
                    ver mais
                  </Link>
                </Text>
              </div>
            </div>
          </Box>
        )
      })}
    </div>
  )
}
