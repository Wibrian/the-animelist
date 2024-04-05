"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CommentInput({ anime_mal_id, user_email, username, anime_title }) {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handlePost = async (e) => {
    e.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("");
      router.refresh();
    }
    return;
  };

  return (
    <div className="text-white w-full">
      {isCreated && <p className="text-white">Post sent...</p>}
      <textarea onChange={handleInput} value={comment} className="w-full h-32 p-3 text-black" />
      {comment.length <= 5 || comment.trim() === "" ? (
        <button onClick={handlePost} className="px-3 py-2 bg-blue-400 rounded text-gray-600" disabled>
          Post Comment
        </button>
      ) : (
        <button onClick={handlePost} className="px-3 py-2 bg-blue-400 rounded">
          Post Comment
        </button>
      )}
    </div>
  );
}
