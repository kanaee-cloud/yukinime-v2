import React from 'react';
import InputSearch from './InputSearch';
import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto glassmorphism px-2'>
      <div className='flex justify-between p-3 items-center'>
        {/* Logo */}
        <a href="#" className='font-semibold  text-[1.2rem] lg:text-2xl'>
        Yuki<span className='text-[#17e9e1]'>nime!</span>
        </a>
        {/* searchbar*/}
        <InputSearch />
        <button type="">
        <RxHamburgerMenu />
        </button>
      </div>
     
    </div>
  </header>
  );
};

export default Navbar;
