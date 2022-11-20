import { useState } from 'react';
import { Form } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import {Button, TextField} from '@mui/material';
import { MdAddCircle } from 'react-icons/md';

export function ContactForm() {
  const dispatch = useDispatch();

  const initstate = { name: '', number: '' };
  const [contact, setContact] = useState(initstate);

  const changeElement = event => {
    const fromAttName = event.target.name;
    setContact({ ...contact, [fromAttName]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    setContact(initstate);
    dispatch(addContacts({ ...contact, id: 'id-12' }));
  };

  return (
    <Form onSubmit={submitForm}>
      <TextField
          inputProps={{
            sx: {
              p: '5px',
              width: '280px',
            },
          }}
          inputLabelProps={{ size: 'small' }}
          color="secondary"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          size="small"
          type="text"
          name="name"
          value={contact.name}
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={changeElement}
        />
         
         
     
     <TextField
          inputProps={{
            sx: {
              p: '5px',
              width: '280px',
            },
          }}
          inputLabelProps={{ size: 'small' }}
          color="secondary"
          id="outlined-basic"
          label="Number"
          variant="outlined"
          size="small"
          type="tel"
          name="number"
          value={contact.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={changeElement}
        />
      
      <Button
        variant="outlined"
        color="secondary"
        size="small"
        startIcon={<MdAddCircle />}
        type="submit"
      >
        Add contact
      </Button>
    </Form>
  );
}
