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

export const createUserDB = (user) => {
  saveDataToLS('user', {
    user,
    favorites: [],
    history: [],
  });
};

export const getUserData = (user) => {
  const savedUser = loadDataFromLS('user');
  if (savedUser && savedUser.email === user) {
    return user;
  }
  return null;
};

export const getUserHistory = (user) => {
  const savedUser = loadDataFromLS('user');
  if (savedUser && savedUser.email === user) {
    return user.history;
  }
  return null;
};

export const addToHistory = (user, query) => {
  const savedUser = loadDataFromLS('user');
  if (savedUser && savedUser.email === user) {
    savedUser.history = [...query];
    saveDataToLS('user', savedUser);
  }
};

export const removeFromHistory = (user, query) => {
  const savedUser = loadDataFromLS('user');
  if (savedUser && savedUser.email === user) {
    savedUser.history = savedUser.history.filter((q) => q !== query);
    saveDataToLS('user', savedUser);
  }
};

export const getUserFavorites = (user) => {
  const savedUser = loadDataFromLS('user');
  if (savedUser && savedUser.email === user) {
    return savedUser.favorites;
  }
  return null;
};

export const addToFavorites = (user, gameID) => {
  const savedUser = loadDataFromLS('user');
  if (savedUser && savedUser.email === user) {
    savedUser.favorites = [...savedUser.favorites, gameID];
    saveDataToLS('user', savedUser);
  }
};

export const removeFromFavorites = (user, gameID) => {
  const savedUser = loadDataFromLS('user');
  if (savedUser && savedUser.email === user) {
    savedUser.favorites = savedUser.favorites.filter((id) => id !== gameID);
    saveDataToLS('user', savedUser);
  }
};
