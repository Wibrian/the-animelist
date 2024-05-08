import { getAnimeResponse } from "@/library/api-lib";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
// import CollectionButton from "@/components/AnimeList/CollectionData";
// import { authUserSession } from "@/library/auth-libs";
// import prisma from "@/library/prisma";
// import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";
import Characters from "@/components/AnimeDetail/Characters";
import CommentDisabled from "@/components/AnimeList/CommentDisabled";
import AsideDetail from "@/components/AnimeDetail/AsideDetail";
import StatusDetail from "@/components/AnimeDetail/StatusDetail";

export default async function Page({ params: { id } }) {
  const anime = await getAnimeResponse(`anime/${id}`);
  const character = await getAnimeResponse(`anime/${id}/characters`);

  // const user = await authUserSession();
  // const collection = await prisma.collection.findFirst({
  //   where: { user_email: user?.email, anime_mal_id: id },
  // });

  // console.log(collection);

  return (
    <div className="p-5 grid grid-cols-1 lg:grid-cols-4 gap-3 max-w-[1900px] m-auto">
      <article className="flex flex-col gap-[5px] max-w-full col-span-4 lg:col-span-1">
        <h3 className="badge border-none bg-base-300 text-lg w-full h-auto rounded font-bold leading-6 p-2">{anime.data.title}</h3>
        <img src={anime.data.images.webp.large_image_url} className="object-fit rounded" />
        {/* {!collection && user && (
          <CollectionButton
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={anime.data.images.webp.large_image_url}
            anime_title={anime.data.title}
          />
        )} */}
        <AsideDetail anime={anime} />
      </article>
      <article className="col-span-4 lg:col-span-3 flex flex-col gap-3">
        <StatusDetail anime={anime} />
        <div>
          <h3 className="text-xl font-bold pb-1 mb-2 border-b-[1px] border-slate-600 flex flex-row items-center justify-between">
            Synopsis <VideoPlayer youTubeId={anime.data.trailer.embed_url} />
          </h3>
          <p className="text-justify text-md">{anime.data.synopsis ? anime.data.synopsis : "No Information Yet."}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold pb-1 mb-2 border-b-[1px] border-slate-600">Background</h3>
          <p className="text-justify text-md">{anime.data.background ? anime.data.background : "No Information Yet."}</p>
        </div>
        <Characters character={character} />
        <div>
          <h3 className="text-xl font-bold pb-1 mb-2 border-b-[1px] border-slate-600">Comment Section</h3>
          {/* {user ? (
            <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title} />
          ) : (
            <CommentDisabled />
          )} */}
          <CommentDisabled />
          {/* <CommentBox anime_mal_id={id} /> */}
        </div>
      </article>
    </div>
  );
}
