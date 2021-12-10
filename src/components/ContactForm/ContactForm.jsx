import { Component } from 'react';
import s from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <section>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label htmlFor="" className={s.text}>
            Name
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может содержать только буквы, апостроф, тире и пробелы. Например Адриан, Якоб Мерсер, Шарль де Батц де Кастельмор д'Артаньян"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              placeholder="Enter number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять из цифр и может содержать пробелы, дефисы, круглые скобки и может начинаться с +."
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
