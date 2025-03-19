"use client"
import React, { useState } from 'react'
import LogoText from '../atoms/ps-logo-text'
import Image from 'next/image'
import { navLinks } from '@/src/data/nav-links'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Inicio')

  return (
    <div className='flex justify-between items-center bg-white px-4 lg:px-24 w-full h-24'>
      <div className='flex items-center gap-2'>
        <Image src={'/ps-logo.svg'} alt='logo' width={40} height={60}/>
        <LogoText />
      </div>
      <div className='hidden md:flex items-center gap-0 sm:gap-2 lg:gap-8 xl:gap-20'>
        {navLinks.map((link) => (
          <div
            key={link}
            onClick={() => setActiveLink(link)}
            className={`navbar-link ${activeLink === link ? 'navbar-link-active' : ''}`}
          >
            {link}
          </div>
        ))}
      </div>
      <div className='flex items-center gap-1 px-2.5 py-1.5 border-2 border-gray rounded-full'>
        <Image className='cursor-pointer' src={'/menu-icon.svg'} alt='menu' width={20} height={20}/>
        <Image className='cursor-pointer' src={'/profile-icon.svg'} alt='profile' width={24} height={24}/>
      </div>
    </div>
  )
}

export default Navbar