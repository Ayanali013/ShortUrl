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
            <div onClick={handleLogo}  className=' active:translate-y-0.5  hover:cursor-pointer logo font-bold text-lg flex gap-1'>
               <Image   className = "  rounded-2xl w-7 h-7   " src="/Logo.jpg" alt='Logo' width={16} height={16}/>
               <p   className=" "> shortLinks</p>
            </div>
            <div className='flex gap-4'>

            <ul className='flex justify-center gap-4 items-center text-sm'>
                <li><Link className= "hover:text-blue-200" href="/">Home </Link></li>
                <li><Link className= "hover:text-blue-200" href="/about">About</Link></li>
                <li><Link className= "hover:text-blue-200" onClick={handleClick} href="/shorten">Shorten</Link></li>
                <li><Link className= "hover:text-blue-200" href="/contact">Contact Us</Link></li>
            </ul>
            <li className="list-none flex gap-4">
                <Link href="/shorten"><button className=' bg-purple-500 rounded-lg active:translate-y-0.75  shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
                <Link href="/github"><button className=' bg-purple-500 rounded-lg active:translate-y-0.75  shadow-lg p-3 py-1 font-bold'>GitHub</button></Link>
            </li>
            </div>
        </nav>
      
    ) 
}

export default Navbar;