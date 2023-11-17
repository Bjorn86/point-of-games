// IMPORT UTILS
import { loadDataFromLS, saveDataToLS } from 'shared/utils/utils';

// CREATE USER
export const createUser = ({ email, password }) => {
  saveDataToLS('email', email);
  saveDataToLS('password', password);
  return { email, password };
};

// SIGN IN
export const signIn = ({ email, password }) => {
  const emailLS = loadDataFromLS('email');
  const passwordLS = loadDataFromLS('password');

  if (emailLS === email && passwordLS === password) {
    return true;
  }
  return false;
};

// LOGOUT
export const logout = () => {
  localStorage.removeItem('email');
  localStorage.removeItem('password');
};

// CHECK AUTHORIZATION
export const checkAuth = (setter) => {
  const emailLS = loadDataFromLS('email');
  const passwordLS = loadDataFromLS('password');
  if (emailLS && passwordLS) {
    setter({ email: emailLS, password: passwordLS });
  }
};
