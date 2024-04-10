'use client'

import debouce from 'lodash.debounce'
import { Search } from 'lucide-react'
import { ChangeEvent, useCallback, useEffect, useMemo } from 'react'

interface SearchInputProps {
  onChangeValue: (value: string) => void
}

export const SearchInput = ({ onChangeValue }: SearchInputProps) => {
  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChangeValue(event.target.value)
    },
    [onChangeValue],
  )

  const debouncedResults = useMemo(() => {
    return debouce(handleInputChange, 500)
  }, [handleInputChange])

  useEffect(() => {
    return () => {
      debouncedResults.cancel()
    }
  })

  return (
    <div className="flex w-full justify-between items-center border border-gray-500 rounded-md px-5 py-3 mb-8 max-w-96 focus-within:border-purple-100 focus-within:ring-4  focus-within:ring-purple-50 ">
      <input
        className="flex-1 bg-transparent placeholder:text-gray-400 text-gray-200 outline-none"
        placeholder="Buscar livro avaliado"
        onChange={debouncedResults}
      />
      <Search size={20} className="text-gray-500" />
    </div>
  )
}
