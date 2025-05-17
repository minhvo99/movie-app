import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@/components/MediaDetail/RelatedMediaList";
import MovieInformation from "@components/MediaDetail/MovieInformation";
import useFetch from "@hooks/useFetch";

const MovieDetail = () => {
  const { id } = useParams();
  const { data: movieInfor, isLoading } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits,similar,videos`,
  });

  const { data: recommendReults, isLoading: isRelatedLoading } = useFetch({
    url: `/movie/${id}/recommendations`,
  });
  const relatedMedia = recommendReults?.results || [];

  const certification = (
    (movieInfor?.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((releaseDate) => releaseDate?.certification);

  const crews = (movieInfor?.credits?.crew || [])
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

  return (
    <div>
      <Banner
        title={movieInfor.title}
        backdropPath={movieInfor.backdrop_path}
        posterPath={movieInfor.poster_path}
        certification={certification}
        crews={crews}
        releaseDate={movieInfor.release_date}
        genres={movieInfor.genres}
        point={movieInfor.vote_average}
        overview={movieInfor.overview}
        trailerVideoKey={
          (movieInfor?.videos?.results || [])?.find(
            (video) => video.type === "Trailer" && video.site === "YouTube",
          )?.key
        }
      />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="container bg-black">
          <div className="flex-[2]">
            <ActorList actors={movieInfor?.credits?.cast || []} />
            <RelatedMediaList
              title="More Like This"
              mediaList={relatedMedia}
              isLoading={isRelatedLoading}
            />
          </div>
          <div className="flex-1">
            <MovieInformation movieInfor={movieInfor} />
          </div>
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default MovieDetail;
