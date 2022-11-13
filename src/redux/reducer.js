import { createReducer } from '@reduxjs/toolkit';
import { addContact, changeFilter, delContact, resetFilter } from './actions';

const keyLS = 'contacts';
const initcontact = [
  { id: 'id-1', name: 'ROMAN Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function preloadedContact() {
  return JSON.parse(localStorage.getItem(keyLS)) ?? initcontact;
}

export const contactReducer = createReducer(preloadedContact(), builder => {
  builder
    .addCase(addContact, (state, action) => {
      if (state.some(el => el.name === action.payload.name)) {
        alert(`${action.payload.name} is already  in  contacts`);
        return state;
      }
      return [...state, action.payload];
    })
    .addCase(delContact, (state, action) => {
      return state.filter(i => i.id !== action.payload);
    });
});

export const filterReducer = createReducer(
  '',

  builder => {
    builder
      .addCase(changeFilter, (_, action) => {
        return action.payload;
      })
      .addCase(resetFilter, () => {
        return '';
      });
  }
);

// export const contactReducer_ = (state = preloadedContact(), action) => {
//   switch (action.type) {

//     case addContact.toString():
//       if (state.some(el => el.name === action.payload.name)) {
//         alert(`${action.payload.name} is already  in  contacts`);
//         return state;
//       }
//       return [...state, action.payload];

//     case delContact.toString():
//       return state.filter(i => i.id !== action.payload);

//     default:
//       return state;
//   }
// };

// export const filterReducer_ = (state = '', action) => {
//   switch (action.type) {

//     case changeFilter.toString():
//       return action.payload;

//     case resetFilter.toString():
//       return '';

//     default:
//       return state;
//   }
// };
