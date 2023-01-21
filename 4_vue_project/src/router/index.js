import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPage from '../components/main_page.vue'
// import subPage from '/components/sub_page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'Main page',
    component: mainPage
  },
  {
    path: '/sub',
    name: 'Sub Page',
    // component: subPage,
    // lazyload 방식
    component: () => import('../components/sub_page.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
