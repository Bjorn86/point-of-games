import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { lazy, useContext } from 'react';
import { Preloader } from 'shared/ui/preloader/preloader';
import { selectIsUserLoading } from 'entities/user';
import { AuthContext } from 'app/contexts';
import { paths } from 'shared/model/paths-config';
import ProtectedRoute from '../providers/protected-route';

const BaseLayout = lazy(() =>
  import('widgets/layouts/base-layout/base-layout'),
);
const Favorites = lazy(() => import('../favorites/favorites'));
const NotFound = lazy(() => import('../not-found/not-found'));
const Register = lazy(() => import('../register/register'));
const History = lazy(() => import('../history/history'));
const Details = lazy(() => import('../details/details'));
const Search = lazy(() => import('../search/search'));
const Login = lazy(() => import('../login/login'));
const Home = lazy(() => import('../home/home'));

export function Routing() {
  const { isCheckingAuth } = useContext(AuthContext);
  const isUserLoading = useSelector(selectIsUserLoading);

  return isUserLoading || isCheckingAuth ? (
    <Preloader />
  ) : (
    <Routes>
      <Route path={paths.home} element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path={paths.registration} element={<Register />} />
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.search} element={<Search />} />
        <Route path={paths.details} element={<Details />} />
        <Route
          path={paths.history}
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />
        <Route
          path={paths.favorites}
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path={paths.notFound} element={<NotFound />} />
    </Routes>
  );
}
