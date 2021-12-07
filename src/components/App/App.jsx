import { Component } from 'react';
import shortid from 'shortid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  contactInputId = shortid.generate();
  handleInputChange = e => {
    this.setState({ name: e.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
  };
  handleButtonClick = () => {
    this.setState(() => {
      return {
        contacts: this.contacts.push({
          name: this.state.name,
          id: this.contactInputId,
        }),
      };
    });
    console.log(this.state.contacts);
  };
  render() {
    return (
      <div className={s.app}>
        <header className={s.appHeader}>
          <ContactForm
            name={this.state.name}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            handleButtonClick={this.handleButtonClick}
          />
          <ContactList contacts={this.state.contacts} />
        </header>
      </div>
    );
  }
}

export default App;
