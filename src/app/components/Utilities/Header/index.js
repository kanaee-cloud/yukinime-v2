import React from 'react';



const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between p-2 items-center'>
        {/* Logo */}
        <a href="#" className='font-semibold  text-[1.2rem] lg:text-xl'>
        Yuki<span className='text-[#F9D949]'>nime!</span>
        </a>
        {/* button */}
        <input type="text" name="" value="" className='hidden lg:flex glassmorphism'/>
        <div className='flex gap-x-4'>
          <button type="">Follow Us</button>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;
