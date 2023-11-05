import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

export const handlePending = state => {
  state.contacts.isLoading = true;
};

export const handleFulfilled = state => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload.message;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const index = state.contacts.items.findIndex(
          contact => contact.id === payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const contactReducer = contactsSlice.reducer;
