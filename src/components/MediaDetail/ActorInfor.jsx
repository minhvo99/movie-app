import ImageComponent from "@components/ImageComponent";
import React from "react";

const ActorInfor = ({ id, name, character, profilePath }) => {
  return (
    <div className="rounded-lg border border-slate-300 bg-black shadow-sm">
      <ImageComponent
        src={`https://image.tmdb.org/t/p/original${profilePath}`}
        className="w-full rounded-lg"
        width={276}
        height={350}
      />
      {/* <img
        src={
          profilePath
            ? `https://image.tmdb.org/t/p/original${profilePath}`
            : `/noImage.svg`
        }
        alt=""
        className="w-full rounded-lg"
        width={276}
        height={350}
      /> */}
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        {/* <p>18 atp</p> */}
      </div>
    </div>
  );
};

export default ActorInfor;
