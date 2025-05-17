import ImageComponent from "@components/ImageComponent";
import { useModelContext } from "@context/ModelProvider";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Movie = ({ movies, trailerVideoKey }) => {
  const { openPopup } = useModelContext();
  return (
    <>
      <ImageComponent
        src={`https://image.tmdb.org/t/p/original${movies?.backdrop_path}`}
        className="aspect-video w-full brightness-50"
        width={900}
        height={500}
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{movies?.title}</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="text-[1.2vw]">{movies?.release_date}</p>
        </div>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Over View</p>
            <p>{movies?.overview}</p>
          </div>
          <div className="mt-4">
            <button
              onClick={() => {
                openPopup(
                  <iframe
                    className="aspect-video w-[50vw]"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                    title="Trailer"
                  ></iframe>,
                );
              }}
              className="mr-2 cursor-pointer rounded bg-white px-4 py-2 text-[10px] text-black lg:text-lg"
            >
              <FontAwesomeIcon icon={faPlay} /> Trailer
            </button>
            <Link to={`/movie/${movies?.id}`}>
              <button className="cursor-pointer rounded bg-slate-300/35 px-4 py-2 text-[10px] lg:text-lg">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
