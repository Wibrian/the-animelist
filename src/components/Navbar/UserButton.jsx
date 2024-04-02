import { authUserSession } from "@/library/auth-libs";
import Link from "next/link";

export default async function UserButton() {
  const user = await authUserSession();

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between gap-2">
      {user ? (
        <Link href="/users/dashboard" className="py-1">
          Dashboard
        </Link>
      ) : null}
      <Link href={actionURL} className="bg-gray-600 text-white hover:text-blue-400 py-1 px-12 rounded transition-all">
        {actionLabel}
      </Link>
    </div>
  );
}
