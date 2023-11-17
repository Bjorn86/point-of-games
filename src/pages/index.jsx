// IMPORT PACKAGES
import { Routes, Route } from 'react-router-dom';
import { lazy, useContext } from 'react';

// IMPORT CONTEXTS
import { CurrentUserContext } from 'app/contexts';

// IMPORT WIDGETS
import { Preloader } from 'widgets/preloader';

// IMPORT PATHS
import { paths } from 'shared/routing/paths';

// PAGES AND LAYERS
/* TODO: Запихнуть всё в memo */
const BaseLayout = lazy(() => import('widgets/layouts/base-layout'));
const Register = lazy(() => import('./register'));
const HomePage = lazy(() => import('./home-page'));
const Login = lazy(() => import('./login'));

// EXPORT ROUTING
export function Routing() {
  // HOOKS
  const { isLoading } = useContext(CurrentUserContext);

  return isLoading ? (
    <Preloader />
  ) : (
    <Routes>
      <Route path={paths.home} element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path={paths.registration} element={<Register />} />
        <Route path={paths.login} element={<Login />} />
      </Route>
    </Routes>
  );
}
