import prisma from "@/library/prisma";

export default async function CommentBox({ anime_mal_id }) {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <div className="grid grid-cols-4 gap-4 py-5">
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="bg-white rounded p-4">
            <p className="font-bold">{comment.username}</p>
            <p>{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
}
