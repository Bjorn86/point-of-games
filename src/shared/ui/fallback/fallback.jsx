import clsx from 'clsx';
import { useTheme } from 'shared/lib/use-theme';
import s from './fallback.module.scss';

function Fallback() {
  const theme = useTheme();

  return (
    <>
      <p className={clsx(s.text, { [s.textDark]: theme === 'dark' })}>
        Oops... Something went wrong.
      </p>
      <p className={clsx(s.text, { [s.textDark]: theme === 'dark' })}>
        Try reloading the page.
      </p>
      <p className={clsx(s.text, { [s.textDark]: theme === 'dark' })}>
        If the error happens again, please wait a few minutes and try again.
      </p>
    </>
  );
}

export default Fallback;
