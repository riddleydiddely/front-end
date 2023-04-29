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

      return session;
    },

    async jwt({ token, user }: { token: JWT; user?: User }): Promise<JWT> {


      return token
    },
    async signIn({ user }: { user: User }): Promise<boolean> {
      const allowed_emails: string[] = ["donny.ho@getriddle.com", "kyle.rowley@getriddle.com", "dieu.donny.ho@gmail.com", "dhtechnologyconsulting@gmail.com"]

      return allowed_emails.includes(user.email ?? '')
    }
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