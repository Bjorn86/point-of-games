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

export const createUserDB = (email) => {
  setDoc(doc(db, 'users', email), {
    email,
    favorites: [],
    history: [],
  });
};

export const getUserData = (email) => {
  const userRef = doc(db, 'users', email);
  return getDoc(userRef);
};

export const getUserHistory = async (email) => {
  const userRef = doc(db, 'users', email);
  const docSnap = await getDoc(userRef);
  if (docSnap.exists()) {
    const { history } = docSnap.data();
    return history;
  }
  return [];
};

export const addToHistory = (email, query) => {
  const userRef = doc(db, 'users', email);
  updateDoc(userRef, {
    history: arrayUnion(query),
  });
};

export const removeFromHistory = (email, query) => {
  const userRef = doc(db, 'users', email);
  updateDoc(userRef, {
    history: arrayRemove(query),
  });
};
