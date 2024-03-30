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
  return (
    <div className="flex justify-center items-center py-4 px-2 text-white gap-4">
      {page <= 1 ? (
        <button onClick={handlePrevPage} className="text-gray-400" disabled>
          Prev
        </button>
      ) : (
        <button onClick={handlePrevPage} className="hover:text-blue-400 transition-all">
          Prev
        </button>
      )}
      <p>
        Page {page} of {lastPage}
      </p>
      {page >= lastPage ? (
        <button onClick={handleNextPage} className="text-gray-400" disabled>
          Next
        </button>
      ) : (
        <button onClick={handleNextPage} className="hover:text-blue-400 transition-all">
          Next
        </button>
      )}
    </div>
  );
}
