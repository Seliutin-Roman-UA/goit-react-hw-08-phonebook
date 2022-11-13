import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const keyLS = 'contacts';
let initcontact = [
  { id: 'id-1', name: 'ROMAN Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];


const contactSlice = createSlice({
  name: 'contacts',
  initialState: initcontact,

  reducers: {
    addContact: {
      reducer(state, { payload }) {
        if (state.some(el => el.name === payload.name)) {
          alert(`${payload.name} is already  in  contacts`);
          return state;
        }
        return [...state, payload];
      },
      prepare({ name, number }) {
          return {
            payload: {
              id: nanoid(8),
              name,
              number,
            },
          };
      },
    },
    delContact(state, { payload }) {
      return state.filter(i => i.id !== payload);
    },
  },
});

export const { addContact, delContact } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
