import { createRouter, createMemoryHistory } from "vue-router";
import type { RouteRecordRaw, Router } from "vue-router"
const route: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/index.vue')
  }
]
const router: Router = createRouter({
  history: createMemoryHistory(),
  routes: route
})

export default router