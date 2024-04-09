import { Search } from 'lucide-react'

export const SearchInput = () => {
  return (
    <div className="flex w-full justify-between items-center border border-gray-500 rounded-md px-5 py-3 mb-8 max-w-96">
      <input
        className="flex-1 bg-transparent placeholder:text-gray-400 text-gray-200"
        placeholder="Buscar livro avaliado"
      />
      <Search size={20} className="text-gray-500" />
    </div>
  )
}
