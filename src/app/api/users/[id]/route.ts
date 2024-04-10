import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const bookSchema = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  category: z.string(),
  coverUrl: z.string(),
  totalPages: z.number().positive(),
})

const bookResponseSchema = z.object({
  total: z.number().positive(),
  items: z.array(bookSchema),
})

export type BookResponse = z.infer<typeof bookResponseSchema>
export type BookType = z.infer<typeof bookSchema>

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams
  const pageIndex = Number(searchParams.get('pageIndex') ?? 0)
  const pageLimit = Number(searchParams.get('pageLimit') ?? 9)
  const category = searchParams.get('category') ?? 'Todos'
  const keyword = searchParams.get('keyword') ?? ''

  const [books, bookCount] = await Promise.all([
    prisma.book.findMany({
      select: {
        id: true,
        title: true,
        author: true,
        category: true,
        coverUrl: true,
        totalPages: true,
      },
      where: {
        ...(category !== 'Todos'
          ? {
              category: {
                equals: category,
              },
            }
          : {}),
        ...(keyword !== ''
          ? {
              title: {
                contains: keyword,
              },
            }
          : {}),
      },
      take: pageLimit,
      skip: pageIndex * pageLimit,
      orderBy: {
        title: 'asc',
      },
    }),
    prisma.book.count(),
  ])

  const response = bookResponseSchema.safeParse({
    total: bookCount,
    items: books,
  })

  if (response.success !== true) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }

  return NextResponse.json(response.data, { status: 200 })
}
