import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Source from "./Source";

export default function Footer() {
  return (
    <footer className="footer py-10 px-5 text-base-content mt-3 border-t border-slate-600 ">
      <aside>
        <p>
          <strong className="text-xl">NEXT Anime List</strong>
          <br />
          The next simple anime list
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Build with</h6>
        <Source link="https://nextjs.org" title="NextJS" />
        <Source link="https://tailwindcss.com" title="Tailwind CSS" />
        <Source link="https://daisyui.com" title="daisyUI" />
        <Source link="https://aws.amazon.com/rds" title="Amazon RDS (MySQL)" />
      </nav>
      <nav>
        <h6 className="footer-title">Source</h6>
        <Source link="https://jikan.moe" title="Jikan API" />
        <Source link="https://phosphoricons.com" title="Phosphor Icons" />
        <Source link="https://www.emoticonstext.com" title="Japanese Emoticons" />
      </nav>
      <nav>
        <h6 className="footer-title">Source Code</h6>
        <div className="grid grid-flow-col gap-4">
          <Link href={"https://github.com/Wibrian/the-animelist"} target="_blank" className="hover:text-white transition-all cursor-pointer">
            <GithubLogo size={32} weight="fill" />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
