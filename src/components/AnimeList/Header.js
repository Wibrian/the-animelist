import Link from "next/link";

export default function Header({ title, linkHref, linkTitle }) {
  return (
    <div className="flex justify-between pt-4 pb-4 items-center text-white">
      <h1 className="text-2xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="md:text-xl text-md underline hover:text-blue-400 transition-all ">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
}
