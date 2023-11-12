// IMPORT PACKAGES
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

// IMPORT WIDGETS
import { BaseLayout } from 'widgets/layouts';

// IMPORT PATHS
import { paths } from 'shared/routing/paths';

// PAGES
const Registration = lazy(() => import('./registration'));
const HomePage = lazy(() => import('./home-page'));
const Login = lazy(() => import('./login'));

// EXPORT ROUTING
export function Routing() {
  return (
    <Routes>
      <Route path={paths.home} element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path={paths.registration} element={<Registration />} />
        <Route path={paths.login} element={<Login />} />
      </Route>
    </Routes>
  );
}
