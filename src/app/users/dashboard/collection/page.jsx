import Header from "@/components/Dashboard/Header";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="mt-4 px-5">
      <Header title={"My Collection"} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Link href="/" className="border-2 border-blue-400 relative">
          <Image src="" alt="anime pict" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center w-full bg-blue-400 bottom-0 h-16">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
      </div>
    </section>
  );
}
