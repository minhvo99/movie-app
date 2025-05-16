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

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Banner mediaInfor={movieInfor} />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="max-w-screen-cl mx-auto flex gap-6 bg-black px-6 py-10 sm:gap-8">
          <div className="flex-[2]">
            <ActorList actors={movieInfor?.credits?.cast || []} />
            <RelatedMediaList
              mediaList={relatedMedia}
              isLoading={isRelatedLoading}
            />
          </div>
          <div className="flex-1">
            <MovieInformation movieInfor={movieInfor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
