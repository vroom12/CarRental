export default [
  {
    path: '/VehicleType/:id',
    name: 'VehicleType',
    meta: {title: 'VehicleType', icon: 'car-outlined'},
    component: () => import('/@/components/VehicleType/VehicleTypeIndex.vue'),
  },
  {
    path: '/User/:id',
    name: 'User',
    meta: {title: 'User', icon: 'user-outlined'},
    component: () => import('/@/components/User/UserIndex.vue'),
  },
];
