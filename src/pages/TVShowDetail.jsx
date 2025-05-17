import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@/components/MediaDetail/RelatedMediaList";
import MovieInformation from "@components/MediaDetail/MovieInformation";
import useFetch from "@hooks/useFetch";
import TVShowInformation from "@components/TVShowInformation";
import SessionList from "@components/SessionList";

const TVShowDetail = () => {
  const { id } = useParams();
  const { data: tvInfor, isLoading } = useFetch({
    url: `/tv/${id}?append_to_response=content_ratings,credits,aggregate_credits,videos`,
  });

  const { data: recommendReults, isLoading: isRecommandationLoading } =
    useFetch({
      url: `/tv/${id}/recommendations`,
    });
  const relatedTVShow = recommendReults?.results || [];

  const certification = (tvInfor?.content_ratings?.results || []).find(
    (tv) => tv.iso_3166_1 === "US",
  )?.rating;

  const crews = (tvInfor?.aggregate_credits?.crew || [])
    .filter((crew) => {
      const jobs = (crew.jobs || []).map((j) => j.job);
      return [
        "Director",
        "Writer",
        "Screenplay",
        "Producer",
        "Production Design",
      ].some((job) => jobs.find((j) => j === job));
    })
    .splice(0, 10)
    .map((crew) => ({
      id: crew.id,
      name: crew.name,
      job: crew.jobs[0]?.job || "Unknown",
    }));

  return (
    <div>
      <Banner
        title={tvInfor.name}
        backdropPath={tvInfor.backdrop_path}
        posterPath={tvInfor.poster_path}
        certification={certification}
        crews={crews}
        releaseDate={tvInfor.first_air_date}
        genres={tvInfor.genres}
        point={tvInfor.vote_average}
        overview={tvInfor.overview}
        trailerVideoKey={
          (tvInfor?.videos?.results || [])?.find(
            (video) => video.type === "Trailer" && video.site === "YouTube",
          )?.key
        }
      />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="container">
          <div className="flex-[2]">
            <ActorList
              actors={(tvInfor?.aggregate_credits?.cast || []).map((cast) => ({
                ...cast,
                character: cast?.roles[0]?.character,
                episodeCount: cast?.roles[0]?.episode_count,
              }))}
            />
            <SessionList seasons={tvInfor.seasons} />
            <RelatedMediaList
              title="More Like This"
              mediaList={relatedTVShow}
              isLoading={isRecommandationLoading}
            />
          </div>
          <div className="flex-1">
            <TVShowInformation tvInfor={tvInfor} />
          </div>
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default TVShowDetail;
