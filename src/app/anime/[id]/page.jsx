import { getAnimeResponse } from "@/library/api-lib";
import { ChartBar, Trophy, TrendUp, UsersThree } from "@phosphor-icons/react/dist/ssr";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import CollectionButton from "@/components/AnimeList/CollectionData";
import { authUserSession } from "@/library/auth-libs";
import prisma from "@/library/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";
import Characters from "@/components/AnimeDetail/Characters";
import CommentDisabled from "@/components/AnimeList/CommentDisabled";
import Image from "next/image";

export default async function Page({ params: { id } }) {
  const anime = await getAnimeResponse(`anime/${id}`);
  const character = await getAnimeResponse(`anime/${id}/characters`);

  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });
  // console.log(collection);

  const { season, year } = anime.data;

  const capitalizedSeason = season?.charAt(0).toUpperCase() + season?.slice(1);

  return (
    <div className="p-5 grid grid-cols-1 lg:grid-cols-4 gap-3 max-w-[1900px] m-auto">
      {/* <h3 className="text-white text-2xl">
        {anime.data.title} - {anime.data.year}
      </h3>
      {!collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.large_image_url} anime_title={anime.data.title} />}

      <div className="pt-5 flex sm:flex-nowrap flex-wrap gap-2 text-white">
        <Image src={anime.data.images.webp.large_image_url} width={500} height={500} />
        <p className="text-justify text-md">{anime.data.synopsis}</p>
      </div>
      <div className="py-4">
        {user && <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title} />}
        <CommentBox anime_mal_id={id} />
      </div>
      <div>
        <VideoPlayer youTubeId={anime.data.trailer.youtube_id} />
      </div> */}
      <article className="flex flex-col gap-[5px] max-w-full col-span-4 lg:col-span-1">
        <h3 className="badge border-none bg-neutral text-lg w-full h-auto rounded font-bold leading-6 p-2">{anime.data.title}</h3>
        <img src={anime.data.images.webp.large_image_url} className="object-fit rounded" />
        {!collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.large_image_url} anime_title={anime.data.title} />}
        <article className="bg-neutral p-2 rounded">
          <section className="pb-4">
            <h4 className="border-b-[1px] border-slate-600 font-bold mb-2 text-white">Alternative Titles</h4>
            <div className="text-sm">
              <p className="pb-1">
                <b>Synonyms:</b> {anime.data.title_synonyms}
              </p>
              <p className="pb-1">
                <b>English:</b> {anime.data.title_english}
              </p>
              <p className="pb-1">
                <b>Japanese:</b> {anime.data.title_japanese}
              </p>
            </div>
          </section>
          <div className="pb-2">
            <h4 className="border-b-[1px] border-slate-600 font-bold mb-2 text-white">Information</h4>
            <aside className="text-sm">
              <p className="pb-1">
                <b>Type:</b> {anime.data.type}
              </p>
              <p className="pb-1">
                <b>Episode:</b> {anime.data.episodes}
              </p>
              <p className="pb-1">
                <b>Status:</b> {anime.data.status}
              </p>
              <p className="pb-1">
                <b>Aired:</b> {anime.data.aired.string}
              </p>
              <p className="pb-1">
                <b>Primiered:</b> {capitalizedSeason} {year}
              </p>
              <p className="pb-1">
                <b>Broadcast:</b> {anime.data.broadcast.string}
              </p>
              <p className="pb-1">
                <b>Producers:</b>
                {anime.data.producers.map((producer) => ` ${producer.name}`).join(", ")}
              </p>
              <p className="pb-1">
                <b>Licensors:</b>
                {anime.data.licensor ? anime.data.licensors.map((licensor) => ` ${licensor.name}`).join(", ") : " -"}
              </p>
              <p className="pb-1">
                <b>Studios:</b>
                {anime.data.studios.map((studio) => ` ${studio.name}`).join(", ")}
              </p>
              <p className="pb-1">
                <b>Source:</b> {anime.data.source}
              </p>
              <p className="pb-1">
                <b>Genres:</b>
                {anime.data.genres.map((genres) => ` ${genres.name}`).join(", ")}
              </p>
              <p className="pb-1">
                <b>Demographic:</b>
                {anime.data.demographics.map((demographic) => ` ${demographic.name}`).join(", ")}
              </p>
              <p className="pb-1">
                <b>Duration:</b> {anime.data.duration}
              </p>
              <p className="pb-1">
                <b>Rating:</b> {anime.data.rating}
              </p>
            </aside>
          </div>
        </article>
      </article>
      <article className="col-span-4 lg:col-span-3 flex flex-col gap-3">
        <div className="stats stats-vertical md:stats-horizontal shadow bg-neutral rounded">
          <div className="stat">
            <div className="stat-figure">
              <ChartBar size={32} weight="bold" />
            </div>
            <div className="badge bg-gray-600 rounded border-none">SCORE</div>
            <div className="stat-value text-3xl">{anime.data?.score === null ? "N/A" : anime.data.score}</div>
            <div className="stat-desc">By {anime.data?.scored_by === null ? "N/A" : anime.data.scored_by.toLocaleString()} Users</div>
          </div>
          <div className="stat">
            <div className="stat-figure">
              <Trophy size={32} weight="bold" />
            </div>
            <div className="badge bg-gray-600 rounded border-none">RANKED</div>
            <div className="stat-value text-3xl">#{anime.data?.rank === null ? "N/A" : anime.data?.rank.toLocaleString()}</div>
            <div className="stat-desc">Top Anime</div>
          </div>
          <div className="stat">
            <div className="stat-figure">
              <TrendUp size={32} weight="bold" />
            </div>
            <div className="badge bg-gray-600 rounded border-none">POPULARITY</div>
            <div className="stat-value text-3xl">#{anime.data.popularity.toLocaleString()}</div>
            <div className="stat-desc">Top Popular</div>
          </div>
          <div className="stat">
            <div className="stat-figure">
              <UsersThree size={32} weight="bold" />
            </div>
            <div className="badge bg-gray-600 rounded border-none">MEMBERS</div>
            <div className="stat-value text-3xl">{anime.data.members.toLocaleString()}</div>
            <div className="stat-desc">Added To List</div>
          </div>
        </div>
        <div>
          <div>
            <h3 className="text-xl font-bold pb-1 mb-2 border-b-[1px] border-slate-600 flex flex-row items-center justify-between">
              Synopsis <VideoPlayer youTubeId={anime.data.trailer.embed_url} />
            </h3>
          </div>
          <p className="text-justify text-md">{anime.data.synopsis}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold pb-1 mb-2 border-b-[1px] border-slate-600">Background</h3>
          <p className="text-justify text-md">{anime.data.background}</p>
        </div>
        <Characters character={character} />
        <div>
          <h3 className="text-xl font-bold pb-1 mb-2 border-b-[1px] border-slate-600">Comment Section</h3>
          {user ? <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title} /> : <CommentDisabled />}
          <CommentBox anime_mal_id={id} />
        </div>
      </article>
    </div>
  );
}
