"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const InputSearch = () => {
  const searchValue = useRef();
  const router = useRouter();

  const handleInput = (event) => {
    if (event.key === 'Enter' || event.type === "click") {
      event.preventDefault();
      const keyword = searchValue.current.value;
      router.push(`/search/${keyword}`);
    }
  };

  

  return (
    <div className="flex items-center">
      <button type="button" className="absolute ml-3 z-50" onClick={handleInput}>
        <FaSearch size={15} />
      </button>
      <input
        type="text"
        placeholder="Search Anime ..."
        className=" w-full flex bg-blue-500 px-8 p-1 placeholder:text-sm neumorphism" 
        ref={searchValue}
        onKeyDown={handleInput}
      />
      
    </div>
  );
};

export default InputSearch;
