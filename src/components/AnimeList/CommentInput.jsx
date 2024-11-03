"use client";

import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { FaSpinner } from "react-icons/fa"; // Import ikon spinner untuk loading

const CommentInput = ({ anime_mal_id, user_email, username, anime_name, user_image }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State untuk loading

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handlePost = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading state ke true

    const data = { anime_mal_id, user_email, comment, username, anime_name, user_image };

    try {
      const response = await fetch("/api/v1/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const postComment = await response.json();
      if (postComment.isCreated) {
        setIsCreated(true);
        setComment("");
        handleRefresh();
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-3/4 flex flex-col gap-y-4">
      <h1 className="text-sm font-semibold">Start Conversation Now!</h1>
      {isCreated && (
        <div className="flex items-center gap-x-2"> 
          <FaCheck className="text-green-500" />
          <h1>Posted!</h1>
        </div>
      )}
      <textarea
        onChange={handleInput}
        value={comment}
        placeholder="Say Something ..."
        className="px-4 py-2 glass-morphism outline-none"
      ></textarea>
      <div className="flex justify-end">
        <button
          onClick={handlePost}
          className="btn-action flex gap-x-4 items-center px-4 py-3 rounded-lg text-sm font-semibold"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <FaSpinner className="animate-spin mr-2" /> 
              Posting...
            </>
          ) : (
            <>
              Post Comment
              <IoMdSend />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
