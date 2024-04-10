import { Sidebar } from '@/components/sidebar'
import '@/lib/dayjs'
import { QueryClientProviderContext } from '@/lib/query-client-provider'
import '@/styles/globals.css'
import { auth } from 'auth'
import { SessionProvider } from 'next-auth/react'
import { Nunito_Sans } from 'next/font/google'
const nunito = Nunito_Sans({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  return (
    <html lang="en" className={`${nunito.className} antialiased`}>
      <body className="bg-gray-800 dark">
        <SessionProvider session={session}>
          <div className="grid grid-cols-dashboard gap-4 xl:gap-12 2xl:gap-24 h-screen">
            <Sidebar />
            <main className="flex flex-1 w-full items-start overflow-y-scroll">
              <div className="flex flex-col py-14 px-5 max-w-screen-2xl w-full">
                <QueryClientProviderContext>
                  {children}
                </QueryClientProviderContext>
              </div>
            </main>
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
