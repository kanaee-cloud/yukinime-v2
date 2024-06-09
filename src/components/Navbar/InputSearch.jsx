"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const InputSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleInput = (event) => {
    

    if (event.key === 'Enter' || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${searchValue}`);
    }
  };

  const clearInput = () => {
    setSearchValue("");
  };

  return (
    <div className="flex items-center relative opacity-60">
      <button type="button" className="absolute left-3 z-50" onClick={handleInput}>
        <FaSearch size={15} />
      </button>
      <input
        type="text"
        placeholder="Search Anime ..."
        className="w-full flex bg-blue-500 px-8 p-1 placeholder:text-sm glassmorphism "
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleInput}
      />
      {searchValue && (
        <button type="button" className="absolute right-3 z-50" onClick={clearInput}>
          <FaTimes size={15} />
        </button>
      )}
    </div>
  );
};

export default InputSearch;
