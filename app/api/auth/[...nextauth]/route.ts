import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
        name: 'credentials',
        credentials: {
            email: { label: 'email', type: 'text'},
            password: { label: 'password', type: 'password'}
        },
        async authorize(credentials) {
            if (!credentials?.email || !credentials?.password) {
                throw new Error("Invalid credentials")
            }

            const user = await prisma.user.findUnique({
                where: {
                    email: credentials.email
                }
            })

            if(!user || !user.hashedPassword) {
                throw new Error('Invalid credentials')
            }

            const isCorrect = await bcrypt.compare(
                credentials.password,
                user.hashedPassword
            )

            if(!isCorrect) {
                throw new Error('Invalid credentials')
            }

            return user
        }
    })
  ],
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }