import logo from '@/assets/logo.svg'
import { auth } from 'auth'
import { redirect } from 'next/navigation'

import Image from 'next/image'

import { SignInButtons } from './components/sign-in-buttons'

export default async function Register() {
  const session = await auth()

  if (session) {
    return redirect('/home')
  }

  return (
    <div className="grid grid-cols-register p-5 w-full min-h-screen">
      <div className="md:flex items-center justify-center h-full relative hidden bg-[url(/register-background.png)] bg-cover bg-bottom">
        <Image src={logo} width={232} height={58} alt="" />
      </div>
      <div className="flex flex-1 justify-center items-center px-6">
        <SignInButtons />
      </div>
    </div>
  )
}
