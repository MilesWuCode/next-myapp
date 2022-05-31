import Head from 'next/head'
import Link from 'next/link'
import Navbar from '~/components/navbar'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const title = 'next-myapp'

interface Link {
  name: string
  path: string
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(router.asPath)
  }, [router.asPath])

  const link: Link[] = [
    { name: 'Index', path: '/' },
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
    { name: 'Profile', path: '/profile' },
    { name: 'Change Password', path: '/change-password' },
    { name: 'Todo', path: '/todo' },
    { name: 'Post', path: '/post' },
  ]

  function closeMenu(event: React.BaseSyntheticEvent) {
    document.getElementById('drawer-checkbox')?.click()
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={title} />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content={title} />
      </Head>
      <div className="drawer">
        <input id="drawer-checkbox" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar />
          <div>{children}</div>
        </div>
        <div className="drawer-side">
          <label htmlFor="drawer-checkbox" className="drawer-overlay"></label>
          <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
            {link.map((item) => {
              return (
                <li key={item.name}>
                  <Link href={item.path}>
                    <a
                      onClick={closeMenu}
                      className={classNames({
                        active: path === item.path,
                      })}
                    >
                      {item.name}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
