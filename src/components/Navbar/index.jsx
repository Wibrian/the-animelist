import Link from "next/link";
import InputSearch from "./InputSearch";
import UserButton from "./UserButton";

export default function Navbar() {
  return (
    <header className="bg-blue-400">
      <div className="flex md:flex-row flex-col justify-between px-5 py-4 gap-4 items-center">
        <Link href="/" className="font-bold text-2xl text-white">
          ANIME LIST
        </Link>
        <InputSearch />
        <UserButton />
      </div>
    </header>
  );
}
