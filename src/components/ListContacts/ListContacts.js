import { Contact } from 'components/Contact/Contact';
import { ContactList } from './ListContacts.styled';
import { useSelector } from 'react-redux';

export function ListContacts() {

  const state = useSelector(state => state);

  const normalizeFilter = state.filter.toLowerCase();
  const filtredContacts = state.contacts.contacts.filter(el =>
    el.name.toLowerCase().includes(normalizeFilter)
  );
 
  if (filtredContacts.length === 0) return <p>NOTHING IS FOUND</p>;
  return (
    <ContactList>
      {filtredContacts.map(el => (
        <Contact key={el.id} element={el} />
      ))}
    </ContactList>
  );
}
