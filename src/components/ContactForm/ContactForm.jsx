import { Component } from 'react';
import s from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
  };
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({ name: '' });
  };
  render() {
    return (
      <section>
        <h2 className={s.title}>Phonebook</h2>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label htmlFor="" className={s.text}>
            Name
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </section>
    );
  }
}
