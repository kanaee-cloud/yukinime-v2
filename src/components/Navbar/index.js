import React from 'react';
import InputSearch from './InputSearch';



const Navbar = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='lg:flex lg:justify-between p-2 items-center'>
        {/* Logo */}
        <a href="#" className='font-semibold  text-[1.2rem] lg:text-2xl'>
        Yuki<span className='text-[#F9D949]'>nime!</span>
        </a>
        {/* searchbar*/}
        <InputSearch />
      </div>
     
    </div>
  </header>
  );
};

export default Navbar;
