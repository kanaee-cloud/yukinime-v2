import React from "react";
import prisma from "../../app/libs/prisma";
import Image from "next/image";

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });
  const commentsCount = await prisma.comment.count({ where: { anime_mal_id } });

  return (
    <div className="w-3/4 divide-y divide-slate-700">
      <h1>{commentsCount} Comments</h1>
      {comments.map((comment) => {
        const formattedDate = new Date(comment.createdAt).toLocaleDateString();

        return (
          <div key={comment.id} className="px-4 py-5 flex items-center gap-x-6">
            <Image
              src={comment.user_image}
              alt="User Image"
              width={50}
              height={50}
              className="rounded-full shadow-lg"
            />
            <div>
              <h1 className="font-semibold text-sm">"{comment.comment}"</h1>
              <p className="text-xs opacity-40">by {comment.username}</p>
              <p className="text-[10px]">{formattedDate}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
