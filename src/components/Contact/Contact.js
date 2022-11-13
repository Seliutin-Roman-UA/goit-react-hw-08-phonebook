import { ContactItem } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/actions';

export function Contact({ element: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <span>
        {name}: {number}
      </span>
      <button type="button" onClick={() => dispatch(delContact(id))}>
        Delete
      </button>
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
