import { configureStore } from '@reduxjs/toolkit';
import { cardsApi } from 'entities/cards';
import * as api from 'shared/api';
import { modifyCardsData } from '../../features/cards/model/modify-cards-data'; // TODO ?
import { consoleListenerMiddleware } from '../../features/console/model/console-listener'; // TODO ?
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
      .concat(cardsApi.middleware)
      .concat(modifyCardsData),
});
