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
      component: () => import('./views/event/RegisterEvent.vue')
    },
    {
      path: '/updateEvent/:eventId',
      name: 'updateEvent',
      component: () => import('./views/event/UpdateEvent.vue')
    },
    {
      path: '/registerUser',
      name: 'registerUser',
      component: () => import('./views/user/RegisterUser.vue')
    },
    {
      path: '/updateUser/:userId',
      name: 'updateUser',
      component: () => import('./views/user/UpdateUser.vue')
    },
    {
      path: '/viewEventsUser/:userId',
      name: 'viewEventsUser',
      component: () => import('./views/user/UserEvents')
    }
  ]
})
