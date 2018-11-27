import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/registerEvent',
      name: 'registerEvent',
      component: () => import('./views/RegisterEvent.vue')
    },
    {
      path: '/updateEvent/:eventId',
      name: 'updateEvent',
      component: () => import('./views/UpdateEvent.vue')
    }
  ]
})
