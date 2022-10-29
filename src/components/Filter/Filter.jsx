import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ inputValue, inputChange }) => {
  return (
    <>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        value={inputValue}
        onChange={inputChange}
      />
    </>
  );
};

Filter.propTypes = {
  inputValue: PropTypes.string,
  inputChange: PropTypes.func,
};
