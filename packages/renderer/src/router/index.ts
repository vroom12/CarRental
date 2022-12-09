import {createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {name: 'index', meta: {title: 'index'}, path: '', redirect: '/login'},
    {
      name: 'home',
      meta: {title: 'home'},
      path: '/home',
      component: () => import('/@/pages/my-home.vue'),
    },
    {
      name: 'login',
      meta: {title: 'login'},
      path: '/login',
      component: () => import('/@/pages/my-login.vue'),
    },
  ],
});

export default router;
