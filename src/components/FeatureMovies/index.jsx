/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
import useFetch from "@hooks/useFetch";
import Loading from "@components/Loading";

const FeatureMovies = () => {
  const [activeMovieId, setActiveMovieId] = useState();
  const { data: popularMovieRespon } = useFetch({
    url: "/discover/movie?include_video=true&language=en-US&page=1&sort_by=popularity.desc",
  });

  const { data: videoResponse, isLoading } = useFetch(
    {
      url: `/movie/${activeMovieId}/videos`,
    },
    { enabled: !!activeMovieId },
  );

  const movies = (popularMovieRespon?.results || [])?.slice(0, 4);
  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieId(movies[0]?.id);
    }
  }, [JSON.stringify(movies)]);

  return (
    <div className="relative text-white">
      {movies
        ?.filter((movie) => movie?.id === activeMovieId)
        .map((movie) => (
          <Movie
            key={movie.id}
            movies={movie}
            trailerVideoKey={
              (videoResponse?.results || [])?.find(
                (video) => video.type === "Trailer" && video.site === "YouTube",
              )?.key
            }
          />
        ))}
      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
      {isLoading && <Loading />}
    </div>
  );
};

export default FeatureMovies;
