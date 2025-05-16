import React from "react";
import { currencyFormat } from "@libs/utils";

const MovieInformation = ({ movieInfor }) => {
  const { original_title, origin_country, revenue, budget, status } =
    movieInfor;
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4 font-bold">
        <p>Original Name</p>
        <p>{original_title}</p>
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
        <p className="font-bold">Budget</p>
        <p>{budget ? currencyFormat(budget) : "Updating..."}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Revenue</p>
        <p>{revenue ? currencyFormat(revenue) : "Updating..."}</p>
      </div>
    </div>
  );
};

export default MovieInformation;
