import React from 'react';
import InputSearch from './InputSearch';
import UserAction from './UserAction';




const Navbar = () => {
  
  return (
  <header className='py-8'>
    <div className='container mx-auto glassmorphism px-2'>
      <div className='flex gap-x-4 justify-between p-3 items-center'>
        {/* Logo */}
        <a href="#" className='font-semibold  text-[1.2rem] lg:text-2xl'>
        Yuki<span className='text-color-accent'>nime!</span>
        </a>
        {/* searchbar*/}
        <InputSearch />
        <UserAction />
      </div>
     
    </div>
  </header>
  );
};

export default Navbar;
