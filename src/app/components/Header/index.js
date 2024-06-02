import React from 'react';
import { FaFilm } from "react-icons/fa";


const Header = () => {
  

  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <a href="#" className='font-semibold  text-[2rem]'>
        Yuki<span className='text-[#F9D949]'>nime!</span>
        </a>
        {/* button */}
        <button 
          className='btn btn-sm font-primary'
          >
            <FaFilm size={20}/>
          </button>
      </div>
    </div>
  </header>
  );
};

export default Header;
