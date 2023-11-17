import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { paths } from 'shared/routing/paths';

const BaseLayout = lazy(() => import('widgets/layouts/base-layout'));
const HomePage = lazy(() => import('./home-page'));

function Routing() {
  return (
    <Routes>
      <Route path={paths.home} element={<BaseLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default Routing;
