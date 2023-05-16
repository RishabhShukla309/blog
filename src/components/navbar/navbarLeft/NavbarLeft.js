import React from 'react'
import { ROUTES } from '@/routes/routes'
import Link from 'next/link'

const NavbarLeft = () => {
  return (
    <Link href={ROUTES.HOME}>
      <h1 className={`hidden text-xl text-monochrome-900 font-bold sm:inline-block`}>Blog Mania</h1>
    </Link>
  )
}

export default NavbarLeft
