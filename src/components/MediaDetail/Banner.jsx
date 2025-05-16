import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import CircularProgressBar from "../CircularProgressBar";
import ImageComponent from "@components/ImageComponent";

const Banner = ({ mediaInfor }) => {
  const certification = (
    (mediaInfor?.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((releaseDate) => releaseDate?.certification);

  const crews = (mediaInfor?.credits?.crew || [])
    .filter((crew) =>
      [
        "Director",
        "Writer",
        "Screenplay",
        "Producer",
        "Production Design",
      ].includes(crew.job),
    )
    .map((crew) => ({
      id: crew.id,
      name: crew.name,
      job: crew.job,
    }));
  const groudCrews = Object.groupBy(crews, (job) => job.job);
  return (
    <div className="relative overflow-hidden text-white shadow-sm shadow-slate-800">
      <ImageComponent
        className="absolute inset-0 brightness-20"
        src={`https://image.tmdb.org/t/p/original${mediaInfor.backdrop_path}`}
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          <ImageComponent
            src={`https://image.tmdb.org/t/p/original${mediaInfor.poster_path}`}
            width={600}
            height={900}
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{mediaInfor.title}</p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">
              {certification?.certification || "G"}
            </span>
            <p>{mediaInfor?.release_date}</p>
            <p>
              {(mediaInfor?.genres || []).map((genre) => genre.name).join(", ")}
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                point={Math.round(mediaInfor?.vote_average * 10) || 0}
                size={3.5}
                strokeWidth={0.3}
              />
              Rating
            </div>
            <button>
              <FontAwesomeIcon icon={faPlay} className="mr-1" /> Trailer
            </button>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>{mediaInfor.overview}</p>
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
