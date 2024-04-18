"use client";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function Header({ title, button }) {
  const router = useRouter();
  const handleBackButton = (e) => {
    e.preventDefault;
    router.back();
  };

  // return (
  //   <div className="flex justify-between items-center border-b border-slate-600 border mb-4 pb-2">
  //     <button className="text-white" onClick={handleBackButton}>
  //       <ArrowSquareLeft size={32} />
  //     </button>
  //     <h3 className="text-2xl text-white">{title}</h3>
  //   </div>
  // );
  return (
    <div className="flex justify-between items-center border-b border-slate-600 mb-5 pb-2">
      <h1 className="text-md md:text-xl font-bold">{title}</h1>
      <button onClick={handleBackButton}>{button}</button>
    </div>
  );
}
