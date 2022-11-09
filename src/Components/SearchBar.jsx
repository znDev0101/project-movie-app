import React, { useState, useRef } from 'react';

// IMPORT FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ showSearch, setResultSearch }) => {
  const [clearSearchMovie, setClearSearchMovie] = useState(false);
  const [keyword, setKeyword] = useState('');

  const inputRef = useRef();

  const handleChange = (e) => {
    if (keyword === '') {
      setClearSearchMovie(true);
      setResultSearch(true);
    }
    if (e.target.value === '') {
      setClearSearchMovie(false);
      setResultSearch(false);
      inputRef.current.value = '';
    }
    setKeyword(e.target.value);
    console.log(keyword);
  };

  const handleClearSearchMovie = () => {
    setKeyword('');
    setClearSearchMovie(false);
    setResultSearch(false);
  };
  return (
    <div className={`absolute   ${showSearch ? 'top-14 opacity-100 duration-500' : '-top-14  opacity-0 duration-500'} left-0`}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute z-10 top-3 left-4 text-red-400  sm:left-10" size="lg" />
      <input
        type="text"
        className="w-screen py-3 px-12 bg-red-50  text-red-400 placeholder:text-red-400 placeholder:italic placeholder:font-semibold border focus:outline-none focus:border-slate-700  sm:px-20"
        placeholder="Search Your Movies..."
        value={keyword}
        ref={inputRef}
        onChange={handleChange}
      />
      {clearSearchMovie && <FontAwesomeIcon icon={faXmark} className="absolute right-6 top-3 text-red-400 hover:cursor-pointer sm:right-16" size="xl" onClick={handleClearSearchMovie} />}
    </div>
  );
};

export default SearchBar;
