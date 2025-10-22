'use client'
import { navbarSchema } from '@/model/NavbarSchema'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const Navitem = ({name, href}:navbarSchema) => {
    const path = usePathname();
  return (
    <Link href={href}>
      <span className={`relative text-lg ml-4 before:content-[''] before:absolute before:bg-blue-500 before:left-0 before:-bottom-1 before:h-[2px] before:w-0  before:transition-all ${
        path === href ? "before:w-full" : "hover:before:w-full"
      }`}>{name}</span>
    </Link>
  );
}

export default Navitem
