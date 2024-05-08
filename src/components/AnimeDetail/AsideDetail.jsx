import AsideData from "./AsideData";

export default async function AsideDetail({ anime }) {
  const { season, year } = anime.data;

  const capitalizedSeason = season?.charAt(0).toUpperCase() + season?.slice(1);

  return (
    <article className="bg-base-300 p-2 rounded">
      <section className="pb-4">
        <h4 className="border-b-[1px] border-slate-600 font-bold mb-2">Alternative Titles</h4>
        <div className="text-sm">
          <AsideData text={"Synonyms"} name={anime.data.title_synonyms} />
          <AsideData text={"English"} name={anime.data.title_english} />
          <AsideData text={"Japanese"} name={anime.data.title_japanese} />
        </div>
      </section>
      <div className="pb-2">
        <h4 className="border-b-[1px] border-slate-600 font-bold mb-2">Information</h4>
        <article className="text-sm">
          <AsideData text={"Type"} name={anime.data.type} />
          <AsideData text={"Episode"} name={anime.data.episodes} />
          <AsideData text={"Status"} name={anime.data.status} />
          <AsideData text={"Aired"} name={anime.data.aired.string} />
          <AsideData text={"Premiered"} name={`${capitalizedSeason} ${year}`} />
          <AsideData text={"Broadcast"} name={anime.data.broadcast.string} />
          <AsideData text={"Producers"} name={anime.data.producers.map((producer) => ` ${producer.name}`).join(", ")} />
          <AsideData text={"Licensors"} name={anime.data.licensor ? anime.data.licensors.map((licensor) => ` ${licensor.name}`).join(", ") : " -"} />
          <AsideData text={"Studios"} name={anime.data.studios.map((studio) => ` ${studio.name}`).join(", ")} />
          <AsideData text={"Source"} name={anime.data.source} />
          <AsideData text={"Genres"} name={anime.data.genres.map((genres) => ` ${genres.name}`).join(", ")} />
          <AsideData text={"Demographic"} name={anime.data.demographics.map((demographic) => ` ${demographic.name}`).join(", ")} />
          <AsideData text={"Duration"} name={anime.data.duration} />
          <AsideData text={"Rating"} name={anime.data.rating} />
        </article>
      </div>
    </article>
  );
}
