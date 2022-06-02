import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      // console.log('middleware token', token)

      if (token) {
        return true
      } else {
        return false
      }
    },
  },
})
