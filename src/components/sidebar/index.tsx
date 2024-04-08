'use client'

import logo from '@/assets/logo.svg'
import { LineChart, Telescope, UserRound } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { testUser } from '../../../test-consts'
import { Avatar } from '../ui/avatar'
import { Text } from '../ui/text'
import { ButtonLogInOut } from './components/button-log-in-out'
import { NavLink } from './components/navlink'

export const Sidebar = () => {
  const pathname = usePathname()

  const pages = [
    { label: 'Início', href: '/home', icon: <LineChart /> },
    { label: 'Explorar', href: '/explore', icon: <Telescope /> },
    { label: 'Perfil', href: '/profile', icon: <UserRound /> },
  ]

  const signed = true

  return (
    <aside className="flex flex-col bg-sidebar bg-cover px-12 py-10 m-5 rounded-lg">
      <Image src={logo} alt="" width={128} height={32} />
      <nav className="flex flex-col flex-1 gap-4 mt-16">
        {pages.map((page) => {
          return (
            <NavLink
              key={page.href}
              href={page.href}
              variant={pathname === page.href ? 'active' : 'default'}
            >
              {page.icon}
              {page.label}
            </NavLink>
          )
        })}
      </nav>

      {signed ? (
        <ButtonLogInOut variant="signed">
          <Avatar user={testUser} />
          <Text>Ricardo</Text>
        </ButtonLogInOut>
      ) : (
        <ButtonLogInOut variant="visitor">Fazer login</ButtonLogInOut>
      )}
    </aside>
  )
}
