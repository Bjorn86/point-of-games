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

export const createUserDB = (email) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.createUserDB(email)
    : ls.createUserDB(email);

export const getUserData = (email) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.getUserData(email)
    : ls.getUserData(email);

export const getUserHistory = (email) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.getUserHistory(email)
    : ls.getUserHistory(email);

export const addToHistory = (email, query) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.addToHistory(email, query)
    : ls.addToHistory(email, query);

export const removeFromHistory = (email, query) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.removeFromHistory(email, query)
    : ls.removeFromHistory(email, query);
