import clsx from 'clsx';
import { ChangeTheme } from 'features/theme/change-theme';
import { useTheme } from 'shared/lib/use-theme';
import Navigation from './navigation';
import s from './header.module.scss';
import Logo from './logo';

function Header() {
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
