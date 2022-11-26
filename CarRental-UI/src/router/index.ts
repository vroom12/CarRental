import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../pages/login-page.vue'),
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../pages/index-page.vue'),
    },
  ],
});

export default router;
