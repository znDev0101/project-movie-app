import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDetails, getResultsApiDetails } from '../../features/movie/movieSlice';

const MovieDetail = () => {
  let { movieId } = useParams();

  const dispatch = useDispatch();
  const getResultsDetails = useSelector(getResultsApiDetails);

  useEffect(() => {
    dispatch(getDetails('zulfa'));
  }, [dispatch, getDetails]);

  return (
    <>
      <h1 className="mt-20 mx-20">test {movieId}</h1>
    </>
  );
};

export default MovieDetail;
