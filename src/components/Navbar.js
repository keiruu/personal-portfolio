import React from 'react'
import logo from '../assets/aku.png'
import Image from 'next/image'


const Navbar = ({ aboutRef, contactRef }) => {

  const about = (e) => {
    e.preventDefault();
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const contact = (e) => {
    e.preventDefault();
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='flex w-full justify-evenly lg:justify-between items-center px-12 py-8'>
      <div className='w-14 lg:block hidden'>
        <Image src={logo} alt="A logo that says AKU" />
      </div>
      <ul className='flex gap-16 items-center '>
        <li onClick={about} className='cursor-pointer transition duration-200 border-b-2 border-transparent hover:border-darkgreen hover:text-darkgreen'>about</li>
        <div className='w-14 lg:hidden block'>
          <Image src={logo} alt="A logo that says AKU" />
        </div>
        <li onClick={contact} className='cursor-pointer transition duration-200 border-b-2 border-transparent hover:border-darkgreen hover:text-darkgreen'>contact</li>
      </ul>
    </div>
  );
};

export default Navbar;