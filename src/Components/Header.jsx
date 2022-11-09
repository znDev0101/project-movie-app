import React, { useEffect, useState } from 'react';

// IMPORT REACT ROUTER
import { Link } from 'react-router-dom';

// IMPORT FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// IMPORT COMPONENT
import SearchBar from './SearchBar';
import ShowResultsSearch from './ShowResultsSearch';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMoviesList, setShowMoviesList] = useState(false);
  const [tvshowList, setTvShowList] = useState(false);
  const [showResultsSearch, setShowResultsSearch] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(true);
      setHamburgerMenu(false);
    } else {
      setShowNavbar(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const handleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
    setHamburgerMenu(false);
  };

  const handleHamburgerMenu = () => {
    setHamburgerMenu(!hamburgerMenu);
    setShowSearchBar(false);
  };

  return (
    <nav className={`fixed  top-0 flex items-center justify-between backdrop-filter backdrop-blur-lg bg-opacity-80 bg-red-800 px-5 duration-300 z-40  ${showNavbar && '-top-52 duration-300 '}  sm:px-10 py-4 w-full`}>
      <span>
        <Link to="/" className="font-bold font-endcode text-red-400">
          ZNMOVIE
        </Link>
      </span>
      <div className="space-x-5 flex items-center sm:hidden">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" className="text-red-100" onClick={handleSearchBar} />
        <button type="button" className="space-y-1" onClick={handleHamburgerMenu}>
          <span className="w-7 h-1 block bg-red-100"></span>
          <span className="w-7 h-1 block bg-red-100"></span>
          <span className="w-7 h-1 block bg-red-100"></span>
        </button>
      </div>
      {/* SEARCH BAR */}
      <SearchBar showSearch={showSearchBar} setResultSearch={setShowResultsSearch} />
      {showResultsSearch && <ShowResultsSearch />}
      <ul
        className={`absolute top-14 right-0 p-5 translate-x-96 duration-700 text-left w-3/5 h-64 bg-red-800 rounded-lg  ${
          hamburgerMenu && `opacity-90 duration-700 translate-x-0`
        } sm:p-0 sm:space-x-5 sm:flex sm:flex-row sm:font-bold sm:bg-transparent sm:w-auto sm:h-auto sm:static sm:translate-x-0`}
      >
        <li className=" sm:contents">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" className="py-1 text-red-100 hidden hover:cursor-pointer hover:text-red-400 duration-300" onClick={() => setShowSearchBar(!showSearchBar)} />
        </li>
        <li className="relative font-extrabold  py-1 text-red-100 hover:cursor-pointer hover:text-red-400 duration-300 sm:font-bold" onMouseOver={() => setShowMoviesList(true)} onMouseLeave={() => setShowMoviesList(false)}>
          Movies
          {showMoviesList && (
            <ul className="flex flex-col bg-transparent font-normal sm:font-bold sm:p-4  sm:backdrop-filter sm:backdrop-blur-lg sm:bg-opacity-80 sm:bg-red-800 sm:w-36  sm:top-8 sm:space-y-2 sm:rounded-lg sm:shadow-md sm:absolute">
              <li className="text-red-100 text-start hover:cursor-pointer hover:text-red-400 duration-300">
                <Link to="/">Popular</Link>
              </li>
              <li className="text-red-100 text-start hover:cursor-pointer hover:text-red-600 duration-300">
                <Link to="/">Now Playing</Link>
              </li>
              <li className="text-red-100 text-start hover:cursor-pointer hover:text-red-600 duration-300">
                <Link to="/">Upcoming</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="relative  py-1 mt-2 font-extrabold text-red-100 hover:cursor-pointer hover:text-red-400 duration-300 sm:mt-0 sm:font-bold" onMouseOver={() => setTvShowList(true)} onMouseLeave={() => setTvShowList(false)}>
          Tv Show
          {tvshowList && (
            <ul className="flex flex-col font-normal sm:absolute sm:font-bold sm:backdrop-filter sm:backdrop-blur-lg sm:bg-opacity-80 sm:bg-red-800 sm:w-36 sm:p-4 sm:top-8 sm:space-y-2 sm:rounded-lg sm:shadow-md">
              <li className="text-red-100 text-start hover:cursor-pointer hover:text-red-400 duration-300">
                <Link to="/">Popular</Link>
              </li>
              <li className="text-red-100 text-start hover:cursor-pointer hover:text-red-400 duration-300">
                <Link to="/">Top Rated</Link>
              </li>
              <li className="text-red-100 text-start hover:cursor-pointer hover:text-red-400 duration-300">
                <Link to="/">On Tv</Link>
              </li>
            </ul>
          )}
        </li>
        <li className=" py-1 font-extrabold mt-2  text-red-100 hover:cursor-pointer hover:text-red-400 duration-300 sm:mt-0 sm:font-bold">
          <Link to="/aboutapp">About App</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
