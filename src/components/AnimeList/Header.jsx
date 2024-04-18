import Link from "next/link";

export default function Header({ title, linkHref, linkTitle }) {
  return (
    <div className="flex justify-between items-center border-b border-slate-600 mx-5 pt-5 pb-2">
      <h1 className="text-md md:text-xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="md:text-md text-sm transition-all hover:text-white">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
}
