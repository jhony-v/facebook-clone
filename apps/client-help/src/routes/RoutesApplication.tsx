import { lazy, Suspense } from 'react';
import HomePage from '../pages/HomePage/HomePage';
import { Router, globalHistory } from '@reach/router';

globalHistory.listen(() => {
  document.documentElement.scrollTop = 0;
});

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/:helpId',
    component: lazy(
      () => import('../pages/HelpMainContentPage/HelpMainContentPage')
    ),
  },
];

const RoutesApplication = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        {routes.map(({ path, component: Component }, key) => {
          return <Component path={path} key={key} />;
        })}
      </Router>
    </Suspense>
  );
};

export default RoutesApplication;
