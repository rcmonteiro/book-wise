import { Star } from 'lucide-react'
import { useState } from 'react'

export const StartInput = () => {
  const [value, setValue] = useState(0)

  return (
    <div className="flex flex-row-reverse ml-auto">
      {Array.from([5, 4, 3, 2, 1]).map((star) => {
        return (
          <Star
            size={28}
            key={star}
            strokeWidth={1}
            onClick={() => setValue(star)}
            className={`text-purple-100 peer peer-hover:fill-purple-100 hover:fill-purple-100 transition-colors duration-200 ease-in-out cursor-pointer ${value >= star && 'fill-purple-100'}`}
          />
        )
      })}
    </div>
  )
}
