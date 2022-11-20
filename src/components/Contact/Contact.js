import { ContactItem } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContacts } from 'redux/contacts/operations';
import Button from '@mui/material/Button';
import { MdRemoveCircle } from 'react-icons/md';


export function Contact({ element: { id, name, number } }) {
  const dispatch = useDispatch();
  

  return (
    <ContactItem>
      <span>
        {name}: {number}
      </span>
      <Button
        variant="outlined"
        color="secondary"
        size="small"
        startIcon={<MdRemoveCircle />}
        type="button"
        onClick={() => dispatch(removeContacts(id))}
      >
        Delete
      </Button>
    </ContactItem>
  );
}

Contact.propTypes = {
  element: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
