// IMPORT PACKAGES
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

// IMPORT FIREBASE METHODS
import { auth } from 'app/firebase';

// CREATE USER
export const createUser = ({ email, password }) =>
  createUserWithEmailAndPassword(auth, email, password);

// SIGN IN
export const signIn = ({ email, password }) =>
  signInWithEmailAndPassword(auth, email, password);

// LOGOUT
export const logout = () => {
  signOut(auth);
};

// CHECK AUTHORIZATION
export const checkAuth = (setter) => {
  onAuthStateChanged(auth, (user) => {
    setter(user);
  });
};
