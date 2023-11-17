// IMPORT PACKAGES
import { useContext } from 'react';

// IMPORT CONTEXT
import { CurrentUserContext } from 'app/contexts';

// IMPORT FEATURES
import { Logout } from 'features/auth/logout';

// IMPORT CONFIGS
import { navListForUser, navListForGuest } from './config';

// IMPORT UI-KIT
import HeaderLink from '../header-link';

// IMPORT STYLES
import s from './navigation.module.scss';

// NAVIGATION COMPONENT
function Navigation() {
  // HOOKS
  const { currentUser } = useContext(CurrentUserContext);

  // HANDLER RENDER LINKS LIST
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
