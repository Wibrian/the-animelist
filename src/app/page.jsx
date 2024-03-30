import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./library/api-lib";

export default async function Page() {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`);
  // const topAnime = await response.json();
  const topAnime = await getAnimeResponse("top/anime", "limit=10");

  return (
    <main className="p-5">
      <section>
        <Header title="Top 10 Popular Anime" linkHref="/popular" linkTitle="See All..." />
        <AnimeList api={topAnime} />
      </section>
    </main>
  );
}
