import { createListenerMiddleware } from '@reduxjs/toolkit';
import { setEnteredParams } from 'features/console/model/set-entered-params';
import { commands } from 'features/console/lib/commands';
import {
  auth,
  logout,
  search,
  showHelp,
  showStart,
  showHistory,
  showNotFound,
  showFavorites,
  addToFavorites,
  removeFromFavorites,
} from 'features/console/lib/utils';

export const consoleListenerMiddleware = createListenerMiddleware();

const startAppListening = consoleListenerMiddleware.startListening;

startAppListening({
  actionCreator: setEnteredParams,
  effect: async (action, listenerApi) => {
    const { command, params } = action.payload;
    const { dispatch, getState } = listenerApi;
    const { user } = getState().user;
    switch (command) {
      case commands.init:
        showStart();
        break;
      case commands.help:
        showHelp();
        break;
      case commands.login:
        auth(params, dispatch, commands.login);
        break;
      case commands.register:
        auth(params, dispatch, commands.register);
        break;
      case commands.logout:
        logout(dispatch);
        break;
      case commands.search:
        search(params, dispatch);
        break;
      case commands.showHistory:
        showHistory(dispatch, user);
        break;
      case commands.showFavorites:
        showFavorites(dispatch, user);
        break;
      case commands.addFavorite:
        addToFavorites(params, dispatch, user);
        break;
      case commands.removeFavorite:
        removeFromFavorites(params, dispatch, user);
        break;
      default:
        showNotFound();
    }
  },
});
