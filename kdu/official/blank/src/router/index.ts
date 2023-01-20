import { createRouter, createWebHistory } from '@navify/kdu-router';
import { RouteRecordRaw } from 'kdu-router';
import HomePage from '../views/HomePage.kdu'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
