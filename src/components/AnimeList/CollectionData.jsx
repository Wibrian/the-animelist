"use client";

import { useState } from "react";
import { Heart } from "@phosphor-icons/react";

export default function CollectionButton({ anime_mal_id, user_email, anime_image, anime_title }) {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async () => {
    const data = { anime_mal_id, user_email, anime_image, anime_title };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const collection = await response.json();
    console.log({ collection });
    if (collection.status === 200) {
      setIsCreated(collection.isCreated);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleCollection();
  };

  return (
    <div>
      {isCreated ? (
        <button className="btn btn-primary rounded w-full text-xs" disabled>
          <Heart size={14} weight="fill" />
          Added To Collection
        </button>
      ) : (
        <button onClick={handleClick} className="btn btn-neutral hover:btn-success rounded w-full">
          <Heart size={16} weight="fill" />
          Add To Collection
        </button>
      )}
    </div>
  );
}
