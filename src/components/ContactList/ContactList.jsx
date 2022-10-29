import React from 'react';
import PropTypes from 'prop-types';

import { ContactItem } from './ContactItem/ContactItem';
export const ContactList = ({ actualData, deleteContact }) => {
  return (
    <ul>
      {actualData.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  actualData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};
