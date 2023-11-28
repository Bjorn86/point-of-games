import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { auth, db } from 'app/firebase';

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

export const createUserDB = (user) => {
  setDoc(doc(db, 'users', user), {
    user,
    favorites: [],
    history: [],
  });
};

export const getUserData = (user) => {
  const userRef = doc(db, 'users', user);
  return getDoc(userRef);
};

export const getUserHistory = async (user) => {
  const userRef = doc(db, 'users', user);
  const docSnap = await getDoc(userRef);
  if (docSnap.exists()) {
    const { history } = docSnap.data();
    return history;
  }
  return [];
};

export const addToHistory = (user, query) => {
  const userRef = doc(db, 'users', user);
  updateDoc(userRef, {
    history: arrayUnion(query),
  });
};

export const removeFromHistory = (user, query) => {
  const userRef = doc(db, 'users', user);
  updateDoc(userRef, {
    history: arrayRemove(query),
  });
};

export const getUserFavorites = async (user) => {
  const userRef = doc(db, 'users', user);
  const docSnap = await getDoc(userRef);
  if (docSnap.exists()) {
    const { favorites } = docSnap.data();
    return favorites;
  }
  return [];
};

export const addToFavorites = (user, gameID) => {
  const userRef = doc(db, 'users', user);
  updateDoc(userRef, {
    favorites: arrayUnion(gameID),
  });
};

export const removeFromFavorites = (user, gameID) => {
  const userRef = doc(db, 'users', user);
  updateDoc(userRef, {
    favorites: arrayRemove(gameID),
  });
};
