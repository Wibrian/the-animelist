import { SmileyXEyes } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex flex-col justify-center items-center text-blue-400 gap-1">
      <div className="flex flex-col justify-center items-center gap-2 ">
        <SmileyXEyes size={72} />
        <h3 className="text-3xl font-bold">[404] NOT FOUND</h3>
      </div>
      <Link href="/" className="hover:text-white transition-all">
        BACK TO MAIN PAGE
      </Link>
    </div>
  );
}
