'use client'

import { CustomButton } from '@/components/ui/custom-button'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import githubIcon from '../../../../public/assets/icons/github.svg'
import googleIcon from '../../../../public/assets/icons/google.svg'
import rocketIcon from '../../../../public/assets/icons/rocket.svg'

export const SignInButtons = () => {
  return (
    <div className="flex flex-col min-w-96 gap-4">
      <div className="flex flex-col gap-1">
        <Heading size="lg">Boas vindas!</Heading>
        <Text as="p">Faça seu login ou acesse como visitante.</Text>
      </div>
      <CustomButton>
        <Image src={googleIcon} alt="" width={32} height={32} />
        Entrar com Google
      </CustomButton>
      <CustomButton onClick={() => signIn('github')}>
        <Image src={githubIcon} alt="" width={32} height={32} />
        Entrar com GitHub
      </CustomButton>
      <CustomButton>
        <Image src={rocketIcon} alt="" width={32} height={32} />
        Acessar como visitante
      </CustomButton>
    </div>
  )
}
