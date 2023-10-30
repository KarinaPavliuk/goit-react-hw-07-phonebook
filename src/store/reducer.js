import { contactReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

export const reducer = {
  contacts: persistedReducer,
  filter: filterReducer,
};
