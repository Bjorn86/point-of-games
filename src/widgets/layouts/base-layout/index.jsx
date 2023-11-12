// IMPORT PACKAGES
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import clsx from 'clsx';

// IMPORT CONTEXT
import { ThemeContext } from 'app/contexts';

// IMPORT WIDGETS
import { Header } from 'widgets/header';

// IMPORT STYLES
import s from './base-layout.module.scss';

// BASE LAYOUT WIDGET
function BaseLayout() {
  // HOOKS
  const theme = useContext(ThemeContext);

  return (
    <>
      <Header />
      <main className={clsx(s.main, { [s.mainDark]: theme === 'dark' })}>
        <Outlet />
      </main>
    </>
  );
}

export default BaseLayout;
