import { Heading } from '@/components/ui/heading'
import { LineChart } from 'lucide-react'
import { LastReadBook } from './components/last-read-book'
import { PopularBooks } from './components/popular-books'
import { ReviewList } from './components/review-list'

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
          <LastReadBook />
          <ReviewList />
        </div>

        <div className="flex-col gap-3 w-[324px] xl:flex hidden">
          <PopularBooks />
        </div>
      </div>
    </>
  )
}
