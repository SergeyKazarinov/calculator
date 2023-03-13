import { Loader } from 'UI';
import { FC, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './PageNotFound';

const MainPage = lazy(() => import('./MainPage'));

const Routing: FC = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Suspense>
);

export default Routing;
