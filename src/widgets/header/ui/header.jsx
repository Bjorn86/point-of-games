import clsx from 'clsx';
import { ChangeTheme } from 'features/theme/change-theme';
import { useTheme } from 'shared/lib/use-theme';
import Navigation from './navigation/navigation';
import s from './header.module.scss';
import Logo from './logo/logo';

export function Header() {
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
