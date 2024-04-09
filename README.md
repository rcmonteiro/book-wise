# Book Wise

Desafio de fim de curso de 50h da formação React na Rocketseat.

O material do desafio é este [Figma](https://www.figma.com/file/n97n6oIkXEVXblJPO3xYob/BookWise--%E2%80%A2-Desafio-React-(Copy)?type=design&node-id=547-2793&mode=design&t=IUzJ7E5MQ425xR0L-0).

Tomei algumas decisões para montar o projeto:

- Estilização com Tailwind e Tailwind Variants
- Next.js como framework para servir a aplicação
- Typescript, para ficar tudo bem tipado
- Front com React, e Back com API routes do Next
- Autenticação com NextAuth.js

## Destaques

### Desenho dos componentes

Componentes de UI bem estruturados e dinâmicos, para facilitar a estilização da aplicação, usando o `tailwind-variants` para ficar mais organizado que muitas classes em elementos HTML, exemplo para o componente básico de texto, que aceita um atributo para ser servido em diferentes elementos HTML:

```javascript
import { ComponentProps, ElementType } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

export const text = tv({
  base: 'font-default text-gray-200  leading-base',

  variants: {
    size: {
      md: 'text-md',
      sm: 'text-sm',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps
  extends ComponentProps<'span'>,
    VariantProps<typeof text> {
  as?: ElementType
}

export function Text({
  as: Tag = 'span',
  size,
  className,
  ...props
}: TextProps) {
  return <Tag {...props} className={text({ size, className })} />
}
``` 

### Base de livros

Para dar mais vida ao sistema, fiz um seed de dados usando a API de livros do Google, assim podemos navegar em livros reais completos, para simular a interação para cadastrar reviews