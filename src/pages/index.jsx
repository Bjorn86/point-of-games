// IMPORT PACKAGES
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

// IMPORT WIDGETS
import { BaseLayout } from 'widgets/layouts';

// IMPORT PATHS
import { paths } from 'shared/routing/paths';

// PAGES
const HomePage = lazy(() => import('./home-page'));

// EXPORT ROUTING
export function Routing() {
  return (
    <Routes>
      <Route path={paths.home} element={<BaseLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
