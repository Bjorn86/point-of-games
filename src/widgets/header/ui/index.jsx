// IMPORT PACKAGES
import { useContext } from 'react';
import clsx from 'clsx';

// IMPORT CONTEXT
import { ThemeContext } from 'app/context';

// IMPORT UI-KIT
import Button from 'shared/ui/button';

// IMPORT ICONS
import { ReactComponent as SunIcon } from 'shared/ui/assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from 'shared/ui/assets/icons/moon.svg';

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
          <Button
            content={theme === 'dark' ? <MoonIcon /> : <SunIcon />}
            alt={
              theme === 'dark'
                ? 'Сменить тему на светлую'
                : 'Сменить тему на темную'
            }
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
