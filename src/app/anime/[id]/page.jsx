import { getAnimeResponse } from "@/library/api-lib";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

export default async function Page({ params: { id } }) {
  const anime = await getAnimeResponse(`anime/${id}`);
  //   console.log(anime);

  return (
    <div className="p-5">
      <h3 className="text-white text-2xl">
        {anime.data.title} - {anime.data.year}
      </h3>
      <div className="pt-5 flex sm:flex-nowrap flex-wrap gap-2 text-white">
        <Image src={anime.data.images.webp.large_image_url} width={500} height={500} />
        <p className="text-justify text-md">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youTubeId={anime.data.trailer.youtube_id} />
      </div>
    </div>
  );
}
