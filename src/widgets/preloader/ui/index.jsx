// IMPORT PACKAGES
import clsx from 'clsx';

// IMPORT HOOKS
import { useTheme } from 'shared/lib/use-theme';

// IMPORT STYLES
import s from './preloader.module.scss';

function Preloader() {
  // HOOKS
  const theme = useTheme();

  return (
    <div
      className={clsx(s.preloader, { [s.preloaderDark]: theme === 'dark' })}
    />
  );
}

export default Preloader;
