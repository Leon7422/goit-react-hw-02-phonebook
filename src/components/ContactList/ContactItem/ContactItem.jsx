import React from 'react';
import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, id, deleteContact }) => {
  return (
    <li>
      {name}: {number}
      <button
        onClick={() => {
          deleteContact(id);
        }}
      ></button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  deleteContact: PropTypes.func,
};
