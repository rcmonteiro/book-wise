import { Text } from '@/components/ui/text'
import Link from 'next/link'
import { ComponentProps } from 'react'

interface CategoryFilterProps extends ComponentProps<'span'> {
  label: string
}

export const CategoryFilter = ({ label, ...props }: CategoryFilterProps) => {
  return (
    <Link href="#">
      <Text
        {...props}
        size="md"
        className="inline border border-purple-100 text-purple-100 rounded-2xl px-4 py-1 data-[current]:text-gray-100 data-[current]:bg-purple-200 data-[current]:border-purple-200"
      >
        {label}
      </Text>
    </Link>
  )
}
