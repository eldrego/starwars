import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from 'redux/actions';
import { MovieSelect, OpenCrawl, CharacterListing } from 'components';
import starWarsImage from '../assets/images/star_wars_logo.png';

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
          <div className className="col-md-12">
            <div className="d-flex w-100 justify-content-center align-items-center pt-5">
              <img className="main-logo" src={starWarsImage} alt="star wars" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <OpenCrawl />
        </div>
      </div>
      <div className="container character-listing">
        <CharacterListing />
      </div>
    </section>
  );
};

export default Home;
