import { Star, Trophy } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function AnimeList({ api }) {
  return (
    <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-5">
      {api.data?.map((anime) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-center flex flex-col items-center shadow test rounded-md text-white hover:text-blue-400" key={anime.mal_id}>
            <Image src={anime.images.webp.large_image_url} alt="..." width={350} height={350} className="w-full max-h-64 object-cover rounded-t-md" />
            <h3 className="font-bold md:text-md text-xl text-center py-3 place-content-center">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
}
