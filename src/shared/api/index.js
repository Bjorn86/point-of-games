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

/* TODO Добавить logout и checkAuth */
