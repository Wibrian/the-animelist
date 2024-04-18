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

  // console.log({ collection });

  return (
    <section className="mt-5 px-5">
      <Header title={"My Collection"} button="Back" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {collection.map((collect, index) => {
          return (
            // <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="border-2 border-blue-400 relative">
            //   <Image src={collect.anime_image} alt="anime pict" width={350} height={350} className="w-full" />
            //   <div className="absolute flex items-center justify-center w-full bg-blue-400 bottom-0 h-16">
            //     <h5 className="text-xl text-center">{collect.anime_title}</h5>
            //   </div>
            // </Link>
            <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="card w-auto shadow-xl rounded-md scale transition-all hover:text-white bg-neutral">
              <figure>
                <Image src={collect.anime_image} width={1000} height={1000} alt="Anime Pict" loading="lazy" />
              </figure>
              <div className="card-body p-2.5 gap-1">
                <h2 className="card-title leading-6 text-base">{collect.anime_title}</h2>
                {/* <div className="card-actions justify-start gap-1">
                {anime.studios?.map((studio, index) => {
                  return (
                    <div key={index} className="badge badge-error text-neutral border-none h-auto rounded">
                      {studio.name}
                    </div>
                  );
                })}
                <div className="badge badge-warning text-neutral border-none h-auto rounded">{anime.source}</div>
                {anime.genres?.map((genre, index) => {
                  return (
                    <div key={index} className="badge bg-gray-600 border-none h-auto rounded">
                      {genre.name}
                    </div>
                  );
                })}
                {anime.demographics?.map((demographic, index) => {
                  return (
                    <div key={index} className="badge bg-blue-800 border-none h-auto rounded text-neutral-content">
                      {demographic.name}
                    </div>
                  );
                })}
              </div> */}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
