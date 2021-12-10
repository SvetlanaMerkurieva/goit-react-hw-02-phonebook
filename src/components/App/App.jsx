import { Component } from 'react';
import shortid from 'shortid';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
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
  render() {
    return (
      <div className={s.app}>
        <header className={s.appHeader}>
          <h2 className={s.title}>Phonebook</h2>
          <ContactForm onSubmit={this.handleFormSubmit} />
          <h2 className={s.title}>Contacts</h2>
          <h3 className={s.title}>Найти контакт по имени</h3>
          <Filter />
          <ContactList
            contacts={this.state.contacts}
            onDeleteContact={this.deleteContact}
          />
        </header>
      </div>
    );
  }
}

export default App;

/*<ContactForm
            name={this.state.name}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            handleButtonClick={this.handleButtonClick}
          />
          <ContactList contacts={this.state.contacts} />*/
