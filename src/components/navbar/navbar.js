import React from 'react'
import NavbarLeft from '@/components/navbar/navbarLeft/NavbarLeft'
import NavbarRight from '@/components/navbar/navbarRight/NavbarRight'

const Navbar = () => {
  return (
    <div className={`mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6`}>
      <NavbarLeft/>
      <NavbarRight/>
    </div>
  )
}

export default Navbar
