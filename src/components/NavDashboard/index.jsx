"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { BsListNested } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { RiGitRepositoryLine } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";

const NavDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return pathname === path
      ? "bg-gray-700 border-l-4 border-color-yellow rounded-md"
      : "";
  };

  return (
    <>
      <div className="md:hidden absolute top-6 flex items-center p-4">
        <button className="space-y-1.5" onClick={toggleSidebar}>
          <BsListNested />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 glassmorphism bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 ease-in-out overflow-y-auto scroll-container md:h-screen md:translate-x-0 md:w-64`}
      >
        <div className="md:hidden px-4 py-2">
          <button onClick={closeSidebar}>
            <FaXmark />
          </button>
        </div>

        <div className="flex flex-col justify-between h-full">

        <div className="mt-10 p-4 text-center">
          <h1 className="text-2xl opacity-80">Dashboard</h1>
        </div>

          <ul className="p-4 opacity-80">
            <li
              className={`flex items-center gap-x-2 px-4 py-1 text-md hover:bg-gray-700 hover:rounded-md ${isActive(
                "/users/dashboard"
              )}`}
            >
              <IoPersonCircleOutline />
              <a href="/users/dashboard">Profile</a>
            </li>
            <li
              className={`flex items-center gap-x-2 px-4 py-1 text-md hover:bg-gray-700 hover:rounded-md ${isActive(
                "/users/dashboard/collection"
              )}`}
            >
              <RiGitRepositoryLine />
              <a href="/users/dashboard/collection">Collection</a>
            </li>
          </ul>

          {/* Logout Button */}
          <div className="text-red-600 flex items-center gap-x-2 p-4">
              <IoIosLogOut />
            <Link href="/api/auth/signout">
              <p className=" hover:underline">Logout</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavDashboard;
