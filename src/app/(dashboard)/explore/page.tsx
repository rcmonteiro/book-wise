'use client'

import { BookResponse } from '@/app/api/books/route'
import { CategoryResponse } from '@/app/api/categories/route'
import * as Wrap from '@/components/container'
import { Header } from '@/components/header'
import { SearchInput } from '@/components/search-input'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { Telescope } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Book } from './components/book'
import { BookDetail } from './components/book-details'
import { CategoryFilter } from './components/category-filter'

export default function Explore() {
  const searchParams = useSearchParams()

  const currentCategory = searchParams.get('category') ?? 'Todos'

  const [searchKeyword, setSearchKeyword] = useState('')

  const getBooks = async () => {
    const response = await api.get(`/books`, {
      params: {
        pageIndex: 0,
        pageLimit: 9,
        category: currentCategory,
        keyword: searchKeyword,
      },
    })
    return response.data
  }

  const getCategories = async () => {
    const response = await api.get(`/categories`)
    return response.data
  }

  const { data: bookResponse } = useQuery<BookResponse>({
    queryKey: ['books', currentCategory, searchKeyword],
    queryFn: getBooks,
  })

  const { data: categoryResponse } = useQuery<CategoryResponse>({
    queryKey: ['categories'],
    queryFn: getCategories,
  })

  return (
    <>
      <div className="flex justify-between items-center">
        <Header title="Explorar" icon={Telescope} />
        <SearchInput onChangeValue={setSearchKeyword} />
      </div>
      <Wrap.Root layout="sigleColumn">
        <Wrap.Main>
          <ScrollArea className="w-full whitespace-nowrap pb-5 mb-5">
            <ScrollBar orientation="horizontal" />
            {categoryResponse?.items &&
              categoryResponse?.items.map((category) => {
                return (
                  <CategoryFilter
                    key={category.label}
                    data-current={currentCategory === category.label}
                    label={category.label}
                  />
                )
              })}
          </ScrollArea>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {bookResponse?.items &&
              bookResponse?.items.map((book) => {
                return (
                  <Sheet key={book.id}>
                    <SheetTrigger>
                      <Book {...book} />
                    </SheetTrigger>
                    <BookDetail {...book} />
                  </Sheet>
                )
              })}
          </div>
        </Wrap.Main>
      </Wrap.Root>
    </>
  )
}
