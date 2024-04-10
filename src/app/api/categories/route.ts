import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const categorySchema = z.object({
  label: z.string(),
  count: z.number(),
})

const categoryResponseSchema = z.object({
  total: z.number().positive(),
  items: z.array(categorySchema),
})

export type CategoryResponse = z.infer<typeof categoryResponseSchema>
export type CategoryType = z.infer<typeof categorySchema>

export const GET = async () => {
  const categories = await prisma.book.groupBy({
    by: ['category'],
    _count: {
      category: true,
    },
    orderBy: {
      _count: {
        category: 'desc',
      },
    },
  })

  const response = categoryResponseSchema.safeParse({
    total: categories.length,
    items: categories.map((category) => {
      return {
        label: category.category,
        count: category._count.category,
      }
    }),
  })

  if (response.success !== true) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }

  response.data.items.unshift({
    label: 'Todos',
    count: 0,
  })

  return NextResponse.json(response.data, { status: 200 })
}
