'use client'

import * as Wrap from '@/components/container'
import { Header } from '@/components/header'
import { SearchInput } from '@/components/search-input'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { Telescope } from 'lucide-react'
import { useState } from 'react'
import { testCategories } from '../../../../test-consts'
import { Book } from './components/book'
import { BookDetail } from './components/book-details'
import { CategoryFilter } from './components/category-filter'

export default function Explore() {
  const [currentCategory, setCurrentCategory] = useState(1)

  const handleFilterByCategory = (categoryId: number) => {
    setCurrentCategory(categoryId)
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <Header title="Explorar" icon={Telescope} />
        <SearchInput />
      </div>
      <Wrap.Root layout="sigleColumn">
        <Wrap.Main>
          <div className="flex gap-3 mb-12 mt-6">
            {testCategories.map((category) => {
              return (
                <CategoryFilter
                  onClick={() => handleFilterByCategory(category.id)}
                  key={category.id}
                  data-current={currentCategory === category.id}
                  label={category.label}
                />
              )
            })}
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
        </Wrap.Main>
      </Wrap.Root>
    </>
  )
}
