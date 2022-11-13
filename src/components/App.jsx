import { ContactForm } from './ContactForm/ContactForm ';
import { Filter } from './Filter/Filter';
import { ListContacts } from './ListContacts/ListContacts';
import { PhoneBook } from './App.styled';

export function App() {
  return (
    <PhoneBook>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ListContacts />
    </PhoneBook>
  );
}
