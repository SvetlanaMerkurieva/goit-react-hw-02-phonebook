import { Component } from 'react';
import shortid from 'shortid';
/*import shortid from 'shortid';*/
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleFormSubmit = data => {
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };
    this.setState(prevstate => ({
      contacts: [...prevstate.contacts, contact],
      name: data.name,
    }));
    console.log(contact);
  };
  render() {
    return (
      <div className={s.app}>
        <header className={s.appHeader}>
          <ContactForm onSubmit={this.handleFormSubmit} />
          <ContactList contacts={this.state.contacts} />
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
