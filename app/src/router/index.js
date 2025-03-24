import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/bar-chart',
      name: 'bar-chart',
      component: () => import('../views/BarPage.vue'),
    },
    {
      path: '/pie-chart',
      name: 'pie-chart',
      component: () => import('../views/PiePage.vue'),
    },
  ],
})

export default router
