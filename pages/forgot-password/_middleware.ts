import type { NextRequest } from 'next/server'
import type { JWT } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req: NextRequest & { nextauth: { token: JWT } }) {
    console.log(req.nextauth.token)

    if (req.nextauth.token) return NextResponse.redirect(new URL('/', req.url))

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log(token)

        return true
      },
    },
  }
)
