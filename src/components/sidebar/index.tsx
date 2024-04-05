import logo from '@/assets/logo.svg'
import { Binoculars, ChartLineUp } from '@phosphor-icons/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ButtonLogInOut } from './components/button-log-in-out'
import { NavLink } from './components/navlink'

export const Sidebar = () => {
  const router = useRouter()

  const pages = [
    { label: 'Início', href: '/home', icon: <ChartLineUp /> },
    { label: 'Explorar', href: '/explore', icon: <Binoculars /> },
  ]

  const signed = true

  return (
    <div className="flex flex-col w-[232px] bg-sidebar justify-center rounded-lg h-screen bg-top bg-gray-700 px-12 py-10 gap-16">
      <Image src={logo} alt="" width={128} height={32} />
      <nav className="flex flex-col gap-4 flex-1">
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
          {/* <Image
            src="http://github.com/rcmonteiro.png"
            width={32}
            height={32}
            alt=""
          /> */}
          Ricardo Monteiro
        </ButtonLogInOut>
      ) : (
        <ButtonLogInOut variant="visitor">Fazer login</ButtonLogInOut>
      )}
    </div>
  )
}
