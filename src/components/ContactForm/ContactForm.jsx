import { Component } from 'react';
import s from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleChange = e => {
    this.setState({ name: e.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.name);
  };
  render() {
    const { name } = this.state;
    return (
      <section>
        <h2 className={s.title}>Phonebook</h2>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label htmlFor="" className={s.text}>
            Name
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </section>
    );
  }
}
