import { removeFromFavorites as remove } from 'features/favorites/model/remove-from-favorites';
import { addToFavorites as add } from 'features/favorites/model/add-to-favorites';
import { userValidationSchema } from 'shared/model/user-validation-schema';
import { getFavorites } from 'features/favorites/model/get-favorites';
import { addToHistory } from 'features/history/model/add-to-history';
import { getHistory } from 'features/history/model/get-history';
import { registerUser } from 'features/auth/register';
import { logoutUser } from 'features/auth/logout';
import { loginUser } from 'features/auth/login';
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
          ? loginUser({ email: params[0], password: params[1] })
          : registerUser({ email: params[0], password: params[1] });
      dispatch(action)
        .unwrap()
        .then((res) => console.log(`Привет, ${res.email}`))
        .catch((e) => console.warn(e));
    }
  } else {
    console.warn(messages.auth);
  }
};

export const logout = (dispatch) => {
  dispatch(logoutUser())
    .unwrap()
    .then(() => console.log(messages.goodbye))
    .catch((e) => console.warn(e));
};

export const search = (params, dispatch) => {
  if (params) {
    dispatch(endpoints.searchGames.initiate(params))
      .unwrap()
      .then((res) => console.table(res))
      .then(() => dispatch(addToHistory(params[0])))
      .catch((e) => console.warn(e));
  } else {
    console.warn(messages.searchWarning);
  }
};

export const showHistory = (dispatch, user) => {
  if (user) {
    dispatch(getHistory())
      .then((res) => console.table(res.payload))
      .catch((e) => console.warn(e));
  } else {
    console.warn(messages.authWarning);
  }
};

export const showFavorites = async (dispatch, user) => {
  if (user) {
    const favorites = await dispatch(getFavorites());
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
    const favorites = await dispatch(getFavorites());
    if (favorites.payload.includes(id)) {
      console.warn(messages.alreadyFavorite);
    } else {
      dispatch(add(id))
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
    const favorites = await dispatch(getFavorites());
    if (favorites.payload.includes(id)) {
      dispatch(remove(id))
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
