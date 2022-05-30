import type { NextPage } from 'next'
import Head from 'next/head'

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Register" />
      </Head>
      <main className="container mx-auto my-0">
        <h1 className="text-3xl">Register</h1>

        <section className="max-w-xs mx-auto">
          <form>
            <div className="w-full max-w-xs form-control">
              <label className="label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="w-full max-w-xs input input-bordered"
              />
              <label className="label">
                <span className="text-red-600 label-text-alt">error</span>
              </label>
            </div>

            <div className="w-full max-w-xs form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="text"
                placeholder="Email"
                className="w-full max-w-xs input input-bordered"
              />
              <label className="label">
                <span className="text-red-600 label-text-alt">error</span>
              </label>
            </div>

            <div className="w-full max-w-xs form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                type="text"
                placeholder="Password"
                className="w-full max-w-xs input input-bordered"
              />
              <label className="label">
                <span className="text-red-600 label-text-alt">error</span>
              </label>
            </div>

            <div className="w-full max-w-xs form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                type="text"
                placeholder="Password"
                className="w-full max-w-xs input input-bordered"
              />
              <label className="label">
                <span className="text-red-600 label-text-alt">error</span>
              </label>
            </div>

            <div className="flex justify-end space-x-2">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <button type="reset" className="btn btn-warning">
                Reset
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export default Register
