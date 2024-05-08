import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/library/api-lib";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default async function Page() {
  const topAnime = await getAnimeResponse("top/anime?limit=10");
  let thisSeason = await getAnimeResponse("seasons/now");
  // console.log(thisSeason.data);
  let recommendAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  // console.log(recommendAnime);
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
