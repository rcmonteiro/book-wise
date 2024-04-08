import { Heading } from '@/components/ui/heading'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { Search, Telescope } from 'lucide-react'
import { Book } from './components/book'
import { BookDetail } from './components/book-details'
import { CategoryFilter } from './components/category-filter'

export default function Register() {
  return (
    <>
      <div className="flex justify-between items-center">
        <Heading size="lg">
          <Telescope />
          Explorar
        </Heading>
        <div className="flex w-full justify-between items-center border border-gray-500 rounded-md px-5 py-3 mb-8 max-w-96">
          <input
            className="flex-1 bg-transparent placeholder:text-gray-400 text-gray-200"
            placeholder="Buscar livro avaliado"
          />
          <Search size={20} className="text-gray-500" />
        </div>
      </div>

      <div className="flex gap-3 mb-12 mt-6">
        <CategoryFilter data-current label="Tudo" />
        <CategoryFilter label="Computação" />
        <CategoryFilter label="Fantasia" />
        <CategoryFilter label="Horror" />
        <CategoryFilter label="HQs" />
        <CategoryFilter label="Suspense" />
        <CategoryFilter label="Ficção científica" />
      </div>
      <Sheet>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {Array.from({ length: 15 }).map((_, index) => {
            return (
              <SheetTrigger key={index}>
                <Book />
              </SheetTrigger>
            )
          })}
        </div>
        <BookDetail />
      </Sheet>
    </>
  )
}
