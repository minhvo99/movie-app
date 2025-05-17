import { Link } from "react-router-dom";
import CircularProgressBar from "./CircularProgressBar";
import ImageComponent from "./ImageComponent";

const MovieCard = (props) => {
  const { posterPath, title, releaseDate, point, mediaType, id } = props;
  const pointAverage = Math.round(point * 10);
  const url = {
    movie: `/movie/${id}`,
    tv: `/tv/${id}`,
    person: `/people/${id}`,
  };
  return (
    <Link
      to={`${url[mediaType]}`}
      className="cursor-pointer rounded-lg border border-slate-800"
    >
      <div className="relative">
        {mediaType === "tv" && (
          <p className="absolute top-1 right-1 rounded bg-black p-1 text-sm font-bold text-white shadow-md">
            TV Show
          </p>
        )}
        <ImageComponent
          src={posterPath && `https://image.tmdb.org/t/p/original${posterPath}`}
          className="w-full rounded-lg"
          width={210}
          height={300}
        />
        <div className="relative -top-[1.5vw] px-4">
          {mediaType !== "person" && (
            <CircularProgressBar point={pointAverage} />
          )}
          <p className="mt-6 font-bold">{title}</p>
          <p className="text-slate-300">{releaseDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
