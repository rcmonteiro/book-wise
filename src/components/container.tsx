import { ComponentProps, ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const root = tv({
  base: 'w-full',

  variants: {
    layout: {
      withSidebar: 'grid grid-cols-1 xl:grid-cols-profile gap-16',
      sigleColumn: '',
    },
  },

  defaultVariants: {
    layout: 'withSidebar',
  },
})

export interface RootProps
  extends ComponentProps<'div'>,
    VariantProps<typeof root> {
  children: ReactNode
}

export const Root = ({ layout, children, className, ...props }: RootProps) => {
  return (
    <div {...props} className={root({ layout, className })}>
      {children}
    </div>
  )
}

interface MainProps {
  children: ReactNode
}
export const Main = ({ children }: MainProps) => {
  return <div className="flex flex-col flex-1">{children}</div>
}

interface SidebarProps {
  children: ReactNode
}
export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className="flex-col gap-3 w-[324px] xl:flex hidden">{children}</div>
  )
}
