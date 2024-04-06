import logo from '@/assets/logo.svg'
import { LineChart, Telescope } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Avatar } from '../ui/avatar'
import { ButtonLogInOut } from './components/button-log-in-out'
import { NavLink } from './components/navlink'

export const Sidebar = () => {
  const router = useRouter()

  const pages = [
    { label: 'Início', href: '/home', icon: <LineChart /> },
    { label: 'Explorar', href: '/explore', icon: <Telescope /> },
  ]

  const signed = true

  return (
    <aside className="fixed inset-5 flex flex-col justify-center gap-16 bg-gray-700 bg-sidebar bg-cover bg-center px-12 py-10 rounded-lg w-[232px]">
      <Image src={logo} alt="" width={128} height={32} />
      <nav className="flex flex-col flex-1 gap-4">
        {pages.map((page) => {
          return (
            <NavLink
              key={page.href}
              href={page.href}
              variant={router.pathname === page.href ? 'active' : 'default'}
            >
              {page.icon}
              {page.label}
            </NavLink>
          )
        })}
      </nav>

      {signed ? (
        <ButtonLogInOut variant="signed">
          <Avatar>
            <Image
              src="https://github.com/rcmonteiro.png"
              width={32}
              height={32}
              alt=""
            />
          </Avatar>
          Ricardo
        </ButtonLogInOut>
      ) : (
        <ButtonLogInOut variant="visitor">Fazer login</ButtonLogInOut>
      )}
    </aside>
  )
}
