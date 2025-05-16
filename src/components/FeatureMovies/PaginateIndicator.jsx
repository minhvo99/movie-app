import { useEffect } from "react";

const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = movies.findIndex(
        (movie) => movie.id === activeMovieId,
      );
      const nextIndex = (currentIndex + 1) % movies.length;
      setActiveMovieId(movies[nextIndex].id);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeMovieId, movies, setActiveMovieId]);
  return (
    <div className="absolute right-8 bottom-[10%]">
      <ul className="flex gap-1">
        {movies?.map((movie) => (
          <li
            key={movie.id}
            className={`h-1 w-4 cursor-pointer bg-gray-600 ${
              activeMovieId === movie.id ? "bg-slate-100" : ""
            }`}
            onClick={() => setActiveMovieId(movie.id)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default PaginateIndicator;
