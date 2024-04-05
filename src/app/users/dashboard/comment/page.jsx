import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/library/auth-libs";
import prisma from "@/library/prisma";
import Link from "next/link";

export default async function Page() {
  const user = authUserSession();
  const comments = await prisma.comment.findMany({ where: { user_email: user.email } });
  console.log(comments.length);

  return (
    <div className="p-5">
      <Header title={"My Comments"} />
      {comments.length === 0 ? (
        <div className="text-white">YOU HAVE NO COMMENTS</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 ">
          {comments.map((comment) => {
            return (
              <Link href={`/anime/${comment.anime_mal_id}`} key={comment.id} className="bg-gray-200 p-5 rounded hover:bg-blue-400 transition-all">
                <p>
                  <b>{comment.username}</b> at {comment.anime_title}
                </p>
                <p>{comment.comment}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
