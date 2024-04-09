import { ElementType } from 'react'
import { Heading } from './ui/heading'

interface HeaderProps {
  title: string
  icon: ElementType
}

export const Header = ({ title, icon: Icon }: HeaderProps) => {
  return (
    <header className="pb-10 w-full">
      <Heading size="lg">
        <Icon />
        {title}
      </Heading>
    </header>
  )
}
