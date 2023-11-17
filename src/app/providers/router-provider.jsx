import { HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Suspense } from 'react';

// EXPORT PROVIDER
export const RouterProvider = ({ children }) => (
  /* HashRouter используется как условие для деплоя на GitHub Pages */
  <HashRouter>
    {/* TODO Добавить Preloader */}
    <Suspense fallback='loading...'>{children}</Suspense>
  </HashRouter>
);

RouterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
