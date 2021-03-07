import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from 'redux/actions';
import { MovieSelect, OpenCrawl, CharacterListing } from 'components';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getFilms = async () => {
      await dispatch(getMovies());
    };

    getFilms();
  });
  return (
    <section className="section">
      <div className="opening-crawl">
        <div className="row w-100 d-flex justify-content-center align-items-baseline">
          <div className="col-md-4">
            <MovieSelect />
          </div>
        </div>
        <div className="row">
          <OpenCrawl />
        </div>
      </div>
      <div className="container">
        <CharacterListing />
        <p className="paragraph">
          This is a table for characters in the selected movie
        </p>
      </div>
    </section>
  );
};

export default Home;
