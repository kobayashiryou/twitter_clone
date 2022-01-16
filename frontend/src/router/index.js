import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/pages/Home.vue'
import User from '../components/pages/User.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
