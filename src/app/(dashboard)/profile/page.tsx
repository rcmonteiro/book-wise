import * as Wrap from '@/components/container'
import { Header } from '@/components/header'
import { SearchInput } from '@/components/search-input'
import { Avatar } from '@/components/ui/avatar'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import {
  BookOpen,
  Bookmark,
  LibraryBig,
  UserRound,
  UsersRound,
} from 'lucide-react'
import { testUser } from '../../../../test-consts'
import { UserReviewList } from './components/user-review-list'
import { UserStats } from './components/user-stats'

export default function Register() {
  return (
    <>
      <Header title="Perfil" icon={UserRound} />
      <Wrap.Root>
        <Wrap.Main>
          <div className="flex flex-col flex-1">
            <SearchInput />
            <UserReviewList />
          </div>
        </Wrap.Main>
        <Wrap.Sidebar>
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
        </Wrap.Sidebar>
      </Wrap.Root>
    </>
  )
}
