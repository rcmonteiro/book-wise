import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { LucideIcon } from 'lucide-react'

interface UserStatsProps {
  label: string
  value: string
  icon: LucideIcon
}

export const UserStats = ({ label, value, icon: Icon }: UserStatsProps) => {
  return (
    <div className="flex gap-5 items-center py-5">
      <Icon size={32} className="text-green-100" />
      <div>
        <Heading size="xs" as="strong" className="text-gray-100 font-semibold">
          {value}
        </Heading>
        <Text size="sm" className="text-gray-400">
          {label}
        </Text>
      </div>
    </div>
  )
}
