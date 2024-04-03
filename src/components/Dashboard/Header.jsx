"use client";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function Header({ title }) {
  const router = useRouter();
  const handleBackButton = (e) => {
    e.preventDefault;
    router.back();
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <button className="text-white" onClick={handleBackButton}>
        <ArrowSquareLeft size={32} />
      </button>
      <h3 className="text-2xl text-white mb-4">{title}</h3>
    </div>
  );
}
