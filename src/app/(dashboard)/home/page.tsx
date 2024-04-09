import * as Wrap from '@/components/container'
import { Header } from '@/components/header'
import { LineChart } from 'lucide-react'
import { LastReadBook } from './components/last-read-book'
import { PopularBooks } from './components/popular-books'
import { ReviewList } from './components/review-list'

export default function Register() {
  return (
    <>
      <Header title="Início" icon={LineChart} />
      <Wrap.Root>
        <Wrap.Main>
          <LastReadBook />
          <ReviewList />
        </Wrap.Main>

        <Wrap.Sidebar>
          <PopularBooks />
        </Wrap.Sidebar>
      </Wrap.Root>
    </>
  )
}
