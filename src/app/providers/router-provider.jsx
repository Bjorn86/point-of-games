import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Preloader } from 'shared/ui/preloader/preloader';

// EXPORT PROVIDER
export const RouterProvider = ({ children }) => (
  <BrowserRouter>
    <Suspense fallback={<Preloader />}>{children}</Suspense>
  </BrowserRouter>
);

RouterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
