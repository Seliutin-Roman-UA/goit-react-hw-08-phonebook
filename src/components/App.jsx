import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm ';
import { Filter } from './Filter/Filter';
import { ListContacts } from './ListContacts/ListContacts';

import { PhoneBook } from './App.styled';
import { useSelector } from 'react-redux';

const keyLS = 'contacts';


export function App() {
  
  const contacts = useSelector(state => state.contacts);
  const st = useSelector(state => state);

  console.log('------', st.filter);

  useEffect(() => {
    return localStorage.setItem(keyLS, JSON.stringify(contacts));
  }, [contacts]);
 
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
