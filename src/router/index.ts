import UsersView from '@/views/Users.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import UserView from '@/views/User.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserView
    }
  ]
})

export default router
