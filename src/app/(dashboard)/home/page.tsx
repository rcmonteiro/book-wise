import { Card } from '@/components/card'
import { Box } from '@/components/ui/box'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { LineChart } from 'lucide-react'

export default function Register() {
  return (
    <>
      <header className="pb-10 w-full">
        <Heading size="lg">
          <LineChart />
          Início
        </Heading>
      </header>
      <div className="flex gap-16 w-full">
        <div className="flex flex-col flex-1 gap-3">
          <Text size="sm">Avaliações mais recentes</Text>
          <Card
            variant="review"
            book={{
              title: 'O Hobbit',
              author: 'J.R.R. Tolkien',
              coverUrl: '/book.png',
            }}
            rating={{
              review:
                'Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh... ver mais',
              stars: 4,
            }}
          />
          <Box>Teste</Box>
          <Box>Teste</Box>
        </div>
        <div className="flex flex-col gap-3 w-[324px]">
          <Text size="sm">Livros populares</Text>
          <Box size="sm">Teste</Box>
          <Box size="sm">Teste</Box>
          <Box size="sm">Teste</Box>
        </div>
      </div>
    </>
  )
}
