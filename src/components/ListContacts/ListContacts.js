import { Contact } from 'components/Contact/Contact';
import { ContactList } from './ListContacts.styled';
import { useSelector } from 'react-redux';

export function ListContacts() {
  const state = useSelector(state => state);

  console.log('contacts_ListContacts', state.filter);
  const a = state.filter;

    const normalizeFilter = a.toLowerCase();
    const filtredContacts = state.contacts.filter(el =>
      el.name.toLowerCase().includes(normalizeFilter)
    );
   console.log('filtredContacts_ListContacts', filtredContacts);
  if (filtredContacts.length === 0) return <p>NOTHING IS FOUND</p>;
  return (
    <ContactList>
      {filtredContacts.map(el => (
        <Contact key={el.id} element={el} />
      ))}
    </ContactList>
  );
}
