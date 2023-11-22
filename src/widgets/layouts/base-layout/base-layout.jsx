import { Outlet } from 'react-router-dom';
import { memo } from 'react';
import clsx from 'clsx';
import { useTheme } from 'shared/lib/use-theme';
import { Header } from 'widgets/header';
import s from './base-layout.module.scss';

function BaseLayout() {
  const theme = useTheme();

  return (
    <>
      <Header />
      <main className={clsx(s.main, { [s.mainDark]: theme === 'dark' })}>
        <Outlet />
      </main>
    </>
  );
}

export default memo(BaseLayout);
