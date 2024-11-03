"use client"
import React from 'react';
import InputSearch from './InputSearch';
import UserAction from './UserAction';
import WelcomePage from "../WelcomePage/index";
import { usePathname } from 'next/navigation';
import { getAnimeResponse } from '../../app/libs/api-libs';
import NavDashboard from '../NavDashboard';





const Navbar = ({ user }) => {
  const pathname = usePathname()

  const noNavbarPaths = [
    /^\/auth\/signin$/,
    /^\/auth\/register$/,
    /^\/users\/.*$/,  
  ]
  
  const hideNavbar = noNavbarPaths.some((path) => path.test(pathname))

  if(hideNavbar){
    return null
  }

 

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
        <UserAction userData={user}/>
      </div>
     
    </div>
  </header>
  );
};

export default Navbar;
