import React from "react";
import ImageComponent from "./ImageComponent";

const TVShowInformation = ({ tvInfor }) => {
  const { original_name, origin_country, status } = tvInfor;
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4 font-bold">
        <p>Original Name</p>
        <p>{original_name}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        <p className="flex items-center">
          {(origin_country || [])?.map((country) => (
            <img
              key={country}
              src={`https://flagcdn.com/48x36/${country.toLowerCase()}.png`}
              className="width-[1.2vw] mt-1 mr-1"
            />
          ))}
        </p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Networks</p>
        <p>
          {(tvInfor?.networks || []).map((network) => (
            <ImageComponent
              className="mt-2"
              key={network.id}
              src={`https:media.themoviedb.org/t/p/h30${network?.logo_path}`}
            />
          ))}
        </p>
      </div>
    </div>
  );
};

export default TVShowInformation;
