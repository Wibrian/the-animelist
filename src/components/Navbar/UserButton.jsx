import { authUserSession } from "@/library/auth-libs";
import Link from "next/link";

export default async function UserButton() {
  const user = await authUserSession();

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user ? user.image : "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52 bg-neutral">
        {user ? (
          <li>
            <Link href="/users/dashboard" className="justify-between">
              Dashboard
            </Link>
          </li>
        ) : null}
        <li>
          <Link href={actionURL}>{actionLabel}</Link>
        </li>
      </ul>
    </div>
  );
}
