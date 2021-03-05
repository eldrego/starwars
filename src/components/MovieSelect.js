import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DropDown } from 'components';
import { setCurrentMovie } from 'redux/actions';

export const MovieSelect = (props) => {
  const dispatch = useDispatch();
  const [films, setFilms] = useState();
  const [selectedFilm, setSelectedFilm] = useState();

  const { list } = useSelector((state) => state.movies);

  useEffect(() => {
    if (list) {
      const movieList = list.map((item) => {
        return {
          ...item,
          date: new Date(item.release_date),
        };
      });

      setFilms(movieList);
    }
  }, [list]);

  useEffect(() => {
    dispatch(setCurrentMovie(selectedFilm));
  }, [dispatch, selectedFilm]);

  return (
    <form>
      <div className="form-group">
        <label htmlFor="movieSelect">Please select a movie</label>
        <DropDown list={films} onChange={setSelectedFilm} handler={'movies'} />
      </div>
    </form>
  );
};

MovieSelect.propTypes = {};