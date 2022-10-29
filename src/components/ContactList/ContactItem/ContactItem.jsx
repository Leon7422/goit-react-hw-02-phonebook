import React from 'react';

export const ContactItem = ({ name, number }) => {
  return (
    <li>
      {name}: {number}
    </li>
  );
};
