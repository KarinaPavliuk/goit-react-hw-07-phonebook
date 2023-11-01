import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';

const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer,
});
