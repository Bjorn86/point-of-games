// IMPORT PACKAGES
import { useContext } from 'react';
import clsx from 'clsx';

// IMPORT CONTEXT
import { ThemeContext } from 'app/contexts';

// IMPORT FEATURES
import { ChangeTheme } from 'features/theme/change-theme';

// IMPORT COMPONENTS
import Navigation from './navigation';
import Logo from './logo';

// IMPORT STYLES
import s from './header.module.scss';

// HEADER WIDGET
function Header() {
  // HOOKS
  const theme = useContext(ThemeContext);

  return (
    <header className={clsx(s.header, { [s.headerDark]: theme === 'dark' })}>
      <div className={s.wrapper}>
        <Logo />
        <div className={s.navWrapper}>
          <Navigation />
          <ChangeTheme />
        </div>
      </div>
    </header>
  );
}

export default Header;
