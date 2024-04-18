import Link from "next/link";
import InputSearch from "./InputSearch";
import UserButton from "./UserButton";

export default function Navbar() {
  return (
    <header className="navbar px-5 shadow-white border-b border-slate-600 max-h-[32px] md:max-h-[64px]">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost lg:text-xl p-0 hover:bg-transparent hover:text-white">
          NEXT Anime List
        </Link>
      </div>
      <div className="flex-none gap-2">
        <InputSearch />
        <UserButton />
      </div>
    </header>
  );
}
