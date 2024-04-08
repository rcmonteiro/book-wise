import { Sidebar } from '@/components/sidebar'
import '@/lib/dayjs'
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
        <div className="grid grid-cols-dashboard gap-4 xl:gap-12 2xl:gap-24 h-screen">
          <Sidebar />
          <main className="flex flex-1 w-full items-start overflow-y-scroll">
            <div className="flex flex-col py-14 px-5 max-w-dashboard w-full">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
