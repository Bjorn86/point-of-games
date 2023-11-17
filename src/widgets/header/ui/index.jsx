// IMPORT PACKAGES
import clsx from 'clsx';

// IMPORT HOOKS
import { useTheme } from 'shared/lib/use-theme';

// IMPORT FEATURES
import { ChangeTheme } from 'features/theme/change-theme';

// IMPORT UI COMPONENTS
import Navigation from './navigation';
import Logo from './logo';

// IMPORT STYLES
import s from './header.module.scss';

// HEADER WIDGET
function Header() {
  // HOOKS
  const theme = useTheme();

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
