import Image from "next/image";
import Link from "next/link";

export default function AnimeList({ title, images, id }) {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image src={images} alt="..." width={200} height={300} />
      <h3 className="font-bold md:text-xl text-md">{title}</h3>
    </Link>
  );
}
