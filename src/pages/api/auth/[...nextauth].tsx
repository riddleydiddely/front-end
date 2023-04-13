import NextAuth from "next-auth"
import { OAuthUserConfig } from "next-auth/providers"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google"



const providers = [GoogleProvider<GoogleProfile>({
  clientId: process.env.GOOGLE_CLIENT_ID ?? "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
})]

const pages = {
  signIn: '/auth/signin',
  signOut: '/auth/signout',
  error: '/auth/error', // Error code passed in query string as ?error=
  verifyRequest: '/auth/verify-request', // (used for check email message)
  newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
}

export const authOptions = { providers: providers }
export default NextAuth(authOptions)