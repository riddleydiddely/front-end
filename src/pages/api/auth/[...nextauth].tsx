import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "test client id",//process.env.GOOGLE_ID,
      clientSecret: "test client secret",//process.env.GOOGLE_SECRET,
    }),
    
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)