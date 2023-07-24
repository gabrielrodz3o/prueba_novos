import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompaniesView from '../views/CompaniesView.vue'
import EmployesView from '../views/EmployesView.vue'
import defaultView  from "../layouts/default.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: defaultView,
      children:[
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/companies',
          name: 'Companies',
          component: CompaniesView
        },
        {
          path: '/employes',
          name: 'Employes',
          component: EmployesView
        },
      ]
    }
  

  ]
})

export default router
