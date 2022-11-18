import React from 'react'
import logo from '../assets/aku.svg'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='flex'>
      <Image src={logo} alt="A logo that says AKU" />
      <div>
        <ul>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  )
}
