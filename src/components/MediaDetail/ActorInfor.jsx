import ImageComponent from "@components/ImageComponent";
import React from "react";
import { Link } from "react-router-dom";

const ActorInfor = ({ id, name, character, profilePath, episodeCount }) => {
  return (
    <Link
      to={`/people/${id}`}
      className="rounded-lg border border-slate-300 bg-black shadow-sm"
    >
      <ImageComponent
        src={profilePath && `https://image.tmdb.org/t/p/original${profilePath}`}
        className="w-full rounded-lg"
        width={276}
        height={350}
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        {episodeCount && (
          <p>
            {episodeCount} {episodeCount >= 2 ? "Episodes" : "Episode"}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ActorInfor;
