import React from 'react';
import { Container } from './App.styled';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    ],
    filter: '',
  };

  filterInputChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  formSubmitHandler = data => {
    const newContact = { id: nanoid(), ...data };
    this.setState(prev => ({
      contacts: [newContact, ...prev.contacts],
    }));
  };

  render() {
    const normilezedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(el => {
      return el.name.toLowerCase().includes(normilezedFilter);
    });
    return (
      <Container>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h3>Contacts</h3>
        <Filter
          inputValue={this.state.filter}
          inputChange={this.filterInputChange}
        />
        <ContactList actualData={visibleContacts} />
      </Container>
    );
  }
}
