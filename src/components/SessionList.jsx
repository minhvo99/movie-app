import React, { useState } from "react";
import ImageComponent from "./ImageComponent";
import CircularProgressBar from "./CircularProgressBar";

const SessionList = ({ seasons = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const currentSeasons = isShowMore ? seasons : seasons.slice(0, 3);

  return (
    <div className="mt-8 cursor-pointer text-[1.3vw]">
      <p className="mb-4 text-[1.4vw] font-bold">Session</p>
      <div className="space-y-4">
        {currentSeasons?.map((season) => (
          <div
            key={season.id}
            className="flex gap-4 rounded-lg border border-slate-200 p-3 shadow-md"
          >
            <ImageComponent
              width={130}
              height={195}
              src={`https://image.tmdb.org/t/p/original${season?.poster_path}`}
              className="w-1/4 rounded-lg"
            />
            <div className="space-y-1">
              <p className="text-[1.4vw] font-bold">
                Season {season.season_number}
              </p>
              <div className="flex items-center gap-2">
                <p className="font-bold">Rating</p>
                <CircularProgressBar
                  point={Math.round(season?.vote_average || 0) * 10}
                  strokeWidth={0.2}
                />
              </div>
              <p>
                <span className="font-bold">Release date:</span>{" "}
                {season?.air_date}
              </p>
              <p>{season?.episode_count} Episodes</p>
              <p>{season?.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <p
        className="mt-1 cursor-pointer"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? "Show less" : "Show more"}
      </p>
    </div>
  );
};

export default SessionList;
