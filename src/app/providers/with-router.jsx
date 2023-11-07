// IMPORT PACKAGES
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

// EXPORT PROVIDER
export const withRouter = (component) => () => (
  <BrowserRouter>
    {/* TODO: Заменить fallback на preloader */}
    <Suspense fallback='Loading...'>{component()}</Suspense>
  </BrowserRouter>
);
