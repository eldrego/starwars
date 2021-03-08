import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

export const OpenCrawl = (props) => {
  const [display, setDisplay] = useState(true);
  const { current } = useSelector((state) => state.movies);

  const hideLogo = useCallback(() => {
    setDisplay(false);
  }, []);

  useEffect(() => {
    if (current && Object.keys(current).length > 0) {
      hideLogo();
    }
  }, [current, hideLogo]);

  console.log(display);

  return (
    <>
      {current && Object.keys(current).length > 0 && (
        <section className="container opening-crawl">
          <div id="crawler" className="crawler">
            <div className="crawl">
              <div className="title">
                <h1 className="text-center">{current.title}</h1>
              </div>
              <p className="anim-typewriter text-center">
                {current.opening_crawl}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

OpenCrawl.propTypes = {};
