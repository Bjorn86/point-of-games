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

export const createUserDB = async (user) => {
  await setDoc(doc(db, 'users', user), {
    user,
    favorites: [],
    history: [],
  });
};

export const getUserData = async (user) => {
  const userRef = doc(db, 'users', user);
  const docSnap = await getDoc(userRef);
  return docSnap;
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

export const addToHistory = async (user, query) => {
  const userRef = doc(db, 'users', user);
  await updateDoc(userRef, {
    history: arrayUnion(query),
  });
};

export const removeFromHistory = async (user, query) => {
  const userRef = doc(db, 'users', user);
  await updateDoc(userRef, {
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

export const addToFavorites = async (user, gameID) => {
  const userRef = doc(db, 'users', user);
  await updateDoc(userRef, {
    favorites: arrayUnion(gameID),
  });
};

export const removeFromFavorites = async (user, gameID) => {
  const userRef = doc(db, 'users', user);
  await updateDoc(userRef, {
    favorites: arrayRemove(gameID),
  });
};
