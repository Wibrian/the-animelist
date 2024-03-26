"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function InputSearch() {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearchInput = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      const keyword = searchRef.current.value;
      router.push(`/search/${keyword}`);
    }
    // e.preventDefault();
  };

  return (
    <div className="relative">
      <input type="text" placeholder="Search Anime..." className="w-full p-2 rounded-md" ref={searchRef} onKeyDown={handleSearchInput} />
      <button className="absolute top-2 end-2" onClick={handleSearchInput}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
}
