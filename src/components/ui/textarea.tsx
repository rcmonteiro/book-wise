import { ComponentProps, useState } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

export const textarea = tv({
  base: 'bg-gray-800 flex border border-gray-500 relative px-5 py-3',
})

export interface TextAreaProps
  extends ComponentProps<'textarea'>,
    VariantProps<typeof textarea> {
  maxLength?: number
}

export function TextArea({
  className,
  maxLength = 450,
  ...props
}: TextAreaProps) {
  const [value, setValue] = useState('')
  const length = value.length

  const handleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (length < maxLength) return setValue(event.target.value)
  }

  return (
    <div className={textarea({ className })}>
      <textarea
        {...props}
        value={value}
        onChange={handleChangeText}
        className="bg-transparent h-full flex-1 w-full focus:outline-none placeholder-gray-400 text-gray-200 text-sm resize-none"
      />
      <div className="absolute bottom-1 right-1 text-gray-400 text-xs">
        <span>{length}</span>/<span>{maxLength}</span>
      </div>
    </div>
  )
}
