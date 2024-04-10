import { Box } from '@/components/ui/box'
import { CustomButton } from '@/components/ui/custom-button'
import { TextArea } from '@/components/ui/textarea'
import { UserHeader } from '@/components/user-header'
import { Check, X } from 'lucide-react'
import { testUser } from '../../../../../test-consts'
import { StartInput } from './star-input'

export const FormRating = () => {
  return (
    <Box>
      <div className="flex mb-6">
        <UserHeader user={testUser} />
        <StartInput />
      </div>
      <TextArea
        className="h-32"
        maxLength={200}
        placeholder="Escreva sua avaliação"
      />
      <div className="ml-auto mt-3 flex gap-2">
        <CustomButton variant="icon" className="text-purple-100">
          <X strokeWidth={1} size={24} />
        </CustomButton>
        <CustomButton variant="icon" className="text-green-100">
          <Check strokeWidth={1} size={24} />
        </CustomButton>
      </div>
    </Box>
  )
}
