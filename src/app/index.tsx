import Loader from 'UI/Loader';
import './index.scss';
import { Suspense, lazy } from 'react';

const MainPage = lazy(() => import('pages/MainPage'));

const App = () => (
  <main>
    <Suspense fallback={<Loader />}>
      <MainPage />
    </Suspense>
  </main>
);

export default App;
