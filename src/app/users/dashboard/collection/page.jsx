import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/library/auth-libs";
import prisma from "@/library/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  console.log({ collection });

  return (
    <section className="mt-4 px-5">
      <Header title={"My Collection"} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {collection.map((collect, index) => {
          return (
            <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="border-2 border-blue-400 relative">
              <Image src={collect.anime_image} alt="anime pict" width={350} height={350} className="w-full" />
              <div className="absolute flex items-center justify-center w-full bg-blue-400 bottom-0 h-16">
                <h5 className="text-xl text-center">{collect.anime_title}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
