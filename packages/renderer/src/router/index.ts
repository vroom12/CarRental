import {createRouter, createWebHashHistory} from 'vue-router';
import homeChildren from '/@/router/modules/homeChildren';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {name: 'index', meta: {title: 'index'}, path: '', redirect: '/login'},
    {
      name: 'home',
      meta: {title: 'home'},
      path: '/home/:id',
      component: () => import('/@/pages/my-home.vue'),
      children: [...homeChildren],
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
