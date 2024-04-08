import { Box } from '@/components/ui/box'
import { Heading } from '@/components/ui/heading'
import { Stars } from '@/components/ui/stars'
import { Text } from '@/components/ui/text'
import Image from 'next/image'
import { Fragment } from 'react'
import { testBook, testRating } from '../../../../../test-consts'

export const UserReviewList = () => {
  return (
    <div className="mb-10 flex flex-col gap-3">
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <Fragment key={index}>
            <Text size="sm">Há dois dias</Text>
            <Box key={index} className="gap-8">
              <div className="grid grid-cols-book gap-5">
                <Image
                  src={testBook.coverUrl}
                  alt=""
                  width={108}
                  height={152}
                />
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col">
                    <Heading size="sm">{testBook.title}</Heading>
                    <Text size="sm" className="text-gray-400">
                      {testBook.author}
                    </Text>
                  </div>
                  <Stars rating={testRating.stars} />
                </div>
              </div>
              <Text size="sm" className="text-gray-300">
                {testRating.review}
              </Text>
            </Box>
          </Fragment>
        )
      })}
    </div>
  )
}
