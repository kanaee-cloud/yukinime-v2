import { GrPrevious, GrNext } from "react-icons/gr";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePreviousPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="p-6 mt-10 text-md">
      <div className="flex gap-x-5 items-center justify-center">
        {page <= 1 ? null : (
          <button
            onClick={handlePreviousPage}
            className="btn-blue p-3 transition-all hover:scale-125 hover:text-color-accent"
          >
            <GrPrevious />
          </button>
        )}
        <p className="text-sm">
          {page} of {lastPage}
        </p>
        <button
          onClick={handleNextPage}
          className="btn-blue p-3 transition-all hover:scale-125 hover:text-color-accent"
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
