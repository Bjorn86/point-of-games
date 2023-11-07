// IMPORT PACKAGES
import { HashRouter } from 'react-router-dom';
import { Suspense } from 'react';

// EXPORT PROVIDER
export const withRouter = (component) => () => (
  /* HashRouter используется как условие для деплоя на GitHub Pages */
  <HashRouter>
    {/* TODO: Заменить fallback на preloader */}
    <Suspense fallback='Loading...'>{component()}</Suspense>
  </HashRouter>
);
