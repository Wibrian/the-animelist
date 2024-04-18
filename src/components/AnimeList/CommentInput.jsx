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
    <>
      <label className="form-control">
        <div className="label">
          {isCreated ? <span className="label-text">Comment Sent...</span> : <span className="label-text">Comment Here...</span>}
          <span className="label-text-alt">Comment at least more than 5 characters to post ⸜(｡&gt; ᵕ &lt; )⸝♡</span>
        </div>
        <textarea onChange={handleInput} value={comment} className="textarea textarea-bordered hover:textarea-info h-24 rounded transition-all" placeholder=". . . ."></textarea>
      </label>
      {comment.length <= 5 || comment.trim() === "" ? (
        <button className="btn btn-ghost mt-2" disabled>
          Post Comment
        </button>
      ) : (
        <button onClick={handlePost} className="btn btn-neutral hover:btn-info mt-2">
          Post Comment
        </button>
      )}
    </>
  );
}
