import React from 'react'
import NavbarLeft from '@/components/navbar/navbarLeft/NavbarLeft'
import NavbarRight from '@/components/navbar/navbarRight/NavbarRight'

const Navbar = () => {
  return (<div className={`flex items-center justify-between bg-white py-4 z-10`}>
    <NavbarLeft/>
    <NavbarRight/>
  </div>)
}

export default Navbar
