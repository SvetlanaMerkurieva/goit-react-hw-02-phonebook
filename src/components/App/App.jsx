import { ContactForm } from '../ContactForm/ContactForm';
import s from './App.module.css';

function App() {
  return (
    <div className={s.app}>
      <header className={s.appHeader}>
        <ContactForm />
      </header>
    </div>
  );
}

export default App;
