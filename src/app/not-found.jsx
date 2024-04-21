"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-2">
      <span className="loading loading-ring loading-lg"></span>
      <p>There's Nothing Here Haiyaa! ┐(´д`)┌</p>
      <p className="font-bold text-center">You're Lost! [404]</p>
      <button className="btn btn-neutral hover:btn-success rounded" onClick={() => router.back()}>
        Back To Main Page
      </button>
    </div>
  );
}
