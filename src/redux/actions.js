import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contact/addContact', ({name, number}) => {
  return {
    payload: {
      id: nanoid(8),
      name,
      number,
      id: nanoid(8),
    },
  };
});

export const delContact = createAction('contact/delContact');

export const changeFilter = createAction('filter/changeFilter');

export const resetFilter = createAction('filter/resetFilter');
