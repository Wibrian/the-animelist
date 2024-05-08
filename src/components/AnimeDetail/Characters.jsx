"use client";

import { useState } from "react";
import { Heart } from "@phosphor-icons/react";

export default function Characters({ character }) {
  const [displayCount, setDisplayCount] = useState(6); // Initial number of characters to display

  const handleShowAll = () => {
    setDisplayCount(displayCount + character.data.length); // Increment the number of characters to display
  };

  const handleShowMore = () => {
    setDisplayCount(displayCount + 6); // Increment the number of characters to display
  };

  const handleShowLess = () => {
    setDisplayCount(6); // Reset the number of characters to display to the initial count
  };

  return (
    <div>
      <h3 className="text-xl font-bold pb-1 mb-3 border-b-[1px] border-slate-600">Characters & Voice Actors</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 transition-all">
        {character.data.slice(0, displayCount).map((chara, index) => {
          return (
            <div key={index} className="card card-side bg-base-300 shadow-md rounded max-h-[180px]">
              <figure>
                <img src={chara.character.images.webp.image_url} alt="Character" className="h-full w-auto" />
              </figure>
              <div className="card-body p-2 justify-between">
                <div>
                  <h2 className="card-title">{chara.character.name}</h2>
                  <p className="flex items-center">
                    <Heart size={16} weight="fill" />
                    &nbsp;{chara.favorites.toLocaleString("en-US")}
                  </p>
                </div>
                <div>
                  Voiced by:{" "}
                  {chara.voice_actors
                    .filter((va) => va.language === "Japanese")
                    .map((va, index) => {
                      return (
                        <p className="badge rounded" key={index}>
                          {va.person.name}
                        </p>
                      );
                    })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {displayCount < character.data.length ? (
        <div className="grid grid-cols-3 gap-3 mt-3">
          <button onClick={handleShowAll} className="btn bg-base-300 shadow-md hover:btn-info rounded border-none">
            Show All
          </button>
          <button onClick={handleShowMore} className="btn bg-base-300 shadow-md hover:btn-success rounded border-none">
            Show More
          </button>
          <button onClick={handleShowLess} className="btn bg-base-300 shadow-md hover:btn-error rounded border-none">
            Show Less
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1">
          <button onClick={handleShowLess} className="btn btn-neutral hover:btn-error mt-3">
            Show Less
          </button>
        </div>
      )}
    </div>
  );
}
