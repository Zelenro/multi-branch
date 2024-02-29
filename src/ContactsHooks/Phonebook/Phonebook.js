import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import {
  ContactItem,
  ContactList,
  ContactsList,
  FormButton,
} from './Phonebook.styled';

const Phonebook = ({ contacts, deleteContact, arrayFilterContact }) => {
  const allContacts = contacts.length;
  // console.log(allContacts);
  return (
    <ContactsList>
      <h3>My {allContacts} contacts</h3>

      <ContactList>
        {arrayFilterContact && arrayFilterContact.length > 0
          ? arrayFilterContact.map(contact => (
              <ContactItem key={contact.id}>
                <span>{contact.name}</span>
                <span>{contact.number}</span>
                <FormButton
                  type="button"
                  name="delete"
                  value={contact.id}
                  onClick={deleteContact}
                >
                  {/* Delete contact */}
                  <RiDeleteBin5Line className={{}} />
                </FormButton>
              </ContactItem>
            ))
          : contacts.map(contact => (
              <ContactItem key={contact.id}>
                <span>{contact.name}</span>
                <span>{contact.number}</span>
                <FormButton
                  type="button"
                  name="delete"
                  value={contact.id}
                  onClick={deleteContact}
                >
                  Delete contact
                </FormButton>
              </ContactItem>
            ))}
      </ContactList>
    </ContactsList>
  );
};

export default Phonebook;
