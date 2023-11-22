import { Routes, Route } from 'react-router-dom';
import { lazy, useContext } from 'react';
import { CurrentUserContext } from 'app/contexts';
import { Preloader } from 'widgets/preloader';
import { paths } from 'shared/routing/paths';
import { useGetLatestGamesQuery } from 'entities/cards';

const BaseLayout = lazy(() => import('widgets/layouts/base-layout'));
const Register = lazy(() => import('./register'));
const HomePage = lazy(() => import('./home-page'));
const Login = lazy(() => import('./login'));

function Routing() {
  const { isLoading: isUserLoading } = useContext(CurrentUserContext);
  const { isLoading: isDataLoading } = useGetLatestGamesQuery();

  return isUserLoading || isDataLoading ? (
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
