import Vue from 'vue'
import VueRouter from 'vue-router'
import Vehicules from '../views/Vehicules'
import Vehicule from '../views/Vehicule'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Vehicules,
    alias: '/vehicule'
  },
  {
    path: '/vehicule/:id',
    component: Vehicule,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
