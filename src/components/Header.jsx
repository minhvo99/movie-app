import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="lg:h20 flex h-14 items-center justify-between bg-slate-950 px-8 text-white">
      <div className="flex items-center gap-4 lg:gap-6">
        <Link to="/">
          <img src="/netflix.png" alt="" className="w-16 sm:w-28" />
        </Link>
        <Link to="/search?mediaType=movie" className="lg:text-xl">
          Movie
        </Link>
        <Link to="search?mediaType=tv" className="lg:text-xl">
          TV Show
        </Link>
      </div>
      <div>
        <Link to="/search">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
