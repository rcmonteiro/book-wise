import { Sidebar } from '@/components/sidebar'
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
      <body className="bg-gray-800">
        <div className="grid grid-cols-dashboard gap-24 p-5 max-w-dashboard min-h-screen">
          <Sidebar />
          <main className="flex flex-col flex-1 items-start py-14">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
