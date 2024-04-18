import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/library/auth-libs";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  collection.reverse();
  comments.reverse();

  const limitCollection = collection.slice(0, 5);
  const limitComments = comments.slice(0, 3);

  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "numeric", hour12: false }).format(date);
  }

  return (
    <section className="grid grid-cols-5 mt-5 mx-5 gap-3">
      <aside className="flex flex-col gap-2">
        <h3 className="badge border-none bg-neutral w-full text-xl font-bold rounded p-5">{user.name}</h3>
        <img src={user.image} alt="profile" className="rounded" />
        <p className="badge border-none bg-neutral w-full h-auto rounded p-2 text-center">
          Hello, {user.name} . This is your dashboard, you can find all your collections and your comments here. <br />
          ｡^‿^｡
        </p>
      </aside>
      <article className="col-span-4">
        <div className="pb-3">
          <Header title="My Collections" />
          <div className="grid grid-cols-5 gap-3">
            {limitCollection.map((collect, index) => {
              return (
                <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="card w-auto shadow-xl rounded-md scale transition-all hover:text-white bg-neutral">
                  <figure>
                    <Image src={collect.anime_image} width={1000} height={1000} alt="Anime Pict" loading="lazy" />
                  </figure>
                  <div className="card-body p-2.5 gap-1">
                    <h2 className="card-title leading-6 text-base">{collect.anime_title}</h2>
                  </div>
                </Link>
              );
            })}
          </div>
          {collection.length <= 5 ? null : (
            <Link href="/users/dashboard/collection" className="btn btn-neutral hover:btn-info mt-3 rounded w-full">
              See All Collection
            </Link>
          )}
        </div>
        <div>
          <Header title="My Comments" />
          {comments.length === 0 ? (
            <div className="text-white">YOU HAVE NO COMMENTS</div>
          ) : (
            <div className="grid grid-cols-3 gap-4 ">
              {limitComments.map((comment) => {
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
          {comments.length <= 3 ? null : (
            <Link href="/users/dashboard/comment" className="btn btn-neutral hover:btn-info mt-3 rounded w-full">
              See All Comment
            </Link>
          )}
        </div>
      </article>
    </section>
  );
}
