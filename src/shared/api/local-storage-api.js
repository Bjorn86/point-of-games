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

/* TODO Добавить logout и checkAuth */
