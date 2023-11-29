import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { paths } from 'shared/model/paths-config';
import { useTheme } from 'shared/lib/use-theme';
import s from './logo.module.scss';

function Logo() {
  const theme = useTheme();

  return (
    <Link to={paths.home} className={s.logo}>
      <h1 className={clsx(s.title, { [s.titleDark]: theme === 'dark' })}>
        Point of Games
      </h1>
    </Link>
  );
}

export default Logo;
