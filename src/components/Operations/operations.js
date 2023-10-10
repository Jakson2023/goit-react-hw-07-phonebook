import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { deleteNumber, addNumber } from 'redux/contactsSlice';

axios.defaults.baseURL = 'https://65201bd9906e276284c40a96.mockapi.io/api';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { thunkAPI, dispatch }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      dispatch(deleteNumber({ id }));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, {thunkAPI, dispatch}) => {
    try {
      const response = await axios.post('/contacts', newContact, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      dispatch(addNumber(response.data));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
