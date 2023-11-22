import { Routes, Route } from 'react-router-dom';
import { lazy, useContext } from 'react';
import { CurrentUserContext } from 'app/contexts';
import { Preloader } from 'widgets/preloader';
import { paths } from 'shared/model/paths-config';
import { useGetLatestGamesQuery } from 'entities/cards';

const BaseLayout = lazy(() =>
  import('widgets/layouts/base-layout/base-layout'),
);
const Register = lazy(() => import('../register/register'));
const HomePage = lazy(() => import('../home-page/home-page'));
const Login = lazy(() => import('../login/login'));

export function Routing() {
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
