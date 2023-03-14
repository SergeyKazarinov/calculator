import { Loader } from 'UI';
import { FC, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('./MainPage'));
const PageNotFound = lazy(() => import('./PageNotFound'));

const Routing: FC = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Suspense>
);

export default Routing;
