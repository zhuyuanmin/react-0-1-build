import loadable from '@/utils/loadable'

export default [
  {
    path: '/',
    redirect: '/home',
    exact: true,
  },
  {
    path: '/home',
    component: loadable('/home/index'),
    exact: true,
  },
  {
    path: '/counter',
    component: loadable('/counter/index'),
    exact: true,
  },
  {
    path: '/detail',
    redirect: '/detail/a',
    component: loadable('/detail/index'),
    // exact: true,
    routes: [
      {
        path: '/detail/a',
        component: loadable('/detail/a/index'),
        exact: true,
      },
      {
        path: '/detail/b',
        component: loadable('/detail/b/index'),
        exact: true,
      },
    ],
  },
]
