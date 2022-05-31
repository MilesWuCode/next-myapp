import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials"

const login = async (email: string, password: string) => {
  const res = await fetch('http://localhost/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" }
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error('login api error')
  }

  return data.token
}

const getUser = async (token: string) => {
  const res = await fetch('http://localhost/api/me', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error('get user error')
  }

  return data.data
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      id: "credentials",
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "text", value: "miles@email.com" },
        password: { label: "Password", type: "password", value: "password" }
      },
      async authorize(credentials, req) {
        // console.log('authorize', JSON.stringify(credentials))

        if (!credentials) {
          return null
        }

        const token = await login(credentials.email, credentials.password)

        const user = await getUser(token)

        user.token = token

        return user
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log('signIn')

      if (account.provider === 'google') {
        return profile.email_verified as boolean
      }

      return true
    },
    async redirect({ url, baseUrl }) {
      // console.log('redirect', url, baseUrl)

      return baseUrl
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log('jwt', token, user, account, profile, isNewUser)

      // OAuth
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.idToken = account.id_token;
        token.provider = account.provider;
      }

      if (user) {
        token.id = user.id.toString()
        token.token = user.token
        token.name = user.name
        token.email = user.email
        token.image = user.avatar
      }

      return token
    },
    async session({ session, token, user }) {
      console.log('session', session, token, user)

      session.provider = token.provider

      // session.accessToken = token.accessToken;
      // session.refreshToken = token.refreshToken;
      // session.idToken = token.idToken;

      session.id = token.id;
      session.token = token.token
      session.user = {
        name: token?.name,
        email: token?.email,
        image: token?.image as string,
      }

      return session
    },
  },
})
