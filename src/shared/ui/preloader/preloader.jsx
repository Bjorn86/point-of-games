import clsx from 'clsx';
import { useTheme } from 'shared/lib/use-theme';
import s from './preloader.module.scss';

export function Preloader() {
  const theme = useTheme();

  return (
    <div
      className={clsx(s.preloader, { [s.preloaderDark]: theme === 'dark' })}
    />
  );
}
