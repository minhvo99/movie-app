import Loading from "@components/Loading";
import MovieCard from "@components/MovieCard";
import React from "react";

const RelatedMediaList = ({ mediaList, isLoading }) => {
  return (
    <div className="mt-6">
      <p className="mb-4 text-[1.4vw] font-bold">More Like This</p>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5 lg:gap-6">
          {(mediaList || []).map((media) => (
            <MovieCard
              key={media.id}
              title={media.title || media.name}
              id={media.id}
              releaseDate={media?.release_date || media?.first_air_date}
              posterPath={media.poster_path}
              point={media.vote_average}
              mediaType={media.media_type}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedMediaList;
