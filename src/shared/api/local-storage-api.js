import { loadDataFromLS, saveDataToLS } from 'shared/lib/utils';

export const signUp = ({ email, password }) => {
  saveDataToLS('email', email);
  saveDataToLS('password', password);
  return { email, password };
};

export const signIn = ({ email, password }) => {
  const emailLS = loadDataFromLS('email');
  const passwordLS = loadDataFromLS('password');

  if (emailLS === email && passwordLS === password) {
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem('email');
  localStorage.removeItem('password');
};

export const checkAuth = (cb) => {
  const emailLS = loadDataFromLS('email');
  const passwordLS = loadDataFromLS('password');
  if (emailLS && passwordLS) {
    cb({ email: emailLS, password: passwordLS });
  }
};

export const createUserDB = (email) => {
  saveDataToLS('user', {
    email,
    favorites: [],
    history: [],
  });
};

export const getUserData = (email) => {
  const user = loadDataFromLS('user');
  if (user && user.email === email) {
    return user;
  }
  return null;
};

export const getUserHistory = (email) => {
  const user = loadDataFromLS('user');
  if (user && user.email === email) {
    return user.history;
  }
  return null;
};

export const addToHistory = (email, query) => {
  const user = loadDataFromLS('user');
  if (user && user.email === email) {
    user.history = [...query];
    saveDataToLS('user', user);
  }
};

export const removeFromHistory = (email, query) => {
  const user = loadDataFromLS('user');
  if (user && user.email === email) {
    user.history = user.history.filter((q) => q !== query);
    saveDataToLS('user', user);
  }
};
