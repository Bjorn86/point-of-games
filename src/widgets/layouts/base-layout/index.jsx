// IMPORT PACKAGES
import { Outlet } from 'react-router-dom';
import { memo } from 'react';
import clsx from 'clsx';

// IMPORT HOOKS
import { useTheme } from 'shared/lib/use-theme';

// IMPORT WIDGETS
import { Header } from 'widgets/header';

// IMPORT STYLES
import s from './base-layout.module.scss';

// BASE LAYOUT WIDGET
function BaseLayout() {
  // HOOKS
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
