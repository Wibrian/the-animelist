import { authUserSession } from "@/library/auth-libs";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const user = await authUserSession();
  return (
    <div className="text-white flex flex-col justify-center items-center mt-8">
      <h3 className="text-2xl font-bold">Welcome, {user.name}</h3>
      <Image src={user.image} alt="User Profile" width={250} height={250} />
      <div className="flex gap-4 py-8">
        <Link href="/users/dashboard/collection" className="bg-blue-400 font bold p-3 rounded">
          My Collection
        </Link>
        <Link href="/users/dashboard/comment" className="bg-blue-400 font bold p-3 rounded">
          My Comment
        </Link>
      </div>
    </div>
  );
}
