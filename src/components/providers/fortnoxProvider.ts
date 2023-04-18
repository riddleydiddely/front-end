import { TokenSet } from "next-auth"
import { OAuthConfig } from "next-auth/providers"


export interface fortnoxProfile extends Record<string, any> {
  id: String
}

export const fortnoxProvider: OAuthConfig<fortnoxProfile> =
{
  id: "fortnox",
  name: "Fortnox",
  type: "oauth",
  version: "2",
  clientId: process.env.FORTNOX_CLIENT_ID,
  clientSecret: process.env.FORTNOX_CLIENT_SECRET,
  accessTokenUrl: 'https://apps.fortnox.se/oauth-v1/token',
  requestTokenUrl: 'https://apps.fortnox.se/oauth-v1/token',
  authorization: {
    url: "https://apps.fortnox.se/oauth-v1/auth",
    params: {
      scope: "bookkeeping salary",
      redirect_uri: "http://localhost:3000/api/hello",
      access_type: "offline",
      response_type: "code",
      account_type: "service",
    }
  },
  // token: {
  //   params: {
  //     scope: "bookkeeping",
  //     access_type: "offline",
  //     response_type: "code",
  //     account_type: "service",
  //   }
  // },
  idToken: true,
  checks: ['pkce', 'state'],
  profile(profile: fortnoxProfile, tokens: TokenSet) {
    return {
      id: "test_profile_id",
    }
  },

  style: {
    logo: "/fortnox.jpeg",
    logoDark: "/fortnox.jpeg",
    bgDark: "#fff",
    bg: "#fff",
    text: "#000",
    textDark: "#000",
  }
};

