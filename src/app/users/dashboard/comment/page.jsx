import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/library/auth-libs";
import prisma from "@/library/prisma";
import Link from "next/link";

export default async function Page() {
  const user = authUserSession();
  const comments = await prisma.comment.findMany({ where: { user_email: user.email } });
  // console.log(comments.length);

  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "numeric", hour12: false }).format(date);
  }

  return (
    <div className="p-5">
      <Header title={"My Comments"} button={"Back"} />
      {comments.length === 0 ? (
        <div className="text-white">YOU HAVE NO COMMENTS</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 ">
          {comments.map((comment) => {
            return (
              <Link href={`/anime/${comment.anime_mal_id}`} key={comment.id} className="transition-all hover:text-white">
                <label className="form-control cursor-pointer" key={comment.id}>
                  <div className="label pb-0">
                    <span className="label-text font-bold">{comment.username}</span>
                    <span className="label-text-alt">{formatDate(comment.commentedAt)}</span>
                  </div>
                  <div className="bg-neutral rounded min-h-[100px] p-2">
                    <p>{comment.comment}</p>
                  </div>
                </label>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
