import { useState } from "react";
import MovieCard from "../MovieCard";
import { TRENDING_TIME } from "../../libs/constant";
import useFetch from "@hooks/useFetch";

const MediaList = ({ title, tabs }) => {
  const [activeTabId, setActiveMTabId] = useState(tabs[0]?.id);
  const [timeMedia, setTimeMedia] = useState("day");
  let url = tabs.find((tab) => tab.id === activeTabId)?.url;
  url = title === "Trending" ? `${url}${activeTabId}/${timeMedia}` : url;
  const { data } = useFetch({
    url,
  });
  const mediaList = data?.results || [];

  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex items-center rounded border border-white">
          {tabs?.map((media) => (
            <li
              key={media.id}
              className={`cursor-pointer rounded px-2 py-1 ${activeTabId === media.id ? "bg-white text-black" : ""}`}
              onClick={() => setActiveMTabId(media.id)}
            >
              {media.name}
            </li>
          ))}
        </ul>
        {title === "Trending" && (
          <ul className="flex items-center rounded border border-white">
            {TRENDING_TIME.map((time) => (
              <li
                key={time.id}
                className={`cursor-pointer rounded px-2 py-1 ${timeMedia === time.id ? "bg-white text-black" : ""}`}
                onClick={() => setTimeMedia(time.id)}
              >
                {time.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5 lg:gap-6">
        {mediaList?.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title || movie.name}
            id={movie.id}
            releaseDate={
              movie.release_date ||
              movie.first_air_date ||
              movie.known_for_department
            }
            posterPath={movie.poster_path || movie.profile_path}
            point={movie?.vote_average || null}
            mediaType={movie.media_type || activeTabId}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
