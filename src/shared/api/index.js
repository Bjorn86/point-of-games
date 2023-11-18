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
