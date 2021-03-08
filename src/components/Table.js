import React, { useEffect, useState } from 'react';
import { formatHeight } from 'utils';

const Table = ({ ...props }) => {
  const [direction, setDirection] = useState(true);
  const [entityList, setEntityListing] = useState([]);
  const { filteredList, total } = props;

  useEffect(() => {
    if (filteredList && filteredList.length > 0) {
      setEntityListing(filteredList);
    }
    return () => {
      setEntityListing([]);
    };
  }, [filteredList]);

  const compareBy = (key, ascending) => {
    let reverse = ascending ? 1 : -1;
    return function (a, b) {
      if (a[key] < b[key]) return -1 * reverse;
      if (a[key] > b[key]) return 1 * reverse;
      return 0;
    };
  };

  const sortBy = (key) => {
    let listCopy = [...entityList];
    listCopy.sort(compareBy(key, direction));
    setEntityListing(listCopy);
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
                    sortBy('name');
                    setDirection(!direction);
                  }}
                  className="sortable"
                  aria-hidden
                >
                  Name
                </div>
              </th>
              <th scope="col">
                <div
                  onClick={() => {
                    sortBy('gender');
                    setDirection(!direction);
                  }}
                  className="sortable"
                  aria-hidden
                >
                  Gender
                </div>
              </th>
              <th scope="col">
                <div
                  onClick={() => {
                    sortBy('height');
                    setDirection(!direction);
                  }}
                  className="sortable"
                  aria-hidden
                >
                  Height
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {entityList && entityList.length > 0 ? (
              entityList.map((actor) => {
                return (
                  <tr key={actor.name}>
                    <th scope="row">{actor.name}</th>
                    <td>{actor.gender}</td>
                    <td>{formatHeight(actor.height)}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <th scope="row" colSpan="3">
                  No content
                </th>
              </tr>
            )}
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
                  `Total Height ${total && formatHeight(total)}`}
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
