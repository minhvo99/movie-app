import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import CircularProgressBar from "../CircularProgressBar";
import ImageComponent from "@components/ImageComponent";

import { useModelContext } from "@context/ModelProvider";

const Banner = ({
  title,
  backdropPath,
  posterPath,
  certification,
  crews,
  releaseDate,
  genres,
  point = 0,
  overview,
  trailerVideoKey,
}) => {
  const groudCrews = Object.groupBy(crews, (job) => job.job);
  const { openPopup } = useModelContext();
  return (
    <div className="relative overflow-hidden bg-black text-white shadow-sm shadow-slate-800">
      <ImageComponent
        className="absolute inset-0 aspect-video w-full brightness-20"
        src={`https://image.tmdb.org/t/p/original${backdropPath}`}
        width={1200}
        height={800}
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          <ImageComponent
            src={`https://image.tmdb.org/t/p/original${posterPath}`}
            width={600}
            height={900}
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{title}</p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">
              {certification?.certification || "G"}
            </span>
            <p>{releaseDate}</p>
            <p>{(genres || []).map((genre) => genre.name).join(", ")}</p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                point={Math.round(point * 10) || 0}
                size={3.5}
                strokeWidth={0.3}
              />
              Rating
            </div>
            <button
              onClick={() => {
                openPopup(
                  <iframe
                    title="Trailer"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                    className="aspect-video w-[50vw]"
                  />,
                );
              }}
              className="mr-2 cursor-pointer rounded bg-white px-4 py-2 text-[10px] text-black lg:text-lg"
            >
              <FontAwesomeIcon icon={faPlay} className="mr-1" /> Trailer
            </button>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>{overview}</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {Object.keys(groudCrews).map((job) => (
              <div key={job}>
                <p className="font-bold">{job}</p>
                <p>
                  {(groudCrews[job] || []).map((crew) => crew.name).join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
