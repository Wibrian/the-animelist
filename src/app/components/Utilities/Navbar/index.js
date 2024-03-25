import { headers } from "next/headers";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-indigo-500">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-4">
        <Link href="/" className="font-bold text-2xl text-white">
          ANIME LIST
        </Link>
        <input type="search" placeholder="cari anime..." />
      </div>
    </header>
  );
}
