import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/aboutComponent'
import Education from '@/components/educationComponent'
import Experience from '@/components/experienceComponent'
import Project from '@/components/projectComponent'
import Skills from '@/components/skillsComponent'
import Articles from '@/components/articlesComponent'
import Certificates from '@/components/certificatesComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: Certificates
  }
  ]
})
