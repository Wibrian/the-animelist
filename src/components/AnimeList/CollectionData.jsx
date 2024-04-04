"use client";

import { useState } from "react";

export default function CollectionButton({ anime_mal_id, user_email, anime_image, anime_title }) {
  const [isCreated, setIsCreated] = useState(false);
  const handleCollection = async (e) => {
    e.preventDefault();

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

  return (
    <div>
      {isCreated ? (
        <p className="text-white">Added to Collection</p>
      ) : (
        <button onClick={handleCollection} className="px-2 py-1 bg-blue-400">
          Add To Collection
        </button>
      )}
    </div>
  );
}
