import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useTheme } from 'shared/lib/use-theme';
import { paths } from 'shared/routing/paths';
import s from './logo.module.scss';

function Logo() {
  const theme = useTheme();

  return (
    <Link
      to={paths.home}
      className={clsx(s.logo, { [s.logoDark]: theme === 'dark' })}
    >
      Hearthstone Wiki
    </Link>
  );
}

export default Logo;
