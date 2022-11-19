import { createSlice } from '@reduxjs/toolkit';
import { addContacts, getContacts, removeContacts } from './operations';

const isPending = state => {
  state.isLoading = true;
};
const isRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [getContacts.pending]: isPending,
    [getContacts.rejected]: isRejected,
    [getContacts.fulfilled]: (state, { payload }) => {
      console.log('payload>>>>', payload);
      state.isLoading = false;
      state.error = null;
      console.log('state>>>>', state);
      state.contacts = payload;
    },
    //
    [addContacts.pending]: isPending,
    [addContacts.rejected]: isRejected,
    [addContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      if (state.contacts.some(el => el.name === payload.name)) {
        alert(`${payload.name} is already  in  contacts`);
        return state;
      }
      state.contacts.push(payload);
    },
    //
    [removeContacts.pending]: isPending,
    [removeContacts.rejected]: isRejected,
    [removeContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(i => i.id !== payload);
    },
  },
});

export const contactsReducer = contactSlice.reducer;
