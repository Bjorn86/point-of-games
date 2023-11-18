import { Routes, Route } from 'react-router-dom';
import { lazy, useContext } from 'react';
import { CurrentUserContext } from 'app/contexts';
import { Preloader } from 'widgets/preloader';
import { paths } from 'shared/routing/paths';

const BaseLayout = lazy(() => import('widgets/layouts/base-layout'));
const Register = lazy(() => import('./register'));
const HomePage = lazy(() => import('./home-page'));
const Login = lazy(() => import('./login'));

function Routing() {
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

export default Routing;
