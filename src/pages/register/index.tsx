import logo from '@/assets/logo.svg'
import registerImage from '@/assets/register-background.png'
import { Text } from '@/components/ui/text'
import Image from 'next/image'

export default function Register() {
  return (
    <div className="flex bg-gray-800 w-full h-screen">
      <div>
        <Image src={logo} width={232} height={58} alt="" />
        <Image src={registerImage} width={598} height={912} alt="" />
      </div>
      <div>
        <h1 className="text-4xl">Boas vindas!</h1>
        <Text as="p">Faça seu login ou acesse como visitante.</Text>
      </div>
    </div>
  )
}
