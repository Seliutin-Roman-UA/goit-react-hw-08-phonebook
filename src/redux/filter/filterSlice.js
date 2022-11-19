import { createSlice } from '@reduxjs/toolkit';


const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    changeFilter(_, { payload }) {
      return payload;
      },
    
    resetFilter() {
        return '';
    },
  },
});

export const { changeFilter, resetFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
