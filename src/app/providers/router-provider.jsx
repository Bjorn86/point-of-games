// IMPORT PACKAGES
import { HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Suspense } from 'react';

// EXPORT PROVIDER
export const RouterProvider = ({ children }) => (
  /* HashRouter используется как условие для деплоя на GitHub Pages */
  <HashRouter>
    {/* TODO: Заменить fallback на preloader */}
    <Suspense fallback='Loading...'>{children}</Suspense>
  </HashRouter>
);

RouterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
