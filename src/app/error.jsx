"use client";

export default function GlobalError({ error }) {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-2">
      <span className="loading loading-ring loading-lg"></span>
      <p>Something went wrong! (✖﹏✖)</p>
      <p className="font-bold text-center">{error.digest}</p>
      <button className="btn btn-neutral hover:btn-success rounded" onClick={handleRefresh}>
        Try Again
      </button>
    </div>
  );
}
