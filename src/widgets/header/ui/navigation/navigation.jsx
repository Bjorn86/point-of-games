import { useContext } from 'react';
import { AuthContext } from 'app/contexts';
import { Logout } from 'features/auth/logout';
import { navListForGuest, navListForUser } from './model/config';
import HeaderLink from '../header-link/header-link';
import s from './navigation.module.scss';

// NAVIGATION COMPONENT
function Navigation() {
  const { isAuthorized } = useContext(AuthContext);

  function renderLinksList(list) {
    return list.map((item) => (
      <li key={item.text}>
        <HeaderLink href={item.href} text={item.text} />
      </li>
    ));
  }

  return (
    <nav>
      <ul className={s.list}>
        {isAuthorized
          ? renderLinksList(navListForUser)
          : renderLinksList(navListForGuest)}
        {isAuthorized && (
          <li>
            <Logout />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
