import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDisptach, useDispatch } from 'react-redux';
import { getCharacter, resetCharacters } from 'redux/actions';
import { formatHeight } from 'utils';

export const CharacterTable = (props) => {
  const [movieKey, setMovieKey] = useState();
  const [actorList, setActorList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [total, setTotal] = useState();
  const [gender, setGender] = useState('');

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const { current } = movies;

  const getLength = current && current.characters && current.characters.length;

  const getMovieCharacters = useCallback(
    async (key, characterList) => {
      dispatch(resetCharacters(key));
      if (characterList && characterList.length > 0) {
        await characterList.map((character) => {
          return dispatch(getCharacter(key, character));
        });
      }
    },
    [dispatch],
  );

  useEffect(() => {
    if (current && Object.keys(current).includes('characters')) {
      const { characters, episode_id } = current;
      setMovieKey(episode_id);
      getMovieCharacters(episode_id, characters);
    }
  }, [getMovieCharacters, current]);

  useEffect(() => {
    if (movieKey && Object.keys(movies).includes('current')) {
      setActorList(movies[movieKey]);
      setGender('');
    }
  }, [movieKey, movies]);

  useEffect(() => {
    if (filteredList && filteredList.length > 0) {
      const actorHeight = filteredList.map((item) => {
        return !isNaN(parseInt(item.height, 10))
          ? parseInt(item.height, 10)
          : 0;
      });

      setTotal(
        actorHeight.reduce((a, b) => {
          return a + b;
        }),
      );
    }
  }, [getLength, filteredList, gender]);

  useEffect(() => {
    if (actorList && actorList.length === getLength) {
      const filtered = actorList.filter((item) => {
        return gender.length > 0 ? item.gender === gender : item.gender;
      });

      console.log({ filteredList });

      setFilteredList(filtered);
    }
  }, [filteredList, actorList, getLength, gender]);

  return (
    <section className="py-4">
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="mb-3">Character Listing</h4>
        <div className="form-group">
          <select
            className="form-control"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="">Filter by Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="hermaphrodite">hermaphrodite</option>
          </select>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Height</th>
            </tr>
          </thead>
          <tbody>
            {filteredList &&
              filteredList.length > 0 &&
              filteredList.map((actor) => {
                return (
                  <tr key={actor.name}>
                    <th scope="row">{actor.name}</th>
                    <td>{actor.gender}</td>
                    <td>{formatHeight(actor.height)}</td>
                  </tr>
                );
              })}
          </tbody>

          <tfoot>
            <tr>
              <th scope="col" colSpan="2">
                Chracter count {filteredList && filteredList.length}
              </th>
              <th scope="col">
                {' '}
                {filteredList &&
                  filteredList.length &&
                  `Height ${total && formatHeight(total)}`}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

CharacterTable.propTypes = {};
