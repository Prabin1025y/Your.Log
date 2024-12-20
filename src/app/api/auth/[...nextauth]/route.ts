import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { prisma } from "../../../../../prisma/prisma"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        // GithubProvider({
        //     clientId: process.env.GITHUB_ID || "",
        //     clientSecret: process.env.GITHUB_SECRET || "",
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || "",
        }),
    ],
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };