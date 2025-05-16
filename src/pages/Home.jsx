import FeatureMovies from "../components/FeatureMovies";
import MediaList from "../components/MediaList";
import { TOP_RATED_TAB, TRENDING_TAB } from "../libs/constant";

const Home = () => {
  return (
    <>
      <FeatureMovies />
      <MediaList title="Trending" tabs={TRENDING_TAB} />
      <MediaList title="Top Rated" tabs={TOP_RATED_TAB} />
    </>
  );
};

export default Home;
