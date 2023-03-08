import Vue from 'vue'
import VueRouter from 'vue-router'

//main, sub 페이지 컴포넌트 모듈 2개를 가져오기
import mainPage from '@/components/mainPage';
import subPage from '@/components/subPage';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : [
    {
      path: '/',
      name: 'home',
      component: mainPage
    },
    {
      path: '/main',
      name: 'main_page',
      component: mainPage
    },
    {
      path: '/sub',
      name: 'sub_page',
      component: subPage
    }
  ]
})

export default router