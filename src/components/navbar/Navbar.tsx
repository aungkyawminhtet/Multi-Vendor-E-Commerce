'use client'
import { NavbarItems, NabarRihtItems } from '@/data/Navbar-items'
import Link from 'next/link'
import React, { useState } from 'react'
import Navitem from './Navitem'
import Sidebar from '../sidebar/Sidebar'
import { MenuIcon, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='flex justify-between items-center py-3.5 px-6 border-b-1 shadow-lg z-30'>
        <Link href="/">
            <span className='font-bold text-xl'>Shoopy Ak</span>
        </Link>
        <Sidebar isopen={isOpen} onOpenChange={setIsOpen} />
        <div className='hidden md:flex gap-3'>
            {
                NavbarItems.map((item, index) => <Navitem key={index} {...item} />)
            }
        </div>
        <div className='hidden md:flex gap-3'>
            {
                NabarRihtItems.map((item, index) => <Navitem key={index} {...item} />)
            }
        </div>
        <div className='flex md:hidden' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> :<MenuIcon />}
        </div>
    </nav>
  )
}

export default Navbar
