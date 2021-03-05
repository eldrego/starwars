import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const DropDown = ({ ...props }) => {
  const { list, onChange } = props;
  const dropDownRef = useRef(null);
  const [display, setDisplay] = useState(false);
  const [selection, setSelection] = useState({});

  const toggle = () => {
    setDisplay(!display);
  };

  const handleClickOutside = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setDisplay(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleSelection = (selected) => {
    setSelection(selected);
    onChange(selected);
    toggle();
  };

  return (
    <div className="dd dd-wrapper" ref={dropDownRef}>
      <div className="dd-header" onClick={toggle} aria-hidden>
        <div className="dd-header-title">
          {selection.title || 'Select Film'}
        </div>
        {/* <i
          className={classnames({
            'icon-chevron-down': !display,
            'icon-chevron-up': display,
            'iconmoon ': true,
          })}
        /> */}
      </div>
      <ul
        className={classnames({
          show: display,
          'dd-list': true,
        })}
      >
        {list &&
          list
            .slice()
            .sort((a, b) => b.date - a.date)
            .map((item) => (
              <li
                key={item.episode_id}
                className="dd-list-item"
                onClick={() => handleSelection(item)}
                aria-hidden
              >
                <span>{item.title}</span>
                <br />
                <small>{item.release_date}</small>
              </li>
            ))}
      </ul>
    </div>
  );
};

DropDown.defaultProps = {
  list: [],
};

DropDown.propTypes = {
  list: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func.isRequired,
};