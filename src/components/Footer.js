import React from 'react'

const Footer = ({ topRef }) => {

  const top = (e) => {
    e.preventDefault();
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='bg-lightgray w-full flex flex-col items-center justify-center py-10'>
      <h3 onClick={top} className='cursor-pointer font-bold text-lg mb-3 hover:opacity-60'>back to top</h3>
      <p className='text-xs lg:text-sm text-gray'>Made with ❤️, Next.js, React, & Tailwind.css</p>
      <p className='text-xs lg:text-sm text-gray'>2022 © Abigail Kaye Unating • All Rights Reserved.</p>
    </div>
  );
};

export default Footer;