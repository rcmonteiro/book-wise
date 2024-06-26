import { Text } from '@/components/ui/text'
import Link from 'next/link'
import { ComponentProps } from 'react'

interface CategoryFilterProps extends ComponentProps<'span'> {
  label: string
}

export const CategoryFilter = ({ label, ...props }: CategoryFilterProps) => {
  return (
    <Link href={`/explore?page=1&category=${label}`}>
      <Text
        {...props}
        size="md"
        className="inline-block mr-2 border border-purple-100 text-purple-100 rounded-2xl px-4 py-1 data-[current=true]:text-gray-100 data-[current=true]:bg-purple-200 data-[current=true]:border-purple-200 text-nowrap"
      >
        {label}
      </Text>
    </Link>
  )
}
