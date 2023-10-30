import { createSlice } from '@reduxjs/toolkit';
import { getAllContacts } from './thunks';
import {
  handleFulfilledAll,
  handlePending,
  handleFulfilled,
  handleRejected,
} from './helpers';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllContacts.fulfilled, handleFulfilledAll)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
  // {
  //   [getAllContacts.pending]: state => {
  //     state.isLoading = true;
  //   },
  //   [getAllContacts.fulfilled]: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.contacts = payload;
  //   },
  //   [getAllContacts.rejected]: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.error = payload.message;
  //   },
  // },
});

export const contactReducer = contactsSlice.reducer;
