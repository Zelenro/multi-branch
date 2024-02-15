import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

class Contacts extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handlerInput = e => {
    const { name, value } = e.currentTarget;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
    return value;
  };

  addContacts = (name, number) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  filteringContactsBeforeAdding = name => {
    const escapedValue = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedValue}\\b`, 'i');
    return this.state.contacts.filter(contact => regex.test(contact.name));
  };

  searchForContacts = name => {
    const escapedValue = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedValue}`, 'i');
    return this.state.contacts.filter(contact => regex.test(contact.name));
  };

  filterContacts = e => {
    const name = this.handlerInput(e);
    const arrayFilterContact = this.searchForContacts(name);
    if (arrayFilterContact.length > 1) {
      return;
    }
    return arrayFilterContact;
  };

  deleteContact = e => {
    const contactId = e.currentTarget.value;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handlerSubmit = (value, { resetForm }) => {
    const { name, number } = value;
    const findContact = this.filteringContactsBeforeAdding(name);
    if (findContact.length > 0) {
      alert(`${findContact[0].name} is already in contacts`);
      return;
    }
    this.addContacts(name, number);
    resetForm();
  };

  componentDidMount() {
    const itemLocal = localStorage.getItem('contacts');
    // console.log(itemLocal);
    const contactsLocal = JSON.parse(itemLocal);
    // console.log(contactsLocal);

    if (contactsLocal !== null) {
      this.setState(prevState => ({
        contacts: contactsLocal,
      }));
    }
    // console.log(`Re render componentDidMount ${Date.now()}`);
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState.contacts);
    // console.log(this.state.contacts);

    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));

      for (let i = 0; i < localStorage.length; i += 1) {
        // console.log(localStorage.getItem(localStorage.key(i)));
      }

      for (let i = 0; i < localStorage.length; i += 1) {
        // console.log(localStorage.key(i));
      }
    }

    // console.log(`Re render componentDidUpdate ${Date.now()}`);
  }

  componentWillUnmount() {
    // console.log(`Re render componentWillUnmount ${Date.now()}`);
  }

  // shouldComponentUpdate() {
  //   console.log(`Re render shouldComponentUpdate ${Date.now()}`);
  // }

  render() {
    // console.log(`Re render ${Date.now()}`);
    // console.log('render');
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm handlerSubmit={this.handlerSubmit} />
        <Filter state={this.state} filterContacts={this.filterContacts} />
        <Phonebook
          state={this.state}
          arrayFilterContact={this.searchForContacts(this.state.filter)}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default Contacts;
