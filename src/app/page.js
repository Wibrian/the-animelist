import Link from "next/link";
import AnimeList from "./components/AnimeList";
import Search from "./search/page";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const anime = await response.json();
  console.log(anime.data);

  return (
    <main>
      <div className="flex justify-between p-4 items-center">
        <h1 className="text-3xl font-bold">Paling Populer</h1>
        <Link href="/populer" className="md:text-xl text-md underline hover:text-indigo-500 transition-all">
          See All...
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
