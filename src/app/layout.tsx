import '@/styles/globals.css'
import { Nunito_Sans } from 'next/font/google'

const nunito = Nunito_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nunito.className} antialiased`}>
      <body className="bg-gray-800">{children}</body>
    </html>
  )
}
