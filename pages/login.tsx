import type { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import Head from 'next/head'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

const Login: NextPage = () => {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  const {
    setError,
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const signInResponse = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    console.log(signInResponse)

    // console.log('data', data)

    // setError('email', {
    //   type: 'server',
    //   message: '己經使用',
    // })

    // return new Promise<void>((resolve) => {
    //   setTimeout(() => {
    //     resolve()
    //   }, 2000)
    // })
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login" />
      </Head>
      <main className="container mx-auto my-0">
        <h1 className="text-3xl">Login</h1>

        <section className="max-w-xs mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full max-w-xs form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="text"
                placeholder="Email"
                value="miles123@email.com"
                autoComplete="username"
                className="w-full max-w-xs input input-bordered"
                {...register('email', {
                  required: { value: true, message: '必填' },
                  pattern: { value: regexEmail, message: '格式錯誤' },
                })}
              />
              {errors.email && (
                <label className="label">
                  <span className="text-red-600 label-text-alt">
                    {errors.email.message}
                  </span>
                </label>
              )}
            </div>

            <div className="w-full max-w-xs form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value="password"
                autoComplete="current-password"
                className="w-full max-w-xs input input-bordered"
                {...register('password', {
                  required: { value: true, message: '必填' },
                  minLength: { value: 8, message: '最少8字元' },
                  maxLength: { value: 20, message: '最多20字元' },
                })}
              />
              {errors.password && (
                <label className="label">
                  <span className="text-red-600 label-text-alt">
                    {errors.password.message}
                  </span>
                </label>
              )}
            </div>

            <div className="flex justify-end mt-4 space-x-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-success"
              >
                Submit
              </button>
              <button
                type="reset"
                onClick={() => reset()}
                className="btn btn-warning"
              >
                Reset
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export default Login
