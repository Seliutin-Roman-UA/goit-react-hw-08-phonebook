import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactPersistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  whitelist: ['contacts'],
};

const persistedContactReducer = persistReducer(
  contactPersistConfig,
  combineReducers({
    contacts: contactReducer,
    filter: filterReducer,
  })
);

export const store = configureStore({
  reducer: persistedContactReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
