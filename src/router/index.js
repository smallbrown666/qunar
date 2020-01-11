import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import City from '../views/City.vue'
import Detail from '../views/Detail.vue'
import Week from '../views/Week.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/city',
    name: 'city',
    component: City
  },
  {
    path: '/detail/:id',
    name: 'detailLink',
    component: Detail
  },
  {
    path: '/week/:id',
    name: 'weeklink',
    component: Week
  },
 
]

const router = new VueRouter({
  routes
})

export default router
