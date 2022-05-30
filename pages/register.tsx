import type { NextPage } from 'next'
import Head from 'next/head'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  password: string
  comfirm_password: string
}

const Register: NextPage = () => {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  const {
    setError,
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'all' })

  console.log('errors', errors)

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('data', data)

    setError('email', {
      type: 'server',
      message: '己經使用',
    })
  }

  const name = register('name', {
    required: { value: true, message: '必填' },
    maxLength: { value: 20, message: '最多20字元' },
  })

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Register" />
      </Head>
      <main className="container mx-auto my-0">
        <h1 className="text-3xl">Register</h1>

        <section className="max-w-xs mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full max-w-xs form-control">
              <label className="label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="w-full max-w-xs input input-bordered"
                name={name.name}
                onBlur={name.onBlur}
                onChange={name.onChange}
                ref={name.ref}
              />
              {errors.name && (
                <label className="label">
                  <span className="text-red-600 label-text-alt">
                    {errors.name.message}
                  </span>
                </label>
              )}
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

            <div className="w-full max-w-xs form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Comfirm Password</span>
              </label>
              <input
                id="comfirm_password"
                type="password"
                placeholder="Comfirm Password"
                className="w-full max-w-xs input input-bordered"
                {...register('comfirm_password', {
                  required: { value: true, message: '必填' },
                  validate: (value: string) => {
                    if (watch('password') !== value) {
                      return '不符合密碼'
                    }
                  },
                })}
              />
              {errors.comfirm_password && (
                <label className="label">
                  <span className="text-red-600 label-text-alt">
                    {errors.comfirm_password.message}
                  </span>
                </label>
              )}
            </div>

            <div className="flex justify-end mt-4 space-x-2">
              <button type="submit" className="btn btn-success">
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

export default Register
