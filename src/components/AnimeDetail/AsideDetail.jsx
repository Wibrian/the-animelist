import CollectionButton from "../AnimeList/CollectionData";
import { authUserSession } from "@/library/auth-libs";
import prisma from "@/library/prisma";

export default async function AsideDetail({ anime, id }) {
  const { season, year } = anime.data;

  const capitalizedSeason = season?.charAt(0).toUpperCase() + season?.slice(1);

  // const user = await authUserSession();
  // const collection = await prisma.collection.findFirst({
  //   where: { user_email: user?.email, anime_mal_id: id },
  // });
  // console.log(collection);

  return <div></div>;
}
