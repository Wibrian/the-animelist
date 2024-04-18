export default function CommentDisabled() {
  return (
    <>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Please Login to Comment</span>
        </div>
        <textarea className="textarea textarea-bordered h-24" disabled></textarea>
      </label>
      <button className="btn btn-ghost mt-2" disabled>
        Post Comment
      </button>
    </>
  );
}
