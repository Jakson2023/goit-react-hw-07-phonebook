import { fetchContacts } from 'components/Operations/operations';
import { createSlice } from '@reduxjs/toolkit';
import { deleteContact } from 'components/Operations/operations';

export const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending](state) {
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
    [deleteContact.fulfilled](state, action) {
      
      
     
      state.items = state.items.filter(item => item.id !== action.payload.id)
    },
    

  },

});


export const contactsReducer = slice.reducer;