'use client'

import logo from '@/assets/logo.svg'
import { LineChart, Telescope, UserRound } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Avatar } from '../ui/avatar'
import { Text } from '../ui/text'
import { ButtonLogInOut } from './components/button-log-in-out'
import { NavLink } from './components/navlink'

export const Sidebar = () => {
  const pathname = usePathname()
  const { data: session, status } = useSession()

  const pages = [
    { label: 'Início', href: '/home', icon: <LineChart /> },
    { label: 'Explorar', href: '/explore', icon: <Telescope /> },
    { label: 'Perfil', href: '/profile', icon: <UserRound /> },
  ]

  const signed = status === 'authenticated'
  if (signed) {
    if (session?.user?.id) {
      localStorage.setItem('@bookwise:userId', session.user.id)
    }

    if (localStorage.getItem('@bookwise:userId')) {
      console.log(`/users/${localStorage.getItem('@bookwise:userId')}`)
    }
  }
  return (
    <aside className="flex flex-col bg-sidebar bg-cover px-12 py-10 m-5 rounded-lg">
      <Image src={logo} alt="" width={128} height={32} className="h-auto" />
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
          <Avatar avatar_url={session?.user?.image} />
          <Text>{session?.user?.name}</Text>
        </ButtonLogInOut>
      ) : (
        <ButtonLogInOut variant="visitor">Fazer login</ButtonLogInOut>
      )}
    </aside>
  )
}
