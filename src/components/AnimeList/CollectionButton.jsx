"use client";

import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FaSpinner } from "react-icons/fa"; // Import ikon spinner untuk loading

const CollectionButton = ({ anime_mal_id, user_email, anime_image, anime_name }) => {
  const [isCreated, setIsCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State untuk loading

  const handleCollection = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading state ke true

    const data = { anime_mal_id, user_email, anime_image, anime_name };

    try {
      const response = await fetch("/api/v1/collection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Pastikan mengatur header
        },
        body: JSON.stringify(data),
      });

      const collection = await response.json();
      if (collection.isCreated) {
        setIsCreated(true);
      }
    } catch (error) {
      console.error("Error adding to collection:", error);
    } finally {
      setIsLoading(false); // Set loading state ke false setelah selesai
    }
  };

  return (
    <>
      {isCreated ? (
        <p className="bg-[#f9d949] text-[#0c0a24] flex items-center text-sm px-4 py-2 gap-x-2 rounded-lg">
          <FaCircleCheck />
          Added to Collection
        </p>
      ) : (
        <button
          onClick={handleCollection}
          className="btn-action w-full flex items-center text-sm px-4 py-2 gap-x-2 rounded-lg"
        >
          {isLoading ? (
            <FaSpinner className="animate-spin mr-2" /> 
          ) : (
            <FaBookmark />
          )}
          {isLoading ? "Adding ...." : "Add to Collection"}
        </button>
      )}
    </>
  );
};

export default CollectionButton;
