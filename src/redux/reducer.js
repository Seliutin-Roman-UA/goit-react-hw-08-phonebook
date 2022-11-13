import { combineReducers } from 'redux';

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
const contactReducer = (state = preloadedContact(), action) => {
 
  switch (action.type) {
    case 'contact/addContact':
      if (state.some(el => el.name === action.payload.name)) {
        alert(`${action.payload.name} is already  in  contacts`);
        return state;
      }
      return [...state, action.payload];

    case 'contact/deliteContact':
     
      return state.filter(i => i.id !== action.payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter/changeFilter':
      return action.payload;

    case 'filter/resetFilter':
      return '';

    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
