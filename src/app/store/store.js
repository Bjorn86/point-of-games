import { configureStore } from '@reduxjs/toolkit';
import { rawgApi, featureFlagApi } from 'shared/api';
import * as api from 'shared/api';
import { consoleListenerMiddleware } from '../../features/console/model/console-listener';
import { modifyRawgData } from './modify-rawg-data';
import { getUpdatedData } from './get-updated-data';
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
    })
      .prepend(consoleListenerMiddleware.middleware)
      .concat(rawgApi.middleware)
      .concat(featureFlagApi.middleware)
      .concat(modifyRawgData)
      .concat(getUpdatedData),
});
