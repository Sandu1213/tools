// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LoanCalculator from '../views/LoanCalculator.vue';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/LoanCalculator',
    component: LoanCalculator
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
