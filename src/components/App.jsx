import { ContactForm } from './ContactForm/ContactForm ';
import { Filter } from './Filter/Filter';
import { ListContacts } from './ListContacts/ListContacts';
import { PhoneBook } from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
 

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <PhoneBook>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && 'Waiting, data is loading'}
      <h2>Contacts</h2>
      <Filter />
      <ListContacts />
    </PhoneBook>
  );
}
