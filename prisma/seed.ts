import { prisma } from '../src/lib/prisma'

const seed = async () => {
  await prisma.book.deleteMany()

  const fetchBooks = async (index: number) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=fantasy&maxResults=40&startIndex=${index}`,
    )

    const data = await response.json()
    const rawBooks = data.items

    for (const book of rawBooks) {
      if (
        book?.volumeInfo &&
        book?.volumeInfo?.pageCount &&
        book?.volumeInfo?.authors &&
        book?.volumeInfo?.categories &&
        book?.volumeInfo?.imageLinks
      ) {
        const bookBody = {
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors[0],
          category: book.volumeInfo.categories[0],
          totalPages: book.volumeInfo.pageCount,
          coverUrl: book.volumeInfo.imageLinks.thumbnail,
        }
        await prisma.book.create({
          data: {
            title: bookBody.title,
            author: bookBody.author,
            category: bookBody.category,
            totalPages: bookBody.totalPages,
            coverUrl: bookBody.coverUrl,
          },
        })
      }
    }
  }

  for (let i = 0; i <= 400; i += 40) {
    await fetchBooks(i)
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 300)),
    )
  }
}

seed().then(() => {
  prisma.$disconnect()
})
