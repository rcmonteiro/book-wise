import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Heading } from '@/components/ui/heading'
import { SheetContent } from '@/components/ui/sheet'
import { Stars } from '@/components/ui/stars'
import { Text } from '@/components/ui/text'
import { UserHeader } from '@/components/user-header'
import { BookOpen, Bookmark } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import githubIcon from '../../../../../public/assets/icons/github.svg'
import googleIcon from '../../../../../public/assets/icons/google.svg'
import { testBook, testRating, testUser } from '../../../../../test-consts'
import { BookInfo } from './book-info'
import { FormRating } from './form-rating'

export const BookDetail = () => {
  return (
    <>
      <SheetContent className="border-0 px-12 w-[660px] sm:w-[660px] overflow-y-scroll">
        <Dialog>
          <Box className="mt-4">
            <div className="grid grid-cols-book gap-5">
              <Image src={testBook.coverUrl} alt="" width={108} height={152} />
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <Heading size="sm">{testBook.title}</Heading>
                  <Text size="md" className="text-gray-400">
                    {testBook.author}
                  </Text>
                </div>
                <div className="flex-1 content-end">
                  <Stars rating={testRating.stars} />
                  <Text size="sm" className="text-gray-400">
                    3 avaliações
                  </Text>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-600 mt-10 pt-6 flex gap-14">
              <BookInfo
                label="Categoria"
                value="Computação, educação"
                icon={Bookmark}
              />
              <BookInfo label="Páginas" value="160" icon={BookOpen} />
            </div>
          </Box>

          <div className="my-10 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Text size="sm">Avaliações</Text>
              <DialogTrigger>
                <Text
                  size="sm"
                  className="text-purple-100 font-semibold flex items-center justify-between"
                >
                  Avaliar
                </Text>
              </DialogTrigger>
            </div>
            <FormRating />

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

                  <div className="flex flex-col gap-5">
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
                </Box>
              )
            })}
          </div>
          <DialogContent className="bg-gray-700 py-12 px-16 border-0 justify-center">
            <div className="flex flex-col min-w-96 gap-4">
              <div className="flex flex-col gap-1 items-center mb-4">
                <Heading size="lg">Boas vindas!</Heading>
                <Text as="p">Faça seu login ou acesse como visitante.</Text>
              </div>
              <Button>
                <Image src={googleIcon} alt="" width={32} height={32} />
                Entrar com Google
              </Button>
              <Button>
                <Image src={githubIcon} alt="" width={32} height={32} />
                Entrar com GitHub
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </SheetContent>
    </>
  )
}
