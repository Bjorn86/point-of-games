// IMPORT PACKAGES
import { useContext } from 'react';
import clsx from 'clsx';

// IMPORT CONTEXT
import { ThemeContext } from 'app/contexts';
import { Link } from 'react-router-dom';

// IMPORT STYLES
import s from './logo.module.scss';

// LOGO COMPONENT
function Logo() {
  // HOOKS
  const theme = useContext(ThemeContext);

  return (
    <Link to='/' className={clsx(s.logo, { [s.logoDark]: theme === 'dark' })}>
      Hearthstone Wiki
    </Link>
  );
}

export default Logo;
