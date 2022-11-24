import React from 'react'
import logo from '../assets/aku.svg'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='flex w-full justify-evenly lg:justify-between items-center px-12 py-8'>
      <div className='w-14 lg:block hidden'>
        <Image src={logo} alt="A logo that says AKU" />
      </div>
      <ul className='flex gap-16 items-center '>
        <li className='cursor-pointer transition duration-200 border-b-2 border-transparent hover:border-darkgreen hover:text-darkgreen'>about</li>
        <div className='w-14 lg:hidden block'>
          <Image src={logo} alt="A logo that says AKU" />
        </div>
        <li className='cursor-pointer transition duration-200 border-b-2 border-transparent hover:border-darkgreen hover:text-darkgreen'>contact</li>
      </ul>
    </div>
  )
}
