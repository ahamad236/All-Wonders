import { createRouter, createWebHistory } from 'vue-router'
import AllWonders from '../components/AllWonders.vue'
import EditWonders from '../components/EditWonders.vue'
import AddWonders from '../components/AddWonders.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllWonders
    },
    {
      path: '/AddWonders',
      name: 'AddWonders',
      component: AddWonders
    },
    {
      path: '/edit-wonder/:Id',
      name: 'Edit wonder',
      component: EditWonders
    }
  ]
})

export default router
