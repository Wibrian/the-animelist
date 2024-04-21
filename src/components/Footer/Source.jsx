import Link from "next/link";

export default function Source({ title, link }) {
  return (
    <>
      <Link href={link} target="_blank" className="hover:text-white transition-all">
        {title}
      </Link>
    </>
  );
}
