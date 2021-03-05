import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from 'redux/actions';
import { MovieSelect } from 'components';

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
          <h3 className="heading">Movie opening crawl</h3>
        </div>
      </div>
      <div className="container">
        <p className="paragraph">This is a generic page</p>
      </div>
    </section>
  );
};

export default Home;
