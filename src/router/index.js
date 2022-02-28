import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewTareas from '../views/ViewTareas.vue'
import ViewCalculadora from '../components/ViewCalculadora'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ViewTareas
  },
  {
    path: '/calculadora',
    name: 'calculadora',
    component: ViewCalculadora
  }
]

const router = new VueRouter({
  routes
})

export default router
