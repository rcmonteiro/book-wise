import NextAuth from 'next-auth'
import type { Adapter } from 'next-auth/adapters'
import GitHub from 'next-auth/providers/github'
import { PrismaAdapter } from './lib/auth/prisma-adapter'
import { prisma } from './lib/prisma'

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [GitHub],
  secret: process.env.AUTH_SECRET,
})
