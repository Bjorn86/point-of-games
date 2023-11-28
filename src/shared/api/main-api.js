import * as fb from './firebase-api';
import * as ls from './local-storage-api';

export const signUp = ({ email, password }) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.signUp({ email, password })
    : ls.signUp({ email, password });

export const signIn = ({ email, password }) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.signIn({ email, password })
    : ls.signIn({ email, password });

export const logout = () =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase' ? fb.logout() : ls.logout();

export const checkAuth = (cb) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.checkAuth(cb)
    : ls.checkAuth(cb);

export const createUserDB = (user) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.createUserDB(user)
    : ls.createUserDB(user);

export const getUserData = (user) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.getUserData(user)
    : ls.getUserData(user);

export const getUserHistory = (user) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.getUserHistory(user)
    : ls.getUserHistory(user);

export const addToHistory = (user, query) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.addToHistory(user, query)
    : ls.addToHistory(user, query);

export const removeFromHistory = (user, query) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.removeFromHistory(user, query)
    : ls.removeFromHistory(user, query);

export const getUserFavorites = (user) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.getUserFavorites(user)
    : ls.getUserFavorites(user);

export const addToFavorites = (user, query) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.addToFavorites(user, query)
    : ls.addToFavorites(user, query);

export const removeFromFavorites = (user, query) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.removeFromFavorites(user, query)
    : ls.removeFromFavorites(user, query);
