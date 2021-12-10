import s from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <section>
      <h2 className={s.title}>Contacts</h2>
      <ul>
        {contacts.map(contact => {
          return (
            <li className={s.text} key={contact.id}>
              {contact.name[0]}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
