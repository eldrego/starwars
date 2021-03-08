import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
// import { LoaderRipple } from 'components';

export const OpenCrawl = (props) => {
  const [display, setDisplay] = useState(true);
  // const { current } = useSelector((state) => state.movies);
  const movies = useSelector((state) => state.movies);
  const { current } = movies;

  const hideLogo = useCallback(() => {
    setDisplay(false);
  }, []);

  useEffect(() => {
    if (current && Object.keys(current).length > 0 && current.episode_id) {
      hideLogo();
    }
  }, [current, hideLogo]);

  return (
    <section className="container opening-crawl mt-3">
      <div id="crawler" className="crawler">
        <div className="crawl">
          <div className="title">
            <h1 className="text-center">
              {current && Object.keys(current).length > 0 && current.title}
            </h1>
          </div>
          <p className="anim-typewriter text-center">
            {current &&
              Object.keys(current).length > 0 &&
              current.opening_crawl}
          </p>
        </div>
      </div>
    </section>
  );
};

OpenCrawl.propTypes = {};
