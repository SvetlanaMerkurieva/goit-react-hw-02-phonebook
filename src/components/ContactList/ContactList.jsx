import s from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <section>
      <h2 className={s.title}>Contacts</h2>
      <ul>
        <li>
          <p>{contacts}</p>
        </li>
      </ul>
    </section>
  );
};
