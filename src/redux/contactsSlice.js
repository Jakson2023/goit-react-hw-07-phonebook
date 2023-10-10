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

  reducers: {
    addNumber(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteNumber(state, action) {
      state.items=state.items.filter(item => item.id !== action.payload.id)
      
    },
  },
});

export const { addNumber, deleteNumber } = slice.actions;
export const contactsReducer = slice.reducer;
