import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { paths } from 'shared/model/paths-config';
import { useTheme } from 'shared/lib/use-theme';
import s from './logo.module.scss';

function Logo() {
  const theme = useTheme();

  return (
    <Link
      to={paths.home}
      className={clsx(s.logo, { [s.logoDark]: theme === 'dark' })}
    >
      Point of Games
    </Link>
  );
}

export default Logo;
