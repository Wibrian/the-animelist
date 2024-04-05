import { getAnimeResponse } from "@/library/api-lib";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionData";
import { authUserSession } from "@/library/auth-libs";
import prisma from "@/library/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

export default async function Page({ params: { id } }) {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });
  // console.log(collection);

  return (
    <div className="p-5">
      <h3 className="text-white text-2xl">
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
      </div>
    </div>
  );
}
