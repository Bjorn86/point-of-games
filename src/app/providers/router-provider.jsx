import { HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Preloader } from 'widgets/preloader';

// EXPORT PROVIDER
export const RouterProvider = ({ children }) => (
  /* HashRouter используется как условие для деплоя на GitHub Pages */
  <HashRouter>
    <Suspense fallback={<Preloader />}>{children}</Suspense>
  </HashRouter>
);

RouterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
