// IMPORT PACKAGES
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

// PAGES
const HomePage = lazy(() => import('./home-page'));

// EXPORT ROUTING
export function Routing() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
}
