import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm ';
import { Filter } from './Filter/Filter';
import { ListContacts } from './ListContacts/ListContacts';

import { PhoneBook } from './App.styled';

const keyLS = 'contacts';


export function App() {
  const initstate = [
    { id: 'id-1', name: 'ROMAN Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(keyLS)) ?? initstate;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    return localStorage.setItem(keyLS, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const { name, number } = newContact;

    if (contacts.some(el => el.name === name)) {
      alert(`${name} is already  in  contacts`);
      return;
    }
    const id = nanoid(8);
    setContacts(() => [...contacts, { id, name, number }]);
  };

  const delContact = id => {
    setContacts(() => contacts.filter(i => i.id !== id));
  };

  const changeFilter = event => setFilter(event.currentTarget.value);

  const clearFilter = () => setFilter("");

  const normalizeFilter = filter.toLowerCase();
  const filtredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <PhoneBook>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} onClick={clearFilter} />
      <ListContacts filtredContacts={filtredContacts} delContact={delContact} />
    </PhoneBook>
  );
}
