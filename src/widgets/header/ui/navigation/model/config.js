import { paths } from 'shared/model/paths-config';

export const navListForUser = [
  {
    text: 'Favorites',
    href: paths.favorites,
  },
  {
    text: 'History',
    href: paths.history,
  },
];

export const navListForGuest = [
  {
    text: 'Login',
    href: paths.login,
  },
  {
    text: 'Registration',
    href: paths.registration,
  },
];
