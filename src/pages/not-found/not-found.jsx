import { Link } from 'react-router-dom';
import { memo } from 'react';
import clsx from 'clsx';
import { paths } from 'shared/model/paths-config';
import { useTheme } from 'shared/lib/use-theme';
import s from './not-found.module.scss';

function NotFound() {
  const theme = useTheme();

  return (
    <section className={clsx(s.section, { [s.sectionDark]: theme === 'dark' })}>
      <p className={clsx(s.title, { [s.titleDark]: theme === 'dark' })}>404</p>
      <h1 className={clsx(s.text, { [s.textDark]: theme === 'dark' })}>
        Page not found
      </h1>
      <Link
        to={paths.home}
        className={clsx(s.link, { [s.linkDark]: theme === 'dark' })}
      >
        Back to home
      </Link>
    </section>
  );
}

export default memo(NotFound);
