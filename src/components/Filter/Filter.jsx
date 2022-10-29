import React from 'react';

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
