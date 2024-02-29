import React from 'react';
import { ContactsList } from '../Phonebook/Phonebook.styled';

const Filter = ({ filter, filterContacts }) => {
  return (
    <ContactsList>
      <h3>Filter</h3>
      <label>
        Find contact
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={filterContacts}
        />
      </label>
    </ContactsList>
  );
};

export default Filter;
