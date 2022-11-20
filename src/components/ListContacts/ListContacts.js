import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';

export function ListContacts() {

  const state = useSelector(state => state);
 console.log(
   'state.filter>>>>',
   state.contacts.contacts
   
 );
  const normalizeFilter = state.filter.toLowerCase();
  const filtredContacts = state.contacts.contacts.filter(el =>
    el.name.toLowerCase().includes(normalizeFilter)
  );
 
  if (filtredContacts.length === 0) return <p>NOTHING IS FOUND</p>;
  return (
    <ul >
      {filtredContacts.map(el => (
        <Contact key={el.id} element={el} />
      ))}
    </ul>
  );
}
