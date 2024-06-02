"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const InputSearch = () => {
  const searchValue = useRef();
  const router = useRouter();

  const handleInput = (event) => {
    event.preventDefault();
    const keyword = searchValue.current.value;
    router.push(`/search/${keyword}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleInput(event);
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search Anime ..."
        className="flex glassmorphism px-4"
        ref={searchValue}
        onKeyDown={handleKeyDown}
      />
      <button type="button" className="absolute end-32" onClick={handleInput}>
        <FaSearch size={20} />
      </button>
    </div>
  );
};

export default InputSearch;
