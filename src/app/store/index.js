// IMPORT PACKAGES
import { configureStore } from '@reduxjs/toolkit';

// IMPORT API
import * as api from 'shared/api';

// IMPORT ROOT REDUCER
import { rootReducer } from './root-reducer';

// STORE
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api,
        },
      },
      serializableCheck: {
        ignoredActions: [
          '@@auth/registration/fulfilled',
          '@@auth/login/fulfilled',
        ],
      },
    }),
});
