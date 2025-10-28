import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/cadastro',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/carrinho',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  const authStore = useAuthStore()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !authStore.isAuthenticated) {
    return({ name: 'login' })
  } 
})

export default router