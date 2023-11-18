import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from 'app/firebase';

export const signUp = ({ email, password }) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signIn = ({ email, password }) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => {
  signOut(auth);
};

export const checkAuth = (cb) => {
  onAuthStateChanged(auth, (user) => {
    cb(user);
  });
};
