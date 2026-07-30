"use client"

import {useRouter } from "next/navigation";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
     const router = useRouter()

    const handleClick = ()  => {
     router.push("/"); 
    }
    const handleLogo = () => {
        router.push("/")
      
    }
    
    
    
  
    return (
       

        <nav className=' h-16 bg-purple-700 px-3 flex justify-between items-center text-white'>
            <div onClick={handleLogo}  className='hover:cursor-pointer logo font-bold text-lg flex gap-1'>
               <Image   className = "  rounded-2xl " src="/Logo.jpg" alt='Logo' width={16} height={10}/>
               <p   className=" "> shortLinks</p>
            </div>
            <div className='flex gap-4'>

            <ul className='flex justify-center gap-4 items-center text-sm'>
                <li><Link href="/">Home </Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link onClick={handleClick} href="/shorten">Shorten</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
            </ul>
            <li className="list-none flex gap-4">
                <Link href="/shorten"><button className=' bg-purple-500 rounded-lg  shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
                <Link href="/github"><button className=' bg-purple-500 rounded-lg  shadow-lg p-3 py-1 font-bold'>GitHub</button></Link>
            </li>
            </div>
        </nav>
      
    ) 
}

export default Navbar;