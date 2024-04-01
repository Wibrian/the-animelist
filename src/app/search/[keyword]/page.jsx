import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/library/api-lib";

export default async function Page({ params }) {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`);
  // const searchAnime = await response.json();

  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <main className="p-5">
      <section>
        <Header title={`Search result of ${decodedKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </main>
  );
}
