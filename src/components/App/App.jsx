import { Component } from 'react';
import shortid from 'shortid';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleFormSubmit = data => {
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevstate => ({
      contacts: [...prevstate.contacts, contact],
    }));
  };
  deleteContact = contactId => {
    this.setState(prevstate => ({
      contacts: prevstate.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };
  getVisibleContact = () => {
    const normalValueFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalValueFilter),
    );
  };
  render() {
    const visibleContacts = this.getVisibleContact;
    return (
      <div className={s.app}>
        <header className={s.appHeader}>
          <h2 className={s.title}>Phonebook</h2>
          <ContactForm onSubmit={this.handleFormSubmit} />
          <h2 className={s.title}>Contacts</h2>
          <Filter value={this.state.filter} onGhange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </header>
      </div>
    );
  }
}

export default App;
