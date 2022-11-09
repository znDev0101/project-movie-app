import React, { useEffect } from 'react';
import Card from '../../Components/Cards';

// IMPORT SWIPER JS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';

// IMPORT REACT SPINNER
import { MoonLoader } from 'react-spinners';

// IMPORT REACT ROUTER
import { Link } from 'react-router-dom';

// IMPORT HERO IMAGES
import HeroImages from '../../Assets/img/background.jpg';

// IMPORT FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

// import required modules
import { Scrollbar, Mousewheel } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviePopular, getMoviePopularAllData, getMovieTopRated, getMovieTopRatedAllData, movieTopRatedPending, moviePopularPending, moviePopularRejected, movieTopRatedRejected } from '../../features/movie/movieSlice';

const Home = () => {
  const IMG_PATH = `https://image.tmdb.org/t/p/w500`;
  const dispatch = useDispatch();

  // MOVIE POPULAR
  const moviesPopularAllData = useSelector(getMoviePopularAllData);
  const moviesPopularPending = useSelector(moviePopularPending);
  const moviesPopularRejected = useSelector(moviePopularRejected);

  // MOVIE TOP RATED
  const moviesTopRatedAllData = useSelector(getMovieTopRatedAllData);
  const moviesTopRatedPending = useSelector(movieTopRatedPending);
  const moviesTopRatedRejected = useSelector(movieTopRatedRejected);

  useEffect(() => {
    dispatch(getMoviePopular());
    dispatch(getMovieTopRated());
  }, [dispatch]);

  const handleSelect = () => {
    console.log('berhasil di log');
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative">
        <div className="w-full">
          <div className="absolute w-full h-[20rem] bg-red-400 opacity-80 sm:h-[25rem]"></div>
          <img className="w-full h-[20rem] object-cover object-bottom sm:h-[25rem] sm:object-top" src={`${HeroImages}`} alt="logo" />
          <div className="absolute top-[40%] px-1">
            <h1 className="font-extrabold text-red-100 text-4xl sm:text-6xl px-7">Welcome.</h1>
            <h2 className="font-bold text-red-100 text-xl sm:text-4xl px-7">Millions of movies, TV shows and people to discover. Explore now.</h2>
          </div>
        </div>
      </section>
      {/* END HERO SECTION */}
      <section className="pt-5 sm:px-10 w-100">
        {/* POPULAR MOVIE*/}
        <div className="container pt-4 px-3">
          <div className="flex justify-between items-center space-x-10">
            <h5 className="text-2xl font-bold text-primary text-red-400">What's Popular</h5>
            {/* SELECTED */}
            <div className="relative flex flex-col bg-red-400 w-36 px-5 rounded-full" onClick={handleSelect}>
              <h3 className="font-bold text-red-50">Movies</h3>
              <FontAwesomeIcon icon={faCaretDown} size="lg" className="absolute right-5 text-red-50" />
              <ul className="absolute top-6 bg-red-300  backdrop-filter backdrop-blur-lg w-full left-0 rounded-full font-bold text-red-50 px-5 zn-50">
                <li>
                  <Link to="/">On Tv</Link>
                </li>
              </ul>
            </div>
          </div>
          {moviesPopularAllData && (
            <Swiper
              // default slide viewz
              slidesPerGroup={1}
              slidesPerView={7}
              spaceBetween={5}
              mousewheel={true}
              scrollbar={{
                dragSize: 50,
                hide: true,
              }}
              // Breakpoints screens
              breakpoints={{
                320: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                },
                844: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 6,
                },
              }}
              modules={[Scrollbar, Mousewheel]}
              className="mySwiper"
            >
              {moviesPopularAllData.map((data) => {
                return (
                  <SwiperSlide className="py-5 sm:py-5" key={data.id}>
                    <Link to={`movie/${data.id}`}>
                      <Card key={data.id} id={data.id} title={data.title} images={IMG_PATH + data.poster_path} release_date={data.release_date} vote={data.vote_average} />
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
          {moviesPopularPending && <MoonLoader size={80} color={'#f87171'} className="m-auto" />}
          {moviesPopularRejected && <p>Page Not Found</p>}
        </div>
        {/* free to watch movie */}
        <div className="container pt-5 px-3">
          <h5 className="text-2xl font-bold text-primary text-red-400">Top Rated</h5>
          {moviesTopRatedAllData && (
            <Swiper
              // default slide viewz
              slidesPerGroup={1}
              slidesPerView={7}
              mousewheel={true}
              scrollbar={{
                dragSize: 50,
                hide: true,
              }}
              // Breakpoints screens
              breakpoints={{
                320: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                },
                844: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 6,
                },
              }}
              modules={[Scrollbar, Mousewheel]}
              className="mySwiper"
            >
              {moviesTopRatedAllData.map((data) => {
                return (
                  <SwiperSlide className="py-5 sm:py-5" key={data.id}>
                    <Card id={data.id} title={data.title} images={IMG_PATH + data.poster_path} release_date={data.release_date} vote={data.vote_average} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
          {moviesTopRatedPending && <MoonLoader size={80} color={'#f87171'} className="m-auto" />}
          {moviesTopRatedRejected && <p>Page Not Found</p>}
        </div>
      </section>
      {/* LASEST TRAILERS */}
      <section className="w-full"></section>
    </>
  );
};

export default Home;
