import { Routes, Route } from 'react-router-dom';
import { lazy, useContext } from 'react';
import { CurrentUserContext } from 'app/contexts';
import { paths } from 'shared/model/paths-config';
import { Preloader } from 'widgets/preloader';
import ProtectedRoute from '../providers/protected-route';

const BaseLayout = lazy(() =>
  import('widgets/layouts/base-layout/base-layout'),
);
const SearchPage = lazy(() => import('../search-page/search-page'));
const HistoryPage = lazy(() => import('../history-page/history-page'));
const HomePage = lazy(() => import('../home-page/home-page'));
const Register = lazy(() => import('../register/register'));
const Login = lazy(() => import('../login/login'));

export function Routing() {
  const { isLoading: isUserLoading } = useContext(CurrentUserContext);

  return isUserLoading ? (
    <Preloader />
  ) : (
    <Routes>
      <Route path={paths.home} element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path={paths.registration} element={<Register />} />
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.search} element={<SearchPage />} />
        <Route
          path={paths.history}
          element={
            <ProtectedRoute>
              <HistoryPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}
