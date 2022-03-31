import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobView from '../views/JobView.vue'
import EducationView from '../views/EducationView.vue'
import SchoolView from '../views/SchoolView.vue'
import SkillView from '../views/SkillView.vue' 


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jobExp',
      name: 'jobExp',
      component: JobView
    },
    {
      path: '/edExp',
      name: 'edExp',
      component: EducationView
    },
    {
      path: '/schoolExp',
      name: 'schoolExp',
      component: SchoolView
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillView
    }
  ]
})

export default router
