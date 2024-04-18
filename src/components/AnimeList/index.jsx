import { CrownSimple } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function AnimeList({ api }) {
  return (
    <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-3 p-5">
      {api.data?.map((anime) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} className="card w-auto shadow-xl rounded-md scale transition-all hover:text-white bg-neutral" key={anime.mal_id}>
            <figure>
              <Image src={anime.images.webp.large_image_url} width={1000} height={1000} alt="Anime Pict" loading="lazy" />
            </figure>
            <div className="card-body p-2.5 gap-1">
              <h2 className="card-title leading-6 text-base">{anime.title}</h2>
              <div className="card-actions justify-start gap-1">
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
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
