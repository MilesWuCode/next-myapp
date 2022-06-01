import NextAuth, { DefaultSession } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id?: string | null
      name?: string | null
      email?: string | null
      image?: string | null
      token?: string | null
    }
  }

  interface User {
    id?: string | null
    name?: string | null
    email?: string | null
    avatar?: string | null
    token?: string | null
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    id?: string | null
    name?: string | null
    email?: string | null
    avatar?: string | null
    token?: string | null
    /** OpenID ID Token */
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
  }
}
