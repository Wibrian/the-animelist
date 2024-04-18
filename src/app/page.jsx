import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/library/api-lib";

export default async function Page() {
  const topAnime = await getAnimeResponse("top/anime?limit=10");
  const thisSeason = await getAnimeResponse("seasons/now?limit=5");
  let recommendAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  // recommendAnime = { data: recommendAnime.slice(0, 4) };
  recommendAnime = reproduce(recommendAnime, 5);

  return (
    <main>
      <section>
        <Header title="Top 10 Popular Anime" linkHref="/popular" linkTitle="See All..." />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="This Season" linkHref="/" />
        <AnimeList api={thisSeason} />
      </section>
      <section>
        <Header title="Anime Recommendation" />
        <AnimeList api={recommendAnime} />
      </section>
    </main>
  );
}
