import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const MovieSelect = (props) => {
  const { movies } = useSelector((state) => state);

  return (
    <form>
      <div className="form-group">
        <label htmlFor="movieSelect">Please select a movie</label>
        <select className="form-control" id="movieSelect">
          <option>Choose</option>
          {movies.list &&
            movies.list.map((movie) => {
              return <option key={movie.episode_id}>{movie.title}</option>;
            })}
        </select>
      </div>
    </form>
  );
};

MovieSelect.propTypes = {};
