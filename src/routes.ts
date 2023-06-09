import loadable from '@loadable/component';

export const ROUTE_PATH: {
  [key: string]: any;
} = {
  HOME: {
    path: '/',
    title: '홈',
  },
};

export const routes = [
  {
    ...ROUTE_PATH.HOME,
    component: loadable(() => import('@src/pages/Home')),
  },
];
