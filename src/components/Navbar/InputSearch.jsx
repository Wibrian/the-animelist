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
      if (!keyword) {
        return router.push(`/`);
      } else {
        router.push(`/search/${keyword}`);
      }
    }
  };

  return (
    <div className="form-control dropdown">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <MagnifyingGlass size={20} weight="bold" />
          </div>
        </div>
        <div tabIndex={0} className="mt-4 z-[1] card card-compact dropdown-content w-56 bg-none shadow">
          <div className="p-2rounded-xl">
            <input
              type="text"
              placeholder="Search Anime..."
              className="input input-bordered w-full bg-base-300 h-10"
              ref={searchRef}
              onKeyDown={handleSearchInput}
            />
            {/* can add some button element here with "onClick={inputSearch} */}
          </div>
        </div>
      </div>
    </div>
  );
}
