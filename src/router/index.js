import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('../views/Home/Index.vue'),
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import('../views/Home/Index/Search.vue'),
      },
       {
        path: 'index/details/:id',
        name: 'Details',
        component: () => import('../views/Home/Index/Details.vue')
      },
      {
        path:'index/sweiperlist/:id',
        name:'SwiperList',
        component:()=>import('../views/Home/Index/SwiperList.vue')
      },
    ],
    redirect: '/index'
  },
  {
    path: '/devise',
    name: 'Devise',
    component: () => import('../views/Devise.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
