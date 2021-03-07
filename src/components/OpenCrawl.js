import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import starWarsImage from '../assets/images/star_wars_logo.png';

export const OpenCrawl = (props) => {
  const { current } = useSelector((state) => state.movies);

  // console.log(current);

  return (
    <>
      {current && Object.keys(current).length > 0 ? (
        <>
          {/* <div className="fade"></div> */}
          <section className="crawler">
            <div className="crawl">
              <div className="title">
                <h1>{current.title}</h1>
              </div>
              <p>{current.opening_crawl}</p>
            </div>
          </section>
          {/* <section className="star-wars">
            <div className="crawl">
              <div className="title">
               
              </div>
              
            </div>
          </section> */}
        </>
      ) : (
        <div className="d-flex w-100 justify-content-center align-items-center pt-5">
          <img className="main-logo" src={starWarsImage} alt="star wars" />
        </div>
      )}
    </>
  );
};

OpenCrawl.propTypes = {};
