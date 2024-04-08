import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { LucideIcon } from 'lucide-react'

interface BookInfoProps {
  label: string
  value: string
  icon: LucideIcon
}

export const BookInfo = ({ label, value, icon: Icon }: BookInfoProps) => {
  return (
    <div className="flex gap-5 items-center py-5">
      <Icon size={24} className="text-green-100" />
      <div>
        <Text size="sm" className="text-gray-400">
          {label}
        </Text>
        <Heading size="xs" as="strong" className="text-gray-100 font-semibold">
          {value}
        </Heading>
      </div>
    </div>
  )
}
