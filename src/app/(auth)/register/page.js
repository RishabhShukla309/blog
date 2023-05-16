'use client'
import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { Icons } from '@/components/icons'
import { ROUTES } from '@/routes/routes'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState)
  }
  return (<div className={`mx-auto flex max-w-7xl items-center justify-center p-4 lg:px-6`}>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create an account
        </h2>
      </div>
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          {/*<Button fullWidth>Log in with Google</Button>*/}
          <Button className={`flex justify-center items-center`} variant={`outlined`} fullWidth>
            <Icons.google className={`h-5 w-5 mr-3`}/>
            Register with Google
          </Button>

          <div className="flex items-center">
            <hr className="flex-grow border-t border-gray-300"/>
            <span className="mx-4">OR</span>
            <hr className="flex-grow border-t border-gray-300"/>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Full Name
            </label>
            <div className="mt-2">
              <input type="text" id="name" placeholder="Your name"
                     className="block w-full appearance-none rounded-md border border-primary-300 bg-white px-3 py-3 leading-normal focus:shadow-outline focus:border-primary-400 focus:outline-none"/>
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input type="text" id="email" placeholder="example@gmail.com"
                     className="block w-full appearance-none rounded-md border border-primary-300 bg-white px-3 py-3 leading-normal focus:shadow-outline focus:border-primary-400 focus:outline-none"/>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Type your password"
                className="block w-full appearance-none rounded-md border border-primary-300 bg-white px-3 py-3 pr-10 leading-normal focus:shadow-outline focus:border-primary-400 focus:outline-none"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="focus:outline-none"
                >
                  {showPassword ? (
                    <Icons.openEyes className="text-gray-400"/>
                  ) : (
                    <Icons.closeEyes className="text-gray-400"/>
                  )}
                </button>
              </div>
            </div>
          </div>
          <Button className={`flex justify-center`} fullWidth>Register</Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link href={ROUTES.LOGIN} className="font-semibold leading-6 text-primary-600 hover:text-primary-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  </div>)
}

export default Register
