import { deletedFromFavorites } from 'features/favorites/model/deleted-from-favorites';
import { addedToFavorites } from 'features/favorites/model/added-to-favorites';
import { userValidationSchema } from 'shared/model/user-validation-schema';
import { favoritesReceived } from 'features/favorites/model/favorites-received';
import { addedToHistory } from 'features/history/model/added-to-history';
import { historyReceived } from 'features/history/model/history-received';
import { userRegisters } from 'features/auth/register';
import { userLogsOut } from 'features/auth/logout';
import { userLogsIn } from 'features/auth/login';
import { endpoints } from 'shared/api';
import { COMMAND_REGEX, PARAMS_REGEX } from './constants';
import { messages } from './messages';

/* eslint-disable no-console */

const validateCredentials = (args) => {
  try {
    if (args && args[0] && args[1]) {
      const credentials = {
        email: args[0],
        password: args[1],
      };
      userValidationSchema.validateSync(credentials);
      return true;
    }
  } catch (e) {
    console.warn(e);
  }
  return false;
};

export const parseCommandString = (commandSting) => {
  const command = commandSting.match(COMMAND_REGEX);
  const params = commandSting.match(PARAMS_REGEX);
  const parsedParams = params?.map((p) => p.slice(1, -1).trim());
  return { command: String(command), params: parsedParams };
};

export const auth = (params, dispatch, type) => {
  if (params && params[0] && params[1]) {
    if (validateCredentials(params)) {
      const action =
        type === '/signin'
          ? userLogsIn({ email: params[0], password: params[1] })
          : userRegisters({ email: params[0], password: params[1] });
      dispatch(action)
        .unwrap()
        .then((res) => console.log(`Hello, ${res.email}`))
        .catch((e) => console.warn(e));
    }
  } else {
    console.warn(messages.auth);
  }
};

export const logout = (dispatch) => {
  dispatch(userLogsOut())
    .unwrap()
    .then(() => console.log(messages.goodbye))
    .catch((e) => console.warn(e));
};

export const search = (params, dispatch) => {
  if (params) {
    dispatch(endpoints.searchGames.initiate(params))
      .unwrap()
      .then((res) => console.table(res))
      .then(() => dispatch(addedToHistory(params[0])))
      .catch((e) => console.warn(e));
  } else {
    console.warn(messages.searchWarning);
  }
};

export const showHistory = (dispatch, user) => {
  if (user) {
    dispatch(historyReceived())
      .then((res) => console.table(res.payload))
      .catch((e) => console.warn(e));
  } else {
    console.warn(messages.authWarning);
  }
};

export const showFavorites = async (dispatch, user) => {
  if (user) {
    const favorites = await dispatch(favoritesReceived());
    const res = [];
    if (favorites.payload.length) {
      await Promise.all(
        favorites.payload.map(async (id) => {
          try {
            const data = await dispatch(
              endpoints.getGameForFavorites.initiate(id),
            ).unwrap();
            res.push(data);
          } catch (e) {
            console.warn(e);
          }
        }),
      );
      console.table(res);
    } else {
      console.warn(messages.favoritesWarning);
    }
  } else {
    console.warn(messages.authWarning);
  }
};

export const addToFavorites = async (params, dispatch, user) => {
  if (user) {
    const id = Number(params[0]);
    const favorites = await dispatch(favoritesReceived());
    if (favorites.payload.includes(id)) {
      console.warn(messages.alreadyFavorite);
    } else {
      dispatch(addedToFavorites(id))
        .then(() => console.log(messages.successAddFavorite))
        .catch((e) => console.warn(e));
    }
  } else {
    console.warn(messages.authWarning);
  }
};

export const removeFromFavorites = async (params, dispatch, user) => {
  if (user) {
    const id = Number(params[0]);
    const favorites = await dispatch(favoritesReceived());
    if (favorites.payload.includes(id)) {
      dispatch(deletedFromFavorites(id))
        .then(() => console.log(messages.successRemoveFavorite))
        .catch((e) => console.warn(e));
    } else {
      console.warn(messages.notFavorite);
    }
  } else {
    console.warn(messages.authWarning);
  }
};

export const getGame = (params, dispatch) => {
  const id = Number(params[0]);
  dispatch(endpoints.getGameDetails.initiate(id))
    .unwrap()
    .then((res) => console.dir(res))
    .catch((e) => console.warn(e));
};

export const showStart = () => {
  console.log(messages.welcome);
};

export const showHelp = () => {
  console.log(messages.help);
};

export const showNotFound = () => {
  console.warn(messages.notFound);
};

/* eslint-enable no-console */
