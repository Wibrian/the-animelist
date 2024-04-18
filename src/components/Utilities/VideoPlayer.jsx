"use client";

import { XSquare } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

export default function VideoPlayer({ youTubeId }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "200",
  };

  const Player = () => {
    return (
      <div className="fixed flex flex-col gap-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-gray-600 p-3 rounded">
        <iframe src={youTubeId} frameborder="0" allowFullScreen className="rounded sm:w-[400px] sm:h-[300px] md:w-[600px] "></iframe>
        <button className="btn btn-neutral hover:btn-error rounded" onClick={handleVideoPlayer}>
          Close
        </button>
      </div>
    );
  };

  const ButtonPlayer = () => {
    return (
      <button onClick={handleVideoPlayer} className="badge badge-neutral hover:badge-warning rounded">
        See Trailer
      </button>
    );
  };

  return isOpen ? <ButtonPlayer /> : <Player />;
}
