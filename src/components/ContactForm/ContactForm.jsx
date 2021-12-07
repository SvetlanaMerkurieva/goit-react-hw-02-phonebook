import s from './ContactForm.module.css';

export const ContactForm = ({
  name,
  handleInputChange,
  handleSubmit,
  handleButtonClick,
}) => {
  return (
    <section>
      <h2 className={s.title}>Phonebook</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor="" className={s.text}>
          Name
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" onClick={handleButtonClick}>
          Add contact
        </button>
      </form>
    </section>
  );
};
