import prisma from "@/library/prisma";

export default async function CommentBox({ anime_mal_id }) {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "numeric", hour12: false }).format(date);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
      {comments.map((comment) => {
        return (
          <label className="form-control" key={comment.id}>
            <div className="label pb-0">
              <span className="label-text font-bold">{comment.username}</span>
              <span className="label-text-alt">{formatDate(comment.commentedAt)}</span>
            </div>
            <div className="bg-neutral rounded min-h-[100px] p-2">
              <p>{comment.comment}</p>
            </div>
          </label>
        );
      })}
    </div>
  );
}
