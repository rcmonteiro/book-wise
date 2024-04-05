import githubIcon from '@/assets/icons/github.svg'
import googleIcon from '@/assets/icons/google.svg'
import rocketIcon from '@/assets/icons/rocket.svg'
import logo from '@/assets/logo.svg'
import registerImage from '@/assets/register-background.png'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import Image from 'next/image'

export default function Register() {
  return (
    <div className="flex  w-full h-screen p-5">
      <div className="relative w-[598px] hidden lg:block">
        <Image
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={logo}
          width={232}
          height={58}
          alt=""
        />
        <Image
          className="rounded-md h-full object-cover"
          src={registerImage}
          width={598}
          height={912}
          alt=""
        />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col gap-4 w-[372px] m-auto">
          <div className="flex flex-col mb-6 gap-1">
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
