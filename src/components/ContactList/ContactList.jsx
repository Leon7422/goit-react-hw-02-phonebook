import React from 'react';
import { ContactItem } from './ContactItem/ContactItem';
export const ContactList = ({ actualData }) => {
  return (
    <ul>
      {actualData.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </ul>
  );
};
