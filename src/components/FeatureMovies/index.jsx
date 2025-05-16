/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
import useFetch from "@hooks/useFetch";

const FeatureMovies = () => {
  const [activeMovieId, setActiveMovieId] = useState();
  const { data: popularMovieRespon } = useFetch({
    url: "/movie/popular",
  });

  const movies = (popularMovieRespon?.results || [])?.slice(0, 4);
  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieId(movies[0]?.id);
    }
  }, [JSON.stringify(movies)]);

  // useEffect(() => {
  //   fetch("https://api.themoviedb.org/3/movie/popular", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  //       "Content-Type": "application/json;charset=utf-8",
  //       Accept: "application/json",
  //     },
  //   }).then(async (res) => {
  //     const data = await res.json();
  //     const popularMovies = data.results?.slice(0, 4);
  //     setMovies(popularMovies);
  //     setActiveMovieId(popularMovies[0]?.id);
  //   });
  // }, []);
  return (
    <div className="relative text-white">
      {movies
        ?.filter((movie) => movie?.id === activeMovieId)
        .map((movie) => (
          <Movie key={movie.id} movies={movie} />
        ))}
      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};

export default FeatureMovies;
