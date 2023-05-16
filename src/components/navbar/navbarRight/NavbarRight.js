'use client'
import React from 'react'
import Link from 'next/link'
import { ROUTES } from '@/routes/routes'
import Button from '@/components/ui/Button'

const NavbarRight = () => {
  const hello = () => {
    console.log(`hello`)
  }
  return (<div>
    <Link href={ROUTES.LOGIN}>
      {/*<button className={`rounded-lg border border-primary-800 hover:border-primary-900 text-primary-900 px-4 py-2`}>Log in</button>*/}
      <Button variant={`outlined`} onClick={hello}>Login</Button>
    </Link>
    <Link href={ROUTES.REGISTER}>
      {/*<button className={`transition-all rounded-lg bg-primary-700 hover:bg-primary-800 text-primary-100 px-4 py-2 ml-4`}>Register</button>*/}
      <Button className={`ml-4`}>Register</Button>
    </Link>
  </div>)
}

export default NavbarRight
