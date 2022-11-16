import { ContactForm } from './ContactForm/ContactForm ';
import { Filter } from './Filter/Filter';
import { ListContacts } from './ListContacts/ListContacts';
import { PhoneBook } from './App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/operations';

export function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

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
