export default function Pagination({ page, lastPage, setPage }) {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((nextState) => nextState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handleFirstPage = () => {
    setPage(1);
    scrollTop();
  };

  const handleLastPage = () => {
    setPage(lastPage);
    scrollTop();
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const totalPages = lastPage;
    const displayRange = 3;

    const start = Math.min(Math.max(page - 2, 1), totalPages - displayRange + 1);
    const end = Math.max(Math.min(page + 2, totalPages), displayRange);

    for (let pageNum = start; pageNum <= end; pageNum++) {
      pageNumbers.push(pageNum);
      scrollTop();
    }

    return pageNumbers;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="badge badge-neutral border-none mb-1 rounded">
        Page {page} of {lastPage}
      </p>
      <div className="join">
        <button className="join-item md:btn btn btn-sm btn-neutral" onClick={handleFirstPage} disabled={page <= 1}>
          «
        </button>
        <button className="join-item md:btn btn btn-sm btn-neutral" onClick={handlePrevPage} disabled={page <= 1}>
          ‹
        </button>
        {generatePageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            className={page === pageNumber ? "join-item md:btn btn btn-sm" : "join-item md:btn btn btn-sm btn-neutral"}>
            {pageNumber}
          </button>
        ))}
        <button className="join-item md:btn btn btn-sm btn-neutral" onClick={handleNextPage} disabled={page >= lastPage}>
          ›
        </button>
        <button className="join-item md:btn btn btn-sm btn-neutral" onClick={handleLastPage} disabled={page >= lastPage}>
          »
        </button>
      </div>
    </div>
  );
}
