"use client";

import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const CollectionButton = ({ anime_mal_id, user_email, anime_image, anime_name }) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, anime_image, anime_name };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const collection = await response.json();
    if (collection.isCreated) {
      setIsCreated(true);
    }
    return;
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
          <FaBookmark />
          Add to Collection
        </button>
      )}
    </>
  );
};

export default CollectionButton;
