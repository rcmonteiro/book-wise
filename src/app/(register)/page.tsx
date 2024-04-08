import logo from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import Image from 'next/image'
import githubIcon from '../../../public/assets/icons/github.svg'
import googleIcon from '../../../public/assets/icons/google.svg'
import rocketIcon from '../../../public/assets/icons/rocket.svg'

export default function Register() {
  return (
    <div className="grid grid-cols-register p-5 w-full min-h-screen">
      <div className="md:flex items-center justify-center h-full relative hidden bg-[url(/register-background.png)] bg-cover bg-bottom">
        <Image src={logo} width={232} height={58} alt="" />
      </div>
      <div className="flex flex-1 justify-center items-center px-6">
        <div className="flex flex-col min-w-96 gap-4">
          <div className="flex flex-col gap-1">
            <Heading size="lg">Boas vindas!</Heading>
            <Text as="p">Faça seu login ou acesse como visitante.</Text>
          </div>
          <Button>
            <Image src={googleIcon} alt="" width={32} height={32} />
            Entrar com Google
          </Button>
          <Button>
            <Image src={githubIcon} alt="" width={32} height={32} />
            Entrar com GitHub
          </Button>
          <Button>
            <Image src={rocketIcon} alt="" width={32} height={32} />
            Acessar como visitante
          </Button>
        </div>
      </div>
    </div>
  )
}
