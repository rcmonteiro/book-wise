import { Avatar } from '@/components/ui/avatar'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import {
  BookOpen,
  Bookmark,
  LibraryBig,
  LineChart,
  Search,
  UsersRound,
} from 'lucide-react'
import { testUser } from '../../../../test-consts'
import { UserReviewList } from './components/user-review-list'
import { UserStats } from './components/user-stats'

export default function Register() {
  return (
    <>
      <header className="pb-10 w-full">
        <Heading size="lg">
          <LineChart />
          Início
        </Heading>
      </header>
      <div className="grid grid-cols-profile gap-16 w-full">
        <div className="flex flex-col flex-1">
          <div className="flex w-full justify-between items-center border border-gray-500 rounded-md px-5 py-3 mb-8">
            <input
              className="flex-1 bg-transparent placeholder:text-gray-400 text-gray-200"
              placeholder="Buscar livro avaliado"
            />
            <Search size={20} className="text-gray-500" />
          </div>
          <UserReviewList />
        </div>

        <div className="flex-col gap-3 w-[324px] xl:flex hidden">
          <div className="flex flex-col border-l border-gray-700 w-full items-center">
            <Avatar className="size-20 mb-5" user={testUser} size={72} />
            <Heading size="md">{testUser.name}</Heading>
            <Text size="sm" className="text-gray-400">
              membro desde 2019
            </Text>
            <hr className="my-10 bg-gradient-to-r from-gradientStart to-gradientEnd h-1 w-10 rounded-md block" />
            <div className="flex flex-col">
              <UserStats label="Páginas lidas" value="3863" icon={BookOpen} />
              <UserStats
                label="Livros avaliados"
                value="10"
                icon={LibraryBig}
              />
              <UserStats label="Autores" value="8" icon={UsersRound} />
              <UserStats
                label="Categoria mais lida"
                value="Computação"
                icon={Bookmark}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
