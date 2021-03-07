import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { formatHeight } from 'utils';

const Table = ({ ...props }) => {
  const [sortOption, setSortOption] = useState('up');
  const [entityList, setEntityListing] = useState([]);
  const { filteredList, total } = props;

  useEffect(() => {
    if (filteredList && filteredList.length > 0) {
      setEntityListing(filteredList);
    }
  }, [filteredList]);

  const compareBy = (key, direction) => {
    // console.log(sortTypes[key].fn());
    // console.log({ direction });
    // return function (a, b) {
    //   if (a[key] < b[key]) return -1;
    //   if (a[key] > b[key]) return 1;
    //   return 0;
    // };
  };

  const triggerSort = useCallback(
    (sortKey) => {
      let actorsCopy = [...entityList];
      actorsCopy.sort(compareBy(sortKey, sortOption));
      console.log(actorsCopy);
    },
    [sortOption],
  );

  const onSortChange = (key) => {
    let nextSort;

    if (sortOption === 'down') nextSort = 'up';
    else if (sortOption === 'up') nextSort = 'default';
    else if (sortOption === 'default') nextSort = 'down';

    setSortOption(nextSort);
    triggerSort(key);
  };

  return (
    <section className="">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <div
                  onClick={() => {
                    onSortChange('name');
                  }}
                >
                  Name
                </div>
              </th>
              <th scope="col">Gender</th>
              <th scope="col">Height</th>
            </tr>
          </thead>
          <tbody>
            {entityList &&
              entityList.length > 0 &&
              entityList.map((actor) => {
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

Table.propTypes = {};

export default Table;
