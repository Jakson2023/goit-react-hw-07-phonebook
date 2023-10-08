import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from 'components/Operations/operations';
export const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending](state) {
      console.log(state);
      
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },



  // reducers: {
  //   addContact(state, action) {
  //     state.contacts = [...state.contacts, action.payload];
  //   },
  //   deleteContact(state, action) {
  //     state.contacts = action.payload;
  //   },
  // },
});

export const { addContact, deleteContact } = slice.actions;
export const contactsReducer = slice.reducer;
