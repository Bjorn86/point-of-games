import { paths } from 'shared/routing/paths';

export const navListForUser = [
  {
    text: 'Избранное',
    href: paths.favorites,
  },
  {
    text: 'История',
    href: paths.history,
  },
];

export const navListForGuest = [
  {
    text: 'Вход',
    href: paths.login,
  },
  {
    text: 'Регистрация',
    href: paths.registration,
  },
];
