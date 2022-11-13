import { nanoid } from 'nanoid';

export function add_Contact({id, name, number }) {
  return {
    type: 'contact/addContact',
    payload: {
      id: nanoid(8),
      name,
      number,
    },
  };
}
export function deliteContact(id) {
  return {
    type: 'contact/deliteContact',
    payload: id,
    
  };
}
export function changeFiilter(value) {
  return {
    type: 'filter/changeFilter',
    payload: value,
  };
}
export function resetFilter() {
  return {
    type: 'filter/resetFilter',
  };
}
