// IMPORT PACKAGES
import { Link } from 'react-router-dom';
import clsx from 'clsx';

// IMPORT HOOKS
import { useTheme } from 'shared/lib/use-theme';

// IMPORT PATHS
import { paths } from 'shared/routing/paths';

// IMPORT STYLES
import s from './logo.module.scss';

// LOGO COMPONENT
function Logo() {
  // HOOKS
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
