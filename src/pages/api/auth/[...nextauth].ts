import { Account, Profile } from './../../../../node_modules/next-auth/core/types.d';
import NextAuth, { Session, User } from "next-auth"
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google"
import { fortnoxProvider } from '@/components/src/components/providers/fortnoxProvider';
import { JWT } from "next-auth/jwt";


const providers = [
  GoogleProvider<GoogleProfile>({
    clientId: process.env.GOOGLE_CLIENT_ID ?? "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
  })
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
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token, user }: { session: Session, token: JWT, user: User }): Promise<Session> {

      console.log("========== SESSION ==========")
      console.log("This is the session: " + JSON. stringify(session))
      console.log("This is the token: " + JSON. stringify(token))
      console.log("This is the user: " + JSON. stringify(user))
      return session;
    },
    
    //  async jwt({ token, account, profile }) {
    async jwt({ token, user }: { token: JWT; user?: User }): Promise<JWT> {
      // Persist the OAuth access_token and or the user id to the token right after signin
      //if (account) {
      //token.accessToken = account.access_token
      //token.id = profile.id
      console.log("========== JWT ==========")
      console.log("This is the JWT: " + JSON. stringify(token))
      console.log("This is the idToken in the JWT: " + token.idToken)
      console.log("This is the name in the JWT: " + token.name)
      console.log("This is the email in the JWT: " + token.email)
      console.log("This is the sub in the JWT: " + token.sub)
      console.log("This is the user: " + JSON. stringify(user))

      //}
      return token
    },
    // async signIn({ user, account, profile, email, credentials }: {user:User, account: Account, profile: Profile, email: string, credentials: string}) {
    //   console.log("========== signIn ==========")
    //   console.log("This is the user: " + JSON. stringify(user))
    //   console.log("This is the account: " + JSON. stringify(account))
    //   console.log("This is the profile: " + JSON. stringify(profile))
    //   console.log("This is the email: " + email)
    //   console.log("This is the credentials: " + credentials)
    //   return true
    // },
    //  async redirect({ url, baseUrl }) {
    //    // Allows relative callback URLs
    //    if (url.startsWith("/")) return `${baseUrl}/about`
    //    // Allows callback URLs on the same origin
    //    else if (new URL(url).origin === baseUrl) return baseUrl+ "/about"
    //    return baseUrl+ "/about"
    //  }

  },

}


export default NextAuth(authOptions)