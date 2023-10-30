import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, removeContact } from 'API/contacts';

export const getAllContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, rejectWithValue) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async () => {
    return await removeContact();
  }
);
