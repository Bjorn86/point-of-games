import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from 'app/firebase';

export const signUp = ({ email, password }) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signIn = ({ email, password }) =>
  signInWithEmailAndPassword(auth, email, password);

/* TODO Добавить logout и checkAuth */
