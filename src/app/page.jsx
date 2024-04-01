import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/library/api-lib";

export default async function Page() {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let recommendAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  // recommendAnime = { data: recommendAnime.slice(0, 4) };
  // console.log(recommendAnime);
  recommendAnime = reproduce(recommendAnime, 4);

  return (
    <main className="p-5">
      <section>
        <Header title="Top 10 Popular Anime" linkHref="/popular" linkTitle="See All..." />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recommended Anime" linkHref="/popular" />
        <AnimeList api={recommendAnime} />
      </section>
    </main>
  );
}
