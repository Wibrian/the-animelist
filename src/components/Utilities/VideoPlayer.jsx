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
    width: "400",
    height: "220",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button className="text-white float-right mb-1" onClick={handleVideoPlayer}>
          <XSquare size={32} weight="fill" />
        </button>
        <YouTube videoId={youTubeId} onReady={(e) => e.target.pauseVideo()} opts={option} />
      </div>
    );
  };

  const ButtonPlayer = () => {
    return (
      <button onClick={handleVideoPlayer} className="fixed bottom-5 right-5 bg-slate-50 text-black">
        Lihat Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonPlayer />;
}
