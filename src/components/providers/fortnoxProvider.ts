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
  clientId: "**",
  clientSecret: "**=",
  authorization: {
    url: "https://apps.fortnox.se/oauth-v1/auth",
    params: {
      scope: "bookkeeping salary",
      client_id: "**",
      redirect_uri: "http://localhost:3000/",
      access_type: "offline",
      response_type: "code",
      account_type: "service",
    }
  },
  token: {
    params: {
      client_id: "**",
      scope: "bookkeeping",
      access_type: "offline",
      response_type: "code",
      account_type: "service",
    }
  },
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

