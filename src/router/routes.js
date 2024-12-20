const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/hello', component: () => import('pages/HelloPage.vue') },
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/:id', component: () => import('pages/PlaceDetail.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
