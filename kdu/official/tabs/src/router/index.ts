import { createRouter, createWebHistory } from '@navify/kdu-router';
import { RouteRecordRaw } from 'kdu-router';
import TabsPage from '../views/TabsPage.kdu'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.kdu')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.kdu')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.kdu')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
