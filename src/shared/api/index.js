// IMPORT API'S
import * as fb from './firebase-api';
import * as ls from './local-storage-api';

// CREATE USER
export const createUser = ({ email, password }) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.createUser({ email, password })
    : ls.createUser({ email, password });

// SIGN IN
export const signIn = ({ email, password }) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.signIn({ email, password })
    : ls.signIn({ email, password });

// LOGOUT
export const logout = () =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase' ? fb.logout() : ls.logout();

// CHECK AUTHORIZATION
export const checkAuth = (setter) =>
  process.env.REACT_APP_REMOTE_STORE === 'firebase'
    ? fb.checkAuth(setter)
    : ls.checkAuth(setter);
