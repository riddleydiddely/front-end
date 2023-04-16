import NextAuth from "next-auth"
import { OAuthConfig } from "next-auth/providers"
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google"
import { fortnoxProfile, fortnoxProvider } from '@/components/src/components/providers/fortnoxProvider';


const providers = [
  GoogleProvider<GoogleProfile>({
    clientId: process.env.GOOGLE_CLIENT_ID ?? "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
  }),
  fortnoxProvider
]

// const pages = {
//   signIn: '/auth/signin',
//   signOut: '/auth/signout',
//   error: '/auth/error', // Error code passed in query string as ?error=
//   verifyRequest: '/auth/verify-request', // (used for check email message)
//   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
// }

export const authOptions = {
  providers: providers,
  // callbacks: {
  //   async jwt({ token, account, profile }) {
  //     // Persist the OAuth access_token and or the user id to the token right after signin
  //     if (account) {
  //       token.accessToken = account.access_token
  //       token.id = profile.id
  //       console.log("token: " + token)
  //     }
  //     return token
  //   },
  //   async redirect({ url, baseUrl }) {
  //     // Allows relative callback URLs
  //     if (url.startsWith("/")) return `${baseUrl}/about`
  //     // Allows callback URLs on the same origin
  //     else if (new URL(url).origin === baseUrl) return baseUrl+ "/about"
  //     return baseUrl+ "/about"
  //   }
         
  // },

}


export default NextAuth(authOptions)