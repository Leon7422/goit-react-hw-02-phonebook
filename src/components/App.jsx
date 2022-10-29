import React from 'react';
import { Container } from './Phonebook.styled';
import { nanoid } from 'nanoid';

export class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  addContactToList = () => {
    this.state.contacts.push({
      id: nanoid(),
      name: this.state.name,
    });
    this.setState({ name: '' });
  };

  render() {
    return (
      <Container>
        <h2>Phonebook</h2>
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <button onClick={this.addContactToList} type="button">
          Add Contact
        </button>
        <h3>Contacts</h3>
        <ul>
          {this.state.contacts.map(contact => {
            return <li key={contact.id}>{contact.name}</li>;
          })}
        </ul>
      </Container>
    );
  }
}
