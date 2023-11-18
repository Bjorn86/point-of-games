import { useContext } from 'react';
import { CurrentUserContext } from 'app/contexts';
import { Logout } from 'features/auth/logout';
import { navListForGuest, navListForUser } from './config';
import HeaderLink from '../header-link';
import s from './navigation.module.scss';

// NAVIGATION COMPONENT
function Navigation() {
  const { currentUser } = useContext(CurrentUserContext);

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
        {currentUser
          ? renderLinksList(navListForUser)
          : renderLinksList(navListForGuest)}
        {currentUser && (
          <li>
            <Logout />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
