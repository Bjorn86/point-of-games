import { configureStore } from '@reduxjs/toolkit';
import * as api from 'shared/api';
import { consoleListenerMiddleware } from './console-listener-middleware';
import { rootReducer } from './root-reducer';

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
    }).concat(consoleListenerMiddleware.middleware),
});
