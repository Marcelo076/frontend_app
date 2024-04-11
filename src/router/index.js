import { createRouter, createWebHistory } from 'vue-router'
import teste from '@/views/teste.vue'


const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/teste',
      name: 'teste',
      component: teste
    },
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/home.vue')
    }
  ]
})

export default router
