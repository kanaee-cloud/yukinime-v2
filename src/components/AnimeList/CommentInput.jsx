"use client";

import { useState } from "react";
import { IoMdSend } from "react-icons/io";
// import { useRouter } from "next/router";
import { FaCheck } from "react-icons/fa6";

const CommentInput = ({ anime_mal_id, user_email, username, anime_name, user_image}) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
//   const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  function handleRefresh() {
    window.location.reload();
  }

  const handlePost = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_name, user_image };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("");
      handleRefresh()
    }
  };

  return (
    <div className="w-3/4 flex flex-col gap-y-4">
      {isCreated && (
        <div className="flex items-center gap-x-2"> 
          <FaCheck className="text-green-500" />
          <h1>Posted!</h1>
        </div>
      )}
      <textarea
        onChange={handleInput}
        value={comment}
        className="px-4 py-2 glass-morphism outline-none"
      ></textarea>
      <div className="flex justify-end">
        <button
          onClick={handlePost}
          className="btn-action flex gap-x-4 items-center px-4 py-3 rounded-lg text-sm font-semibold"
        >
          Post Comment
          <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
