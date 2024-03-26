import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Page({ params }) {
  const { keyword } = params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
  const searchAnime = await response.json();
  // console.log(anime.data);

  return (
    <main className="p-5">
      <section>
        <Header title={`Search result of ${keyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </main>
  );
}
